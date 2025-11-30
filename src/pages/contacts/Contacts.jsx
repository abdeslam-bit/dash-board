import React from "react";
import { useContext } from "react";
import { ThemeContext } from "../../App";
import { DataGrid } from '@mui/x-data-grid';


const rows = [
  { id: 1, name: 'Data Grid', description: 'the Community version' },
  { id: 2, name: 'Data Grid Pro', description: 'the Pro version' },
  { id: 3, name: 'Data Grid Premium', description: 'the Premium version' },
];

const columns = [
  { field: 'name', headerName: 'Product Name', width: 200 },
  { field: 'description', headerName: 'Description', width: 300 },
];

export default function Contacts() {
  const { Ctheme } = useContext(ThemeContext);
  return (
    <div className={Ctheme === "dark" ? "dark" : ""} style={{ height: 300, width: '100%' }}>
      <DataGrid className="!bg-red-500 dark:bg-" rows={rows} columns={columns} />
    </div>
  );
}
