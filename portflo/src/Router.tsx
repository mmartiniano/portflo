import React, { PropsWithChildren } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Page from './pages/Page';
import NotFound from './pages/NotFound';


const Router: React.FC<PropsWithChildren> = ({ children }) => (
    <BrowserRouter>
        {children}
        <Routes>
            <Route path="/" element={<Page />}>
                <Route path=":page" element={<Page />} />
            </Route>
            <Route path="*" element={<NotFound />} />
        </Routes>
    </BrowserRouter>
);

export default Router;