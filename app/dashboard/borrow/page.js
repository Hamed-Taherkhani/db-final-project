"use client";

import Input from "@/app/ui/Input";
import Table from "@/app/ui/Table";
import { useEffect, useState } from "react";

export default function Borrow() {
  const [borrow, setBorrow] = useState({ head: [], data: [] });

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("http://localhost:3000/api/borrow");
      // The return value is *not* serialized
      // You can return Date, Map, Set, etc.

      if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error("Failed to fetch data");
      }

      const resData = await res.json();
      setBorrow({
        head: Object.keys(resData[0]),
        data: resData.map((obj) => Object.values(obj)),
      });
    };
    fetchData();
  }, []);

  return (
    <div>
      <div className="flex">
        <div className="w-8/12 m-14">
          <h1 className="text-4xl font-bold antialiased text-slate-800 mb-6">
            Borrow
          </h1>
          <div className="mb-10">
            <Table
              headList={borrow.head}
              dataList={borrow.data}
              method="/api/borrow/delete"
              returnable={true}
            />
          </div>
        </div>

        <div className="pt-14 p-4 w-4/12 border-l h-screen sticky top-0">
          <h2 className="text-2xl font-medium mb-4">Borrow book</h2>

          <form
            className="flex flex-col gap-1"
            method="POST"
            action="/api/borrow"
          >
            <Input
              variant={1}
              name="book_id"
              type="number"
              placeholder="Book ID"
            />
            <Input
              variant={1}
              name="member_id"
              type="number"
              placeholder="Member ID"
            />
            <Input
              variant={1}
              name="return_date"
              type="text"
              placeholder="Return date. ex: 2024-01-29"
            />
            <button
              type="submit"
              className="bg-blue-600 p-3 text-white rounded-sm"
            >
              Borrow
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
