import {Route, Switch} from 'react-router-dom'
import LoginForm from './components/LoginForm'
import RegistrationForm from './components/RegistrationForm'
import Home from './components/Home'

import './App.css'

const App = () => (
  <Switch>
    <Route exact path="/login" component={LoginForm} />
    <Route exact path="/registration" component={RegistrationForm} />
    <Route exact path="/" component={Home} />
  </Switch>
)

export default App
