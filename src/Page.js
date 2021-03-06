import axios from "axios";
import "./Page.css";
import { useEffect, useState } from "react";

export default function Page({ site, seconds }) {
  const [news, setNews] = useState("");
  const [page, setPage] = useState(0);

  
  const pageChange = (value) => {
    if (page === 9 && value === 1) {
      setPage(0);
    } else if (page === 0 && value === -1) {
      setPage(9);
    } else {
      setPage(page + value);
    }
  };

  useEffect(() => {
    const key = process.env.REACT_APP_NEWS_KEY;
    const url = `https://gnews.io/api/v4/search?q=${site}&lang=en&token=${key}`;
    const filterNews = async () => {
      const { data } = await axios.get(url);
      setNews(data.articles);
    };
    setTimeout(() => {
      filterNews();
    }, seconds * 4000);
    
  }, [site, seconds]);


  return (
    <div className="page">
      <img src={news.length ? news[page].image : ""} alt="" />
      <div className='info'>
      {news.length ? <a target='blank' className='urLink'href={news[page].url}><h6>{news[page].title}</h6></a> :
      <h1>Loading...</h1>}
        
        
        <div className="button-div">
          <button onClick={() => pageChange(-1)}>prev</button>
          <button onClick={() => pageChange(1)}>next</button>
        </div>
      </div>
    </div>
  );
}
