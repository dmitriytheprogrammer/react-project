import React  from 'react'
import { RouteObject, useRoutes } from "react-router-dom";
import { About } from '../components/pages/About';
import { Contacts } from '../components/pages/Contacts';
import { Home } from '../components/pages/Home';
import { Order } from '../components/pages/Order';
import { ABOUT_ROUTE, CONTACTS_ROUTE, HOME_ROUTE, ORDER_ROUTE, DOWNLOAD_ROUTE } from './configs';
import { useAuth } from '../hooks/useAuth';
import PdfForm from '../components/pages/PdfForm';

const MainRouter: React.FC = () => {
  const { isAuth } = useAuth();
  
  const basedPath: RouteObject[] = [
    { path: ABOUT_ROUTE, element: <About /> },
    { path: CONTACTS_ROUTE, element: <Contacts /> },
    { path: HOME_ROUTE, element: <Home/> },
    { path: DOWNLOAD_ROUTE, element: <PdfForm/> },
  ];

  const authPath: RouteObject[] = isAuth
    ? [{ path: ORDER_ROUTE, element: <Order /> }]
    : [];

  const resultPaths: RouteObject[] = basedPath.concat(authPath);
  
  return useRoutes(resultPaths);
};

export default MainRouter;