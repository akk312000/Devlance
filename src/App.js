import "./App.css";
import logo from "./assets/logo.png";
import { Typography, Paper, Button } from "@mui/material";
import useStyles from "./styles/homepageDesign";
import nft from "./assets/nft.png";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import image from "./assets/image.png";
import user from "./assets/user.png";
import wallet from "./assets/wallet.png";
import { useMediaQuery } from "react-responsive";
import logoWhite from "./assets/logoWhite.png";
import facebook from "./assets/facebook.png";
import instagram from "./assets/instagram.png";
import twitter from "./assets/twitter.png";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Buttons from "./components/Buttons";

function App() {
  const classes = useStyles();
  const isMobile = useMediaQuery({
    query: "(max-width: 1224px)",
  });
  return (
    <BrowserRouter>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
          justifyContent: "spaceBetween",
        }}
      >
        <div className="App">
          <Navbar />
          <div
            style={{
              height: !isMobile ? "50px" : "20px",
            }}
          ></div>
          <div className={classes.mainBox}>
            <div
              className={classes.mainBoxLeft}
              style={{
                width: !isMobile ? "480px" : "100%",
              }}
            >
              <div
                style={{
                  height: !isMobile ? "50px" : "20px",
                }}
              ></div>

              <Typography
                variant="h1"
                style={{
                  position: "absolute",
                  // "width": "359px",
                  height: "55px",
                  left: "540px",
                  top: "159px",
                  fontFamily: "Open Sans",
                  fontStyle: "normal",
                  fontWeight: "bold",
                  fontSize: "40.3531px",
                  marginBottom: "30px",
                  lineHeight: "55px",
                  textAlign: "center",
                  letterSpacing: "13.451px",
                  textTransform: "uppercase",
                  color: "#FFFFFF",
                  overflow: "none ",
                  whitespace: "nowrap",
                }}
              >
                Create NFT
              </Typography>
              <div class="btn-meta">
                <Buttons
                  text={"Add MetaData"}
                  style={{
                    position: "relative",
                    width: "1039.32px",
                    height: "60.99px",
                    // "marginTop":"100px !important",
                    // "marginLeft": "100px !important",
                    // "marginRight":"auto !important",
                    textAlign: "center",
                    top: "249px",
                    display: "flex",
                    alignContent: "center",
                    justifyContent: "center",
                    fontWeight: "799",
                    color: "black",
                    background:
                      "linear-gradient(180deg, #D3AA4B 0%, #B78513 100%)",
                    borderRadius: "8.47038px",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    width: "286.1px",
                    height: "261.51px",
                    left: "275.93px",
                    top: "381.99px",
                    border: "2.23512px dashed rgba(255, 255, 255, 0.6)",
                    boxSizing: "border-box",
                    borderRadius: "14.9008px",
                  }}
                >
                  <div
                    style={{
                      // "position": "absolute",
                      height: "44.7px",
                      left: "24.65%",
                      right: "66.46%",
                      top: "446.8px",
                      fontFamily: "Lato",
                      fontStyle: "normal",
                      fontWeight: "600",
                      fontSize: "18.626px",
                      lineHeight: "22px",
                      textAlign: "center",
                      marginLeft: "15px",
                      marginRight: "15px",
                      marginTop: "100px",
                      letterSpacing: "-0.152394px",
                      color: "rgba(255, 255, 255, 0.6)",
                    }}
                  >
                    Drop or Browse Your File Here
                  </div>
                </div>
                <div
                  style={{
                    position: "absolute",
                    width: "552.07px",
                    height: "64.82px",
                    left: "614.17px",
                    top: "381.99px",
                    border: "2.23512px dashed rgba(255, 255, 255, 0.6)",
                    boxSizing: "border-box",
                    borderRadius: "14.9008px",
                  }}
                >
                  <div
                    style={{
                      // "position": "absolute",
                      height: "44.7px",
                      left: "24.65%",
                      right: "66.46%",
                      top: "446.8px",
                      fontFamily: "Lato",
                      fontStyle: "normal",
                      fontWeight: "600",
                      fontSize: "18.626px",
                      lineHeight: "22px",
                      // textAlign: "left",
                      marginLeft: "80px",
                      marginTop: "15px",
                      letterSpacing: "-0.152394px",
                      color: "rgba(255, 255, 255, 0.6)",
                    }}
                  >
                    Add Title
                  </div>
                </div>
                <div
                  style={{
                    position: "absolute",
                    width: "552.07px",
                    height: "171.36px",
                    left: "614.17px",
                    top: "472.13px",
                    border: "2.23512px dashed rgba(255, 255, 255, 0.6)",
                    boxSizing: "border-box",
                    borderRadius: "14.9008px",
                  }}
                >
                  <div
                    style={{
                      // "position": "absolute",
                      height: "44.7px",
                      left: "24.65%",
                      right: "66.46%",
                      top: "446.8px",
                      fontFamily: "Lato",
                      fontStyle: "normal",
                      fontWeight: "600",
                      fontSize: "18.626px",
                      lineHeight: "22px",
                      // textAlign: "center",
                      marginLeft: "80px",
                      marginTop: "15px",
                      letterSpacing: "-0.152394px",
                      color: "rgba(255, 255, 255, 0.6)",
                    }}
                  >
                    <span
                      style={{
                        fontWeight: "bold",
                      }}
                    >
                      Add Description
                    </span>
                  </div>
                </div>
                <div
                  style={{
                    position: "absolute",
                    width: "704.06px",
                    height: "20.86px",
                    left: "275.93px",
                    top: "709.8px",
                    fontFamily: "Lato",
                    fontStyle: "normal",
                    fontWeight: "bold",
                    fontSize: "17.1359px",
                    lineHeight: "21px",
                    letterSpacing: "0.745039px",
                    color: "#FFFFFF",
                  }}
                >
                  <span
                    style={{
                      fontWeight: "bold",
                    }}
                  >
                    Add External Link
                  </span>
                </div>
              </div>
              <div
                style={{
                  position: "absolute",
                  width: "890.32px",
                  height: "64.82px",
                  left: "275.93px",
                  top: "759.72px",
                  border: "2.23512px dashed rgba(255, 255, 255, 0.6)",
                  boxSizing: "border-box",
                  borderRadius: "14.9008px",
                }}
              >
                <div
                  style={{
                    // "position": "absolute",
                    height: "44.7px",
                    left: "24.65%",
                    right: "66.46%",
                    top: "446.8px",
                    fontFamily: "Lato",
                    fontStyle: "normal",
                    fontWeight: "600",
                    fontSize: "18.626px",
                    lineHeight: "22px",
                    // textAlign: "center",
                    marginLeft: "80px",
                    marginTop: "15px",
                    letterSpacing: "-0.152394px",
                    color: "rgba(255, 255, 255, 0.6)",
                  }}
                >
                  <span
                    style={{
                      fontWeight: "bold",
                    }}
                  >
                    Provide url
                  </span>
                </div>
              </div>
              <div
                style={{
                  position: "absolute",
                  width: "150.5px",
                  height: "20.86px",
                  left: "275.93px",
                  top: "871.48px",
                  fontFamily: "Lato",
                  fontStyle: "normal",
                  fontWeight: "bold",
                  fontSize: "17.1359px",
                  lineHeight: "21px",
                  letterSpacing: "0.745039px",
                  color: "#FFFFFF",
                }}
              >
                <span
                  style={{
                    fontWeight: "bold",
                  }}
                >
                  Add Tags
                </span>
              </div>
              <div
                style={{
                  position: "absolute",
                  width: "890.32px",
                  height: "64.82px",
                  left: "276px",
                  top: "921.39px",
                  border: "2.23512px dashed rgba(255, 255, 255, 0.6)",
                  boxSizing: "border-box",
                  borderRadius: "14.9008px",
                }}
              >
                <div
                  style={{
                    // "position": "absolute",
                    height: "44.7px",
                    left: "24.65%",
                    right: "66.46%",
                    top: "446.8px",
                    fontFamily: "Lato",
                    fontStyle: "normal",
                    fontWeight: "600",
                    fontSize: "18.626px",
                    lineHeight: "22px",
                    // textAlign: "center",
                    marginLeft: "80px",
                    marginTop: "15px",
                    letterSpacing: "-0.152394px",
                    color: "rgba(255, 255, 255, 0.6)",
                  }}
                >
                  <span
                    style={{
                      fontWeight: "bold",
                    }}
                  >
                    Add Tags
                  </span>
                </div>
              </div>
              <span
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  padding: "7.45039px 7.45039px 7.45039px 14.9008px",
                  position: "absolute",
                  width: "84.4px",
                  height: "35.97px",
                  left: "275.93px",
                  top: "1011.54px",
                  background: "#D3AA4B",
                  borderRadius: "7.45039px",
                }}
              >
                Art
              </span>
              <span
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  padding: "7.45039px 7.45039px 7.45039px 14.9008px",
                  position: "absolute",
                  width: "120.4px",
                  height: "35.97px",
                  left: "390.93px",
                  top: "1011.54px",
                  background: "#D3AA4B",
                  borderRadius: "7.45039px",
                }}
              >
                CryptoCurrency
              </span>
              <span
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  padding: "7.45039px 7.45039px 7.45039px 14.9008px",
                  position: "absolute",
                  width: "120px",
                  height: "35.97px",
                  background:
                    "linear-gradient(180deg, #D3AA4B 0%, #B78513 100%)",
                  left: "560.93px",
                  top: "1011.54px",
                  background: "#D3AA4B",
                  borderRadius: "7.45039px",
                }}
              >
                TagTopicThree
              </span>

              <span
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  padding: "7.45039px 7.45039px 7.45039px 14.9008px",
                  position: "absolute",
                  width: "120px",
                  height: "35.97px",
                  left: "710.93px",
                  background:
                    "linear-gradient(180deg, #D3AA4B 0%, #B78513 100%)",
                  top: "1011.54px",
                  background: "#D3AA4B",
                  borderRadius: "7.45039px",
                }}
              >
                TagTopicFour
              </span>
              <span
                style={{
                  position: "absolute",
                  width: "1039.32px",
                  height: "60.99px",
                  left: "200.61px",
                  marginLeft: "80px",
                  marginTop: "15px",
                  top: "1136.99px",
                  background:
                    "linear-gradient(180deg, #D3AA4B 0%, #B78513 100%)",
                  borderRadius: "8.47038px",
                }}
              >
                <span style={{ marginTop: "100px" }}>Add Influencer</span>
              </span>
              <div style={{ marginBottom: "1000px" }}></div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
