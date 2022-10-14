import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const NavBar = () => {
  const router = useRouter();
  // const [path,setPath] = useState(router.pathname);
  // useEffect(() => {

  // }, [path])

  return (
    <nav className="flex flex-row gap-2 bg-slate-600 text-slate-100 px-3 py-2">
      <Link href="/">
        <h2 className="text-red-500">DNote</h2>
      </Link>
      <Link href="/">
        <p
          className={`cursor-pointer ${
            router.pathname === "/" ? "font-bold" : ""
          }`}
        >
          Home
        </p>
      </Link>
      <Link href="/about">
        <p
          className={`cursor-pointer ${
            router.pathname === "/about" ? "font-bold" : ""
          } `}
        >
          About
        </p>
      </Link>
    </nav>
  );
};

export default NavBar;
