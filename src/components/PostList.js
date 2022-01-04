import React from 'react'
import { useEffect } from 'react';
import moment from 'moment'

import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { bringPostList } from '../store/actions/postActions.js';

const PostList = () => {
  const dispatch = useDispatch();
  const postList = useSelector(state => state.post.postList)


  useEffect(() => {
    dispatch(bringPostList())
  }, []);

  return (
    <div className="ui relaxed divided list test">
      <Link to="/postadd" className='ui primary button'>Add Post</Link>
      {postList.map(item => {
        return (
          <div className="item" key={item.id} >
            <i className="large github middle aligned icon"></i>
            <div className="content" >
              <Link to={`/posts/${item.id}`} className="header" > {item.title}</Link >
              <div className="description" > {moment(item.created_at).format('MMMM Do YYYY, h:mm:ss a')}</div>
            </div>
          </div>

        )
      })}
    </div>
  )
}

export default PostList
