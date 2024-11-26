import Image from "next/image";
import Link from "next/link";
import React from "react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetTrigger,
  SheetDescription,
} from "@/components/ui/sheet";
import ROUTES from "@/constants/route";

import NavLinks from "./NavLinks";

function MobileNavigation() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Image
          src="/icons/hamburger.svg"
          width={36}
          height={36}
          alt="Menu"
          className="invert-colors sm:hidden"
        />
      </SheetTrigger>
      <SheetContent
        side="left"
        className="background-light900_dark200 border-none"
      >
        <SheetTitle className="hidden">Navigation</SheetTitle>
        <Link href="/" className="flex items-center gap-1">
          <Image
            src="/images/site-logo.svg"
            width={23}
            height={23}
            alt="Logo"
          />
          <p className="h2-bold font-space-grotesk text-dark-100 dark:text-light-900">
            Dev<span className="text-primary-500">Flow</span>
          </p>
        </Link>

        <SheetDescription className="hidden"></SheetDescription>

        <div className="no-scrollbar flex h-[calc(100vh-160px)] flex-col justify-between overflow-y-auto">
          <SheetClose asChild>
            <section className="flex flex-1 flex-col gap-6 pt-16">
              <NavLinks />
            </section>
          </SheetClose>
        </div>
        <div className="flex flex-col gap-3">
          <SheetClose asChild>
            <Link href={ROUTES.LOGIN}>
              <Button className="small-medium btn-secondary min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none">
                <span className="primary-text-gradient">Log In</span>
              </Button>
            </Link>
          </SheetClose>

          <SheetClose asChild>
            <Link href={ROUTES.SIGNUP}>
              <Button className="small-medium btn-tertiary light-border-2 text-dark400_light900 min-h-[41px] w-full rounded-lg border px-4 py-3 shadow-none">
                Sign Up
              </Button>
            </Link>
          </SheetClose>
        </div>
      </SheetContent>
    </Sheet>
  );
}

export default MobileNavigation;
