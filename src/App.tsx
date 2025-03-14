import type { RouteObject } from 'react-router-dom';
import { Link, useRoutes } from 'react-router-dom';
import RawHTMLWithCSS from './pages/examples/rawHTMLWithCSS';
import Test from './pages/examples/Test';
import Index from './pages/Index';
import Layout1 from './pages/layouts/Layout1';
import UpgradeForm from './pages/hep/UpgradeForm';
import Navigation from './pages/hep/Navigation';
import TestForm from './pages/examples/TestForm';
import TestComposeRefs from './pages/radix/TestComposeRefs';
import TestSlot from './pages/radix/TestSlot';

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
        <li>
          <Link to="/UpgradeForm">UpgradeForm</Link>
        </li>
        <li>
          <Link to="/Navigation">Navigation</Link>
        </li>
        <li>
          <Link to="/TestForm">TestForm</Link>
        </li>
        <li>
          <Link to="/TestComposeRefs">TestComposeRefs</Link>
        </li>
        <li>
          <Link to="/TestSlot">TestSlot</Link>
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
  { path: '/Navigation', element: <Navigation /> },
  { path: '/UpgradeForm', element: <UpgradeForm /> },
  { path: '/TestForm', element: <TestForm /> },
  { path: '/TestComposeRefs', element: <TestComposeRefs /> },
  { path: '/TestSlot', element: <TestSlot /> },
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
