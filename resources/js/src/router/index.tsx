import React, { useState, useEffect } from 'react';
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import BlankLayout from '../components/Layouts/BlankLayout';
import DefaultLayout from '../components/Layouts/DefaultLayout';
import { getRequest, isLoggedIn } from '../utils/Request';
import { componentMap } from './routes';

// Static imports for authentication components
import LoginBoxed from '../pages/Authentication/LoginBoxed';
import RegisterBoxed from '../pages/Authentication/RegisterBoxed';
import UnlockBoxed from '../pages/Authentication/UnlockBox';
import RecoverIdBoxed from '../pages/Authentication/RecoverIdBox';
import LoginCover from '../pages/Authentication/LoginCover';
import RegisterCover from '../pages/Authentication/RegisterCover';
import RecoverIdCover from '../pages/Authentication/RecoverIdCover';
import UnlockCover from '../pages/Authentication/UnlockCover';
import PrivateRoute from '../components/Layouts/PrivateRoute';

// Static component map with lazy loading
const fetchRoutes = async () => {
    let response = await getRequest('/api/routes'); // Adjust the endpoint according to your API
    return response;
};

const DynamicRoute = () => {
    const [routes, setRoutes] = useState([]);

    useEffect(() => {
        const fetchRoutesData = async () => {
            const fetchedRoutes = await fetchRoutes();
            setRoutes(fetchedRoutes);
        };

        fetchRoutesData();
    }, []);

    if (routes.length === 0) {
        return null; // or a loading indicator
    }

    const finalRoutes = routes.map((route) => {
        let Component = componentMap[route.componentLocation];

        if (!Component) {
            return null; // Handle case where component is not found in the map
        }

        const routeElement = (
            <PrivateRoute>
                {route.layout === 'blank' ?
                    <BlankLayout><Component /></BlankLayout> :
                    <DefaultLayout><Component /></DefaultLayout>
                }
            </PrivateRoute>
        );


        return {
            path: route.path,
            element: routeElement
        };
    }).filter(route => route !== null);

    const router = createBrowserRouter([
        {
            path: '/auth/login-boxed',
            element: <LoginBoxed />
        },
        {
            path: '/auth/register-boxed',
            element: <RegisterBoxed />
        },
        {
            path: '/auth/unlock-boxed',
            element: <UnlockBoxed />
        },
        {
            path: '/auth/recover-id-boxed',
            element: <RecoverIdBoxed />
        },
        {
            path: '/auth/login',
            element: <LoginCover />
        },
        {
            path: '/auth/register-cover',
            element: <RegisterCover />
        },
        {
            path: '/auth/recover-id-cover',
            element: <RecoverIdCover />
        },
        {
            path: '/auth/unlock-cover',
            element: <UnlockCover />
        },
        ...finalRoutes
    ]);

    return <RouterProvider router={router} />;
};

export default DynamicRoute;
