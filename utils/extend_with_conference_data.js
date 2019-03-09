const extendWithConferenceData = componentKlass => {
  componentKlass.getInitialProps = async () => {
    return { initialConfig: require('../static/conference.json') }
  }

  const { componentDidMount, componentWillUnmount } = componentKlass.prototype

  componentKlass.prototype.componentDidMount = function() {
    if(!process.browser) {
      return
    }

    this.setState({ config: this.props.initialConfig })

    this.interval = setInterval(async () => {
      const response = await fetch('/static/conference.json')
      this.setState({ config: await response.json() })
    }, 10000)

    if(typeof componentDidMount === 'function') {
      componentDidMount.call(this)
    }
  }

  componentKlass.prototype.componentWillUnmount = function() {
    clearInterval(this.interval)
    if(typeof componentWillUnmount === 'function') {
      componentWillUnmount.call(this)
    }
  }

  componentKlass.prototype.config = function() {
    return this.state.config || this.props.initialConfig || {}
  }

  componentKlass.prototype.state = {}

  return componentKlass
}

export default extendWithConferenceData
