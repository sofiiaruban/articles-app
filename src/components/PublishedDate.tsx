import Typography from '@mui/material/Typography';


export const PublishedDate = ({date}: {date: string})=>{
    const monthList = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    let year = date.slice(0,4);
    let month = date.slice(5,7);
    let day = date.slice(8,10);

    return (
        <Typography  variant="body1">{`${monthList[(+month)-1]} ${day}th, ${year}`}</Typography>
    )
}