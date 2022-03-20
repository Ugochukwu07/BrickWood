import React from "react";

const styles = {
    display: "inline-block",
    background: "#0d7fc3", 
    padding: "10px", 
    borderRadius: 15, 
    boxShadow: '2px 3px 4px #eeeeff' 
}

function Footer() {
    return(
        <footer>
            <h3 style={styles}>This is my footer</h3>
            <p style={{ fontSize: 20 }}>lorebackground: rgb(2,0,36);
                background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%);m
            </p>
        </footer>
    )
}

export default Footer