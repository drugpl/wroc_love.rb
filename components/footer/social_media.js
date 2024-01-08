import React from "react"
import PropTypes from "prop-types"
import styles from "./social_media.module.scss"
import fb from "./fb.png"
import tt from "./tt.png"
import yt from "./yt.png"
import discord from "./discord.png"
import { withConfiguration } from "../contexts/configuration"

const SocialMedia = ({
  facebookUrl,
  twitterUrl,
  discordUrl,
  youtubeAccount,
}) => (
  <div className={styles.container}>
    {facebookUrl && (
      <a href={facebookUrl}>
        <img src={fb.src} />
      </a>
    )}
    {twitterUrl && (
      <a href={twitterUrl}>
        <img src={tt.src} />
      </a>
    )}
    {discordUrl && (
      <a href={discordUrl}>
        <img src={discord.src} />
      </a>
    )}
    {youtubeAccount && (
      <a href={`https://www.youtube.com/user/${youtubeAccount}`}>
        <img src={yt.src} />
      </a>
    )}
  </div>
)

SocialMedia.propTypes = {
  facebookUrl: PropTypes.string,
  twitterUrl: PropTypes.string,
  discordUrl: PropTypes.string,
  youtubeAccount: PropTypes.string,
}

export default withConfiguration((config) => ({
  facebookUrl: config.facebookUrl,
  twitterUrl: config.twitterUrl,
  discordUrl: config.discordUrl,
  youtubeAccount: config.youtubeAccount,
}))(SocialMedia)
