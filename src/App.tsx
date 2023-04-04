import React, { Suspense, useContext } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { AboutPageAsync } from "./pages/AboutPage/AboutPage.async";
import { MainPageAsync } from "./pages/MainPage/MainPage.async";
import { classNames } from "./helpers/classNames/classNames";
import { useTheme } from "./theme/useTheme";
import "./styles/index.scss";

export const App = () => {
  const {theme, toggleTheme} = useTheme();
  console.log(theme);

  return (
    <div className={classNames("app", {}, [theme])}>
      <button onClick={toggleTheme}>Toggle theme</button>
      <div>
        <Link to="/">Главная</Link>
        <Link to="/about">О сайте</Link>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/about" element={<AboutPageAsync />} />
          <Route path="/" element={<MainPageAsync />} />
        </Routes>
      </Suspense>
    </div>
  );
};
