import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'
import { useLocation } from '@gatsbyjs/reach-router'

const PageMeta = ({
  type = 'website',
  title,
  description,
  image,
  publishedDate,
  modifiedDate,
}) => {
  const location = useLocation()
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

  const fullImageUrl = `${siteMetadata.siteUrl}${image || siteMetadata.image}`
  const pageUrl = location.href

  return (
    <Helmet
      title={title || siteMetadata.defaultTitle}
      titleTemplate={siteMetadata.titleTemplate}
    >
      <meta property="og:site_name" content="Neontribe" />
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta
        property="og:description"
        content={description || siteMetadata.description}
      />
      <meta property="og:image" content={fullImageUrl} />
      {type === 'article' && publishedDate && (
        <meta
          property="article:published_time"
          content={publishedDate.toISOString()}
        />
      )}
      {type === 'article' && modifiedDate && (
        <meta
          property="article:modified_time"
          content={modifiedDate.toISOString()}
        />
      )}
      <meta property="og:url" content={pageUrl} />
      <meta name="twitter:site" content="@neontribe" />
      <meta
        name="twitter:card"
        content={image ? 'summary_large_image' : 'summary'}
      />
      <meta name="twitter:title" content={title} />
      <meta
        name="twitter:description"
        content={description || siteMetadata.description}
      />
      <meta name="twitter:image" content={fullImageUrl} />
      <meta property="twitter:url" content={pageUrl} />
      <script
        defer
        data-domain="neontribe.co.uk"
        src="https://plausible.io/js/plausible.js"
      />
    </Helmet>
  )
}

PageMeta.propTypes = {
  type: PropTypes.oneOf(['website', 'article']),
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  publishedDate: PropTypes.instanceOf(Date),
  modifiedDate: PropTypes.instanceOf(Date),
}

export default PageMeta
