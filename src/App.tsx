import { Link, RouteObject, useRoutes } from 'react-router-dom';
import Index from './pages';

function Home() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/index">Index</Link>
        </li>
      </ul>
    </nav>
  );
}

function NoMatch() {
  return (
    <div>
      <h2>It looks like you're lost...</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}

const routes: RouteObject[] = [
  { path: '/', element: <Home /> },
  { path: '/index', element: <Index /> },
  { path: '*', element: <NoMatch /> },
];

function App() {
  return useRoutes(routes);
}
export default App;
