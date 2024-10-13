import Link from "next/link";
import React from "react";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  return (
    <>
      <nav className="lg:mt-10 mt-5">
        <div className="md:container mx-auto px-5 ">
          <div
            className="bg-[#060047] lg:py-7 py-5 rounded-[50px] lg:px-5"
            px-3
          >
            <ul className="lg:flex hidden gap-x-4 justify-between text-white font-medium">
              <li className="">
                <Link
                  href={"/"}
                  className="text-xl font-bold capitalize px-6 py-3 bg-[#FD853A] rounded-[60px]"
                >
                  Home
                </Link>
              </li>{" "}
              <li>
                <Link
                  href={"/"}
                  className="text-xl font-medium capitalize hover:text-[#FD853A] transition-transform ease-in-out duration-500"
                >
                  about
                </Link>
              </li>
              <li>
                <Link
                  href={"/"}
                  className="text-xl font-medium capitalize hover:text-[#FD853A] transition-transform ease-in-out duration-500"
                >
                  service
                </Link>
              </li>
              <li>
                <Link
                  href={"/"}
                  className="text-xl font-medium capitalize hover:text-[#FD853A] transition-transform ease-in-out duration-500"
                >
                  resume
                </Link>
              </li>
              <li>
                <Link
                  href={"/"}
                  className="text-xl font-medium capitalize hover:text-[#FD853A] transition-transform ease-in-out duration-500"
                >
                  projects
                </Link>
              </li>
              <li>
                <Link
                  href={"/"}
                  className="text-xl font-medium capitalize hover:text-[#FD853A] transition-transform ease-in-out duration-500"
                >
                  contact
                </Link>
              </li>
              <li>
                <Link
                  href={"/"}
                  className="text-xl font-medium capitalize border px-4 py-3 rounded-[66px] hover:text-[#FD853A] transition-transform ease-in-out duration-500"
                >
                  download cv
                </Link>
              </li>
            </ul>
            <div className="lg:hidden flex justify-between">
              <li className="">
                <MobileMenu />
              </li>
              <li>.</li>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
