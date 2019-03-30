import React from "react"
export const DataContext = React.createContext({})

export const ConfigurationProvider = ({ config, children }) => {
  return <DataContext.Provider value={config}>{children}</DataContext.Provider>
}

export const withConfiguration = (
  mapToProps = props => props
) => Component => props => (
  <DataContext.Consumer>
    {value => <Component {...mapToProps(value)} {...props} />}
  </DataContext.Consumer>
)
