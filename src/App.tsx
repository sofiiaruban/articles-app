import Box from '@mui/material/Box';
import React, { FC } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import styles from './App.module.scss';
import { ArticleInfo } from './pages/ArticleInfo';
import { Home } from './pages/Home';
import { useSelector} from 'react-redux'
import { RootState } from './store/store';

const  App:FC = () => {
  const idValue = useSelector((state: RootState) => state.id.value);

  return (
    <Box className={styles.box}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="article/:id" element={<ArticleInfo id={idValue}/>}/>
      </Routes>
    </Box>
  );
}

export default App;
