import { createFileRoute } from '@tanstack/react-router';

// Import the Home component from __root.tsx
import { Home } from './__root';

export const Route = createFileRoute('/')({
  component: Home,
});

// The Home component is now imported from __root.tsx
