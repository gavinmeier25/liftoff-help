import React from 'react'
// import Button from 'antd/lib/button'
// import 'antd/lib/button/style/css'
import { Link } from 'gatsby'
import { Header } from '../Header'
import { Button, PageHeader, Icon } from 'antd'

const IndexPage = () => {
  return (
    <div align="center" style={{ padding: 80 }}>
      <p
        style={{
          color: 'cornflowerblue',
          fontSize: 50,
          fontWeight: 'bold',
        }}
      >
        Liftoff React Spring Boot Setup Guide
      </p>
      <h2>Helps you get up and going with basic app shells</h2>
      <br />
      <Button.Group size="large">
        <Button
          href="https://github.com/gavinmeier25/liftoff-help"
          target="_blank"
        >
          Github
          <Icon type="github" />
        </Button>
        <Button type="primary">
          <Link to="/docs/get-started/introduction">Get Started</Link>
        </Button>
      </Button.Group>
    </div>
  )
}

export default IndexPage
