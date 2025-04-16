import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import Search from "./Search";

const Header = ({ includeSpacing = true }: { includeSpacing?: boolean }) => {
  return (
    <>
      <header className="bg-white fixed top-0 left-0 w-full z-10">
        <div className="container mx-auto p-4 flex flex-col md:flex-row items-center md:justify-between gap-4">
          <div className="flex justify-center md:justify-start">
            <Link to="/beneficios">
              <img
                src={logo}
                className="h-10 md:h-20 w-auto"
                alt="SportClub"
                onClick={() => {
                  window.scrollTo(0, 0);
                }}
              />
            </Link>
          </div>

          <div className="w-full md:w-auto">
            <Search />
          </div>
        </div>
      </header>
      {includeSpacing && <div className="h-24"></div>}
    </>
  );
};

export default Header;
