import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Create from './Create';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';

function App() {
  const link = 'https://www.youtube.com/watch?v=pnhO8UaCgxg&ab_channel=TheNetNinja'

  return (
    <Router>
      <div className="App">
        <Navbar/>
        <div className="content">
          <Switch>
            <Route exact path='/'>
              <Home/>
            </Route>
            <Route exact path='/create'>
              <Create/>
            </Route>
            <Route exact path='/blogs/:id'>
              <BlogDetails/>
            </Route>
            <Route path='*'>
              <NotFound/>
            </Route>
          </Switch>
          <div className="footer">
            <hr/>
            <a href={link}>All thanks to this chanel!</a>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
