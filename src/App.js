// console.log("akhilesh reddy")
import React, { useState } from 'react'
import "./index.css";
import News from "./news";
import Nav from "./nav";
import {BrowserRouter,Link,Route} from "react-router-dom"
import Form from './form';
import randomItem from "./random.js";
const App = () => {
    const [keyword, setKeword] = useState("");
    const getData = (data) => {
        console.log("comming from ", data);
        setKeword(data);
    }

  return (
    <BrowserRouter>
    <>
              <Nav />
              <Form handleSubmit={getData} />
      <Route exact path="/"><News newsName={randomItem} /></Route>
              {keyword && <News newsName={keyword} />}
      <Route path="/Bolywood"><News newsName="bolywood" /></Route>
      <Route path="/Bitcoin"><News newsName="bitcoin" /></Route>
      <Route path="/Sports"><News newsName="sports" /></Route>
        <Route path="/Upsc"><News newsName="upsc" /></Route>
        <Route path="/Tesla"><News newsName="tesla" /></Route>
        
    </>
    </BrowserRouter>
  )
}

export default App