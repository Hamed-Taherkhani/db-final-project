"use client";

import clsx from "clsx";
import { IoReload, IoTrashBin } from "react-icons/io5";

export default function Table({
  title,
  deletable,
  returnable,
  method,
  headList,
  dataList,
}) {
  return (
    <div>
      <h2 className="text-2xl font-medium mb-2">{title}</h2>
      <table className="w-full text-sm [&_td]:py-3 [&_td]:border-b">
        <thead>
          <tr className="text-gray-500">
            {headList?.map((head) => (
              <td className="text-center">{head}</td>
            ))}
            {deletable || returnable ? (
              <td className="text-center">Operation</td>
            ) : null}
          </tr>
        </thead>
        <tbody>
          {dataList?.map((row) => (
            <tr
              className={clsx({
                "relative content-[] bg-red-500/20 after:absolute after:-left-4 after:my-0.5 after:rounded-md after:top-0 after:bottom-0 after:block after:w-2 after:bg-red-500 ":
                  new Date(row[6]).getTime() < Date.now(),
              })}
            >
              {row?.map((data) => (
                <td className="text-center">{data}</td>
              ))}
              {deletable || returnable ? (
                <td className="text-center">
                  <form action={method} method="POST">
                    <input hidden name="id" defaultValue={row[0]} />
                    <button
                      type="submit"
                      className={clsx("text-red-500", {
                        "!text-green-500": returnable === true,
                      })}
                    >
                      {deletable ? <IoTrashBin /> : <IoReload />}
                    </button>
                  </form>
                </td>
              ) : null}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
