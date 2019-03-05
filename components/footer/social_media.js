import React from 'react';
import PropTypes from 'prop-types';
import styles from './social_media.scss'
import fb from './fb.png'
import tt from './tt.png'
import yt from './yt.png'

const SocialMedia = ({ facebookUrl, twitterUrl, youtubeUrl }) => (
  <div className={styles.container}>
    {facebookUrl && <a href={facebookUrl}>
      <img src={fb} />
    </a>}
    {twitterUrl && <a href={twitterUrl}>
      <img src={tt} />
    </a>}
    {youtubeUrl && <a href={youtubeUrl}>
      <img src={yt} />
    </a>}
  </div>
)

SocialMedia.propTypes = {
  facebookUrl: PropTypes.string,
  twitterUrl: PropTypes.string,
  youtubeUrl: PropTypes.string,
}

export default SocialMedia
