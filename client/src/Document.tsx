import { FC } from "react";
import { App } from "./app";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export const Document: FC = () => {
    return (
        <BrowserRouter>
            <App />
        </BrowserRouter>
    );
};
