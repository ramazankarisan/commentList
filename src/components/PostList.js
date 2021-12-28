import React from 'react'
import { useState, useEffect } from 'react';
import moment from 'moment'
import axios from 'axios';
import { Link } from 'react-router-dom';

const PostList = () => {

  const [commentList, setCommentList] = useState([]);

  useEffect(() => {
    axios.get(`https://react-yazi-yorum.herokuapp.com/posts`)
      .then(response => setCommentList(response.data))
  }, []);

  return (
    <div className="ui relaxed divided list">
      {commentList.map(item => {
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
