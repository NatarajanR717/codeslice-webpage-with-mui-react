import React from 'react'
import useStyles from './Business.style'
import { Grid } from '@mui/material'
import AboutImg from "../../images/about-us.png"


function Business() {
    const classes = useStyles()
  return (
    <div>
        <Grid container className={classes.container} spacing={10} ga>    
            <Grid item xs={6}>
                <h2>Lets take your <span>Business</span> to Next Level</h2>
                <p>CodeSlice IT Solutions is an end-to-end IT solution provider, specialized in IT services and platform solutions.</p>
                <p>CodeSlice specializes in design and development of highly intuitive and professional websites for small and medium sized business organisations. We believe in walking with our clients at every step during the journey of development and success of their business.</p>
            </Grid>
            <Grid item xs={6}>
                <img src={AboutImg} alt="about"></img>
            </Grid>
        </Grid>
    </div>
  )
}

export default Business