import { createLazyFileRoute } from '@tanstack/react-router';
import Flow2 from '../components/flow/f2/Flow2';

export const Route = createLazyFileRoute('/flow2')({
  component: Flow2,
});
