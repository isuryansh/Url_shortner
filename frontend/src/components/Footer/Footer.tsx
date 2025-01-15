import * as React from "react";
import { Link } from "react-router-dom";
import { FaInstagram } from "react-icons/fa";

interface IFooterProps {}

const Footer: React.FunctionComponent<IFooterProps> = () => {
  return (
    <div className="container mx-auto bottom-0 w-full">
      <div className="flex bg-slate-900 text-white text-base text-center justify-between px-4 py-3">
        <div>Copyright &#169;</div>
        <div> URLSHORTNER | SURYANSH</div>
        <div className="pr-8 flex text-center gap-1">
          <Link
            to="https://www.instagram.com/suryanshvaish_45/"
            target="_blank"
          >
            <FaInstagram className="mt-1.5 size-5" />
          </Link>
          <Link
            to="https://www.instagram.com/suryanshvaish_45/"
            target="_blank"
          >
            <div className="mt-1">Instagram</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
