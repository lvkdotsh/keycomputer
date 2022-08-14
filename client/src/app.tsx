import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';

import { Header } from './components/Header';
import { FamilyPage } from './pages/FamilyPage';
import { Home } from './pages/Home';
import { KeyPage } from './pages/KeyPage';

export const App: FC = () => {
    return (
        <div className="w-full min-h-screen bg-neutral-900 text-white">
            <div className="mx-auto w-full max-w-4xl">
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/key/:key_id" element={<KeyPage />} />
                    <Route path="/family/:key_id" element={<FamilyPage />} />
                </Routes>
                <div className="py-8 w-full flex justify-around">
                    <a
                        href="https://twitter.com/lucemansnl"
                        target="_blank"
                        className="flex items-center gap-2"
                    >
                        <div className="gap-2 border-yellow-500 bg-neutral-800 md:px-4 md:py-1 rounded-full md:rounded-none hover:brightness-90 flex border-2 items-center justify-center w-fit h-fit">
                            <span className="hidden md:block">
                                A Lucemans Site
                            </span>
                            <img
                                className="w-8 rounded-full"
                                src="https://header.luc.computer/public/500x500.webp"
                                alt=""
                            />
                        </div>
                        <div className="block md:hidden">Lucemans</div>
                    </a>
                </div>
            </div>
        </div>
    );
};
