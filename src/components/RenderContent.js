import React from 'react'
import RehypeReact from 'rehype-react'
import classNames from 'classnames'

import Text from '../components/Text'
import { ExternalLink } from '../components/Link'

import arcs from './arcs.svg'

const Content = (props) => (
  <>
    <div className="content" {...props} />
    <style jsx global>{`
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
        }

        .with-arcs:before {
          content: '';
          display: block;
          background-image: url('${arcs}');
          background-position: left center;
          background-repeat: no-repeat;
          height: 2rem;
          width: 2rem;
          margin-right: 1.5rem;
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
        <Text align="center">
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
