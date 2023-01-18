import { Box, FormControl, InputAdornment } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import TextField from "@mui/material/TextField";
import Typography from '@mui/material/Typography';
import { SearchIcon } from "../assets/icons/SearchIcon";
import { ArticleCard } from "../components/ArticleCard";
import { useGetArticlesQuery } from "../services/articleApi";
import styles from './Home.module.scss';
import Grid from '@mui/material/Grid';
import Container from "@mui/system/Container";
import { useAppSelector } from "../store/hooks";
import { RootState } from "../store/store";

export const Home = () => {
  const {data, error, isLoading} = useGetArticlesQuery();
  const filteredList = useAppSelector((state: RootState) => state.filter.filteredList);
  const inputValue = useAppSelector((state: RootState) => state.filter.inputValue);

  if(isLoading) {
    return (<Typography>Loading...</Typography>) 
  }

  if(error) {
    return (<Typography> Error while loading</Typography>) 
  }

    return (
        <Container maxWidth="xl">
        <Box className={styles.formControl}>
        <InputLabel shrink htmlFor="outlined-basic">
        Filter by keywords
        </InputLabel>
        <TextField
          id="outlined-basic"
          className={styles.textInput}
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
        </Box>
        <Typography>Results: {data?.length}</Typography>
          <Box sx={{ flexGrow: 1 }}>
            <Grid className={styles.articleList} container spacing={4}>
            {data?.map((item) =>
              <Grid item xs={12} sm={6} md={4} key={item.id} >
                <ArticleCard id={item.id}
                            title={item.title}
                            imgUrl={item.imageUrl}
                            summary={item.summary}
                />
              </Grid>
            )}
            </Grid>
          </Box>
        </Container>
    )

}