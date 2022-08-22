import './App.css';
import React,{useEffect, useState} from 'react';
import axios from 'axios';


function App() {
  const [image,setImages] = useState('')

  const handleChange = () =>{
    axios.get('https://api.generated.photos/api/v1/faces?api_key=ifZMArBq3pNTlgN_PHa7Pw&order_by=random')
    .then(res=>{
      const uri = res.data.faces[0].urls[4][512]
      uri && setImages(uri)
    })
    .catch(err=>{console.log(err.message)
    })
  }


  return (
    <div className="App">
   <h1>AI Photo Generator</h1>
   {image && <img src={image} alt="AI Face" />}

   <button type='button' onClick={handleChange}>New Image</button>
    </div>
  );
}

export default App;
