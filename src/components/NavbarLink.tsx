import Link from "next/link";
import React from "react";

interface NavbarLinkProps {
  href: string;
  isActive: boolean;
  title: string;
}

const NavbarLink: React.FC<NavbarLinkProps> = ({ href, isActive, title }) => {
  return (
    <li className="flex flex-col justify-between mx-8">
      {isActive ? (
        <>
          <Link href={href} className="py-4 px-4 text-tblue">
            {title}
          </Link>
          <hr className="border-tblue border-[3px] rounded-t" />
        </>
      ) : (
        <>
          <Link href={href} className="py-4 px-4">
            {title}
          </Link>
          <hr className="border-transparent border-[3px] rounded-t" />
        </>
      )}
    </li>
  );
};

export default NavbarLink;
