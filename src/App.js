import React,{useState} from "react";
import './App.css';
import axios from "axios";

function App() {
  let[meme,setmeme]=useState("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU4-uiNVupvlR8nyiZSO3VbRIgLHviJ4ZHUQ&usqp=CAU")
  let[value,setvalue]=useState(1);
  let[input,setinput]=useState();
  let[uppertext,setuppertext]=useState(" ");
  let[bottomtext,setbottomtext]=useState(" ");
  let[memevalue,setmemevalue]=useState();


  axios.get("https://api.imgflip.com/get_memes").then((res)=>{setmeme(res.data.data.memes[value].url)});
 
  axios.get("http://alpha-meme-maker.herokuapp.com/").then((res)=>{console.log(res)})
  
  console.log(Math.floor(Math.random()*10))
  return (
    <div className="App">
    <div>type a meme id between 0-100</div>
    <div><input className="input" type="number" placeholder="type a meme id between 0-100" onChange={(event)=>{setinput(event.target.value)}}></input><input type="submit" value="Generate" onClick={()=>{setvalue(input)}}></input><button onClick={()=>{setvalue(Math.floor(Math.random()*101))}}>Random</button></div>
    
    <div><input type="text" onChange={(event)=>{setmemevalue(event.target.value)}}></input></div>
    <div><button onClick={()=>{setuppertext(memevalue)}}>UpperText</button> <button onClick={()=>{setbottomtext(memevalue)}}>BottomText</button><button onClick={()=>{setuppertext("");setbottomtext("");}}>Clear</button></div>
    <div className="memes"><h2 className="uppertext">{uppertext}</h2> <img className="memepic" src={meme}></img> <h2 className="bottomtext">{bottomtext}</h2> </div>
    
  
    </div>
  );
}

export default App;
