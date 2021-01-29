import React from 'react';


function About (props) {
    return(
        <>
        <h1>About me!</h1>
        <h2>{props.data}</h2>
        </>
    );
}


export default About;