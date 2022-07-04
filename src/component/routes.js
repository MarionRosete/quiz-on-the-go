import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react'
import Main from "./pages/main";
import PageNotFount from "./pages/pagenotfount";
import Create from "./pages/create";

const AppRoute = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}>
          {/* <Route index element={<Home />} /> */}
          <Route path="/creat-exam" element={<Create />} />
          <Route path="*" element={<PageNotFount />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoute