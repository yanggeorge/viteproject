import { createRootRoute, Link, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';

// Home component
export function Home() {
  return (
    <div>
      <ul style={{ listStyle: 'decimal inside' }}>
        <li>
          <Link to="/test">Test</Link>
        </li>
        <li>
          <Link to="/index-page">Index</Link>
        </li>
        <li>
          <Link to="/layout1">Layout1</Link>
        </li>
        <li>
          <Link to="/raw-html-with-css">RawHTMLWithCSS</Link>
        </li>
        <li>
          <Link to="/upgrade-form">UpgradeForm</Link>
        </li>
        <li>
          <Link to="/navigation">Navigation</Link>
        </li>
        <li>
          <Link to="/test-form">TestForm</Link>
        </li>
        <li>
          <Link to="/test-compose-refs">TestComposeRefs</Link>
        </li>
        <li>
          <Link to="/test-slot">TestSlot</Link>
        </li>
        <li>
          <Link to="/test-primitive">TestPrimitive</Link>
        </li>
        <li>
          <Link to="/test-state-machine">TestStateMachine</Link>
        </li>
        <li>
          <Link to="/test-toggle">TestToggle</Link>
        </li>
        <li>
          <Link to="/flow1">xyflow Flow1</Link>
        </li>
        <li>
          <Link to="/flow2">xyflow Flow2</Link>
        </li>
        <li>
          <Link to="/overflow">overflow</Link>
        </li>
        <li>
          <Link to="/ref-example">ref-example</Link>
        </li>
      </ul>
    </div>
  );
}

// NoMatch component for 404 pages
function NoMatch() {
  return (
    <div>
      <h2>It looks like you're lost...</h2>
      <p>
        <a href="/">Go to the home page</a>
      </p>
    </div>
  );
}

export const Route = createRootRoute({
  component: () => (
    <>
      {/* <div className="p-2 flex gap-2">
        <Link to="/" className="[&.active]:font-bold">
          Home
        </Link>{' '}
        <Link to="/about" className="[&.active]:font-bold">
          About
        </Link>
      </div>
      <hr /> */}
      <Outlet />
      <TanStackRouterDevtools />
    </>
  ),
  notFoundComponent: () => <NoMatch />,
});
