import React from 'react'
import useStyles from './Hero.style'
import BackgroundImg from "../../images/codeslice-banner-1.png";

function Hero() {
    const classes = useStyles()
  return (
    <div className={classes.container} style={{backgroundImage:`url(${BackgroundImg})`}}>
        <h1>We're Design masters</h1>
        <h1>Believes in</h1>
        <h1>Greate Innovation</h1>
    </div>
  )
}

export default Hero