import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineSearch } from "react-icons/ai";
// import Home from "/components/Home";

const Header = () => {
  const [showDrawer, setShowDrawer] = useState(false);
  const [showFormDrawer, setShowFormDrawer] = useState(false);
  const [isScreenSmall, setIsScreenSmall] = useState(false);
  const [isScreenTooSmall, setIsScreenTooSmall] = useState(false);

  const toggleDrawer = () => {
    setShowDrawer(!showDrawer);
    console.log(showDrawer);
  };

  const toggleFormDrawer = () => {
    setShowFormDrawer(!showFormDrawer);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsScreenSmall(window.innerWidth <= 1280);
    };
    handleResize();

    window.addEventListener("resize", handleResize);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const handleSmallResize = () => {
      setIsScreenTooSmall(window.innerWidth <= 1000);
    };
    handleSmallResize();

    window.addEventListener("resize", handleSmallResize);
    window.addEventListener("resize", handleSmallResize);

    return () => {
      window.removeEventListener("resize", handleSmallResize);
    };
  }, []);

  return (
    <div>
      <div className="maindiv">
        <nav>
          {isScreenSmall && (
            <button className="drawer-button" onClick={toggleDrawer}>
              <GiHamburgerMenu className="hamburger" />
            </button>
          )}

          <h1>
            <Link to={"/"} className="header-link">
              anime
              <br />
              stats
            </Link>
          </h1>

          {!isScreenSmall && (
            <main className="main-nav">
              <HashLink to={"/#genres"}>Genres</HashLink>
              <Link to={"/types"}>Types</Link>
              <HashLink to={"/#newest"}>Newest</HashLink>
              <HashLink to={"/#updated"}>Updated</HashLink>
              <Link to={"/added"}>Added</Link>
            </main>
          )}

          {isScreenTooSmall && (
            <button className="search-button" onClick={toggleFormDrawer}>
              <AiOutlineSearch className="search-icon" />
            </button>
          )}

          {!isScreenTooSmall && (
            <form>
              <div className="search-bar-large">
                <input
                  type="search"
                  className="search-bar-large"
                  placeholder="Search your anime..."
                  dir="ltr"
                />
                <input
                  type="submit"
                  value="Filter"
                  className="search-bar-small"
                />
              </div>
            </form>
          )}
        </nav>
      </div>
      {showDrawer && isScreenSmall && (
        <>
          <div className="drawer">
            <main className="ham-nav">
              <HashLink to={"/#genres"}>Genres</HashLink>
              <Link to={"/types"}>Types</Link>
              <HashLink to={"/#newest"}>Newest</HashLink>
              <HashLink to={"/#updated"}>Updated</HashLink>
              <Link to={"/added"}>Added</Link>
            </main>
          </div>
        </>
      )}

      {isScreenTooSmall && showFormDrawer && (
        <div className="form-drawer">
          <form>
            <div className="search-bar-large">
              <input
                type="search"
                className="search-bar-large"
                placeholder="Search your anime..."
                dir="ltr"
              />
              <input
                type="submit"
                value="Filter"
                className="search-bar-small"
              />
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default Header;
