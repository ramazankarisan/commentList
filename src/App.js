import './App.css';
import CommentList from './components/CommentList';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import CommentDetails from './components/CommentDetails';

function App() {

  return (

    <Router >

      <div className="main_wrapper">
        <header>

        </header>

        <div className="ui raised very padded text container segment">
          <Routes>
            <Route path="/" exact element={<CommentList />} />
            <Route path="/posts/:id" element={<CommentDetails />} />
          </Routes>

        </div >
      </div >


    </Router>
  );
}

export default App;
