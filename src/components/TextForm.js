import React,{useState} from 'react'

export default function TextForm(props) {
    const handleUpClick=()=>{
        let newText=text.toUpperCase();
        setText(newText);
    }
    const handleOnChange=(event)=>{
        setText(event.target.value);
    }
    const[text,setText]=useState("Enter your text");
    
  return (
    <>
    <div className="container">
        <div className="mb-3">
            <label htmlFor="myBox" className="form-label">{props.title}</label>
            <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpClick}>Convert to UpperCase</button>
    </div>
    <div className="container my-3">
        <h2>Your text summary</h2>
        <p>{text.split(" ").length} words and {text.length} characters.</p>
        <p>{0.008*text.split(" ").length} minutes read.</p>
        <h4>Preview</h4>
        <p>{text}</p>
    </div>
    </>
  )
}
