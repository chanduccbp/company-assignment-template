import {Redirect} from 'react-router-dom'
import Cookie from 'js-cookie'
import './index.css'

const Home = () => {
  const token = Cookie.get('jwt_token')

  if (token === undefined) {
    return <Redirect to="/login" />
  }

  return (
    <div className="home-cont">
      <h1>Welcome User!</h1>
    </div>
  )
}

export default Home
