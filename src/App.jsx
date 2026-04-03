// import "./componenets/header/Header";
import Header from "./componenets/header/Header";
import NewsList from "./componenets/NewsList";
import { newsData } from "./utils/data";
import "./styles.css";
import { useState } from "react";


export default function App() {
  const [active, setActive]=useState(false);
 const [keywords, setKeywords] = useState('');
  const [news, setNews] = useState(newsData);

//  const onChangeHandler = (event) => {
//        const value = event.target.value === '' ? false : true;
//         setKeywords(event.target.value);
//         setActive(value);
//     }
//  const getKeywords = (event)=>{
//    let keywords=(event.target.value);
//    let filtered = newsData.filter(item =>{
//     return item.title.indexOf(keywords)>-1;
    
//    })
//    setNews(filtered)
//  }
const handleSearch =(event)=>{
  const value=event.target.value;

  setKeywords(value)
    setActive(value !== '')

  //   let filtered = newsData.filter(item =>{
  // item.title.toLowerCase().includes.(value.toLowerCase());
    
   const filtered = newsData.filter(item =>
  item.title.toLowerCase().includes(value.toLowerCase())
);
setNews(filtered);
}


  return(
    <>
    <Header  setKeywords={setKeywords}  setActive={setActive} active={active} handleSearch={handleSearch}/>
    <NewsList news={news}/>
    {/* getKeywords={getKeywords} keywords={keywords} */}
    </>
  )
}