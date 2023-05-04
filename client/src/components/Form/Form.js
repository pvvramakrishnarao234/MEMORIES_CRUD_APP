import {React, useState, useEffect} from 'react';
import useStyles from './styles.js';
import FileBase from 'react-file-base64'
import {TextField, Paper, Button, Typography} from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux';
import { createPost,updatePost } from '../../actions/posts.js';
const Form = ({currentId, setcurrentId})=>{
    const [postData, setpostData] = useState({creator:'',title:'',message:'',tags:'',selectedFile:''});
    const classes = useStyles();
    const post = useSelector((state)=>currentId ? state.posts.find((post)=> post._id===currentId) : null);
    const dispatch = useDispatch();
    useEffect(()=>{
        if(post)setpostData(post);
    },[post])
    const handleSubmit = (e)=>{
        e.preventDefault();
        if(currentId){
            dispatch(updatePost(currentId,postData));
        }
        else{
            dispatch(createPost(postData));
        }
    }
    const clear = ()=>{

    }
    return(
        <Paper className={classes.paper}>
            <form autoComplete='off' noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                <Typography variant='h6'>Creating A Memory</Typography>
                <TextField name='creator' variant='outlined' label="Creator" fullWidth value={postData.creator} onChange={(e)=>{setpostData({...postData,creator:e.target.value})}}/>
                <TextField name='title' variant='outlined' label="Title" fullWidth value={postData.title} onChange={(e)=>{setpostData({...postData,title:e.target.value})}}/>
                <TextField name='message' variant='outlined' label="message" fullWidth  multiline rows={4} value={postData.message} onChange={(e)=>{setpostData({...postData,message:e.target.value})}}/>
                <TextField name='tags' variant='outlined' label="tags (Comma Seperated)!" fullWidth value={postData.tags} onChange={(e)=>{setpostData({...postData,tags:e.target.value.split(',')})}}/>
                <div className={classes.fileInput}>
                    <FileBase type='file' multiple={false} onDone={({base64})=> setpostData({...postData, selectedFile:base64})}/>
                </div>
                <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
                <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
            </form>
        </Paper>
    )
}

export default Form;