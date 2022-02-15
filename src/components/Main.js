import { Route, Routes } from "react-router-dom";

export const Main = ({ children }) => {
  return (
    <main className="main">
      <div className="container">
        {children}
      </div>
    </main>
  );
};
