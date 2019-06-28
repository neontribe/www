import React from 'react'
import RehypeReact from 'rehype-react'
import Paragraph from '../components/Paragraph'
import Heading from '../components/Heading'
import Text from '../components/Text'
import { ExternalLink } from '../components/Link'

// Copied from templates/blog-post.js
const ContentHeadings = ({ size, children, type, ...props }) => (
  <Heading {...props}>
    <Text size={size} lineHeight={1.2} heavy type={type}>
      {children}
    </Text>
  </Heading>
)

const RenderContent = ({ htmlAst, type, children }) => {
  const renderAst = new RehypeReact({
    createElement: React.createElement,
    components: {
      h1: props => (
        <ContentHeadings {...props} type={type} level={1} size="large" />
      ),
      h2: props => (
        <ContentHeadings {...props} type={type} level={2} size="medium" />
      ),
      h3: props => (
        <ContentHeadings {...props} type={type} level={3} size="normal" />
      ),
      p: props => <Paragraph {...props} type={type} />,
      // TODO: Discern external vs external links?
      a: ({ children, ...props }) => (
        <ExternalLink {...props}>
          <Text gutter={0} underline type={type}>
            {children}
          </Text>
        </ExternalLink>
      ),
    },
  }).Compiler

  if (htmlAst) {
    return renderAst(htmlAst)
  }

  // TODO: Support passing markdown to this as children and rendering it?
  return children
}

RenderContent.propTypes = {
  type: Text.propTypes.type,
}

export default RenderContent
