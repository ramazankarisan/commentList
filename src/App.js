import { useEffect, useState } from 'react';
import axios from 'axios'
import './App.css';
import moment from 'moment'

function App() {

  const [commentList, setCommentList] = useState([]);


  useEffect(() => {
    axios.get(`https://react-yazi-yorum.herokuapp.com/posts`)
      .then(response => setCommentList(response.data))
  }, []);



  return (

    // header
    // postlist

    <div className="main_wrapper">
      <header>

      </header>

      <div className="ui raised very padded text container segment">
        <div className="ui relaxed divided list">

          {commentList.map(item => {
            return (<div className="item" key={item.id}>
              <i className="large github middle aligned icon"></i>
              <div className="content" >
                <a className="header" > {item.title}</a >
                <div className="description" > {moment(item.created_at).format('MMMM Do YYYY, h:mm:ss a')}</div >
              </div >
            </div >)
          })}


        </div >
      </div >
    </div >



  );
}

export default App;
