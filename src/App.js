import Home from './componets/Home';
import About from './componets/About';
import Blog from './componets/Blog';

import {
  BrowserRouter as Router,
  Link,
  Switch,
  Route
} from 'react-router-dom';

function App() {
  return (
  <Router>
    <div className="App">
      <header>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/blog">Blog</Link>
      </header>

      <Switch> 
        <Route path="/"exact>
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/blog">
          <Blog />
        </Route>
        
       
      </Switch>
    </div>
  </Router>
  );
}

export default App;
