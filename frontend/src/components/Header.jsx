import React, { useEffect, useMemo, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { PiShoppingCartLight, PiHeartLight, PiUserLight } from "react-icons/pi";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoSearchOutline, IoClose } from "react-icons/io5";
import "./styles/Header.css";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");

  const location = useLocation();
  const navigate = useNavigate();

  const navLinks = useMemo(
    () => [
      { to: "/", label: "Home" },
      { to: "/products", label: "Products" },
      { to: "/about", label: "About" },
      { to: "/contact", label: "Contact Us" },
    ],
    []
  );

  // Close menus on route change (better UX on mobile)
  useEffect(() => {
    setMenuOpen(false);
    setSearchOpen(false);
  }, [location.pathname]);

  // Esc to close (accessibility)
  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") {
        setMenuOpen(false);
        setSearchOpen(false);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const onSubmitSearch = (e) => {
    e.preventDefault();
    const q = query.trim();
    if (!q) return;
    navigate(`/products?search=${encodeURIComponent(q)}`);
    setQuery("");
    setSearchOpen(false);
  };

  return (
    <header className="siteHeader">
      <div className="headerInner">
        <Link to="/" className="brand" aria-label="Go to homepage">
          <span className="brandMark" aria-hidden="true">
            L
          </span>
          <span className="brandText">Logo</span>
        </Link>

        {/* Desktop nav */}
        <nav className="desktopNav" aria-label="Primary navigation">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`navLink ${location.pathname === l.to ? "active" : ""}`}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* Actions */}
        <div className="actions" aria-label="Header actions">
          <button
            type="button"
            className="iconBtn"
            onClick={() => setSearchOpen((v) => !v)}
            aria-label={searchOpen ? "Close search" : "Open search"}
          >
            {searchOpen ? <IoClose size={22} /> : <IoSearchOutline size={22} />}
          </button>

          <Link className="iconBtn linkBtn" to="/wishlist" aria-label="Wishlist">
            <PiHeartLight size={24} />
          </Link>

          <Link
            className="iconBtn linkBtn"
            to="/shopping-cart"
            aria-label="Shopping cart"
          >
            <PiShoppingCartLight size={24} />
          </Link>

          <Link className="iconBtn linkBtn" to="/login" aria-label="Account">
            <PiUserLight size={24} />
          </Link>

          <button
            type="button"
            className="iconBtn hamburgerBtn"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <IoClose size={24} /> : <RxHamburgerMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Search row (slides under header) */}
      <div className={`searchRow ${searchOpen ? "open" : ""}`}>
        <form className="searchForm" onSubmit={onSubmitSearch}>
          <IoSearchOutline className="searchIcon" size={18} />
          <input
            className="searchInput"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search products..."
            aria-label="Search products"
            type="search"
          />
          <button className="searchBtn" type="submit">
            Search
          </button>
        </form>
      </div>

      {/* Mobile sheet menu */}
      {menuOpen && (
        <>
          <button
            className="menuOverlay"
            aria-label="Close menu overlay"
            onClick={() => setMenuOpen(false)}
            type="button"
          />
          <div className="mobileSheet" role="dialog" aria-label="Mobile menu">
            <div className="mobileSheetHeader">
              <span className="mobileTitle">Menu</span>
              <button
                type="button"
                className="iconBtn"
                onClick={() => setMenuOpen(false)}
                aria-label="Close menu"
              >
                <IoClose size={22} />
              </button>
            </div>

            <div className="mobileLinks">
              {navLinks.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  className={`mobileLink ${
                    location.pathname === l.to ? "active" : ""
                  }`}
                  onClick={() => setMenuOpen(false)}
                >
                  {l.label}
                </Link>
              ))}
            </div>

            <div className="mobileMeta">
              <Link to="/contact" className="helpLink">
                Need help? Contact support
              </Link>
            </div>
          </div>
        </>
      )}
    </header>
  );
}

export default Header;