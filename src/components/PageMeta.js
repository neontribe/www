import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { Location } from '@reach/router'
import { StaticQuery, graphql } from 'gatsby'

const PageMeta = ({
  type = 'website',
  title,
  description,
  image,
  publishedDate,
  modifiedDate,
}) => (
  <StaticQuery
    query={graphql`
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
    `}
    render={({ site: { siteMetadata } }) => (
      <Location>
        {({ location }) => (
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
            <meta
              property="og:image"
              content={`${siteMetadata.siteUrl}${image || siteMetadata.image}`}
            />
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
            <meta property="og:url" content={location.href} />}
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
            <meta
              name="twitter:image"
              content={`${siteMetadata.siteUrl}${image || siteMetadata.image}`}
            />
            <meta property="twitter:url" content={location.href} />
            <script
              defer
              data-domain="neontribe.co.uk"
              src="https://plausible.io/js/plausible.js"
            />
          </Helmet>
        )}
      </Location>
    )}
  />
)

PageMeta.propTypes = {
  type: PropTypes.oneOf(['website', 'article']),
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  publishedDate: PropTypes.instanceOf(Date),
  modifiedDate: PropTypes.instanceOf(Date),
}

export default PageMeta
