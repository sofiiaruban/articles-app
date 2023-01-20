import  { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ArticleInfo } from './pages/ArticleInfo';
import { Home } from './pages/Home';
import { useSelector} from 'react-redux'
import { RootState } from './store/store';

const  App:FC = () => {
  const idValue = useSelector((state: RootState) => state.id.value);

  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="article/:id" element={<ArticleInfo id={idValue}/>}/>
      </Routes>
  )
}

export default App;
