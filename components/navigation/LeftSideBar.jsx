import Image from "next/image";
import Link from "next/link";
import React from "react";

import ROUTES from "@/constants/route";

import NavLinks from "./navbar/NavLinks";
import { Button } from "../ui/button";

function LeftSideBar() {
  return (
    <section className="custom-scrollbar background-light900_dark200 light-border sticky left-0 top-0 flex h-screen flex-col justify-between overflow-y-auto border-r p-6 pt-36 shadow-light-300 dark:shadow-none max-sm:hidden lg:w-[266px]">
      <div className="flex flex-1 flex-col gap-6">
        <NavLinks />
      </div>
      <div className="flex flex-col gap-3">
        <Button className="small-medium btn-secondary min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none">
          <Link href={ROUTES.LOGIN}>
            <Image
              src="/icons/account.svg"
              alt="Accounts"
              width={20}
              height={20}
              className="invert-colors lg:hidden"
            />
          </Link>
          <span className="primary-text-gradient max-lg:hidden">Log In</span>
        </Button>

        <Button className="small-medium btn-tertiary light-border-2 text-dark400_light900 min-h-[41px] w-full rounded-lg border px-4 py-3 shadow-none">
          <Link href={ROUTES.SIGNUP}>
            <Image
              src="/icons/user.svg"
              alt="User"
              width={20}
              height={20}
              className="invert-colors lg:hidden"
            />
          </Link>
          <span className="max-lg:hidden">Sign Up</span>
        </Button>
      </div>
    </section>
  );
}

export default LeftSideBar;
