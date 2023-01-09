import React, { useState } from "react"
import PropTypes from "prop-types"
import nl2br from "react-nl2br"
import styles from "./speaker.module.scss"

const Speaker = ({ image, name, description, links }) => {
  const [isOpen, setOpen] = useState(false)

  return (
    <div
      className={`${styles.speaker} ${isOpen ? styles.speaker_open : ""}`}
      onClick={() => setOpen(!isOpen)}
    >
      <div className={styles.speaker_photo_container}>
        <div
          className={styles.speaker_photo}
          style={{ backgroundImage: `url(${image})` }}
        />
      </div>
      <div className={styles.speaker_details}>
        <div className={styles.speaker_name}>{name}</div>
        <div className={styles.speaker_description}>
          {description.html ? (
            <div dangerouslySetInnerHTML={{ __html: description.html }} />
          ) : (
            nl2br(description)
          )}
          {links && (
            <div className={styles.speaker_links}>
              {Object.entries(links).map(([name, link], index) => (
                <a href={link} key={index}>{`${name} `}</a>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

Speaker.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string.isRequired,
  description: PropTypes.oneOfType([
    PropTypes.shape({
      __html: PropTypes.string,
    }),
    PropTypes.string,
  ]),
  links: PropTypes.object,
}

export default Speaker
