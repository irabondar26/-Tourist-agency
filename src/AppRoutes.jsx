import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MainPage from "./pages/MainPage/MainPage";
import ToursPage from './pages/ToursPage/ToursPage';
import ContactsPage from './pages/ContactsPage/ContactsPage';
import TourPage from './pages/TourPage/TourPage';

function AppRoutes() {
  return (
    <Routes>
        <Route path="/" element={<MainPage/>}/>
        <Route path="/tours" element={<ToursPage/>}/>
        <Route path="/contacts" element={<ContactsPage/>}/>
        <Route path="/tour" element={<TourPage/>}/>
    </Routes>
  );
}

export default AppRoutes;
