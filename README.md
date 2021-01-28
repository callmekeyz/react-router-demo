### React Router Example
Initial set up. After creating React app, need to install react-router-dom to build router components.

- npx create-react-app router-example
- cd router-example
- npm install react-router-dom
- mkdir src/components
- npm start/yarn start

## What do I import?

import { 
  BrowserRouter as Router,
  Link,
  Switch,
  Route
} from 'react-router-dom';

# How do I create "pages" with react router?
   Create some components, for example:

* Home
* About
* Stuff

# How do I use the Router?
Wrap your entire App with it.

    <Router>
      <div className="App">

        <Home />
        <Stuff />
        <About />

      </div>
    </Router>
# How do I create a nav with react router?
      <header>
        <Link to="/">Home</Link>
        <Link to="/stuff">Stuff</Link>
        <Link to="/about">About</Link>
      </header>