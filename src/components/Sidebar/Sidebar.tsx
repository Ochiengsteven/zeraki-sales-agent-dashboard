import React from "react";
import {
  Navbar,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
  NavbarContent,
} from "@nextui-org/react";
import Desktopnav from "./Desktopnav";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const navigate = useNavigate();
  const menuItems = [
    { name: "Dashboard", link: "/" },
    { name: "Schools", link: "/schools" },
  ];

  const handleMenuItemClick = (link: string) => {
    navigate(link);
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-transparent text-stone-800">
      <Navbar
        isBordered
        isMenuOpen={isMenuOpen}
        onMenuOpenChange={setIsMenuOpen}
        className="bg-transparent text-stone-800"
      >
        <NavbarContent
          className="sm:hidden bg-transparent border-none"
          justify="start"
        >
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          />
        </NavbarContent>

        <div className="hidden sm:flex w-full sm:h-screen">
          <Desktopnav />
        </div>

        <NavbarMenu>
          {menuItems.map((item, index) => (
            <NavbarMenuItem
              key={index}
              onClick={() => handleMenuItemClick(item.link)}
            >
              <div className="w-full cursor-pointer">{item.name}</div>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navbar>
    </header>
  );
};

export default Sidebar;
