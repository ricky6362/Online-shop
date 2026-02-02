import React, { useEffect, useMemo, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { PiShoppingCartLight, PiHeartLight, PiUserLight } from "react-icons/pi";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoSearchOutline, IoClose } from "react-icons/io5";
import "./styles/Header.css";

function useMediaQuery(query) {
  const getMatch = () =>
    typeof window !== "undefined" ? window.matchMedia(query).matches : false;

  const [matches, setMatches] = useState(getMatch);

  useEffect(() => {
    const mql = window.matchMedia(query);
    const onChange = () => setMatches(mql.matches);

    // Safari support
    if (mql.addEventListener) mql.addEventListener("change", onChange);
    else mql.addListener(onChange);

    setMatches(mql.matches);

    return () => {
      if (mql.removeEventListener) mql.removeEventListener("change", onChange);
      else mql.removeListener(onChange);
    };
  }, [query]);

  return matches;
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");

  const location = useLocation();
  const navigate = useNavigate();

  // Breakpoints aligned with the behavior you described:
  // - Mobile: only Search + Cart + Hamburger visible outside (Account & Wishlist hidden)
  // - Tablet: footer already has all icons, so hamburger should NOT show quick actions
  const isMobile = useMediaQuery("(max-width: 599px)");
  const isTablet = useMediaQuery("(min-width: 600px) and (max-width: 899px)");

  const navLinks = useMemo(
    () => [
      { to: "/", label: "Home" },
      { to: "/products", label: "Products" },
      { to: "/about", label: "About" },
      { to: "/contact", label: "Contact Us" },
    ],
    []
  );

  useEffect(() => {
    setMenuOpen(false);
    setSearchOpen(false);
  }, [location.pathname]);

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

  /**
   * Quick Actions logic (matches your requirement):
   * - Tablet: footer already shows all icons => do NOT show quick actions in hamburger
   * - Mobile: outside hamburger shows Cart already, but Account & Wishlist are hidden => show Account + Wishlist
   */
  const showQuickActionsInMenu = isMobile && !isTablet;

  return (
    <header className="hHeader">
      <div className="hHeader__inner">
        <Link to="/" className="hHeader__brand" aria-label="Go to homepage">
          <span className="hHeader__brandMark" aria-hidden="true">
            L
          </span>
          <span className="hHeader__brandText">Logo</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hHeader__desktopNav" aria-label="Primary navigation">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`hHeader__navLink ${
                location.pathname === l.to ? "is-active" : ""
              }`}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* Actions */}
        <div className="hHeader__actions" aria-label="Header actions">
          <button
            type="button"
            className="hHeader__iconBtn"
            onClick={() => setSearchOpen((v) => !v)}
            aria-label={searchOpen ? "Close search" : "Open search"}
          >
            {searchOpen ? <IoClose size={22} /> : <IoSearchOutline size={22} />}
          </button>

          {/* On mobile, these are hidden via CSS so the header shows: Search + Cart + Hamburger */}
          <Link
            className="hHeader__iconBtn hHeader__linkBtn hHeader__wishlist"
            to="/wishlist"
            aria-label="Wishlist"
          >
            <PiHeartLight size={24} />
          </Link>

          <Link
            className="hHeader__iconBtn hHeader__linkBtn hHeader__cart"
            to="/shopping-cart"
            aria-label="Shopping cart"
          >
            <PiShoppingCartLight size={24} />
          </Link>

          <Link
            className="hHeader__iconBtn hHeader__linkBtn hHeader__account"
            to="/login"
            aria-label="Account"
          >
            <PiUserLight size={24} />
          </Link>

          <button
            type="button"
            className="hHeader__iconBtn hHeader__hamburgerBtn"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <IoClose size={24} /> : <RxHamburgerMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Search row */}
      <div className={`hHeader__searchRow ${searchOpen ? "is-open" : ""}`}>
        <form className="hHeader__searchForm" onSubmit={onSubmitSearch}>
          <IoSearchOutline className="hHeader__searchIcon" size={18} />
          <input
            className="hHeader__searchInput"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search products..."
            aria-label="Search products"
            type="search"
          />
          <button className="hHeader__searchBtn" type="submit">
            Search
          </button>
        </form>
      </div>

      {/* Mobile sheet menu */}
      {menuOpen && (
        <>
          <button
            className="hHeader__overlay"
            aria-label="Close menu overlay"
            onClick={() => setMenuOpen(false)}
            type="button"
          />

          <div className="hHeader__sheet" role="dialog" aria-label="Mobile menu">
            <div className="hHeader__sheetHeader">
              <span className="hHeader__sheetTitle">Menu</span>
              <button
                type="button"
                className="hHeader__iconBtn"
                onClick={() => setMenuOpen(false)}
                aria-label="Close menu"
              >
                <IoClose size={22} />
              </button>
            </div>

            {/* Scrollable body */}
            <div className="hHeader__sheetBody">
              {/* Pages FIRST + heading */}
              <div className="hHeader__sectionTitle">Pages</div>
              <div className="hHeader__mobileLinks" aria-label="Mobile navigation">
                {navLinks.map((l) => (
                  <Link
                    key={l.to}
                    to={l.to}
                    className={`hHeader__mobileLink ${
                      location.pathname === l.to ? "is-active" : ""
                    }`}
                    onClick={() => setMenuOpen(false)}
                  >
                    {l.label}
                  </Link>
                ))}
              </div>

              {/* Quick actions shown ONLY when needed (mobile) */}
              {showQuickActionsInMenu && (
                <div className="hHeader__quickActions" aria-label="Quick actions">
                  <div className="hHeader__quickTitle">Quick actions</div>

                  <div className="hHeader__quickGrid">
                    {/* Order requested: Account first, Cart second, Wishlist last
                        BUT cart is already visible on mobile header/footer, so we do NOT show it here.
                        Result on mobile: Account -> Wishlist (no redundancy). */}
                    <Link
                      to="/login"
                      className="hHeader__quickCard"
                      onClick={() => setMenuOpen(false)}
                      aria-label="Go to account"
                    >
                      <span className="hHeader__quickIcon" aria-hidden="true">
                        <PiUserLight size={20} />
                      </span>
                      <span className="hHeader__quickText">
                        <span className="hHeader__quickLabel">Account</span>
                        <span className="hHeader__quickSub">Sign in & profile</span>
                      </span>
                    </Link>

                    <Link
                      to="/wishlist"
                      className="hHeader__quickCard"
                      onClick={() => setMenuOpen(false)}
                      aria-label="Go to wishlist"
                    >
                      <span className="hHeader__quickIcon" aria-hidden="true">
                        <PiHeartLight size={20} />
                      </span>
                      <span className="hHeader__quickText">
                        <span className="hHeader__quickLabel">Wishlist</span>
                        <span className="hHeader__quickSub">
                          Saved items & favorites
                        </span>
                      </span>
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
        </>
      )}
    </header>
  );
}

export default Header;