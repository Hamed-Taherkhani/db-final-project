"use client";

import Input from "@/app/ui/Input";
import Table from "@/app/ui/Table";
import { useEffect, useState } from "react";

export default function Books() {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("http://localhost:3000/api/members");
      // The return value is *not* serialized
      // You can return Date, Map, Set, etc.

      if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error("Failed to fetch data");
      }

      setMembers((await res.json()).map((obj) => Object.values(obj)));
    };
    fetchData();
  }, []);

  return (
    <div>
      <div className="flex">
        <div className="w-8/12 m-8 my-14">
          <h1 className="text-4xl font-bold antialiased text-slate-800 mb-6">
            Members
          </h1>
          <div className="mb-10">
            <Table
              headList={[
                "ID",
                "Name",
                "Family",
                "Phone",
                "Address",
                "Join date",
              ]}
              method="/api/members/delete"
              dataList={members}
              deletable={true}
            />
          </div>
        </div>

        <div className="pt-14 p-4 w-4/12 border-l h-screen sticky top-0">
          <h2 className="text-2xl font-medium mb-4">Add new member</h2>

          <form
            className="flex flex-col gap-1"
            method="POST"
            action="/api/members"
          >
            <Input variant={1} name="fname" type="text" placeholder="Name" />
            <Input variant={1} name="lname" type="text" placeholder="Family" />
            <Input variant={1} name="phone" type="text" placeholder="Phone" />
            <Input
              variant={1}
              name="address"
              type="text"
              placeholder="Address"
            />
            <button
              type="submit"
              className="bg-blue-600 p-3 text-white rounded-sm"
            >
              Add member
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
