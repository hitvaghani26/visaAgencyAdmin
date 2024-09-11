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
import { Typography } from '@mui/material';

const MapOne = dynamic(() => import("@/components/Maps/MapOne"), {
  ssr: false,
});

const ChartThree = dynamic(() => import("@/components/Charts/ChartThree"), {
  ssr: false,
});
const brandData = [
  {
    component: "section 1",
    title: "this is title",
    content: "this is content",
    buttontext: "click this"
  }
];
// function createData(
//   name: string,
//   calories: number,
//   fat: number,
//   carbs: number,
//   protein: number,
// ) {
//   return { name, calories, fat, carbs, protein };
// }

// const rows = [
//   createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//   createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//   createData('Eclair', 262, 16.0, 24, 6.0),
//   createData('Cupcake', 305, 3.7, 67, 4.3),
//   createData('Gingerbread', 356, 16.0, 49, 3.9),
// ];
function createData(
  name: string,
  email: string,
  title: string,
  company: string
) {
  return { name, email, title, company };
}

const rows = [
  createData('John Doe', 'john.doe@example.com', 'Software Engineer', 'Tech Corp'),
  createData('Jane Smith', 'jane.smith@example.com', 'Product Manager', 'Innovate Ltd'),
  createData('Sam Wilson', 'sam.wilson@example.com', 'UX Designer', 'Creative Solutions'),
  createData('Linda Johnson', 'linda.johnson@example.com', 'Data Scientist', 'DataWorks'),
  createData('Chris Evans', 'chris.evans@example.com', 'Marketing Specialist', 'AdvertPlus'),
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
      <TableContainer component={Paper} sx={{ boxShadow: 1, borderRadius: 2, border: 1 }}>
        <Typography variant="h6" component="div" sx={{ padding: 2, fontWeight: 'bold', backgroundColor: '#f5f5f5', borderBottom: '1px solid #ddd' }}>
          HomePage
        </Typography>
        <Table sx={{ minWidth: 650 }} aria-label="user table">
          <TableHead>
            <TableRow>
              <TableCell align="center" sx={{ fontWeight: 'bold', color: "#E02454" }}>Name</TableCell>
              <TableCell align="center" sx={{ fontWeight: 'bold', color: "#E02454" }}>Email</TableCell>
              <TableCell align="center" sx={{ fontWeight: 'bold', color: "#E02454" }}>Title</TableCell>
              <TableCell align="center" sx={{ fontWeight: 'bold', color: "#E02454" }}>Company</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{

                  '&:hover': { backgroundColor: '#f9f9f9' }, // Hover effect for row
                  cursor: 'pointer', // Add a pointer cursor for interactivity
                  transition: 'background-color 0.3s ease', // Smooth transition for hover
                }}
              >
                <TableCell component="th" align="center" scope="row" sx={{ padding: 2 }}>
                  {row.name}
                </TableCell>
                <TableCell align="center" sx={{ padding: 2, borderRight: '2px solid #0D426E', borderLeft: '2px solid #0D426E' }}>{row.email}</TableCell>
                <TableCell align="center" sx={{ padding: 2, borderRight: '2px solid #0D426E' }}>{row.title}</TableCell>
                <TableCell align="center" sx={{ padding: 2 }}>{row.company}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <div className="my-4">

      </div>
      <TableContainer component={Paper} sx={{ boxShadow: 1, borderRadius: 2}}>
        <Typography variant="h6" component="div" sx={{ padding: 2, fontWeight: 'bold', backgroundColor: '#f5f5f5', borderBottom: '1px solid #ddd' }}>
          HomePage
        </Typography>
        <Table sx={{ minWidth: 650 }} aria-label="user table">
          <TableHead>
            <TableRow>
              <TableCell align="center" sx={{ fontWeight: 'bold',  }}>Name</TableCell>
              <TableCell align="center" sx={{ fontWeight: 'bold',  }}>Email</TableCell>
              <TableCell align="center" sx={{ fontWeight: 'bold',  }}>Title</TableCell>
              <TableCell align="center" sx={{ fontWeight: 'bold',  }}>Company</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{

                  '&:hover': { backgroundColor: '#f9f9f9' }, // Hover effect for row
                  cursor: 'pointer', // Add a pointer cursor for interactivity
                  transition: 'background-color 0.3s ease', // Smooth transition for hover
                }}
              >
                <TableCell component="th" align="center" scope="row" sx={{ padding: 2 }}>
                  {row.name}
                </TableCell>
                <TableCell align="center" sx={{ padding: 2,  }}>{row.email}</TableCell>
                <TableCell align="center" sx={{ padding: 2,  }}>{row.title}</TableCell>
                <TableCell align="center" sx={{ padding: 2 }}>{row.company}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default ECommerce;
