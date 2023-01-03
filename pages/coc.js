import React, { Component } from "react"
import Head from "../components/head"
import Header from "../components/header"
import Footer from "../components/footer"
import styles from "./index.module.scss"
import Logo from "../components/logo"
import extendWithConferenceData from "../utils/extend_with_conference_data"
import SocialMedia from "../components/footer/social_media"
import { ResponsiveProvider } from "../components/contexts/responsive"
import { ConfigurationProvider } from "../components/contexts/configuration"

class CoC extends Component {
  render() {
    return (
      <ResponsiveProvider>
        <ConfigurationProvider config={this.config()}>
          <div className={styles.body}>
            <Head />
            <div className={styles.container}>
              <div className={styles.column1}>
                <Logo />
              </div>
              <div className={styles.column2}>
                <Header />
              </div>
            </div>
            <article className={styles.text_page}>
              <h1 id="inspiration-and-safety">Inspiration and Safety</h1>
              <p>
                Conferences are not only about listening. Most of the value
                comes from talking to each other. Our mission is to create an
                inspiring, thoughtful, creative and safe space to everyone
                involved. The venue is known to be of good quality - it’s a
                University of Wroclaw building. It has many ways to ensure
                safety of all the people inside like monitoring and special
                security people. It is needless to say that this conference is a
                place for good people, only. Good people respect each other, are
                nice to each other, smile, and make everyone (without
                exceptions) feel comfortable.
              </p>
              <h2 id="conference-code-of-conduct">
                Conference Code of Conduct
              </h2>
              <p>
                All attendees, speakers, sponsors and volunteers at our
                conference are required to agree with the following code of
                conduct. Organisers will enforce this code throughout the event.
                We are expecting cooperation from all participants to help
                ensuring a safe environment for everybody.
              </p>
              <p>
                <strong>Need Help?</strong> As part of our goal, we’re dedicated
                to react to all situations that we’ll be notified, ideally
                directly to us.
              </p>
              <p>
                There will be a <strong>special team of volunteers</strong> who
                will be visible during the conference (If you want to join the
                team, please let us know). Student volunteers are here to help
                find your way around and resolve any problem.
              </p>
              <h2 id="quick-version">Quick Version</h2>
              <p>
                Our conference is dedicated to providing a harassment-free
                conference experience for everyone, regardless of gender, age,
                sexual orientation, disability, physical appearance, body size,
                race, or religion (or lack thereof). We do not tolerate
                harassment of conference participants in any form. Sexual
                language and imagery is not appropriate for any conference
                venue, including talks, workshops, parties, Twitter and other
                online media. Conference participants violating these rules may
                be sanctioned or expelled from the conference without a refund
                at the discretion of the conference organisers.
              </p>
              <h2 id="the-less-quick-version">The Less Quick Version</h2>
              <p>
                Harassment includes offensive verbal comments related to gender,
                age, sexual orientation, disability, physical appearance, body
                size, race, religion, sexual images in public spaces, deliberate
                intimidation, stalking, following, harassing photography or
                recording, sustained disruption of talks or other events,
                inappropriate physical contact, and unwelcome sexual attention.
                Participants asked to stop any harassing behavior are expected
                to comply immediately.
              </p>
              <p>
                Sponsors are also subject to the anti-harassment policy. In
                particular, sponsors should not use sexualised images,
                activities, or other material. Booth staff (including
                volunteers) should not use sexualised
                clothing/uniforms/costumes, or otherwise create a sexualised
                environment.
              </p>
              <p>
                If a participant engages in harassing behavior, the conference
                organisers may take any action they deem appropriate, including
                warning the offender or expulsion from the conference with no
                refund.
              </p>
              <p>
                If you are being harassed, notice that someone else is being
                harassed, or have any other concerns, please contact a member of
                conference staff immediately.
              </p>
              <p>
                Conference staff will be happy to help participants contact
                hotel/venue security or local law enforcement, provide escorts,
                or otherwise assist those experiencing harassment to feel safe
                for the duration of the conference. We value your attendance and
                participation.
              </p>
              <p>
                We expect participants to follow these rules at conference and
                workshop venues and conference-related social events.
              </p>
              <p>
                <em>
                  Original source and credit:{" "}
                  <a href="http://2012.jsconf.us/#/about">
                    http://2012.jsconf.us/#/about
                  </a>{" "}
                  &amp;{" "}
                  <a href="http://geekfeminism.wikia.com/wiki/Conference_anti-harassment/Policy">
                    The Ada Initiative
                  </a>{" "}
                  <br />
                  This Code of Conduct is licensed under a{" "}
                  <a href="http://creativecommons.org/licenses/by/3.0/deed.en_US">
                    Creative Commons Attribution 3.0 Unported License
                  </a>
                </em>
              </p>
            </article>
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

export default extendWithConferenceData(CoC)
