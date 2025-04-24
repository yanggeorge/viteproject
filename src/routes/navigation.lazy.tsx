import { createLazyFileRoute } from '@tanstack/react-router';
import Navigation from '../components/hep/Navigation';

export const Route = createLazyFileRoute('/navigation')({
  component: Navigation,
});
