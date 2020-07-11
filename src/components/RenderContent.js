import React from 'react'
import RehypeReact from 'rehype-react'
import Paragraph from '../components/Paragraph'
import Text from '../components/Text'
import { ExternalLink } from '../components/Link'

const Content = props => (
  <>
    <div className="content" {...props} />
    <style jsx global>{`
      .content p {
        margin: 0;
      }

      .content * + * {
        margin-top: 1em;
      }

      .content li + li {
        margin-top: 0.25em;
      }
    `}</style>
  </>
)

const Heading = ({ size, level, children, type, ...props }) => {
  const H = p => React.createElement(`h${level}`, p)

  return (
    <H {...props}>
      <Text size={size} lineHeight={1.2} gutter={0} heavy type={type}>
        {children}
      </Text>
    </H>
  )
}

const RenderContent = ({ htmlAst, type, children }) => {
  const renderAst = new RehypeReact({
    createElement: React.createElement,
    components: {
      h1: props => <Heading {...props} type={type} level={1} size="large" />,
      h2: props => <Heading {...props} type={type} level={2} size="medium" />,
      h3: props => <Heading {...props} type={type} level={3} size="normal" />,
      p: ({ children, ...props }) => (
        <p {...props}>
          <Text children={children} />
        </p>
      ),
      li: ({ children, ...props }) => (
        <li {...props}>
          <Text display="inline" children={children} />
        </li>
      ),
      // TODO: Discern external vs external links?
      a: ({ children, ...props }) => (
        <ExternalLink {...props}>
          <Text gutter={0} type={type} underline display="inline">
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
