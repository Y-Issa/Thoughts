import {
  Navigate,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";

import RootLayout from "./layouts/RootLayout";
import Profile from "./pages/Profile";
import Dashboard, { ideasLoader } from "./pages/Dashboard";
import Create, { createAction } from "./pages/Create";
import { theme_dark, theme_light } from "./theme";
import { useDarkMode } from "./contexts/DarkModeContext";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Dashboard />} loader={ideasLoader} />
      <Route path="create" element={<Create />} action={createAction} />
      <Route path="profile" element={<Profile />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Route>
  )
);

function App() {
  const { isDark } = useDarkMode();
  return (
    <ChakraProvider theme={isDark ? theme_dark : theme_light}>
      <RouterProvider router={router} />
    </ChakraProvider>
  );
}

export default App;
