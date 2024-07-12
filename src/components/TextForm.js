import React, { useState } from "react";

export default function TextForm(props) {
  const Upper = () => {
    //console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase", "Success");
  };

  const Lower = () => {
    //console.log("Uppercase was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
  };

  const Clear = () => {
    //console.log("Uppercase was clicked" + text);
    let newText = "";
    setText(newText);
  };

  const Title = () => {
    // Function to convert a sentence to title case
    const toTitleCase = (sentence) =>
      sentence
        .toLowerCase()
        .split(" ")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
    let newText = toTitleCase(text);
    setText(newText);
  };

  const Change = (event) => {
    //console.log("On change");
    setText(event.target.value);
  };

  const [text, setText] = useState("Enter The Text Here");

  return (
    <>
      <div>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={Change}
            style={{backgroundColor: props.mode === 'dark'?'black':'white', color : props.mode === 'dark'?'white':'black'}}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={Upper}>
          Convert to Upper Case
        </button>
        <button className="btn btn-primary mx-2" onClick={Lower}>
          Convert to Lower Case
        </button>
        <button className="btn btn-primary mx-2" onClick={Title}>
          Conver to Title Case
        </button>
        <button className="btn btn-primary mx-2" onClick={Clear}>
          Clear Text
        </button>
      </div>
      <div class="container my-3">
        <h1>Your text Summary</h1>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes to read</p>
        <h3>Preview</h3>
        <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
      </div>
    </>
  );
}
