import React, {useState} from 'react'
import {useParams} from 'react-router-dom'

const WordWithStyle = () => {
    const {expression, color, background} = useParams()

    return (
        <div>
            <h1>Word With Style</h1>
            <h1 style={{color:color, backgroundColor:background}}>The Word Is: {expression}</h1>
        </div>
    )
}

export default WordWithStyle