import React, { useState } from 'react'

export default function Body(props) {
    const [text,setText] = useState("")
    const changeText = (e) => {
        setText(e.target.value)
    }
    const uppercase = () => {
        let newText = text.toUpperCase()
        setText(newText)
        props.showAlert("Converted to Uppercase","Success")
    }
    const lowercase = () => {
        let newText = text.toLowerCase()
        setText(newText)
        props.showAlert("Converted to Lowercase","Success")
    }
    const clear = () => {
        let newText = ""
        setText(newText)
        props.showAlert("Text cleared","Success")
    }
    const copyToClipboard = () => {
        window.navigator.clipboard.writeText(text)
        props.showAlert("Copied to clipboard","Success")
    }
    const removeExtraSpaces = () => {
        let newText = text.split(/[ ]+/)
        setText(newText.join(" "))
        props.showAlert("Extra spaces removed","Success")
    }
    return (
        <div className={`flex flex-col items-center justify-center`}>
            <div>
                <h1 className={`font-mono md:text-3xl text-${props.textColor} text-center`}>
                    Enter your text here:
                </h1>
                <textarea rows={10} cols={50} placeholder='Enter your text here' className='bg-teal-800 text-white rounded-lg p-3' value={text} onChange={changeText} ></textarea>
                <div>
                    <button></button>
                </div>
            </div>
            <div className='flex flex-wrap'>
                <button className='bg-purple-950 p-3 text-yellow-500 rounded-xl hover:bg-blue-800 mx-3 my-2' onClick={uppercase} >Click to Uppercase</button>
                <button className='bg-purple-950 p-3 text-yellow-500 rounded-xl hover:bg-blue-800 mx-3 my-2' onClick={lowercase} >Click to Lowercase</button>
                <button className='bg-purple-950 p-3 text-yellow-500 rounded-xl hover:bg-blue-800 mx-3 my-2' onClick={clear} >Click to Clear</button>
                <button className='bg-purple-950 p-3 text-yellow-500 rounded-xl hover:bg-blue-800 mx-3 my-2' onClick={copyToClipboard} >Copy to Clipboard</button>
                <button className='bg-purple-950 p-3 text-yellow-500 rounded-xl hover:bg-blue-800 mx-3 my-2' onClick={removeExtraSpaces} >Remove Extra Spaces</button>
            </div>
            <div className={`flex flex-col items-center text-${props.textColor}`}>
                <h1 className='font-mono font-bold text-2xl my-4'>Your Text Summary</h1>
                <p className=''>
                   {text.split(" ").length} words , {text.length} characters , {text.trim().split(/\n\s*\n/).length} paragraphs
                </p>
                <p>
                    Can be read in {0.008 * text.split("").length} minutes.....
                </p>
                <h2 className='font-mono font-bold text-2xl my-4'>Preview</h2>
                <p>
                    {text}
                </p>
            </div>
        </div>
    );
}
