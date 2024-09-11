"use client";
import dynamic from "next/dynamic";
import * as React from "react";
import ChartOne from "../Charts/ChartOne";
import ChartTwo from "../Charts/ChartTwo";
import ChatCard from "../Chat/ChatCard";
import TableOne from "../Tables/TableOne";
import CardDataStats from "../CardDataStats";
import Image from "next/image";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
const MapOne = dynamic(() => import("@/components/Maps/MapOne"), {
  ssr: false,
});

const ChartThree = dynamic(() => import("@/components/Charts/ChartThree"), {
  ssr: false,
});
const brandData = [
  {
   component:"section 1",
   title: "this is title",
   content: "this is content",
   buttontext: "click this"
  }
];
function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number,
) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

const ECommerce: React.FC = () => {
  return (
    <>
     {/* <div className="rounded-sm border border-stroke bg-white px-5 pb-2.5 pt-6 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <h4 className="mb-6 text-xl font-semibold text-black dark:text-white">
        HomePage
      </h4>

      <div className="flex flex-col">
        <div className="grid grid-cols-3 rounded-sm bg-gray-2 dark:bg-meta-4 sm:grid-cols-5">
          <div className="p-2.5 xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
            component
            </h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
            title
            </h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
            content
            </h5>
          </div>
          <div className="hidden p-2.5 text-center sm:block xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
            buttontext
            </h5>
          </div>
          
        </div>

        {brandData.map((brand, key) => (
          <div
            className={`grid grid-cols-3 sm:grid-cols-5 ${
              key === brandData.length - 1
                ? ""
                : "border-b border-stroke dark:border-strokedark"
            }`}
            key={key}
          >
            <div className="flex items-center gap-3 p-2.5 xl:p-5 font-bold">
              
              <p className="hidden text-black dark:text-white sm:block text-xl ">
                {brand.component}
              </p>
            </div>

            <div className="flex items-center justify-center p-2.5 xl:p-5 font-bold">
              <p className="text-black dark:text-white">{brand.title}K</p>
            </div>

            <div className="flex items-center justify-center p-2.5 xl:p-5 font-bold">
              <p className="text-meta-3">{brand.content}</p>
            </div>

            <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5 font-bold">
              <p className="text-black dark:text-white">{brand.buttontext}</p>
            </div>

            
          </div>
        ))}
      </div>
    </div> */}
{/* <div className="rounded-sm border border-stroke bg-white px-5 pb-2.5 pt-6 shadow-lg dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
  <h4 className="mb-6 text-xl font-semibold text-black dark:text-white">
    HomePage
  </h4>

  <div className="flex flex-col rounded-lg border border-stroke bg-white px-5 mb-4 pb-2.5 pt-6 shadow-2xl dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
    <div className="grid grid-cols-3 rounded-sm bg-gray-2 dark:bg-meta-4 sm:grid-cols-5">
      <div className="p-2.5 xl:p-5">
        <h5 className="text-sm font-medium uppercase xsm:text-base">
          component
        </h5>
      </div>
      <div className="p-2.5 text-center xl:p-5">
        <h5 className="text-sm font-medium uppercase xsm:text-base">
          title
        </h5>
      </div>
      <div className="p-2.5 text-center xl:p-5">
        <h5 className="text-sm font-medium uppercase xsm:text-base">
          content
        </h5>
      </div>
      <div className="hidden p-2.5 text-center sm:block xl:p-5">
        <h5 className="text-sm font-medium uppercase xsm:text-base">
          buttontext
        </h5>
      </div>
    </div>

    {brandData.map((brand, key) => (
      <div
        className={`grid grid-cols-3 sm:grid-cols-5 ${
          key === brandData.length - 1
            ? ""
            : "border-b border-stroke dark:border-strokedark"
        }`}
        key={key}
      >
        <div className="flex items-center gap-3 p-2.5 xl:p-5 font-bold">
          <p className="hidden text-black dark:text-white sm:block text-xl ">
            {brand.component}
          </p>
        </div>

        <div className="flex items-center justify-center p-2.5 xl:p-5 font-bold">
          <p className="text-black dark:text-white">{brand.title}K</p>
        </div>

        <div className="flex items-center justify-center p-2.5 xl:p-5 font-bold">
          <p className="text-meta-3">{brand.content}</p>
        </div>

        <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5 font-bold">
          <p className="text-black dark:text-white">{brand.buttontext}</p>
        </div>
      </div>
    ))}
  </div>
</div>
 */}
  <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Dessert (100g serving)</TableCell>
            <TableCell align="right">Calories</TableCell>
            <TableCell align="right">Fat&nbsp;(g)</TableCell>
            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

    </>
  );
};

export default ECommerce;
