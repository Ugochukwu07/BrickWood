import React from "react";

export default function Header(){
    const styles = {
        height: "40px"
    }
    return(
        <div className="col-md-6 col-12 mx-auto bg-primary p-2" style={styles}>
            <p>This is the header</p>
        </div>
    )
}