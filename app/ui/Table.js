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
              <td>{head}</td>
            ))}
            {deletable || returnable ? (
              <td className="text-center">Operation</td>
            ) : null}
          </tr>
        </thead>
        <tbody>
          {dataList?.map((row) => (
            <tr>
              {row?.map((data) => (
                <td>{data}</td>
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
