import React,{useState} from 'react'
import '../App.css';
import Navbar from './Navbar';
export default function Textform(Props) {
  <Navbar/>
    const[text, settext] = useState('');
    const handleUpClick = () => {
    //    console.log("Upercase was clicked" + text);
       let newtext = text.toUpperCase();
       settext(newtext);
    }

    const handleLowClick = () => {
        //    console.log("Upercase was clicked" + text);
           let newtext = text.toLowerCase();
           settext(newtext);
        }


        const handlespaces =()=>{
            let newtext = text.trim();
            settext(newtext);
            };


        const handleClearClick = () => {
            //    console.log("Upercase was clicked" + text);
               let newtext = "";
               settext(newtext);
            }

        const speak = () => {
          let msg = new SpeechSynthesisUtterance();
           msg.text = text;
          window.speechSynthesis.speak(msg);
           }

         const reversed = () => {
          let splitWord = text.split("");
           let reverseWord = splitWord.reverse("");
           let joinedWords = reverseWord.join("");
           let newText = joinedWords
           settext(newText);
           };


          const handleOnChange = (event) => {
            // console.log("On change");
          settext(event.target.value);
          }

          const sort = () => {
            let sorting = text.split(" ");
            sorting = sorting.sort();
            let mem = "";
            for (let i of sorting) {
              mem += i + " ";
            }
            settext(mem);
          };

          const handleUndo = () => {
            settext((prevHistory) => {
              if (prevHistory.length > 0) {
                const lastState = prevHistory[prevHistory.length - 1];
                return prevHistory.slice(0, prevHistory.length - 1);
              }
              return prevHistory;
            });
          };

              
              

                const firstLetterCapital=()=>{
                const newText =text.charAt(0).toUpperCase() + text.substring(1);
                 settext(newText);
                   }
                 
                   const changeToPascalCase = () => settext(text.replace(/\w+/g, (w) => w[0].toUpperCase() + w.slice(1).toLowerCase()));



                   const onbold = () => {
                    const textBox = document.getElementById("mybox");
                    if (textBox.style.fontWeight === "bolder") {
                      textBox.style.fontWeight = "normal";
                    } else {
                      textBox.style.fontWeight = "bolder";
                    }
                    settext(textBox.value); // Assuming settext updates the state with the current text
                  };


                  const vowels = ["a", "e", "i", "o", "u"]

                  const vowelCheck = ()=>{
                   const count = text.match(/[aeiou]/gi).length;
                   settext("You have "+count + " no of vowels");
                   }

                   const [fontFamily, setFontFamily] = useState("Arial");
                   const handleFontClick = ()=>{
                       let newText = text;
                       setFontFamily(fontFamily === "Arial" ? "Courier New" : "Arial");
                       settext(newText);
                     }

                   const handleRepeat=()=>{
                    settext(text.repeat(2));
                     }
                     const copyToClipboard = () => {
                      navigator.clipboard.writeText(text)
                        .then(() => {
                          console.log(text + " copied ");
                        })
                        .catch((error) => {
                          console.error('Error copying text: ', error);
                        });
                    };
                    
                    
                      
                    // const handleLightTheme = () => {
                    //     document.querySelector('.body').style.backgroundColor = "white"
                    //   }
                    
                    //   const handleDarkTheme = () => {
                    //     document.querySelector('.body').style.backgroundColor = "black"
                    //     document.querySelector('.body').style.color = "white"
                        
                    //   }

  return (
    <>
    <div className='container my-4'>
     
   <h1>{Props.heading}</h1>
  <form>
  <div className="mb-4">
    <textarea className="form-control" value={text} onChange={handleOnChange} id="mybox" rows="10" style= {{backgroundColor : Props.mode === 'dark'?'black':'white',color:Props.mode === 'dark'?'white':'grey'}}></textarea>
  </div>
    <button id='btn15' type="button" className='btn btn-primary mx-2'onClick={handleUpClick}>Convert to UperCase Text</button>
    <button id='btn14' type="button" onClick={reversed} className="btn btn-warning mx-2 my-2">Covert to Reverse Text</button>
    <button id='btn13' type="button" className='btn btn-secondary 'onClick={handleLowClick}>Convert to LowerCase Text</button>
    <button id='btn12' type="button" className='btn btn-success mx-2'onClick={handleClearClick}>Clear Text</button>
    <button id='btn11' type="button" onClick={speak} className="btn btn-danger mx-2 my-2">Speak Text</button>
    <button id='btn10' type="button" onClick={handlespaces} className="btn btn-secondary mx-2 my-2">Handle Space Text</button>
    <button id='btn9' type="button" onClick={sort} className="btn btn-info mx-2 my-2">Sorted Text</button>
    <button id='btn8' type="button" onClick={handleUndo} className="btn btn-danger mx-2 my-2">Handle Undo Text</button>
    {/* <button type="button" onClick={handleReplaceclick} className="btn btn-dark mx-2 my-2">Handle Replace text</button> */}
    <button id='btn7' type="button" className='btn btn-primary mx-2'onClick={firstLetterCapital}>Convert to First Letter Capital</button>
    <button id='btn6' type="button" onClick={changeToPascalCase} className="btn btn-success
    mx-2 my-2">Change Text in Pascal Case</button>
    <button id='btn5' type="button" onClick={onbold} className="btn btn-dark mx-2 my-2">Handle Bold and Light Text</button>
    <button id='btn4' type="button" onClick={vowelCheck} className="btn btn-info mx-2 my-2">Check Vowels in Text</button>
    <button id='btn3'type="button" onClick={handleRepeat} className="btn btn-danger mx-2 my-2"> Repeat Text</button>
    <button id='btn2' type="button" onClick={handleFontClick} className="btn btn-secondary mx-2 my-2">Handle Font Text</button>
    <button id='btn1' type="button" className='btn btn-primary mx-2'onClick={copyToClipboard}>Copy To ClipBoard</button>

  </form>
    </div>
    <div className='container my-4'style={{color:Props.mode === 'dark'?'black':'grey'}}>
       <h1>Your Text Summary</h1>
       {/* text , split space gives and array which containing words having length */}
       <p>{ text.split(" ").length} and {text.length} characters</p>
       <p>{0.008 * text.split("").length}Minute Read</p>
       <h2>Preview</h2>
       {/*if we want preview */}
       <p>{text.length>0?text:"enter something in the textbox here to add somethin in the preview above it"}</p>
    </div>
    </>
  )
}
