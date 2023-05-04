import {React,useEffect, useState} from 'react';
import {Container, AppBar, Grid, Pagination, Grow, Typography} from '@material-ui/core'; 
import memories from './images/memories.png'
import Form from './components/Form/Form.js';
import Posts from './components/Posts/Posts.js';
import Post from './components/Posts/Post/Post.js';

import { getPosts } from './actions/posts';
import { useDispatch } from 'react-redux';

import useStyles from './styles.js';
function App() {
  const [currentId, setcurrentId] = useState(null);
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getPosts());
  },[dispatch])
  return (
      <Container maxwidth='lg'>

        <AppBar className={classes.appBar} color='inherit' position='static'>
          <Typography className={classes.heading} variant='h2' align='center'>Memories</Typography>
          <img className={classes.image} src={memories} alt="memories" height="60" width='40'/>
        </AppBar>

        <Grow in>
        <Container>
          <Grid className={classes.mainContainer} container justify-content="space-between" alignItems="stretch" spacing={3}>
            <Grid item xs={12} sm={7}>
              <Posts setcurrentId={setcurrentId} />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form currentId={currentId} setcurrentId={setcurrentId}/>
            </Grid>
          </Grid>
        </Container>
      </Grow>

      </Container>
    
  );
}

export default App;
