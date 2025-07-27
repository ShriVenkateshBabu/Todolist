import {useRoutes} from 'react-router-dom'
import Header from './Components/Header/Header'
import SignUp from './Pages/SignUp'
import Footer from './Components/footer/Footer'
import Content from './Components/content/Content'
import Login from './Pages/Login/Login'
const App = () => {
  const routes = useRoutes([
    {path: '/signup', element: <SignUp/>},
    {path: '/login', element: <Login/>},
    {path: '/', element: <Content/>},

  ])
  return (
    <>
      <Header />
      {routes}
      <Footer />
    </>
  )
}

export default App