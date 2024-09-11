import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const SidebarDropdown = ({ item }: any) => {
  const pathname = usePathname();

  return (
    <>
      {/* <ul className="mb-5.5 mt-4 flex flex-col gap-2.5 pl-6">
        {item.map((item: any, index: number) => (
          <li key={index}>
            <Link
              href={item.route}
              className={`group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white ${
                pathname === item.route ? "text-white" : ""
              }`}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul> */}
           {/* <ul className="mb-5.5 mt-4 flex flex-col gap-2.5 pl-6">
        {item.map((item: any, index: number) => (
          <li key={index}>
            <Link
              href={item.route}
              className={`group relative flex items-center gap-2.5 px-4 py-2.5 font-medium text-bodydark2 rounded-md bg-[#ebebeb] shadow-[5px_5px_10px_#babecc,-5px_-5px_10px_#ffffff] duration-300 ease-in-out hover:shadow-[8px_8px_15px_#babecc,-8px_-8px_15px_#ffffff] hover:text-white ${
                pathname === item.route
                  ? "text-white bg-gradient-to-r from-[#0099ff] to-[#003366] shadow-[inset_5px_5px_10px_#babecc,inset_-5px_-5px_10px_#ffffff]"
                  : ""
              }`}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul> */}
        <ul className="mb-5.5 mt-4 flex flex-col gap-2.5 pl-6">
        {item.map((item: any, index: number) => (
          <li key={index}>
            <Link
              href={item.route}
              className={`group relative flex items-center gap-2.5 px-4 py-2.5 font-medium text-bodydark2 rounded-md bg-gray-100 border border-gray-300 hover:bg-gray-200 hover:border-gray-400 transition duration-300 ease-in-out ${
                pathname === item.route
                  ? "bg-blue-600 text-white border-transparent"
                  : ""
              }`}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default SidebarDropdown;
