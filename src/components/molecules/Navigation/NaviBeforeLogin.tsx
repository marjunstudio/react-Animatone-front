import React from "react";

import PrimaryButton from "../../atoms/Button/PrimaryButton";
import SecondaryButton from "../../atoms/Button/SecondaryButton";
import { Link } from "react-router-dom";

const NaviBeforeLogin: React.FC = () => {
  return (
    <div className="hidden md:block">
      <div className="flex items-center space-x-5 md:ml-6">
        <PrimaryButton text="新規登録" />
        <Link to="/login">
          <SecondaryButton text="ログイン" />
        </Link>
      </div>
    </div>
  );
};

export default NaviBeforeLogin;

