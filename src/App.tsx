import { lazy } from 'react';
import type { RouteObject } from 'react-router-dom';
import { Link, useRoutes } from 'react-router-dom';
import Flow1 from './pages/flow/f1/Flow1';
import Flow2 from './pages/flow/f2/Flow2';

// Keep Home component as is since it's used directly
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
        <li>
          <Link to="/TestPrimitive">TestPrimitive</Link>
        </li>
        <li>
          <Link to="/TestStateMachine">TestStateMachine</Link>
        </li>
        <li>
          <Link to="/TestToggle">TestToggle</Link>
        </li>
        <li>
          <Link to="/Flow1">xyflow Flow1</Link>
        </li>
        <li>
          <Link to="/Flow2">xyflow Flow2</Link>
        </li>
      </ul>
    </div>
  );
}

// Define lazy-loaded components
const RawHTMLWithCSS = lazy(() => import('./pages/examples/rawHTMLWithCSS'));
const Test = lazy(() => import('./pages/examples/Test'));
const Index = lazy(() => import('./pages/Index'));
const Layout1 = lazy(() => import('./pages/layouts/Layout1'));
const UpgradeForm = lazy(() => import('./pages/hep/UpgradeForm'));
const Navigation = lazy(() => import('./pages/hep/Navigation'));
const TestForm = lazy(() => import('./pages/examples/TestForm'));
const TestComposeRefs = lazy(() => import('./pages/radix/TestComposeRefs'));
const TestSlot = lazy(() => import('./pages/radix/TestSlot'));
const TestPrimitive = lazy(() => import('./pages/radix/TestPrimitive'));
const TestStateMachine = lazy(() => import('./pages/radix/TestStateMachine'));
const TestToggle = lazy(() => import('./pages/radix/TestToggle'));

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
  { path: '/TestPrimitive', element: <TestPrimitive /> },
  { path: '/TestStateMachine', element: <TestStateMachine /> },
  { path: '/TestToggle', element: <TestToggle /> },
  { path: '/Flow1', element: <Flow1 /> },
  { path: '/Flow2', element: <Flow2 /> },
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
