import Typography from '@mui/material/Typography';


export const PublishedDate = ({date}: {date: string})=>{
    const monthList = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const fullDate=date;
    let year =fullDate.slice(0,4);
    let month = fullDate.slice(5,7);
    let day = fullDate.slice(8,10);

    return (
        <Typography  variant="body1">{`${monthList[(+month)-1]} ${day}th, ${year}`}</Typography>
    )
}