import './login.scss'
const Login = () => {
  const loginBtn = (e) => {
    window.location.href = '/'
    e.preventDefault(); // Prevent the default form submission behavior
  }
  return (
    <div className='login_container'>
      <form className='login_form' type='submit'>
        <label htmlFor="username">Username</label>
        <input type="text" id="username" name='username' placeholder="Enter your username" />
        <label htmlFor="password">Password</label>
        <input type="password" id="password" name='password' placeholder="Enter your password" />
        <button onClick={loginBtn} type='submit'>Login</button>
      </form> 
    </div>
  )
}

export default Login