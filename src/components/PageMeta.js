import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { Location } from '@reach/router'

const PageMeta = ({
  type = 'website',
  title,
  description,
  image,
  publishedDate,
  modifiedDate,
}) => (
  <Location>
    {({ location }) => (
      <Helmet>
        <meta property="og:site_name" content="Neontribe" />
        <meta property="og:type" content={type} />
        <meta property="og:title" content={title} />
        {description && (
          <meta property="og:description" content={description} />
        )}
        {image && <meta property="og:image" content={image} />}
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
        {description && (
          <meta name="twitter:description" content={description} />
        )}
        {image && <meta name="twitter:image" content={image} />}
        <meta property="twitter:url" content={location.href} />
      </Helmet>
    )}
  </Location>
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
