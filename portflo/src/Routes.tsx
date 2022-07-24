import React from 'react';
import { Routes as BrowserRoutes, Route } from 'react-router-dom';
import Page from './pages/Page';
import NotFound from './pages/NotFound';


const Routes: React.FC = () => (
    <BrowserRoutes>
        <Route path="/" element={<Page />}>
            <Route path=":page" element={<Page />} />
        </Route>
        <Route path="*" element={<NotFound />} />
    </BrowserRoutes>
);

export default Routes;