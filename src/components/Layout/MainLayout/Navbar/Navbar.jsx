import React, { useEffect } from "react";
import { useAuth } from "../../../../contexts/AuthContextProvider";

const Navbar = () => {

  const {handleLogout, user, checkAuth} = useAuth()

  useEffect(() => {
    if(localStorage.getItem('tokens')){
      checkAuth()
    }
  }, [])

  return <div>Navbar
    <div>
      {user ? (
        <p className="flex flex-row-reverse">{user}</p>,
        <a href="#" onClick={handleLogout}>Log Out</a>
      ) : (
        <p className="flex flex-row-reverse">No auth user</p>
      )}
    </div>
  </div>;
};

export default Navbar;
