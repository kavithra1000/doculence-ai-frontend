
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import SideBar from "./components/SideBar";
import { ToastContainer } from "react-toastify";
import { useThemeStore } from "./stores/useThemeStore.js";
import { Routes, Route } from "react-router-dom";
import Main from "./pages/Main"
import Pricing from "./pages/Pricing";
import { Toaster } from 'react-hot-toast'
import { useAuthStore } from "./stores/useAuthStore.js";
import { useEffect } from "react";
import { Loader } from "lucide-react";


function App() {

  const { theme } = useThemeStore()
  const { authUser, checkAuth, isCheckingAuth } = useAuthStore();

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  console.log(authUser);

  if (isCheckingAuth && !authUser) {
    return (
      <div className='flex items-center justify-center h-screen'>
        <Loader className='size-10 animate-spin' />
      </div>
    )
  }

  console.log(theme)

  return (
    <div data-theme={theme.theme} className="App" >
      <div className="fixed w-screen h-screen bg-white-grid z-0" />
      <ToastContainer />
      <Toaster />
      <div className="relative z-10">
        <Routes>
          <Route path={"/"} element={authUser ? <Main /> : <Home />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
