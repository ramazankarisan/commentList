import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import PostList from './components/PostList';
import PostDetails from './components/PostDetails';
import PostAdd from './components/PostAdd';
import PostEdit from './components/PostEdit';

function App() {

  return (

    <Router >

      <div className="main_wrapper">
        <header>

        </header>

        <div className="ui raised very padded text container segment">
          <Routes>
            <Route path="/" exact element={<PostList />} />
            <Route path="/posts/:id" element={<PostDetails />} />
            <Route path="/postadd" element={<PostAdd />} />
            <Route path="/posts/:id/edit" element={<PostEdit />} />
          </Routes>

        </div >
      </div >


    </Router>
  );
}

export default App;
