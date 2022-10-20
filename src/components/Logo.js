import React from 'react'
import logoImage from '../assets/logo.png';

const styles = {
    logoHeader: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      margin: "0 auto",
      width: "40rem",
    }
  }

function Logo() {
  return (
    <div style={styles.logoHeader}>
    <img src={logoImage}  alt="logo" id="logo" className="App-logo-spin" />
  </div>
  )
}

export default Logo