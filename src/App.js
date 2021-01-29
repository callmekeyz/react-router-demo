import Home from './componets/Home';
import About from './componets/About';
import Blog from './componets/Blog';
import { useState, useEffect} from 'react';
import axios from 'axios';

import {
  BrowserRouter as Router,
  Link,
  Switch,
  Route
} from 'react-router-dom';

function App() {
  const [data, setData] = useState({});

  useEffect(() => {
    axios.get('/api')
    .then((resp) => {
      console.log(resp.data);
      setData(resp.data);
    });
  }, []);

  async function getValue() {
    const resp = await axios.get('/api/counter');
    setData(resp.data);
  }

  async function incValue() {
    const resp = await axios.post('/api/counter');
    setData(resp.data);
  }

  async function decValue() {
    const resp = await axios.put('/api/counter');
    setData(resp.data);
  }

  async function resetValue() {
    const resp = await axios.delete('/api/counter');
    setData(resp.data);
  }

  

  return (
  <Router>
    <div className="App">

      <h1>Here is a message: {data.status}</h1>
      <header>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/blog">Blog</Link>
      </header>

      <Switch> 
        <Route path="/"exact>
          <Home />
          <p>data is: {data.value?data.value:0}</p>
          <button onClick={getValue}>get</button>
          <button onClick={incValue}>+</button>
          <button onClick={decValue}>-</button>
          <button onClick={resetValue}>reset</button>

        </Route>
        <Route path="/about">
          <About
          data={data.status}
          />
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
