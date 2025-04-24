import { createLazyFileRoute } from '@tanstack/react-router';
import TestStateMachine from '../components/radix/TestStateMachine';

export const Route = createLazyFileRoute('/test-state-machine')({
  component: TestStateMachine,
});
