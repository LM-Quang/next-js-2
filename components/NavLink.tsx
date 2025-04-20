"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavLink = ({ href, children }: { href: string; children: string }) => {
   const path = usePathname();

   return (
      <Link href={href} className={path.startsWith(href) ? "active" : undefined}>
         {children}
      </Link>
   );
};

export default NavLink;
