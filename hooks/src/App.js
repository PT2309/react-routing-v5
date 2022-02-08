import Home from './components/Home';
import Navbar from './components/Navbar';
import CreateBlog from './components/CreateBlog';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import BlogDetails from './components/BlogDetails';

// Templates
function App() {
  return (
    <Router>
      <div className="App">
          <Navbar />
          <div className="content">
            <Switch>
                <Route exact path='/'>
                  <Home></Home>
                </Route>
                <Route path='/create'>
                  <CreateBlog></CreateBlog>
                </Route>
                <Route path='/blogs'>
                    <BlogDetails></BlogDetails>
                </Route>
            </Switch>
          </div>
      </div>    
    </Router>      
  );
}

export default App;
