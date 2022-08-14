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
            </div>
        </div>
    );
};
