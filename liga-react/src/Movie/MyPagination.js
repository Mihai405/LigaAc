import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';



export function MyPagination({moviesPerPage , totalMovies , paginate , searchMovie}) {
    const useStyles = makeStyles((theme) => ({
        root: {
          '& > *': {
            marginTop: theme.spacing(2),
          },
        },
      }));
    const classes = useStyles();

    const [page, setPage] = useState(1);

    const onChangePage = (event , value) =>{
        paginate(value);
        setPage(value);
    }

    useEffect(
        ()=>{
            setPage(1);
        },[searchMovie]
    )

    return (
      <div className={classes.root}>
        <Pagination count={Math.ceil(totalMovies/moviesPerPage)} color="primary" page={page} onChange={onChangePage}/>
      </div>
    );
}