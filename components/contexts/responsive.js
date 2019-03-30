import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import MediaQuery from "react-responsive"

const queries = {
  mobile: "(max-width: 767px)",
  tablet: "(min-width: 768px) and (max-width: 991px)",
  desktop: "(min-width: 992px) and (max-width: 1199px)",
  desktophd: "(min-width: 1200px)"
}

const createMediaQuery = props =>
  Object.keys(props)
    .reduce((arr, propName) => {
      if (queries[propName]) {
        arr.push(queries[propName])
      }
      return arr
    }, [])
    .join(", ")

export const ResponsiveContext = React.createContext(false)

export const ResponsiveProvider = ({ children }) => {
  const [didRender, setDidRender] = useState(false)
  useEffect(() => {
    setTimeout(() => setDidRender(true), 0)
  })

  return (
    <ResponsiveContext.Provider value={didRender}>
      {children}
    </ResponsiveContext.Provider>
  )
}

const Responsive = ({ children, ...props }) => (
  <ResponsiveContext.Consumer>
    {value => {
      if (!process.browser) {
        return props.desktophd && children
      }
      return value ? (
        <MediaQuery query={createMediaQuery(props)}>{children}</MediaQuery>
      ) : (
        props.desktophd && children
      )
    }}
  </ResponsiveContext.Consumer>
)

Responsive.propTypes = {
  mobile: PropTypes.bool,
  tablet: PropTypes.bool,
  desktop: PropTypes.bool,
  desktophd: PropTypes.bool,
  children: PropTypes.node.isRequired
}

export default Responsive
