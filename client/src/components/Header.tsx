import { FC } from "react";
import { Link } from "react-router-dom";

export const Header: FC = () => {
    return (
        <div className="w-full py-4 px-8 border-b border-b-yellow-500">
            <div className="bg-neutral-800 text-white w-fit font-bold border-yellow-500 border-2">
                <Link to="/" className="cursor-pointer">
                    <div className="border-r-2 border-r-yellow-500 py-2 inline-block px-2">
                        <span className="hover:rotate-90">🔑</span>
                    </div>
                    <span className="inline-block px-2 py-2">key.computer</span>
                </Link>
            </div>
        </div>
    );
};
