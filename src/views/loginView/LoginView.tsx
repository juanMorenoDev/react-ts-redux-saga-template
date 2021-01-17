import React from 'react'
import TextField from '@material-ui/core/TextField'
import './LoginView.css'

const LoginView: React.FC = () => (
  <div className="login_container">
    <TextField id="email" label="email" />
  </div>
)

export default LoginView
