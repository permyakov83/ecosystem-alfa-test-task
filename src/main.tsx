import React from "react"
import Main from "./pages/Home"
import { store } from "./app/store"
import { Provider } from "react-redux"
import CardPage from "./pages/CardPage"
import { createRoot } from "react-dom/client"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import "./index.css"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "/card/:id",
    element: <CardPage />,
  },
])

const container = document.getElementById("root")

if (container) {
  const root = createRoot(container)

  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </React.StrictMode>,
  )
} else {
  throw new Error(
    "Root element with ID 'root' was not found in the document. Ensure there is a corresponding HTML element with the ID 'root' in your HTML file.",
  )
}
