import { ClassNames } from '@emotion/react'
import { Typography } from '@mui/material'
import React from 'react'
import {  Paper } from "@mui/material";
import useStyles from "../styles/homepageDesign";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";


import { useMediaQuery } from "react-responsive";
import logoWhite from "../assets/logoWhite.png";
import facebook from "../assets/facebook.png";
import instagram from "../assets/instagram.png";
import twitter from "../assets/twitter.png";
function Footer() {
    const classes = useStyles();
        const isMobile = useMediaQuery({ query: "(max-width: 1224px)" });
    return (
        
        <div>
             <footer className={classes.footer}>
        <img
          src={logoWhite}
          className="App-logo"
          alt="logoWhite"
          style={{ width: !isMobile ? "50px" : "30px", marginBottom: "20px",}}
          
        />
        <Typography
          variant={isMobile ? "h6" : "body"}
          fontWeight="400"
          color="white"
          fontSize={isMobile && "14px"}
          style={{
            opacity: "80%",
            textAlign: "center",
            lineHeight: !isMobile ? "20px" : "18px",
            width: !isMobile ? "48%" : "70%",
            marginBottom: "20px",
          }}
        >
          LoopGem is the world's first NFT marketplace that allows to you
          create, collect, sell and even promote NFTs.
        </Typography>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <a
            href="https://www.facebook.com/loopgem/"
            style={{ textDecoration: "none" }}
          >
            <img
              src={facebook}
              className="facebook"
              alt="fb"
              style={{ height: !isMobile ? "20px" : "16px", margin: "20px" }}
            />
          </a>
          <a
            href="https://twitter.com/LoopGem"
            style={{ textDecoration: "none" }}
          >
            <img
              src={twitter}
              className="twitter"
              alt="twitter"
              style={{ height: !isMobile ? "18px" : "15px", margin: "20px" }}
            />
          </a>
          <a
            href="https://www.instagram.com/loop_gem/"
            style={{ textDecoration: "none" }}
          >
            <img
              src={instagram}
              className="instagram"
              alt="instagram"
              style={{ height: !isMobile ? "20px" : "16px", margin: "20px" }}
            />
          </a>
          <Typography
            variant={isMobile ? "h6" : "body"}
            fontWeight="700"
            color="white"
            fontSize={isMobile ? "14px" : "15px"}
            style={{
              margin: "10px",
              textAlign: "center",
            }}
          >
            <a
              href="mailto:support@loopgem.com"
              style={{ textDecoration: "none", color: "white" }}
            >
              Contact Us
            </a>
          </Typography>
        </div>
        <Typography variant="h6" fontSize="15px" style={{color:"black"}}>© Copyright | LoopGem | All Rights Reserved</Typography>
      </footer>
        </div>
    )
}

export default Footer
