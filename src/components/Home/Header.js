import React from "react";
import Icon from "../Icon";
import timeIcon from "../../icons/time.svg";
import pinIcon from "../../icons/pin.svg";
import facebookIcon from "../../icons/facebook.svg";
import twitterIcon from "../../icons/twitter.svg";
import pinterestIcon from "../../icons/pinterest.svg";
import linkedinIcon from "../../icons/linkedin.svg";

function Header() {
  return (
    <header className="flex justify-between w-full px-6 py-2 text-sm font-semibold text-gray-100 bg-secondary">
      <div className="flex">
        <div className="flex items-center">
          <Icon icon={timeIcon} className="w-3 h-3 mr-2 text-primary" />
          Monday - Friday
        </div>
        <div className="flex items-center ml-2 text-gray-400">8AM - 9PM</div>
        <div className="flex items-center ml-4">
          <Icon icon={pinIcon} className="w-3 h-3 mr-2 text-primary" />
          Offices{" "}
          <span className="ml-2 text-gray-400">
            {" "}
            Bloomsbury Square, London WC1B 4EA
          </span>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="mr-3">Visit our social pages</div>
        <div className="flex justify-center text-primary">
          <a href="#" className="flex items-center justify-center">
            <Icon icon={facebookIcon} className="w-3 h-3 mx-2" />
          </a>
          <a href="#" className="flex items-center justify-center">
            <Icon icon={twitterIcon} className="w-3 h-3 mx-2" />
          </a>
          <a href="#" className="flex items-center justify-center">
            <Icon icon={pinterestIcon} className="w-3 h-3 mx-2" />
          </a>
          <a href="#" className="flex items-center justify-center">
            <Icon icon={linkedinIcon} className="w-3 h-3 mx-2" />
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
