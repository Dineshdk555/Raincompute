import React from 'react';
import PropTypes from 'prop-types'
import { withRouter } from "react-router-dom"
import Rain  from "assets/images/rain.png";
import Computing from "assets/images/computer.png"  
const NonAuthLayout = (props) => {
  return (

      <div style={{width:"100%",display:"flex",justifyContent:"space-between",columnGap:"30px"}}> 
      <div style={{marginLeft: "10%",marginTop:"5%"}}>
      {/* <img src={Rain}/> */}
      <div style={{marginLeft:"5%",marginTop:"25%"}}>
      <img src={Computing}/>
      </div>
      </div>
      <div style={{width:"50%"}}>
      {props.children}
      </div>
      </div>
     
  );
}

NonAuthLayout.propTypes = {
  children: PropTypes.any,
  location: PropTypes.object
}

export default withRouter(NonAuthLayout)
