import {Component} from 'react'
import Logout from './Logout'
import Message from './Mesaage'
import Login from './Login'


class Home extends Component{
  state = {isLoggedIn:true}

  onClickLink =  () =>{
    this.setState(prevState=>({isLoggedIn: !prevState.isLoggedIn}))
  }


render() {

  const{isLoggedIn} = this.state

  return (
   <>
   
   <Message isLoggedIn={isLoggedIn} />
          {isLoggedIn ? (
            <Logout onClickLogout={this.onClickLink} />
          ) : (
            <Login onClickLogin={this.onClickLink} />
          )}
   </>
            
          
          
          
  );

};
};
export default Home