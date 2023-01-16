import Box from '@mui/material/Box';
import React, { FC } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import styles from './App.module.scss';
import { ArticleInfo } from './pages/articleInfo';
import { Home } from './pages/home';
import { useGetArticleByIdQuery, useGetArticlesQuery } from './services/articleApi';

const  App:FC = () =>{
  const id: number = 17895;
  const {data, error, isLoading} = useGetArticleByIdQuery(id); 

  if (isLoading) {
    return (
      <div>
        Feed loading...
      </div>
    )
  }
  if (error) {
    return (
      <div>
        Error while loading feed
      </div>
    )
  }
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="article/:id" element={<ArticleInfo/>}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
