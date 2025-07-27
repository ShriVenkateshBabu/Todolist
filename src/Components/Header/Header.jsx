import './header.scss'
const Header = () => {
  function Logout() {
    window.location.href = '/signup';
  }
  return (
    <header>ToDoList
    <button onClick={Logout}>Logout</button>
    </header>
  )
}

export default Header