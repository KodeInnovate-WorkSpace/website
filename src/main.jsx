import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/home.page";
import AboutPage from "./pages/about.page";
import CareerPage from "./pages/career.page";
import ContactPage from "./pages/contact.page";
import PropertiesPage from "./pages/properties.page";
import { CursorProvider } from "./context/cursor.context";
import { FirebaseProvider } from "./context/firebase.context";
import AdminPage from "./pages/admin.page";
import ScrollTopButton from "./components/custom/scroll_to_top_button";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/about",
    element: <AboutPage />,
  },
  {
    path: "/properties",
    element: <PropertiesPage />,
  },
  {
    path: "/contact",
    element: <ContactPage />,
  },
  {
    path: "/careers",
    element: <CareerPage />,
  },
  {
    path: "/admin",
    element: <AdminPage />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <FirebaseProvider>
      <CursorProvider>
        <RouterProvider router={router} />
        <ScrollTopButton />
      </CursorProvider>
    </FirebaseProvider>
  </StrictMode>
);
