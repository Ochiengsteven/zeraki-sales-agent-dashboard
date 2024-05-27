import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
  NavbarContent,
  NavbarItem,
  Link,
} from "@nextui-org/react";

const Sidebar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const menuItems = [
    { name: "Dashboard", link: "/" },
    { name: "Schools", link: "/schools" },
  ];
  return (
    <header className="bg-white text-stone-800">
      <Navbar
        isBordered
        isMenuOpen={isMenuOpen}
        onMenuOpenChange={setIsMenuOpen}
        className="bg-white text-stone-800"
      >
        <NavbarContent className="sm:hidden" justify="start">
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          />
        </NavbarContent>

        <div className="hidden sm:flex">
          <NavbarContent className="hidden sm:flex items-start flex-col">
            <NavbarBrand>
              <Link href="/">School Management</Link>
            </NavbarBrand>
            {menuItems.map((item, index) => (
              <NavbarItem key={index}>
                <Link href={item.link}>{item.name}</Link>
              </NavbarItem>
            ))}
          </NavbarContent>
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
