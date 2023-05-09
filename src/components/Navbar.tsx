import Link from "next/link";
import React from "react";
import Button from "./Button";
import { useRouter } from "next/router";
import NavbarLink from "./NavbarLink";
import { signIn, signOut } from "next-auth/react";
import { signOut as logout } from "@/store/features/authSlice";
import { FaCaretDown, FaUserCircle, FaCog, FaSignOutAlt } from "react-icons/fa";

import { Popover } from "react-tiny-popover";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import Image from "next/image";

const Navbar = () => {
  const [isPopoverOpen, setIsPopoverOpen] = React.useState(false);

  const { user } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  const currentUrl = useRouter().asPath;

  const signOutUser = () => {
    signOut();
    dispatch(logout);
  };

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

        {user ? (
          <Popover
            isOpen={isPopoverOpen}
            positions={["bottom"]}
            onClickOutside={() => setIsPopoverOpen(false)}
            content={
              <div className="px-3 py-4 mt-5 rounded-xl bg-white shadow flex flex-col space-y-2 w-40 text-gray-700">
                <Link
                  href={"/profile"}
                  className="p-3 text-sm font-medium rounded-lg hover:bg-gray-200 flex items-center"
                >
                  <FaUserCircle size={20} className="mr-2" />
                  <span>My Profile</span>
                </Link>
                <Link
                  href={"/settings"}
                  className="p-3 text-sm font-medium rounded-lg hover:bg-gray-200 flex items-center"
                >
                  <FaCog size={20} className="mr-2" />
                  <span>Settings</span>
                </Link>
                <hr />
                <p
                  onClick={() => signOutUser()}
                  className="text-red-500 p-3 text-sm font-medium rounded-lg flex items-center hover:bg-gray-200 hover:cursor-pointer"
                >
                  <FaSignOutAlt size={20} className="mr-2" />
                  <span>Logout</span>
                </p>
              </div>
            }
          >
            <button
              onClick={() => setIsPopoverOpen(!isPopoverOpen)}
              className="flex justify-between items-center space-x-3"
            >
              <div className="w-8 h-8 rounded-full bg-gray-200">
                <Image
                  className="rounded-full"
                  width={40}
                  height={40}
                  src={user.image!}
                  alt="user-profile"
                />
              </div>
              <h3 className="font-bold text-sm">{user.name}</h3>
              <FaCaretDown />
            </button>
          </Popover>
        ) : (
          <Button onClick={() => signIn("google")}>Sign In</Button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
