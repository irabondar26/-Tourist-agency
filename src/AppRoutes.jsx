import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MainPage from "./pages/MainPage/MainPage";
import ToursPage from './pages/ToursPage/ToursPage';
import ContactsPage from './pages/ContactsPage/ContactsPage';

function AppRoutes() {
  return (
    <Routes>
        <Route path="/" element={<MainPage/>}/>
        <Route path="/tours" element={<ToursPage/>}/>
        <Route path="/contacts" element={<ContactsPage/>}/>
        <Route path="/tour" element={<ContactsPage/>}/>
    </Routes>
  );
}

export default AppRoutes;
