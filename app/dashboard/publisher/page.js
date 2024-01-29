"use client";

import Input from "@/app/ui/Input";
import Table from "@/app/ui/Table";
import { useEffect, useState } from "react";

export default function Publisher() {
  const [publisher, setPublisher] = useState({ head: [], data: [] });

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("http://localhost:3000/api/publisher");
      // The return value is *not* serialized
      // You can return Date, Map, Set, etc.

      if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error("Failed to fetch data");
      }

      const resData = await res.json();
      setPublisher({
        head: Object.keys(resData[0]),
        data: resData.map((obj) => Object.values(obj)),
      });
    };
    fetchData();
  }, []);

  return (
    <div>
      <div className="flex">
        <div className="w-8/12 m-8 my-14">
          <h1 className="text-4xl font-bold antialiased text-slate-800 mb-6">
            Publisher
          </h1>
          <div className="mb-10">
            <Table
              headList={publisher.head}
              dataList={publisher.data}
              method="/api/publisher/delete"
              deletable={true}
            />
          </div>
        </div>

        <div className="pt-14 p-4 w-4/12 border-l h-screen sticky top-0">
          <h2 className="text-2xl font-medium mb-4">Add publisher</h2>

          <form
            className="flex flex-col gap-1"
            method="POST"
            action="/api/publisher"
          >
            <Input variant={1} name="name" type="text" placeholder="Name" />
            <Input variant={1} name="phone" type="text" placeholder="Phone" />
            <Input
              variant={1}
              name="address"
              type="text"
              placeholder="Address"
            />
            <Input
              variant={1}
              name="website"
              type="text"
              placeholder="Website"
            />
            <button
              type="submit"
              className="bg-blue-600 p-3 text-white rounded-sm"
            >
              Add
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
