import Link from "next/link";
import React from "react";
import Logo from "./logo.jpg";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav>
      <Link href={"/"}>
        <Image
          src={Logo}
          width={70}
          height={70}
          quality={100}
          placeholder="blur"
          style={{ borderRadius: 5 }}
        />
      </Link>
      <Link href={"/"}>
        <h1>Black Cat Helpdesk</h1>
      </Link>
      <Link href={"/"}>Dashboard</Link>
      <Link href={"/tickets"}>Tickets</Link>
    </nav>
  );
};

export default Navbar;
