import { Route, Routes } from "react-router-dom";
import AddQuestion from "./Pages/AddQuestion";

const AdminRouter = () => {
  return (
    <Routes>
      <Route path="/question/add" element={<AddQuestion />} />
    </Routes>
  );
};

export default AdminRouter;
