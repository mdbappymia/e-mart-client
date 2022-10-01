import { useState, useEffect, FC } from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  IconButton,
  Input,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartPlus,
  faCircleXmark,
  faHeart,
  faMagnifyingGlass,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

const MainNav: FC = () => {
  const [openNav, setOpenNav] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="relative mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 ">
      <div className="home_nav">
        <Typography
          as="li"
          variant="small"
          color="blue-gray"
          className="p-1 font-normal"
        >
          <Link to="/" className="flex items-center">
            Home
          </Link>
        </Typography>
        <ul className="absolute bg-gray-300 home_drop hidden">
          <li className="pr-10 pl-5 hover:bg-gray-200 py-2">Home 1</li>
          <li className="pr-10 pl-5 hover:bg-gray-200 py-2">Home 2</li>
          <li className="pr-10 pl-5 hover:bg-gray-200 py-2">Home 3</li>
          <li className="pr-10 pl-5 hover:bg-gray-200 py-2">Home 4</li>
          <li className="pr-10 pl-5 hover:bg-gray-200 py-2">Home 5</li>
        </ul>
      </div>
      <div className="shop_nav">
        <Typography
          as="li"
          variant="small"
          color="blue-gray"
          className="p-1 font-normal"
        >
          <NavLink to="/" className="flex items-center">
            Shop
          </NavLink>
        </Typography>
        <ul className="absolute bg-gray-300 shop_drop hidden">
          <li className="pr-10 pl-5 hover:bg-gray-200 py-2">Shop page 1</li>
          <li className="pr-10 pl-5 hover:bg-gray-200 py-2">Shop page 2</li>
          <li className="pr-10 pl-5 hover:bg-gray-200 py-2">Shop page 3</li>
          <li className="pr-10 pl-5 hover:bg-gray-200 py-2">Shop page 4</li>
          <li className="pr-10 pl-5 hover:bg-gray-200 py-2">Shop page 5</li>
        </ul>
      </div>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <NavLink to="/" className="flex items-center">
          Pages
        </NavLink>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <NavLink to="/" className="flex items-center">
          About
        </NavLink>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <NavLink to="/" className="flex items-center">
          Blog
        </NavLink>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <NavLink to="/" className="flex items-center">
          Contact
        </NavLink>
      </Typography>
    </ul>
  );

  return (
    <Navbar className="z-50 px-4 lg:px-8 lg:py-4 mx-0 max-w-full rounded-none relative">
      <div className=" mx-auto flex items-center justify-between text-blue-gray-900">
        <Typography
          as="a"
          href="#"
          variant="small"
          className="mr-4 cursor-pointer py-1.5 font-normal"
        >
          <span className="font-bold uppercase text-2xl">E-Mart</span>
        </Typography>
        <div className="hidden lg:block">{navList}</div>
        <div className="gap-4 hidden lg:flex">
          <div className="relative">
            <IconButton>
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                onClick={() => setShowSearch(!showSearch)}
              />
            </IconButton>
            {showSearch === true && (
              <div className="flex absolute items-center p-3 bg-gray-500 rounded-lg">
                <Input
                  label="Search Item"
                  className="bg-gray-500"
                  icon={
                    <FontAwesomeIcon
                      icon={faCircleXmark}
                      onClick={() => setShowSearch(false)}
                      className="cursor-pointer"
                    />
                  }
                />
              </div>
            )}
          </div>
          <IconButton variant="gradient">
            <FontAwesomeIcon icon={faHeart} />
          </IconButton>
          <IconButton variant="outlined">
            <FontAwesomeIcon icon={faCartPlus} />
          </IconButton>
          <IconButton variant="text">
            <FontAwesomeIcon icon={faUser} />
          </IconButton>
        </div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </IconButton>
      </div>
      <MobileNav open={openNav}>
        {navList}
        <div className="flex gap-4">
          <IconButton>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </IconButton>
          <IconButton variant="gradient">
            <FontAwesomeIcon icon={faHeart} />
          </IconButton>
          <IconButton variant="outlined">
            <FontAwesomeIcon icon={faCartPlus} />
          </IconButton>
          <IconButton variant="text">
            <FontAwesomeIcon icon={faUser} />
          </IconButton>
        </div>
      </MobileNav>
    </Navbar>
  );
};
export default MainNav;
