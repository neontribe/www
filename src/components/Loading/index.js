import React, { useState, useEffect } from 'react'
import LoadingBar from 'react-loading-bar'
import 'react-loading-bar/dist/index.css'
import { c_LOADING } from '../../theme'

const Loading = () => {
  const [show, setShow] = useState(false)

  const startLoadListener = () => {
    setShow(true)
  }

  const endLoadListener = () => {
    setShow(false)
  }

  useEffect(() => {
    addEventListener('startLoad', startLoadListener) // eslint-disable-line no-restricted-globals
    addEventListener('endLoad', endLoadListener) // eslint-disable-line no-restricted-globals

    return () => {
      removeEventListener('startLoad', startLoadListener) // eslint-disable-line no-restricted-globals
      removeEventListener('endLoad', endLoadListener) // eslint-disable-line no-restricted-globals
    }
  })

  return <LoadingBar show={show} color={c_LOADING} />
}

export default Loading
