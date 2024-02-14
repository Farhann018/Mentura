import { Route, Routes } from "react-router-dom";
import AddQuestion from "./Pages/AddQuestion";
import AddState from "./Pages/AddState";
import LinkOptions from "./Pages/LinkOptions";

const AdminRouter = () => {
  return (
    <Routes>
      <Route path="/question/add" element={<AddQuestion />} />
      <Route path="/states/add" element={<AddState />} />
      <Route path="/link-options" element={<LinkOptions />} />
    </Routes>
  );
};

export default AdminRouter;
