import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { fetchNewsAction } from '../redux/Actions';
import NewsAPI from "../services/NewsAPI";
import NewsArticle from "./NewsArticle";

const News=()=> {
  const { news } = useSelector((state)=> state.news);
  const dispatch = useDispatch();

  const fetchNews = async () => {
		try {
			const data = await NewsAPI.getNews();
			dispatch(fetchNewsAction(data));
      
		} catch (error) {
			console.log(error.message);
		}
	};

	useEffect(() => {
		fetchNews();
	}, []);


  return (
    <div>
      <h1 className="head__text">D. News</h1>
      <div className="all__news">
        {news
          ? news.map((news) => (
              <NewsArticle data={news} key={news.url} />
            ))
          : "Loading"}
      </div>
    </div>
  );
}

export default News;