import { Provider } from 'react-redux';
// On importe ReactDom qui nous permettra d'injecter notre Layoutlication dans le DOM
import ReactDOM from 'react-dom/client';
// On importe notre composant principal
import Layout from './Layout';
// On importe notre fichier de style global
import './index.scss';

//react-router
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import store from './store';
import About from './pages/About'
import Contact from './pages/Contact'
import Error from './components/Error';
import Home from './pages/Home';
import HeroList from './pages/HerosList';
import SagaList from './pages/SagaList';
import SingleSaga from './pages/SingleSaga';
import SingleHero from './pages/SingleHero';
import User from './pages/User'
import UserInfos from './components/UserProfile/UserInfos'
import UserAddHero from './components/UserProfile/UserAddHero'
import UserFavorites from './components/UserProfile/UserFavorites'
import Login from './pages/Login'
import Register from './pages/Register'
import SearchResult from './pages/SearchResult'
import PrivatesRoutes from './components/PrivatesRoutes'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        //path: "/", pas besoin s'il y a le index
        index: true,
        element: <Home />,
        errorElement: <Error />,
      },
      {
        path: "/heros",
        element: <HeroList />,
        errorElement: <Error />,
      },
      {
        path: "/heros/:slugHeroId",
        element: <SingleHero />,
        errorElement: <Error />,
      },
      {
        path: "/sagas",
        element: <SagaList/>,
        errorElement: <Error />,
      },     
      {
        path: "/sagas/:slugSagaId",
        element: <SingleSaga />,
        errorElement: <Error />,
      },
      {
        path: "/",
        element: <PrivatesRoutes />,
        errorElement: <Error />,
        children: [
          {
            path: "/user",
            element: <User />,
            errorElement: <Error />,
            children: [
              {
                path: "/user/account",
                element: <UserInfos />,
                errorElement: <Error />,
              },
              {
                path: "/user/addHero",
                element: <UserAddHero />,
                errorElement: <Error />,
              },
              {
                path: "/user/favorites",
                element: <UserFavorites />,
                errorElement: <Error />,
              },
            ],
          }
        ],
      },
      {
        path: "/contact",
        element: <Contact/>,
        errorElement: <Error />,
      }, 
      {
        path: "/about",
        element: <About/>,
        errorElement: <Error />,
      }, 
      {
        path: "/login",
        element: <Login />,
        errorElement: <Error />,
      }, 
      {
        path: "/register",
        element: <Register />,
        errorElement: <Error />,
      }, 
      {
        path: "/search/result",
        element: <SearchResult />,
        errorElement: <Error />,
      },
    ],

  }
  
]);


// Je créer un root pour mon Layoutlication (a partir d'un élément HTML)
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

// On injecte notre Layoutlication dans le DOM
//<RouterProvider router={router} /> remplace <Layout />
root.render(
    <Provider store={store}>
      <RouterProvider router={router} /> 
    </Provider>,
);



