import React, {useState} from 'react' 
import {useParams} from 'react-router-dom'

const About = () => {
    const {variable} = useParams()

    return (
        <div>
            <h1>About</h1>
            {
                isNaN(variable)?
                <h1>The Word Is: {variable}</h1>:
                <h1>The Number Is: {variable}</h1>
            }
        </div>
    )
}

export default About 