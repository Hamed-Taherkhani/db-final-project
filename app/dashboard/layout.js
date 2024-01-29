"use client";

import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { redirect, usePathname } from "next/navigation";
import { IoBookOutline } from "react-icons/io5";
import { LiaBookSolid } from "react-icons/lia";
import { RxDashboard, RxPerson } from "react-icons/rx";
import { TbSettings2 } from "react-icons/tb";
import { TfiHelpAlt } from "react-icons/tfi";

export default function layout({ children }) {
  // redirect("./auth/login", "replace");
  const path = usePathname();

  return (
    <main className="flex">
      <div className="bg-zinc-100 min-h-screen flex flex-col text-sm justify-between w-2/12 py-14">
        <div>
          <div className="pl-14 flex items-center gap-4 mb-8">
            <Image
              src="/images/avatar.png"
              alt="Admin avatar"
              width={50}
              height={50}
              className="rounded-full"
            />
            <p>
              <span className="font-medium">Admin</span>
              <br />
              <span className="text-xs text-gray-400">Normal staff</span>
            </p>
          </div>

          <ul className="ml-12 flex flex-col gap-3">
            <li>
              <Link
                href="/dashboard"
                className={clsx(
                  "flex items-center gap-2 p-3 rounded-l-sm transition duration-300 text-gray-600 bg-blue-600/0 ",
                  {
                    "bg-blue-600/100 text-white": path === "/dashboard",
                  }
                )}
              >
                <RxDashboard />
                Dashboard
              </Link>
            </li>
            <li>
              <Link
                href="/dashboard/books"
                className={clsx(
                  "flex items-center gap-2 p-3 rounded-l-sm transition duration-300 text-gray-600 bg-blue-600/0",
                  {
                    "bg-blue-600/100 text-white": path === "/dashboard/books",
                  }
                )}
              >
                <LiaBookSolid />
                Books
              </Link>
            </li>
            <li>
              <Link
                href="/dashboard/members"
                className={clsx(
                  "flex items-center gap-2 p-3 rounded-l-sm transition duration-300 text-gray-600 bg-blue-600/0",
                  {
                    "bg-blue-600/100 text-white": path === "/dashboard/members",
                  }
                )}
              >
                <RxPerson />
                Members
              </Link>
            </li>
            <li>
              <Link
                href="/dashboard/borrow"
                className={clsx(
                  "flex items-center gap-2 p-3 rounded-l-sm transition duration-300 text-gray-600 bg-blue-600/0",
                  {
                    "bg-blue-600/100 text-white": path === "/dashboard/borrow",
                  }
                )}
              >
                <IoBookOutline />
                Borrow book
              </Link>
            </li>
          </ul>
        </div>

        <ul className="ml-12 flex flex-col gap-1">
          <li>
            <Link
              href="/help"
              className={clsx(
                "flex items-center gap-2 p-3 rounded-l-sm transition duration-300 text-gray-600 bg-blue-600/0 ",
                {
                  "bg-blue-600/100 text-white": path === "/help",
                }
              )}
            >
              <TfiHelpAlt />
              Help
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard/Settings"
              className={clsx(
                "flex items-center gap-2 p-3 rounded-l-sm transition duration-300 text-gray-600 bg-blue-600/0",
                {
                  "bg-blue-600/100 text-white": path === "/dashboard/Settings",
                }
              )}
            >
              <TbSettings2 />
              Settings
            </Link>
          </li>
        </ul>
      </div>

      <div className="h-screen overflow-auto w-10/12">{children}</div>
    </main>
  );
}
