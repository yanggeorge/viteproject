import { createLazyFileRoute } from '@tanstack/react-router';
import Test from '../components/examples/Test';

export const Route = createLazyFileRoute('/test')({
  component: Test,
});
