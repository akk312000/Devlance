import { Link, useHistory, useLocation } from "react-router-dom";

//  <Link
//  to="/about"
//  style={{ color: "white", textDecoration: "none" ,position: "static",
//  width: "54px",
//  height: "25px",
//  left: "calc(50% - 54px/2 - 145px)",
//  top: "calc(50% - 25px/2)",
 
//  fontFamily: "Open Sans",
//  fontStyle: "normal",
//  fontWeight: "bold",
//  fontSize: "18px",
//  lineHeight: "25px",
//  /* identical to box height */
 
 
//  color: "#FFFFFF",
 
 
//  /* Inside Auto Layout */
 
//  flex: "none",
//  order: "0",
//  flexGrow: "0",
//  margin: "0px 63px"}}
// >
//  Home
// </Link>
// export default Link;
import React from 'react'

function Heading({title}) {
    return (
        <div>
            <Link
 to="/about"
 style={{ color: "white", textDecoration: "none" ,position: "static",
 width: "54px",
 height: "25px",
 left: "calc(50% - 54px/2 - 145px)",
 top: "calc(50% - 25px/2)",
 
 fontFamily: "Open Sans",
 fontStyle: "normal",
 fontWeight: "bold",
 fontSize: "18px",
 lineHeight: "25px",
 /* identical to box height */
 
 
 color: "#FFFFFF",
 
 
 /* Inside Auto Layout */
 
 flex: "none",
 order: "0",
 flexGrow: "0",
 margin: "0px 63px"}}
>
 {title}
</Link> 
        </div>
    )
}

export default Heading
