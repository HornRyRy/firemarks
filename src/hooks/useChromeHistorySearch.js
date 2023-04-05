/*global chrome*/
import { useState, useEffect } from 'react'

useEffect(() =>{
    chrome.history.search({ text: "", maxResults: 10 }, (data =>{
        console.log(data)
        
        
    }))
},[])