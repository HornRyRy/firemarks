/*global chrome*/
import React from "react";
import HistoryItem from "./HistoryItem";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";







const HistoryItemList = () => {
  const [url, setUrl] = useState("");

  const dummyHistory = [
    "imgur.com",
    "espn.com",
    "udemy.com",
    "youtube.com",
    "developer.chrome.com",
];

// useEffect(() =>{
//     chrome.history.search({ text: "", maxResults: 10 }, (data =>{
//         console.log(data)
        
//     }))
// },[])



const handleShowDummyHist = (e) =>{
    return(console.log("Show Dummy History button pressed"))
  }

const historyItems = dummyHistory.map((website) => {
    <HistoryItem url={url} setUrl={setUrl} />;
});

const handleShowHist = (e) =>{
    return(console.log("Show (real) history button pressed!"))

}

  return <div>
    <h2>History Items</h2>
    <p>Back to Login Page <Link to='/'>Log in</Link></p>
    <h3>The below button shows the last 10 history urls</h3>
    <button onClick={handleShowDummyHist}> Show Dummy History </button>
    {historyItems}

    <div>
    <button onClick={handleShowHist}>Show Real History</button>
    </div>


    </div>;


};


export default HistoryItemList;

