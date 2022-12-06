import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { ThemeProvider} from '@mui/material/styles';

import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Root from './routes/Root';
import Home from './routes/Home';
import Users from './routes/Users';
import User from './routes/User';
import NotFound from "./routes/NotFound"
import reportWebVitals from './reportWebVitals';
import theme from "./theme";

const router = createBrowserRouter([
  {path: '/',
  element: <Root />,
  errorElement: <NotFound />,
  children: [
    {path: '',
    element: <Home />   
    },
    {path: 'users',
    element: <Users />
    },
    {path: 'users/:userId',
    element: <User />   
    },
  ]  
  },
  
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider theme={theme}>
    <RouterProvider router={router}/>
  </ThemeProvider>
);

reportWebVitals();
