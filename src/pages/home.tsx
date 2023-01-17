import { InputAdornment } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import TextField from "@mui/material/TextField";
import Typography from '@mui/material/Typography';
import { SearchIcon } from "../assets/icons/SearchIcon";
import { ArticleCard } from "../components/ArticleCard";
import {useGetArticlesQuery} from '../services/articleApi';
import List from '@mui/material/List';

export const Home = () => {
  const {data, error, isLoading} = useGetArticlesQuery();

  if(isLoading) {
    return (<Typography>Loading...</Typography>) 
  }

  if(error) {
    return (<Typography> Error while loading</Typography>) 
  }

    return (
        <>
        <InputLabel shrink htmlFor="outlined-basic">
        Filter by keywords
        </InputLabel>
        <TextField
          id="outlined-basic"
          size="small"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
          variant="outlined"
        />
        <Typography>Results: 6</Typography>
        {data?.length}
        <List>{data?.map((item) => 
         <ArticleCard id={item.id}
                      key={item.id}
                      title={item.title}
                      imgUrl={item.imageUrl}
                      summary={item.summary}/>
              )}
        </List>
        </>
    )

}