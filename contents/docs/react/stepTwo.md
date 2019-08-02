---
title: Step 2
root: '/docs'
parents: ['React']
---

# Lets get some dependencies 🧐

Npm makes it easy for us to use other peoples code in our project which is sweet and nice. We are doing it already by running the React app.😬

We are going to grab them all (libraries we are going to use) at once because its easy, but we will go over each one briefly and I will give a little detail about each.

```npm install react-router-dom @material-ui/core @material-ui/core axios

```

## React Router 👥

We use this for routing our components as pages, this is what you might see in other projects you have done as an `<a href='/liftout'> Click Me </a>`

In React we could do that as well but since we are in a SPA we don't need to reload the page so we can just route them there without doing so 😃

Check out the docs if you want to learn more.

https://github.com/ReactTraining/react-router#readme

## Material UI 👨🏻‍🎨

Googles styled components, these are going to be building blocks of styled HTML for us.

https://material-ui.com/getting-started/installation/

## Ok 💯

Now lets get started 🚴🏼‍♀️

### First 😇

We need to add these link tag to the public/index.html in the head

These will give us the styling we need from Material UI 🎨

```
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />

```

```
<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />

```

### Ok now lets create a Navbar to have in our app 👋🏿

lets create a new file called NavBar.jsx

once we get there copy and paste this code into the file

```jsx

import React from 'react'
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom'
import { AppBar, Toolbar } from '@material-ui/core'

export const NavBar = ({ color }) => (
<AppBar color={color}>
<Toolbar>

<Link to="/">
<Button>Page One</Button>
</Link>
<Link to="/page2">
<Button>Page Two</Button>
</Link>
<Link to="/page3">
<Button>Page Three</Button>
</Link>
<Link to="/page4">
<Button>Page Four</Button>
</Link>
</Toolbar>
</AppBar>

```

Lets talk about this code a bit so first we are importing things at the top everything should be fine at this point. We grab React because we are writing JSX and its needed, then we grab Button, AppBar, ToolBar all from Material UI.

We could have imported Button the same way we imported AppBar and Toolbar because they come from the same package. The {} signify that its not the default export of the file `@material-ui/core`. If you notice where Button is being imported it is one directory more specific, `@material-ui/core/Button` which is what allows us to use the default import.

The rest of it is pretty straight forward we are exporting a functional component that is not the default export. We are naming it NavBar, it accepts color as a prop, we are applying the color prop to style the AppBar from `@material-ui/core` and then we are using react-router-dom to make Links.

The Link each take a prop `to` that we pass the url it needs to be directed to when its clicked.

Side note normally we wouldn't really need the buttons in the navbar and it is actually not GOOD to do so because these are links. It is mainly for accessibility standards regarding the web with screen readers etc. I just used them here because why not its a learning exercise.

# Don't worry if this breaks everything
