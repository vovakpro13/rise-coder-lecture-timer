import React from 'react';
import {BrowserRouter, Navigate, Route, Routes as BrowserRoutes} from "react-router-dom";
import {Routes} from "./routes";
import HomePage from "../components/HomePage";
import SetUpPage from "../components/SetUpPage";

const Router = () => {
    return (
        <BrowserRouter>
            <BrowserRoutes>
                <Route path={Routes.Home} element={<HomePage/>}/>
                <Route path={Routes.SetUp} element={<SetUpPage/>}/>

                <Route path="*"  element={<Navigate to={Routes.SetUp} />}/>
            </BrowserRoutes>
        </BrowserRouter>
    );
};

export default Router;