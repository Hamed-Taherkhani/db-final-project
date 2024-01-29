"use client";

import Input from "@/app/ui/Input";
import Table from "@/app/ui/Table";
import { useEffect, useState } from "react";

export default function Books() {
  const [books, setBooks] = useState({
    head: [],
    data: [],
  });

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("http://localhost:3000/api/books");
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
  }, []);

  return (
    <div>
      <div className="flex">
        <div className="w-8/12 m-8">
          <h1 className="text-4xl font-bold antialiased text-slate-800 mb-6">
            Books
          </h1>
          <Table
            headList={books.head}
            dataList={books.data}
            method="/api/books/delete"
            deletable={true}
          />
        </div>

        <div className="pt-14 p-4 w-4/12 border-l h-screen sticky top-0">
          <h2 className="text-2xl font-medium mb-4">Add new book</h2>

          <form
            className="flex flex-col gap-1"
            action="/api/books"
            method="POST"
          >
            <Input variant={1} name="title" type="text" placeholder="Title" />
            <Input
              variant={1}
              name="category"
              type="text"
              placeholder="Category"
            />
            <Input variant={1} name="author" type="text" placeholder="Author" />
            <div className="flex gap-1">
              <Input variant={1} name="price" type="text" placeholder="Price" />
              <Input variant={1} name="pages" type="text" placeholder="Pages" />
            </div>
            <Input
              variant={1}
              name="corridor"
              type="text"
              placeholder="Corridor"
            />
            <Input variant={1} name="shelf" type="text" placeholder="Shelf" />
            <Input
              variant={1}
              name="publisher_id"
              type="number"
              placeholder="Publisher ID"
            />
            <button
              type="submit"
              className="bg-blue-600 p-3 text-white rounded-sm"
            >
              Add book
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
