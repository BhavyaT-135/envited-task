import React from 'react'
import { Link } from 'react-router-dom'
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import LPImg from '../../assets/LandingPage.jpg'
import './landingPage.css'

const LandingPage = () => {
  return (
    <Container className="lp-cont" maxWidth = "sm">
      <div className="lp-textDiv">
          <div className="lp-text">Imagine if</div>
          <Typography 
              fontSize="36px"
              fontWeight="700"  
              font="helvetica"
              marginBottom="-10px"
              marginTop="-10px"
            sx={{
                backgroundcolor: "primary",
                backgroundImage: `linear-gradient(90deg, #8456EC 24.2%, #E87BF8 120.46%);`,
                backgroundSize: "100%",
                backgroundRepeat: "repeat",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
            }}>
            Snapchat
        </Typography>
        <div className="lp-text">had events.</div>
      </div>
      <div className="lp-text-sub">Easily host and share events with your friends across any social media.</div>
        <img src={LPImg} alt="Landing Page" className="lp-img" />
        <Link to='/create'><button className="lp-button">🎉 Create my event</button></Link>
    </Container>
  )
}

export default LandingPage