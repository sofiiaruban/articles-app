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
import { ArticleItem, ArticleItems } from "../types/types";
import { useDispatch } from "react-redux";
import { updateFilteredList, updateInputValue } from "../store/articleFilterSlice";
import { useTransition } from "react";
import { StatusMessage } from "../components/StatusMessage";

export const Home = () => {
  const {data, error, isLoading} = useGetArticlesQuery();
  const filteredList = useAppSelector((state: RootState) => state.filter.filteredList);
  const inputValue = useAppSelector((state: RootState) => state.filter.inputValue);
  const dispatch = useDispatch();

  if (isLoading) {
    return  (<StatusMessage message="Loading..."/>) 
  }

  if (error) {
    return (<StatusMessage message="Error while loading"/>) 
  }

  if (inputValue === "") {
    dispatch(updateFilteredList(data as ArticleItems));
  }

  const articleFilter = (key:any) => {
      return data ? data.filter(article => article[key as keyof ArticleItem].toLowerCase().includes(inputValue.toLowerCase())) : [];
  }

  const uniqueArticlesList = () => {
    let list = articleFilter("title").concat(articleFilter("summary"));
    let jsonArticles = list.map((article)=>JSON.stringify(article));

    return Array.from(new Set(jsonArticles)).map(article=> JSON.parse(article));
  }
  const inputChangeHandler = (event: { target: { value: string; }; }) => {
    dispatch(updateInputValue(event?.target.value));
    dispatch(updateFilteredList(uniqueArticlesList()));
  }
  

    return (
      <Container maxWidth="xl">
        <Box className={styles.container}>
          <Box className={styles.formControl}>
          <Typography className={styles.inputLabel} variant="body2">
          Filter by keywords
          </Typography>
          <TextField
            id="outlined-basic"
            className={styles.textInput}
            fullWidth
            onChange={inputChangeHandler}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon className={styles.searchIcon}/>
                </InputAdornment>
              ),
            }}
            variant="outlined"
            defaultValue={inputValue}
          />
          <Typography className={styles.results} mt={2} variant="body2">Results: {filteredList.length}</Typography>
          </Box>
          
          <Box sx={{ flexGrow: 1 }}>
            <Grid className={styles.articleList} container spacing={4}>
              {filteredList.map((article) =>
              <Grid item xs={12} sm={6} md={4} key={article.id} >
              <ArticleCard id={article.id}
                        title={article.title}
                        imgUrl={article.imageUrl}
                        summary={article.summary}
                        searchText={inputValue}
                        date={article.publishedAt}
                />
              </Grid>
              )}
            </Grid>
          </Box>
        </Box>
      </Container>
    )
}
