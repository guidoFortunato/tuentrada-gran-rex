import { Navigate, Route, Routes } from "react-router-dom";
import { ErrorApi } from "../pages/";

export const ErrorRouter = () => {
  // console.log('entra a error')
  return (
    <Routes>
      <Route path="/" element={<Navigate to='error' />} />
      <Route path="error" element={<ErrorApi />} />
      <Route path="/*" element={<Navigate to='error' />} />
    </Routes>
  );
};
