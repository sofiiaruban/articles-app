import React, { FC } from 'react';
import './App.scss';
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
    <div className="App">
      {JSON.stringify(data)}
      <Home/>
    </div>
  );
}

export default App;
