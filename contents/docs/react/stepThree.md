---
title: Step 3
root: '/docs'
parents: ['React']
---

## Time for some Routes

### Next lets set up some routing

open App.jsx and replace the code with this

```jsx
import React from 'react'
import './App.css'
import { Routes } from './Router'

export default Routes
```

<h4><b>NOTE</b> we really don't need this file we could just import routes directly into index.jsx but I am lazy 🕺🏽 and did this 😂)</h4>

### Now create a file called Routes.jsx

We are using react router dom here to make routes available in our React App. We have it wrapped in a Router Component which is really a BrowserRouter we are just changing the name when we import it. We are importing some components from the pages directory that doesn't exist yet. Then we are wrapping it in our Layout, which we haven't made either.

```jsx
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Page1 from './pages/page1'
import Page2 from './pages/page2'
import Page3 from './pages/page3'
import Page4 from './pages/page4'
import Layout from './Layout'

export const Routes = () => {
  return (
    <Router>
      <Layout>
        <div style={{ marginTop: '100px' }}>
          <Route path="/" exact component={Page1} />
          <Route path="/page2" exact component={Page2} />
          <Route path="/page3" exact component={Page3} />
          <Route path="/page4" exact component={Page4} />
        </div>
      </Layout>
    </Router>
  )
}
```

### Now lets create the Layout component that will give our app styling on every page

We will use this to put the navbar on every page and pass through the children which is any JSX that is in between the component, if you look at the Layout example above you can see that the div and the routes are all children of Layout. These are being rendered where the word children below is.

```jsx
import React from 'react'
import { NavBar } from './NavBar'

export default ({ children }) => (
  <>
    <NavBar color={'secondary'} />
    {children}
  </>
)
```
