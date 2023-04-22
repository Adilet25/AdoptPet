import React, { useEffect } from "react";
import { useAuth } from "../../../../contexts/AuthContextProvider";
import logo from "../../../../assets/navassets/Group 4 1.svg";
import msg from "../../../../assets/navassets/solar_letter-bold.svg";
import paw from "../../../../assets/navassets/solar_letter-bold-1.svg";

const Navbar = () => {
  const { handleLogout, user, checkAuth } = useAuth();

  useEffect(() => {
    if (localStorage.getItem("tokens")) {
      checkAuth();
    }
  }, []);

  return (
    <div className="flex flex-row h-10 w-full lg:w-[90vw]">
      <img src={logo} alt="" className="flex justify-start" />
      <div className="flex justify-end">
        <input type="Поиск" className="outline-1 outline rounded-3xl h-7 p-4" />
        <img src={msg} alt="" />
        <img src={paw} alt="" />
        <img
          src="https://thumbs.dreamstime.com/b/default-avatar-profile-vector-user-profile-default-avatar-profile-vector-user-profile-profile-179376714.jpg"
          alt=""
        />
      </div>
      <div className="hidden">
        {user ? (
          ((<p className="flex flex-row-reverse">{user}</p>),
          (
            <a href="#" onClick={handleLogout}>
              Log Out
            </a>
          ))
        ) : (
          <p className="flex flex-row-reverse">No auth user</p>
        )}
      </div>
    </div>
  );
};

export default Navbar;
