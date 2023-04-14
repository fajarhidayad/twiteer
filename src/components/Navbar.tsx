import Link from "next/link";
import React from "react";
import Button from "./Button";
import { useRouter } from "next/router";
import NavbarLink from "./NavbarLink";

const Navbar = () => {
  const currentUrl = useRouter().asPath;

  return (
    <nav className="fixed top-0 bg-white drop-shadow w-full z-50">
      <div className="container flex justify-between items-center py-4 md:py-0 md:pt-1">
        <Link href={"/"} className="font-pop text-lg font-semibold">
          Twiteer
        </Link>

        <ul className="hidden md:flex justify-between items-center font-pop font-medium">
          <NavbarLink href="/" title="Home" isActive={currentUrl === "/"} />
          <NavbarLink
            href="/explore"
            title="Explore"
            isActive={currentUrl === "/explore"}
          />
          <NavbarLink
            href="/bookmarks"
            title="Bookmarks"
            isActive={currentUrl === "/bookmarks"}
          />
        </ul>

        <Button>Sign In</Button>
      </div>
    </nav>
  );
};

export default Navbar;
