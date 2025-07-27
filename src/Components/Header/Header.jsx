import './header.scss'
const Header = () => {
  function logout() {
     window.location.href = '/login'; // Redirect to login page
  }
  return (
    <header>ToDoList
    <button onClick={logout} >Logout</button>
    </header>
  )
}

export default Header