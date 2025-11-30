import React from "react";
import { useContext } from "react";
import { ThemeContext } from "../../App";
import { DataGrid } from '@mui/x-data-grid';

import {rows,columns} from "./data"


export default function Team() {
  const { Ctheme } = useContext(ThemeContext);
  return (
    <div className={Ctheme === "dark" ? "dark" : ""} style={{ height: 600, width: '100%', }}>
<DataGrid 
  className="dark:!bg-custom-dark dark:!text-white" 
  rows={rows} 
  columns={columns}
   sx={{
    '& .MuiDataGrid-columnHeaders': {
      backgroundColor: Ctheme === 'dark' ? '#1e293b' : '#eaeff5',
      color: Ctheme === 'dark' ? 'white' : 'black',
    },
    '& .MuiDataGrid-columnHeader': {
      backgroundColor: Ctheme === 'dark' ? '#1e293b' : '#eaeff5',
    },
    '& .MuiDataGrid-footerContainer': {
      backgroundColor: Ctheme === 'dark' ? '#1e293b' : '#eaeff5',
      color: Ctheme === 'dark' ? 'white' : 'black',
    },
    '& .MuiDataGrid-row:hover': {
      backgroundColor: 'transparent',
    },
    '& .MuiDataGrid-row.Mui-hovered': {
      backgroundColor: 'transparent',
    },
    '& .MuiDataGrid-row.Mui-selected': {
      backgroundColor: 'transparent',
    },
    '& .MuiDataGrid-row.Mui-selected:hover': {
      backgroundColor: 'transparent',
    }
  }}
/>    </div>
  );
}
