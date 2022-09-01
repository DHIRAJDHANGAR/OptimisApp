import { Route, Routes } from "react-router-dom";
import UserDashboard from "../Features/Users";
import UserDetails from "../Features/Users/GetDetails";
const Navigation = () => {
  return (
    <Routes>
      <Route path="/" element={<UserDashboard />}></Route>
      <Route path="/details/:id" element={<UserDetails />}></Route>
    </Routes>
  );
};
export default Navigation;
