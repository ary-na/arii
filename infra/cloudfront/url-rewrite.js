// CloudFront Function `url-rewrite` (viewer request, cloudfront-js-2.0) on
// the arii.dev distribution. Not deployed by CI — paste into the CloudFront
// console (Functions → url-rewrite → Development → Save → Publish) when it
// changes.
//
// - www.arii.dev/*          → 301 https://arii.dev/*
// - /sitemap.xml            → 301 /sitemap-index.xml
// - /blog/page/1[/]         → 301 /blog/  (same for category/tag archives)
// - /blog/husk              → 301 /blog/husk/  (one canonical URL per page)
// - /blog/husk/             → serves /blog/husk/index.html from S3
// - /_astro/x.css, /rss.xml → passed through untouched

function queryString(qs) {
  if (!qs) return ''
  var keys = Object.keys(qs)
  if (keys.length === 0) return ''
  return (
    '?' +
    keys
      .map(function (key) {
        var entry = qs[key]
        if (entry.multiValue) {
          return entry.multiValue
            .map(function (item) {
              return key + '=' + item.value
            })
            .join('&')
        }
        return key + '=' + entry.value
      })
      .join('&')
  )
}

function redirect(location) {
  return {
    statusCode: 301,
    statusDescription: 'Moved Permanently',
    headers: {
      location: { value: location },
      'cache-control': { value: 'public, max-age=3600' },
    },
  }
}

function handler(event) {
  var request = event.request
  var uri = request.uri
  var host = request.headers.host && request.headers.host.value

  // Redirect www -> apex
  if (host === 'www.arii.dev') {
    return redirect('https://arii.dev' + uri + queryString(request.querystring))
  }

  // Redirect /sitemap.xml -> /sitemap-index.xml
  if (uri === '/sitemap.xml') {
    return redirect('https://arii.dev/sitemap-index.xml')
  }

  // Strip trailing slash for matching (except root)
  var cleanUri = uri !== '/' ? uri.replace(/\/$/, '') : uri

  // Redirect page 1 of any archive to the archive itself:
  // /blog/page/1, /blog/category/[slug]/page/1, /blog/tag/[slug]/page/1
  var pageOneMatch = cleanUri.match(
    /^(\/blog(?:\/(?:category|tag)\/[^/]+)?)\/page\/1$/,
  )
  if (pageOneMatch) {
    return redirect(pageOneMatch[1] + '/')
  }

  // Directory URL -> serve its index.html
  if (uri.endsWith('/')) {
    request.uri = uri + 'index.html'
    return request
  }

  // Slashless page URL -> 301 to the trailing-slash canonical. Anything whose
  // last segment has a dot is treated as a file and passed through.
  var lastSegment = uri.substring(uri.lastIndexOf('/') + 1)
  if (lastSegment.indexOf('.') === -1) {
    return redirect(uri + '/' + queryString(request.querystring))
  }

  return request
}
