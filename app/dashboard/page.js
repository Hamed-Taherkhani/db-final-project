"use client";

import { RxPerson } from "react-icons/rx";
import { LiaBookSolid } from "react-icons/lia";
import { IoWarningOutline, IoBagOutline } from "react-icons/io5";
import Table from "../ui/Table";
import { useEffect, useState } from "react";

export default function page() {
  const [books, setBooks] = useState({
    head: [],
    data: [],
  });

  const [statistics, setStatistics] = useState([]);

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
      setBooks({
        head: Object.keys(resData[0]),
        data: resData.map((obj) => Object.values(obj)),
      });
    };
    fetchData();

    const fetchStatistics = async () => {
      const res = await fetch("http://localhost:3000/api/statistics");
      // The return value is *not* serialized
      // You can return Date, Map, Set, etc.

      if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error("Failed to fetch data");
      }

      const resData = await res.json();
      setStatistics(resData);
    };
    fetchStatistics();
  }, []);

  return (
    <div className="flex">
      <div className="m-8 my-14 w-8/12">
        <h1 className="text-4xl font-bold antialiased text-slate-800 mb-6">
          Dashboard
        </h1>

        <div className="mb-8 flex justify-between bg-gray-100 p-5 text-sm text-gray-600">
          <div className="flex items-center gap-2">
            <div className="bg-blue-600 p-3 rounded-full text-white">
              <RxPerson size={30} />
            </div>

            <div>
              <span className="block">Members</span>
              <span className="block font-bold text-xl text-slate-800">
                {statistics[0]}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="bg-blue-600 p-3 rounded-full text-white">
              <LiaBookSolid size={30} />
            </div>

            <div>
              <span className="block">Books</span>
              <span className="block font-bold text-xl text-slate-800">
                {statistics[1]}
              </span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="bg-blue-600 p-3 rounded-full text-white">
              <IoBagOutline size={30} />
            </div>

            <div>
              <span className="block">Borrowed</span>
              <span className="block font-bold text-xl text-slate-800">
                {statistics[2]}
              </span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="bg-blue-600 p-3 rounded-full text-white">
              <IoWarningOutline size={30} />
            </div>

            <div>
              <span className="block">Overdue</span>
              <span className="block font-bold text-xl text-slate-800">
                {statistics[3]}
              </span>
            </div>
          </div>
        </div>

        <Table
          title="Borrowed books"
          headList={books.head}
          dataList={books.data}
        />
      </div>

      <div className="py-14 pl-14 w-4/12 border-l min-h-screen"></div>
    </div>
  );
}
