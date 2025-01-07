import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import NavBar from './main-page/NavBar';
import AllPublications from './publications-page/AllPublications';
import MainPage from './main-page/MainPage';
import './index.css'

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: (
        <>
          <NavBar />
          <MainPage />
        </>
      ),
    },
    {
      path: '/publications',
      element: (
        <>
          <NavBar />
          <AllPublications />
        </>
      ),
    },
  ],
  { basename: '/Dr-Fadi-Herzallah-portfolio' } // Set your base path here
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;