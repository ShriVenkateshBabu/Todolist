import './login.scss'
const Login = () => {
  return (
    <div className='login_container'>
      <form className='login_form'>
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" placeholder="Enter your username" />
        <label htmlFor="password">password</label>
        <input type="text" id="password" placeholder="Enter your password" />
      </form> 
    </div>
  )
}

export default Login