import React from 'react';
import { useSelector } from 'react-redux';
import {Grid,CircularProgress} from '@material-ui/core'
import Post from './Post/Post.js';
import useStyles from './styles.js';
const Posts = ({setcurrentId})=>{
    const posts = useSelector((state)=>state.posts)
    const classes = useStyles();
    console.log(posts);
    return (
        !posts.length ? <CircularProgress /> : (
            <Grid className={classes.container} container alignItems="stretch" spacing={3}>
              {posts.map((post) => (
                <Grid key={post._id} item xs={12} sm={6} md={6}>
                  <Post post={post} setcurrentId={setcurrentId}/>
                </Grid>
              ))}
            </Grid>
          )
      );
}

export default Posts;

