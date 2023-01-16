import Box from '@mui/material/Box';
import React, { FC } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import styles from './App.module.scss';
import { ArticleInfo } from '/pages/ArticleInfo';
import { Home } from './pages/Home';
//import { useGetArticleByIdQuery, useGetArticlesQuery } from './services/articleApi';


const  App:FC = () => {
  return (
    <Box className={styles.box}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="article/:id" element={<ArticleInfo/>}/>
      </Routes>
    </Box>
  );
}

export default App;
