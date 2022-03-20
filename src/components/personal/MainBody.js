import React from "react";

function MainBody(){
    const firstName = "Ugochukwu"
    const lastName = "Ekwueme"

    const date = new Date()
    const hours = date.getHours()
    let timeOfDay
    if(hours < 12){
        timeOfDay = "morning"
    }else if(hours >= 12 && hours < 17){
        timeOfDay = "afternoon"
    }else{
        timeOfDay = 'night'
    }
    return (
        <main className="main">
            <h1>This is the title {firstName + " " + lastName} of main body</h1>
            <h1>This is the title {`${firstName} ${lastName}`} of main body</h1>
            <p>This is currently { timeOfDay} hours</p>
            <p>lorem 2 efit igno amaka isi aosos sosos sosos sks sid</p>
            <p>Lorem hjd skks sksks skmsosm sksoms snsns skmsosm</p>
        </main>
    )
}

export default MainBody