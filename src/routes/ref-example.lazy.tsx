import { createLazyFileRoute } from '@tanstack/react-router';
import RefExample from '../components/examples/RefExample';

export const Route = createLazyFileRoute('/ref-example')({
  component: RefExample,
});
