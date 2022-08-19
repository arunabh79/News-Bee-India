
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
// import "./index.css";
// import News from "./news";
// import Nav from "./nav";
// import {BrowserRouter,Route} from "react-router-dom"
// import Form from './form';
// import randomItem from "./random.js";

const Form = (props) => {
    const [search, setSearch] = useState("");
  const handleChange = (e) => {
    setSearch(e.target.value);
    console.log(search);
  }
  const handleSubmit = (event) => {
    event.preventDefault();
      props.handleSubmit(search);


    };

  return (
    <form onSubmit={handleSubmit}>
    <div class="input-group items-center text-base justify-center ">
    <div class="form-outline flex flex-wrap items-center text-base justify-center">
      <input type="search" id="form1" class="form-control flex flex-wrap items-center text-base justify-center" onChange={handleChange}/>
       </div>
       
       {/* <button type="button" class="btn btn-primary justify-center text-base">
                <i class="fas fa-search justify-center items-center">Search</i>
       </button> */}
             <button className='btn btn-danger'>Search</button>
    </div> 
</form>
  )
}

export default Form;