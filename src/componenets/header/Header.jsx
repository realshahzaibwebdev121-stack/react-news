// import { useState } from "react";
import Nav from "./Nav";

export default function Header({handleSearch,active}) {
//  const onChangeHandler = (event) => {
//         // return console.log(event.target.value);
//        const value = event.target.value === '' ? false : true;  // to fix the issue of color chnage this has been passed as a prop here now the entire function is shifted to app.jsx so here it is called
//         setKeywords(event.target.value);
//         setActive(value);
//     }

// const handleClick=()=>{
//     return console.log("clikced");
// }                
//     function handleClick(){
//   return console.log("clikced");
//     }
return (
    <>
    <header style={{background:`${active ? "red":"pink"}`}}>
    <div className="logo">
    {/* //  onClick={handleClick}
    // onPointerEnter={()=> console.log("Pointer enter")} */}
        Awesome News</div>
    <input type="text"
    onChange={handleSearch}
    onFocus={()=> console.log('Focused')}
    onBlur={()=> console.log('Blurred')}
    />
    {/* <p>The Keywords are:{keywords}</p> */}
  <Nav/>
    </header>
    </>
);
  
}