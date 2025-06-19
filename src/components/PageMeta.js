import * as React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

const PageMeta = ({
  title,
  description,
  image,
  type = 'website',
  publishedDate,
  modifiedDate,
  location,
}) => {
  const {
    site: { siteMetadata },
  } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          defaultTitle
          siteUrl
          siteName
          titleTemplate
          description
          image
        }
      }
    }
  `)

  const metaTitle = title || siteMetadata.defaultTitle
  const metaDescription = description || siteMetadata.description
  const metaImage = `${siteMetadata.siteUrl}${image || siteMetadata.image}`
  const pageUrl = `${siteMetadata.siteUrl}${location?.pathname || ''}`
  return (
    <>
      <title>{metaTitle + ' | Neontribe'}</title>
      <meta name="description" content={metaDescription} />

      <meta property="og:site_name" content={siteMetadata.siteName} />
      <meta property="og:type" content={type} />
      <meta property="og:title" content={metaTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content={metaImage} />
      <meta property="og:url" content={pageUrl} />

      {type === 'article' && publishedDate && (
        <meta
          property="article:published_time"
          content={new Date(publishedDate).toISOString()}
        />
      )}
      {type === 'article' && modifiedDate && (
        <meta
          property="article:modified_time"
          content={new Date(modifiedDate).toISOString()}
        />
      )}

      <meta name="twitter:site" content="@neontribe" />
      <meta
        name="twitter:card"
        content={image ? 'summary_large_image' : 'summary'}
      />
      <meta name="twitter:title" content={metaTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={metaImage} />
      <meta property="twitter:url" content={pageUrl} />

      <script
        defer
        data-domain="neontribe.co.uk"
        src="https://plausible.io/js/plausible.js"
      />
    </>
  )
}

export default PageMeta
