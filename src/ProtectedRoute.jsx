import React from "react";
import { useRecoilValue } from "recoil";
import { loginAuth } from "./atom";
import { Outlet, Navigate } from "react-router-dom";

const ProtectedRoute = () => {
  const loginDetail = useRecoilValue(loginAuth);
  //   if (!loginDetail.userAdminId) {
  //     navigate("/admin-login");
  //   }
  //   let PrivateRoute = preventRoute;
  // console.log(JSON.parse(sessionStorage.getItem("logIn")).logIn);
  // console.log(sessionStorage.getItem("logIn"));
  return (
    <React.Fragment>
      {/* <Route {...rest}> */}
      {sessionStorage.getItem("logIn") ? (
        <Outlet />
      ) : (
        <Navigate to="/admin-login" />
      )}

      {/* <PrivateRoute /> */}
      {/* </Route> */}
    </React.Fragment>
  );
};

export default ProtectedRoute;
