/*global chrome*/

import { useState, useEffect } from "react";

const useFetch = (url) => {
    query: chrome.history.HistoryQuery
  const [historyItem, setHistoryItem] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [url]);

  return [data];
};

export default useFetch;