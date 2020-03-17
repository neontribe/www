const prodRobots = `
User-agent: *
Allow: /
Sitemap: https://www.neontribe.co.uk/sitemap.xml
Host: https://www.neontribe.co.uk
`.trim()

const stagingRobots = `
User-agent: *
Disallow: /
Sitemap: https://www.neontribe.co.uk/sitemap.xml
Host: https://www.neontribe.co.uk
  `.trim()

module.exports = (req, res) => {
  res.setHeader('content-type', 'text/plain')

  if (req.headers['x-forwarded-host'] === 'www.neontribe.co.uk') {
    res.send(prodRobots)

    return
  }
  if (req.headers['host'] === 'www.neontribe.co.uk') {
    res.send(prodRobots)

    return
  }

  res.send(stagingRobots)
}
