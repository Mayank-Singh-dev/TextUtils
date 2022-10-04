import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = (e) => {
    e.preventDefault()
    let newtext = text.toUpperCase()
    setText(newtext)
    props.showAlert(':Converted to Uppercase','success')
  }
  const handleLoClick = (e) => {
    e.preventDefault()
    let newtext = text.toLowerCase()
    setText(newtext)
    props.showAlert(':Converted to Lowercase','success')
  }
  const handleClear = (e) => {
    e.preventDefault()
    let newtext = ('')
    setText(newtext)
    props.showAlert(':Text Cleared ','success')
  }
  const handleCopy = (e) => {
    e.preventDefault()
    let newtext = document.getElementById("myBox")
    newtext.select()
    navigator.clipboard.writeText(newtext.value)
    props.showAlert(':Copied the text ','success')
  }
  const handleTitleClick = (e) => {
    e.preventDefault()
    let newtext = text.split(' ')
    .map(function (word, index) {
      return word.charAt(0)
        .toUpperCase() + word.slice(1)
        .toLowerCase();
    })
    .join(' ');
    setText(newtext)
    props.showAlert(':Converted to Titlecase','success')
  }
  const handleRemoveSpace = (e) => {
    e.preventDefault()
    let newtext = text.split(/[ ]+/)
    setText(newtext.join(' '))
    props.showAlert(':Extra spaces has been removed ','success')
  }
  const handleOnChange = (event) => {
    // console.log('On Change')
    setText(event.target.value)
  }

  const [text, setText] = useState("");
  return (
    <>
    <div className="container" style={{color:props.mode==='dark'?'white':'#042743'}}>
        <h1 >{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            style={{backgroundColor:props.mode==='dark'?'grey':'white', color:props.mode==='dark'?'white':'#042743'}}
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>
          Convert-to-uppercase
        </button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>
          Convert-to-Lowercase
        </button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleTitleClick}>
          Convert-to-TitleCase
        </button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleClear}>
          Clear text
        </button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleCopy}>
          Copy Text
        </button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleRemoveSpace}>
          Remove Extra Spaces
        </button>
    </div>
    <div className="container my-3" style={{color:props.mode==='dark'?'white':'#042743'}}>
        <h2>Your Text Summary</h2>
        <p>{text.split(' ').length} words and {text.length} character</p>
        <p>It would take around {0.008*text.split(' ').length} min to read </p>
        <h2>Preview</h2>
        <p>{text.length>0?text:'Enter your Text for preview'}</p>
    </div>
    </>
  );
}
