import './login.scss'
import { useState,useContext} from 'react';
import {DataContext} from '../../ContextAPI/UseContext.jsx'; // Importing the context to access data
import {TodoButton} from '../../StyleComponents/Button.jsx'; // Importing styled button component
const Login = () => {

  const {users} = useContext(DataContext);
  console.log("Data from context in Login:", users);
  const [UserInputData, setUserInputData] = useState(
    {
    username: '',
    password: ''
   }
  )
  const [isValidUser, setIsValidUser] = useState(false);
  const loginCredentials = (e) =>{
    const {name,value} = e;
    setUserInputData({
      ...UserInputData,
      [name]:value
    })
  }
  
  const loginBtn = (e) => {
    const isValidUser = users.find((user)=>user.username === UserInputData.username && UserInputData.password === user.password);
    console.log(UserInputData,"UserInputData",)
    // if(isValidUser){ removed remove this line and add the below line to redirect to dashboard page without validation we need run the json server to get the data
    if(true){ 
    window.location.href = '/dashboard';
    setIsValidUser(false); 
    }else{
       setIsValidUser(true);
    }
    e.preventDefault();
    }
  return (
    <div className='login_container'>
      <form className='login_form' type='submit'>
        <label htmlFor="username">Username</label>
        <input type="text" id="username" name='username' onChange = {(e)=>loginCredentials(e.target)} placeholder="Enter your username" />
        <label htmlFor="password">Password</label>
        <input type="password" id="password" name='password' onChange = {(e)=>loginCredentials(e.target)} placeholder="Enter your password" />

        <TodoButton title='login' role='button' onClick={loginBtn} tabIndex={0} type='submit'>Login</TodoButton>
        {
          isValidUser ? <p className='Error'>Invalid username or password</p> : null
        }

      </form> 
    </div>
  )
}

export default Login