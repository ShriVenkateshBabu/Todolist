import "./header.scss";
import { useEffect, useState } from "react";
const Header = () => {
  const [toggleVisibility, setToggleVisibility] = useState(false);

  useEffect(() => {
    if (window.location.pathname === "/dashboard") {
      setToggleVisibility(true);
    } else {
      setToggleVisibility(false);
    }
  });
  function logout() {
    window.location.href = "/login";
  }
  return (
    <header>
      ToDoList
      {toggleVisibility && <button onClick={logout}>Logout</button>}
    </header>
  );
};

export default Header;
