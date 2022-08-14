import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import { KeyPreviewCard } from "./components/KeyPreviewCard";
import { Header } from "./components/Header";
import { useKeys } from "./lib/useKeys";
import { Home } from "./pages/Home";
import { KeyPage } from "./pages/KeyPage";

export const App: FC = () => {
    return (
        <div className="w-full min-h-screen bg-neutral-900">
            <div className="mx-auto w-full max-w-4xl">
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/key/:key_id" element={<KeyPage />} />
                </Routes>
            </div>
        </div>
    );
};
