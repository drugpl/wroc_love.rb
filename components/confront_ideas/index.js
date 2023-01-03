import React, { useState } from "react"
import styles from "./index.module.scss"
import arrow from "./arrow.svg"

const ConfrontIdeas = () => {
  const [visible, setVisible] = useState(false)

  return (
    <div className={styles.container} onClick={() => setVisible(!visible)}>
      {!visible ? (
        <div className={styles.box}>
          WE WANT TO CONFRONT IDEAS
          <button type="button" className={styles.button}>
            <span>Learn more</span>
            <div>
              <img src={arrow.src} />
            </div>
          </button>
        </div>
      ) : (
        <div className={styles.text}>
          <div className={styles.header}>WE WANT TO CONFRONT IDEAS</div>
          <p>
            The main goal of the conference is to help Ruby professionals become
            better at what they do.
          </p>
          <p>
            <span className={styles.name}>
              wroclove<span className={styles.dot}>.</span>rb{" "}
            </span>
            serves best to people who are already fluent with Ruby. The ideas
            presented at our conference are very advanced. They are meant to
            inspire the way we write code, the way we help our clients and
            users. It’s not uncommon for us to present you ideas that come from
            the Java and .NET worlds, we believe that their ideas can have a
            great influence on our community. There are good reasons, why our
            conference is called “the best Java conference in the Ruby world”.
          </p>
          <p>
            Our goal is to ensure a good environment to learn and discuss. We
            love confronting ideas, even when it’s uncomfortable to the Ruby
            status-quo. We love experimenting with new formats of talks and
            discussions, like fights, fishbowls and crowd-moderated discussion
            panels. Everything that can inspire the Ruby programmers is more
            than welcome at our conference.{" "}
            <a href="mailto:all@wrocloverb.com">Let us know</a>, what you’d be
            interested in experimenting with!
          </p>
          <button type="button" className={styles.button}>
            <div>
              <img src={arrow.src} />
            </div>
          </button>
        </div>
      )}
    </div>
  )
}

export default ConfrontIdeas
