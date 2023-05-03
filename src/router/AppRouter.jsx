import { Navigate, Route, Routes } from "react-router";

import {DcPage,HeroesRoutes,MarvelPage} from '../heroes';
// import { MarvelPage } from "../heroes/pages/MarvelPage";
// import { DcPage } from "../heroes/pages/DcPage";
import { LoginPage } from "../auth/pages/LoginPage";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";


export const AppRouter = () => {
  return (
    <>
        <Routes>
            {/* <Route path="marvel" element={<MarvelPage />} />
            <Route path="dc" element={<DcPage />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="/" element={<Navigate to="/marvel" />} /> */}
          {/* <Route path="login" element={<LoginPage/>}/> */}

          <Route path="/login" element={
            <PublicRoute>
              <LoginPage/>
            </PublicRoute>
            }
          />

          <Route path="/*" element={
            <PrivateRoute>
              <HeroesRoutes/>
            </PrivateRoute>
            }
          />
          {/* <Route path="/*" element={<HeroesRoutes/>}/> */}
        </Routes>
    </>
  )
}
