import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import Popup from 'reactjs-popup'
import './index.css'

const Home = props => {
  const token = Cookies.get('jwt_token_login')

  if (token === undefined) {
    return <Redirect to="/login" />
  }

  const onClickLogout = () => {
    Cookies.remove('jwt_token_login')
    const {history} = props
    history.replace('/login')
  }

  return (
    <div className="home-cont">
      <h1>Welcome User!</h1>
      <Popup
        modal
        trigger={
          <button className="logout-button" type="button">
            Logout
          </button>
        }
      >
        {close => (
          <div>
            <h1>Are you sure,you want to logout?</h1>
            <div>
              <button type="button" onClick={() => close()}>
                Cancel
              </button>
              <button type="button" onClick={onClickLogout}>
                Confirm
              </button>
            </div>
          </div>
        )}
      </Popup>
    </div>
  )
}

export default Home
