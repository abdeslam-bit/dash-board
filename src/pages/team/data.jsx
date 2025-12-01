import { Box, Typography } from "@mui/material";

export const rows = [
  {
    id: 1,
    name: "ahmed",
    email: "the Community version",
    age: 50,
    phone: "0556308086",
    access: "User",
  },
  {
    id: 2,
    name: "sido",
    email: "the Community version",
    age: 50,
    phone: "0556308086",
    access: "User",
  },
  {
    id: 3,
    name: "Data Grid",
    email: "the Community version",
    age: 50,
    phone: "0556308086",
    access: "Manager",
  },
  {
    id: 4,
    name: "Data Grid",
    email: "the Community version",
    age: 50,
    phone: "0556308086",
    access: "Admin",
  },
  {
    id: 5,
    name: "Data Grid",
    email: "the Community version",
    age: 50,
    phone: "0556308086",
    access: "User",
  },
];

export const columns = [
  { field: "id", headerName: "ID", align: "center", headerAlign: "center" },
  { field: "name", headerName: "name", align: "center", headerAlign: "center" },
  {
    field: "email",
    headerName: "email",
    flex: 1,
    align: "center",
    headerAlign: "center",
  },
  { field: "age", headerName: "age", align: "center", headerAlign: "center" },
  {
    field: "phone",
    headerName: "phone",
    flex: 1,
    align: "center",
    headerAlign: "center",
  },
  {
    field: "access",
    headerName: "access",
    flex: 1,
    align: "center",
    display:"flex",
    headerAlign: "center",
    renderCell: ({ row: { access } }) => {
      return (
        <Box sx={{p:2,width:"99px",height:"50px",display:"flex",justifyContent:"center",textAlign:"center",bgcolor:access==="Admin"? "#1e88e5bb":access==="User"? "#00e6779e":"#ba68c8"}}>
          <Typography>{access}</Typography>
        </Box>
      );
    },
  },
];
