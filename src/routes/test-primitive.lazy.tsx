import { createLazyFileRoute } from '@tanstack/react-router';
import TestPrimitive from '../components/radix/TestPrimitive';

export const Route = createLazyFileRoute('/test-primitive')({
  component: TestPrimitive,
});
