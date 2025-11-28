import React, { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
} from "../ui/navigation-menu";
import {
  Menu,
  X,
  ChevronDown,
  ChevronUp,
  Search as SearchIcon,
} from "lucide-react";
import { useRef } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const productCategories = {
  Plants: [
    "Ornamental Plants",
    "Fruit Plants",
    "Indoor Plants",
    "Medicinal Plants",
    "Landscape Plants",
  ],
};

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [mobileProductOpen, setMobileProductOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleSearch = () => setSearchOpen(!searchOpen);
  const toggleMobileProduct = () => setMobileProductOpen(!mobileProductOpen);
  const dropdownRef = useRef(null);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Service", href: "/service" },
  ];

  // 🧠 Close dropdown when clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <header className="bg-green-500 shadow-md sticky top-0 z-50">
      <nav className="flex items-center justify-between px-4 py-3 lg:px-6 border-b-0 shadow-none m-0 p-0 border-black">
        <div className="text-xl font-bold text-white">🌿 GreenHeaven</div>

        {/* Mobile: Search + Menu */}
        <div className="flex items-center gap-4 lg:hidden">
          <button
            onClick={toggleSearch}
            className="text-gray-700"
            aria-label="Search"
          >
            <SearchIcon size={24} />
          </button>
          <button
            onClick={toggleMenu}
            className="text-gray-700"
            aria-label="Menu"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8 flex-1 justify-end">
          <NavigationMenu>
            <NavigationMenuList className="flex items-center gap-6">
              {navLinks.map((link) => (
                <NavigationMenuItem key={link.label}>
                  <Link to={link.href} className="hover:bg-green-400 px-3 py-1.5 rounded text-white font-medium transition">
                    {link.label}
                  </Link>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          <div className="relative group" ref={dropdownRef}>
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center gap-2 px-4 py-2  rounded-md text-white font-medium hover:bg-green-500 transition"
            >
              Products
              <ChevronDown size={18} className="text-white" />
            </button>
            {dropdownOpen && (
              <div className="absolute top-full left-0 mt-2 group-hover:block bg-white p-4 rounded-md min-w-[200px] shadow-lg z-50">
                {Object.entries(productCategories).map(([category, items]) => (
                  <div key={category} className="mb-4">
                    <h3 className="font-bold mb-2 text-black text-center border-b">
                      {category}
                    </h3>
                    {items.map((item, index) => (
                      <Link
                        key={index}
                        to={`/${category.toLowerCase()}/${item
                          .toLowerCase()
                          .replace(/ /g, "-")}`} // Dynamic link to plant details
                        className="block px-2 py-1 rounded text-sm text-black hover:bg-primary text-center"
                        onClick={() => {
                          setDropdownOpen(false)
                        }}
                      >
                        {item}
                      </Link>
                    ))}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Desktop Search */}
          <div className="relative w-64">
            <SearchIcon
              className="absolute left-3 top-1/2 -translate-y-1/2 text-white"
              size={16}
            />
            <input
              type="search"
              placeholder="Search..."
              className="pl-9 h-9 w-full rounded-md border border-input text-white bg-transparent px-3 py-1 text-base shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring md:text-sm"
            />
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden px-4 pb-4 space-y-2 animate-fadeIn">
          {navLinks.map((item, index) => (
            <Link
              key={index}
              to={item.href}
              className="block text-white font-medium hover:text-green-700"
              onClick={toggleMenu}
            >
              {item.label}
            </Link>
          ))}

          <div className="pt-2 border-t">
            <button
              onClick={toggleMobileProduct}
              className="w-full flex justify-between items-center text-white font-semibold"
            >
              Products
              {mobileProductOpen ? (
                <ChevronUp size={20} />
              ) : (
                <ChevronDown size={20} />
              )}
            </button>

            {mobileProductOpen && (
              <div className="pl-4 space-y-3">
                {Object.entries(productCategories).map(([category, items]) => (
                  <div key={category} >
                    <h4 className="text-black font-medium">{category}</h4>
                    <ul className="ml-2 space-y-1" >
                      {items.map((item) => (
                        <li key={item} onClick={() => setDropdownOpen(false)}>
                          <Link
                            to={`/${category.toLowerCase()}/${item
                              .toLowerCase()
                              .replace(/ /g, "-")}`} // Dynamic link for mobile
                            className="text-sm text-white hover:text-green-700"
                            onClick={toggleMenu}
                          >
                            {item}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      {/* Mobile Search */}
      {searchOpen && (
        <div className="lg:hidden px-4 py-4">
          <div className="relative">
            <SearchIcon
              className="absolute left-3 top-1/2 -translate-y-1/2 text-white"
              size={16}
            />
            <input
              type="search"
              placeholder="Search..."
              className="pl-9 h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-white shadow-sm transition-colors placeholder:text-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
            />
          </div>
        </div>
      )}
    </header>
  );
}
