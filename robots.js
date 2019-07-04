module.exports = (req, res) => {
  console.log(req)
  res.send(
    `
User-agent: *
Disallow: /
Sitemap: https://www.neontribe.co.uk/sitemap.xml
Host: https://www.neontribe.co.uk
  `.trim()
  )
}
