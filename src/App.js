import React, { useEffect } from 'react';
import AppRoutes from "./AppRoutes";
import Header from './Components/Header/Header';
import { saveStateToLocalStorage, getStateFromLocalStorage } from "./utils/localStorageHelper";

function App() {

  const getTours = async () => {
    const data = await fetch("./tours.json").then(res => res.json());
    saveStateToLocalStorage("tours", data.tours)
  }

  const getTestimonials = async () => {
    const data = await fetch("./testimonials.json").then(res => res.json());
    saveStateToLocalStorage("testimonials", data.testimonials)
  }

  useEffect(() => {
    const tours = getStateFromLocalStorage("tours");
    const testimonials = getStateFromLocalStorage("testimonials");
    if (!tours) {
      getTours();
    }
    if (!testimonials) {
      getTestimonials();
    }
  }, [])

  return (
    <>
      <Header />
      <AppRoutes />
    </>
  );
}

export default App;
