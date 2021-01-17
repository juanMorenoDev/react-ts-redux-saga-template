import React from 'react'
import './HomeView.css'
import logo from '@assets/logo.svg'
import { Button } from '@material-ui/core'

const HomeView: React.FC = () => (
  <div className="home_container">
    <h1>
      This is a React Template with Typescript, redux, sagas and Material-ui
    </h1>
    <img src={logo} className="App-logo" alt="logo" />
    <Button variant="contained" color="secondary">
      matrial ui button
    </Button>
  </div>
)

export default HomeView
