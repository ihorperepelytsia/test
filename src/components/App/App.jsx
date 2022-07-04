import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { ListPhotosPage } from "pages/ListPhotosPage";
import { PhotoLargPage } from "pages/PhotoLargPage";

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<ListPhotosPage />} />
        <Route path="/photo-larg" element={<PhotoLargPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
};
