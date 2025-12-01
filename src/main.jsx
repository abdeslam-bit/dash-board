import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import './index.css'
// routes
import Dashboard from "./pages/dashboard/Dashboard";
import Team from "./pages/team/Team";
import BarChart from "./pages/barChart/BarChart";
import Calendar from "./pages/calendar/Calendar";
import Faq from "./pages/faq/Faq";
import Form from "./pages/form/Form";
import Geography from "./pages/geography/Geography";
import Invoices from "./pages/invoices/Invoices";
import LineChart from "./pages/lineChart/LineChart";
import PieChart from "./pages/pieChart/PieChart";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children:[
      {
        path:"",
        element:<Dashboard/>
      },
      {
        path:"team",
        element:<Team/>
      },
      {
        path:"invoices",
        element:<Invoices/>
      },
      {
        path:"form",
        element:<Form/>
      },
      {
        path:"calendar",
        element:<Calendar/>
      },
      {
        path:"faq",
        element:<Faq/>
      },
      {
        path:"bar",
        element:<BarChart/>
      },
      {
        path:"pie",
        element:<PieChart/>
      },
      {
        path:"line",
        element:<LineChart/>
      },
      {
        path:"geography",
        element:<Geography/>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
