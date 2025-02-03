import Home from './Pages/Home/home.jsx';
import Kino from './Pages/Movie/Kino.jsx';

const Routes = [
  { path: '/', element: <Home /> },
  { path: '/about', element: <Kino /> },
  { path: '/kino', element: <Kino /> },
  { path: '/contacts', element: <Kino /> },
];

export default Routes;