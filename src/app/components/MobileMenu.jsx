import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { CiMenuFries } from "react-icons/ci";
import { IoMdMenu } from "react-icons/io";
import Link from "next/link";
const MobileMenu = () => {
  return (
    <>
      <Sheet>
        <SheetTrigger>
          <IoMdMenu className="text-white" />
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle></SheetTitle>
            <SheetDescription>
              <ul className="flex flex-col gap-y-7 pt-10  text-white font-medium">
                <li className="">
                  <Link
                    href={"/"}
                    className="text-base font-bold text-white capitalize px-6 py-3 bg-[#FD853A] rounded-[60px]"
                  >
                    Home
                  </Link>
                </li>{" "}
                <li>
                  <Link
                    href={"/"}
                    className="text-base text-gray-600 font-medium capitalize hover:text-[#FD853A] transition-transform ease-in-out duration-500"
                  >
                    about
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/"}
                    className="text-base font-medium text-gray-600 capitalize hover:text-[#FD853A] transition-transform ease-in-out duration-500"
                  >
                    service
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/"}
                    className="text-base font-medium text-gray-600 capitalize hover:text-[#FD853A] transition-transform ease-in-out duration-500"
                  >
                    resume
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/"}
                    className="text-base font-medium text-gray-600 capitalize hover:text-[#FD853A] transition-transform ease-in-out duration-500"
                  >
                    projects
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/"}
                    className="text-base font-medium text-gray-600 capitalize hover:text-[#FD853A] transition-transform ease-in-out duration-500"
                  >
                    contact
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/"}
                    className="text-base font-medium text-gray-600 capitalize border px-4 py-3 rounded-[66px] hover:text-[#FD853A] transition-transform ease-in-out duration-500"
                  >
                    download cv
                  </Link>
                </li>
              </ul>
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </>
  );
};

export default MobileMenu;
