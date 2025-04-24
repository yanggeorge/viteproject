import { createLazyFileRoute } from '@tanstack/react-router';
import TestToggle from '../components/radix/TestToggle';

export const Route = createLazyFileRoute('/test-toggle')({
  component: TestToggle,
});
