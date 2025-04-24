import { createLazyFileRoute } from '@tanstack/react-router';
import TestSlot from '../components/radix/TestSlot';

export const Route = createLazyFileRoute('/test-slot')({
  component: TestSlot,
});
