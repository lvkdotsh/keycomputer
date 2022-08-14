import { FC } from "react";
import { Header } from "./header";

export const App: FC = () => {
    return (
        <div className="w-full min-h-screen bg-neutral-900">
            <Header />
        </div>
    );
};
