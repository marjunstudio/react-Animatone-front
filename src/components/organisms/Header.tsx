import React, { useContext } from "react";

import logo from "../../assets/images/logo.png";
import { AuthContext } from "../../contexts/AuthContext";
import NaviBeforeLogin from "../molecules/Navigation/NaviBeforeLogin";
import NaviAfterLogin from "../molecules/Navigation/NaviAfterLogin";

const Header: React.FC = () => {
  const authContext = useContext(AuthContext);
  return (
    <div className="min-h-full">
      <nav className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <img className="h-12 w-auto" src={logo} alt="Animatone" />
              </div>
            </div>
            {/* TODO:ナビ呼び出しをもう少し考える */}
            {authContext?.isLoggedIn ? <NaviAfterLogin /> : <NaviBeforeLogin /> }
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;

