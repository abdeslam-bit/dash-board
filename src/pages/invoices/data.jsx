import { Box, Typography } from "@mui/material";

export const rows = [
  {
    id: 1,
    registerId: "354534",

    name: "ahmed",
    email: "the Community version",
    age: 50,
    city: "amsterdam",

    phone: "0556308086",
    zipcode: "3444532",
  },
  {
    id: 2,
    registerId: "354534",

    name: "sido",
    email: "the Community version",
    age: 50,
    phone: "0556308086",
    city: "amsterdam",
    zipcode: "3444532",
  },
  {
    id: 3,
    registerId: "354534",

    name: "Data Grid",
    email: "the Community version",
    age: 50,
    phone: "0556308086",
    city: "amsterdam",
    zipcode: "3444532",
  },
  {
    id: 4,
    registerId: "354534",

    name: "Data Grid",
    email: "the Community version",
    age: 50,
    phone: "0556308086",
    city: "amsterdam",
    zipcode: "3444532",
  },
  {
    zipcode: "3444532",
    id: 5,
    registerId: "354534",
    name: "Data Grid",
    email: "the Community version",
    age: 50,
    phone: "0556308086",
    city: "amsterdam",
  },
];

export const columns = [
  { field: "id", headerName: "ID", align: "center", headerAlign: "center" },
  {
    field: "registerId",
    headerName: "RegisterID",
    align: "center",
    headerAlign: "center",
  },

  {
    field: "city",
    headerName: "City",
    align: "center",
    headerAlign: "center",
  },

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
    field: "zipcode",
    headerName: "ZipCode",
    align: "center",
    headerAlign: "center",
  },
];
