import React from "react"
import Responsive, {
  ResponsiveProvider,
} from "../components/contexts/responsive"
import Head from "../components/head"
import Header from "../components/header"
import Logo from "../components/logo"
import ConfrontIdeas from "../components/confront_ideas"
import Postcard from "../components/postcard"
import Agenda from "../components/agenda"
import AgendaSoon from "../components/agenda/soon"
import Speakers from "../components/speakers"
import Location from "../components/location"
import Partners from "../components/partners"
import Supporters from "../components/supporters"
import TalksArchive from "../components/talks_archive"
import Editions from "../components/editions"
import Footer from "../components/footer"
import styles from "./index.module.scss"
import extendWithConferenceData from "../utils/extend_with_conference_data"
import SocialMedia from "../components/footer/social_media"
import { ConfigurationProvider } from "../components/contexts/configuration"

class Home extends React.Component {
  render() {
    const { comingSoonVersion, talks } = this.config()

    return (
      <ResponsiveProvider>
        <ConfigurationProvider config={this.config()}>
          <div className={styles.body}>
            <Head />
            <div
              className={`${styles.container} ${styles.container_stretched}`}
            >
              <div className={styles.column1}>
                <Logo />
              </div>
              <div className={styles.column2}>
                <Header />
              </div>
            </div>

            <Responsive tablet>
              <Postcard />
            </Responsive>

            <div className={styles.container}>
              <div className={styles.column1}>
                <Responsive mobile>
                  <Postcard />
                </Responsive>
                <ConfrontIdeas />
                {comingSoonVersion ? (
                  <>
                    <AgendaSoon />
                    <Editions />
                  </>
                ) : (
                  <>
                    <Agenda />
                    <Responsive desktop desktophd>
                      <TalksArchive />
                      <Editions />
                    </Responsive>
                    <Responsive tablet>
                      <Location />
                      <TalksArchive />
                      <Editions />
                    </Responsive>
                  </>
                )}
              </div>

              <div className={styles.column2}>
                <Responsive desktop desktophd>
                  <Postcard />
                </Responsive>
                <div className={styles.content}>
                  <Responsive mobile desktop desktophd>
                    <div className={styles.content_column}>
                      {comingSoonVersion ? <TalksArchive /> : <Speakers />}
                    </div>
                    <div className={styles.content_column}>
                      {comingSoonVersion ? (
                        <Partners />
                      ) : (
                        <>
                          <Location />
                          <Partners />
                          <Supporters />
                          <Responsive mobile>
                            <Editions />
                          </Responsive>
                        </>
                      )}
                    </div>
                  </Responsive>
                  <Responsive tablet>
                    <div className={styles.content_column}>
                      {comingSoonVersion ? (
                        <>
                          <TalksArchive />
                          <Partners />
                        </>
                      ) : (
                        <>
                          <Speakers />
                          <Supporters />
                          <Partners />
                        </>
                      )}
                    </div>
                  </Responsive>
                </div>
              </div>
            </div>
            <div className={styles.container}>
              <div className={styles.column1}>
                <Footer />
              </div>
              <div className={styles.column2}>
                <div className={styles.footer}>
                  <div className={styles.footer_empty} />
                  <div className={styles.footer_sm}>
                    <SocialMedia />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ConfigurationProvider>
      </ResponsiveProvider>
    )
  }
}

export default extendWithConferenceData(Home)
