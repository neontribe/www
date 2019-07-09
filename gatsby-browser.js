/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */
import React from 'react'
import Loading from './src/components/Loading'
import { globalHistory } from '@reach/router'
import CustomEvent from 'custom-event'

require('./prism-theme.css')

let lastHref

const setProgress = ename => {
  const progEvent = new CustomEvent(ename, {
    bubbles: true,
  })
  dispatchEvent(progEvent)
}

globalHistory.listen(event => {
  if (event.location.href === lastHref) return

  lastHref = event.location.href
  setProgress('startLoad')
})

var onRouteUpdate = () => {
  setProgress('endLoad')
}

var wrapPageElement = ({ element }) => {
  return (
    <>
      <Loading />
      <div id="mainPage">{element}</div>
    </>
  )
}

export { onRouteUpdate, wrapPageElement }
