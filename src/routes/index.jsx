import { createBrowserRouter } from "react-router-dom";

import Container from "../components/container"

import Dashboard from "../components/dashboard";

import Cover from "../components/cover";

const IndexRouter = createBrowserRouter([
  {
    path: "/",
    element: <Container />,
    children: [
      {
        path: "destiny",
        element: <Dashboard />,
      },
      {
        path:"/",
        element:<Cover/>
      }
    ],
  },])

  export default IndexRouter