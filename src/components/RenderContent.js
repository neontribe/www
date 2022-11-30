import React from 'react'
import RehypeReact from 'rehype-react'
import classNames from 'classnames'

import Text from '../components/Text'
import { ExternalLink } from '../components/Link'
import { c_NEON_PURPLE, c_TEXT_DARK, c_TEXT_LIGHT } from '../theme'

const Content = (props) => (
  <>
    <div className="content" {...props} />
    <style jsx global>{`
      .content {
        background-color: ${c_TEXT_LIGHT};
        color: ${c_TEXT_DARK};
      }

      .content * + * {
        margin-top: 1.5em;
      }

      .content li + li {
        margin-top: 1em;
      }

      .content > div > div:not(:first-child) {
        margin-top: 2rem;
      }

      .content a {
        text-decoration: underline;
      }
    `}</style>
  </>
)

const Heading = ({ size, level, children, ...props }) => {
  const H = 'h' + Math.min(level, 6)

  return (
    <Text size={size}>
      <H
        className={classNames('heading', level === 2 && 'with-arcs')}
        children={children}
        {...props}
      />

      <style jsx>{`
        .heading {
          display: inline-flex;
          color: ${c_NEON_PURPLE};
        }
      `}</style>
    </Text>
  )
}

const RenderAst = ({ htmlAst, components = {}, children }) => {
  const renderAst = new RehypeReact({
    createElement: React.createElement,
    components: {
      h1: (props) => (
        <Text>
          <Heading {...props} level={1} size="large" />
        </Text>
      ),
      h2: (props) => <Heading {...props} level={2} size="medium" />,
      h3: (props) => <Heading {...props} level={3} size="normal" />,
      li: ({ children, ...props }) => (
        <li {...props}>
          <Text children={children} />
        </li>
      ),
      // TODO: Discern external vs external links?
      a: (props) => <ExternalLink {...props} />,
      ...components,
    },
  }).Compiler

  if (htmlAst) {
    return renderAst(htmlAst)
  }

  // TODO: Support passing markdown to this as children and rendering it?
  return children
}

const RenderContent = (props) => (
  <Content>
    <RenderAst {...props} />
  </Content>
)

export default RenderContent
