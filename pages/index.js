import React from 'react'
import Responsive, { ResponsiveProvider } from '../components/responsive'
import Head from '../components/head'
import Header from '../components/header'
import Logo from '../components/logo'
import ConfrontIdeas from '../components/confront_ideas'
import Postcard from '../components/postcard'
import Agenda from '../components/agenda'
import Speakers from '../components/speakers'
import Location from '../components/location'
import Partners from '../components/partners'
import Supporters from '../components/supporters'
import TalksArchive from '../components/talks_archive'
import Twitter from '../components/twitter'
import Footer from '../components/footer'
import styles from './index.scss'

class Home extends React.Component {
  state = {
    config: null
  }

  static async getInitialProps() {
    const initialConfig = require('../static/conference.json')
    return { initialConfig }
  }

  componentDidMount() {
    if(!process.browser) {
      return
    }

    this.setState({ config: this.props.initialConfig })

    this.interval = setInterval(async () => {
      const response = await fetch('/static/conference.json')
      const config = await response.json()
      this.setState({ config })
    }, 10000)
  }


  componentWillUnmount() {
    clearInterval(this.interval)
  }

  config() {
    return this.state.config || this.props.initialConfig
  }

  getTalksList(agenda) {
    if(!agenda) {
      return []
    }

    return agenda.reduce((list, day) => {
      const { date, talks } = day
      talks.forEach(talk => {
        const { start, end, title, speaker } = talk
        const startTime = new Date(`${date} ${start}:00`)
        const endTime = new Date(`${date} ${end}:00`)

        list.push({
          date, start, end, title, speaker, startTime, endTime
        })
      })
      return list
    }, [])
  }

  render() {
    const {
      date, cfpUrl, ticketsUrl, speakers, agenda, supporters, partners, venue
    } = this.config()

    const talksList = this.getTalksList(agenda)

    return (
      <ResponsiveProvider>
        <div className={styles.body}>
          <Head/>
          <div className={`${styles.container} ${styles.container_stretched}`}>
            <div className={styles.column1}>
              <Logo/>
            </div>
            <div className={styles.column2}>
              <Header date={date} cfpUrl={cfpUrl} ticketsUrl={ticketsUrl}/>
            </div>
          </div>

          <Responsive tablet>
            <Postcard talksList={talksList} />
          </Responsive>

          <div className={styles.container}>
            <div className={styles.column1}>
              <Responsive mobile>
                <Postcard talksList={talksList} />
              </Responsive>
              <ConfrontIdeas/>
              <Agenda agenda={agenda} talksList={talksList}/>
              <Responsive tablet>
                <Supporters supporters={supporters}/>
                <Partners partners={partners}/>
                <Twitter/>
              </Responsive>
            </div>

            <div className={styles.column2}>
              <Responsive desktop desktophd>
                <Postcard talksList={talksList} />
              </Responsive>
              <div className={styles.content}>
                <Responsive mobile desktop desktophd>
                  <div className={styles.content_column}>
                    <Speakers speakers={speakers}/>
                  </div>
                  <div className={styles.content_column}>
                    <Location venue={venue}/>
                    <Partners partners={partners}/>
                    <Supporters supporters={supporters}/>
                    <Twitter/>
                    <TalksArchive/>
                  </div>
                </Responsive>
                <Responsive tablet>
                  <div className={styles.content_column}>
                    <Speakers speakers={speakers}/>
                    <Location venue={venue}/>
                    <TalksArchive/>
                  </div>
                </Responsive>
              </div>
            </div>
          </div>
          <div className={styles.container}>
            <div className={styles.column1}>
              <Footer/>
            </div>
            <div className={styles.column2}>
              <div className={styles.placeholder}>
                <div className={styles.placeholder_line}/>
                <div className={styles.placeholder_line}/>
              </div>
            </div>
          </div>
        </div>
      </ResponsiveProvider>
    )
  }
}

export default Home
