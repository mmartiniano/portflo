import React from 'react';
import { Routes as BrowserRoutes, Route } from 'react-router-dom';
import Page from './pages/Page';


const Routes: React.FC = () => (
    <BrowserRoutes>
        <Route path="/" element={<Page />}>
            <Route path=":page" element={<Page />} />
        </Route>
    </BrowserRoutes>
);

export default Routes;