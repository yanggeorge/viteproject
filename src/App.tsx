import { Link, RouteObject, useRoutes } from 'react-router-dom';
import Index from './pages/Index';
import RawHTMLWithCSS from './pages/examples/rawHTMLWithCSS';
import Test from './pages/examples/Test';
import Layout1 from './pages/layouts/Layout1';

function Home() {
  return (
    <div>
      <ul style={{ listStyle: 'decimal inside' }}>
        <li>
          <Link to="/test">Test</Link>
        </li>
        <li>
          <Link to="/index">Index</Link>
        </li>
        <li>
          <Link to="/layout1">Layout1</Link>
        </li>
        <li>
          <Link to="/RawHTMLWithCSS">RawHTMLWithCSS</Link>
        </li>
      </ul>
    </div>
  );
}

const routes: RouteObject[] = [
  { path: '/', element: <Home /> },
  { path: '/layout1', element: <Layout1 /> },
  { path: '/test', element: <Test /> },
  { path: '/index', element: <Index /> },
  { path: '/RawHTMLWithCSS', element: <RawHTMLWithCSS /> },

  { path: '*', element: <NoMatch /> },
];

function App() {
  return useRoutes(routes);
}
export default App;

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
