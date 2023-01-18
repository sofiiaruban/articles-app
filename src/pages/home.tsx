import { Grid, InputAdornment } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import TextField from "@mui/material/TextField";
import Typography from '@mui/material/Typography';
import { SearchIcon } from "../assets/icons/SearchIcon";
import { ArticleCard } from "../components/ArticleCard";
import { useGetArticlesQuery } from "../services/articleApi";
import styles from './Home.module.scss';

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
          fullWidth
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
          variant="outlined"
        />
        <Typography>Results: {data?.length}</Typography>
        <Grid className={styles.articleList} container columns={{ xs: 4, sm: 8, md: 12 }} item={true}>
        {data?.map((item) =>
            <Grid xs={2} sm={4} md={4} key={item.id}>
                <ArticleCard id={item.id}
                            title={item.title}
                            imgUrl={item.imageUrl}
                            summary={item.summary}
                />
            </Grid>
        )}
        </Grid>
        </>
    )

}