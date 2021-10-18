import React from "react";
import { styled, alpha } from "@mui/material/styles";
import Button from "@mui/material/Button";

const ButtonStyles = styled("div")(({ theme }) => ({
  //   display: "flex",
  //   flexDirection: "row",
  //   justifyContent: "center",
  //   alignItems: "center",
  padding: "4px 41px",
  //   position: "absolute",
  //   width: "137px",
  //   height: "45px",
  left: "1058px",
  fontFamily: "Open Sans",
  fontStyle: "normal",
  fontWeight: "bold",
  fontSize: "18px",
  color: "black",
  textAlign: "center",
  //   top: "52px",
  backgroundColor: "#D3AA4B",
  borderRadius: "7px",
}));

function Buttons({ text }) {
  return (
    <div>
      <ButtonStyles>
        <Button color="inherit"> {text} </Button>
      </ButtonStyles>{" "}
    </div>
  );
}

export default Buttons;
