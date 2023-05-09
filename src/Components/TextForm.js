import React, {useState} from 'react'

export default function TextForm(props) {

  const handleUpClick = () => {
    // console.log("uppercase was clicked");
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase","success");
  }
  const handleLoClick = () => {
    // console.log("uppercase was clicked");
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase","success");
  }
  const handleReverse = () => {
    let reversedText = text.split("").reverse().join("");
    setText(reversedText);
    props.showAlert("String reversed successfully","success");
  }
  const handleCopy = () => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    document.getSelection().removeAllRanges();
    props.showAlert("Text copied successfully","success");
  }
  const handleSpaces = () => {
    // eslint-disable-next-line
    let newText = text.split(/[  ] +/);
    setText(newText.join(" "))
    props.showAlert("Spaces removed successfully","success");
  }

  const handleOnChange = (event) => {
    // console.log("on change");
    setText(event.target.value);
  }

  const[text, setText] = useState('');
  // setText("Jain");
  return (
    <>

    {/* upper  */}



    <div className="container" style={{color: props.mode ==='dark'?'white':'#042743'}}>
        <h2 className='mb-4'>{props.heading}</h2>


        {/* textarea */}

        <div class="mb-3">
          <textarea className="form-control" value = {text} onChange={handleOnChange} style={{backgroundColor: props.mode ==='dark'?'#13466e':'white' ,color: props.mode==='dark'?'white':'#0422743' }} id="myBox" rows="8"></textarea>
        </div>


        {/* buttons */}
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleUpClick}> Convert to UpperCase </button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleLoClick}> Convert to LowerCase </button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleReverse}> Reverse the string </button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleCopy}> Copy the text </button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleSpaces}> Remove the spaces </button>



    </div>


    {/* bottom */}


    <div className="container my-3" style={{color: props.mode ==='dark'?'white':'#042743'}}>
      <h1>Your text summary</h1>
      <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
      <p> {0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} minuters to read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Nothing to preview"}</p>
    </div>
    </>
  )
}