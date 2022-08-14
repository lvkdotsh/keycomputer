import { FC } from 'react';
import { Link } from 'react-router-dom';

export const Header: FC = () => {
    return (
        <div className="w-full py-4 px-8 border-b border-b-yellow-500 flex justify-between items-center">
            <div className="bg-neutral-800 text-white w-fit font-bold border-yellow-500 border-2 hover:brightness-90">
                <Link to="/" className="cursor-pointer">
                    <div className="border-r-2 border-r-yellow-500 py-2 inline-block px-2">
                        <span className="hover:rotate-90">🔑</span>
                    </div>
                    <span className="inline-block px-2 py-2">key.computer</span>
                </Link>
            </div>
            <a
                href="https://twitter.com/lucemansnl"
                className="border-yellow-500 bg-neutral-800 md:px-4 md:py-1 rounded-full md:rounded-none hover:brightness-90 flex border-2 items-center justify-center w-fit h-fit"
            >
                <span className="hidden md:block">A Lucemans Site</span>
                <img
                    className="w-8 rounded-full"
                    src="https://header.luc.computer/public/500x500.webp"
                    alt=""
                />
            </a>
        </div>
    );
};
