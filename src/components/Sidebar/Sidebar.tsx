import React from "react";
import {
  Navbar,
  // NavbarBrand,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
  NavbarContent,
  // NavbarItem,
  Link,
} from "@nextui-org/react";
import Desktopnav from "./Desktopnav";

const Sidebar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const menuItems = [
    { name: "Dashboard", link: "/" },
    { name: "Schools", link: "/schools" },
  ];
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
            <NavbarMenuItem key={index}>
              <Link className="w-full" href={item.link}>
                {item.name}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navbar>
    </header>
  );
};

export default Sidebar;
