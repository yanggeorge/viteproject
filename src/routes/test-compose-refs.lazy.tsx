import { createLazyFileRoute } from '@tanstack/react-router';
import TestComposeRefs from '../components/radix/TestComposeRefs';

export const Route = createLazyFileRoute('/test-compose-refs')({
  component: TestComposeRefs,
});
