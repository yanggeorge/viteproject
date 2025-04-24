import { createLazyFileRoute } from '@tanstack/react-router';
import '@xyflow/react/dist/style.css';
import Flow1 from '../components/flow/f1/Flow1';

export const Route = createLazyFileRoute('/flow1')({
  component: Flow1,
});
