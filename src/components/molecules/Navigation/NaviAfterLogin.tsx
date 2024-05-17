import React from "react";

import LogoutButton from "../../atoms/Button/LogoutButton";

const NaviAfterLogin: React.FC = () => {
  return (
    <div className="hidden md:block">
      <div className="flex items-center space-x-5 md:ml-6">
        <LogoutButton />
      </div>
    </div>
  );
};

export default NaviAfterLogin;

