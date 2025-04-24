import { createLazyFileRoute } from '@tanstack/react-router';
import Layout1 from '../components/layouts/Layout1';

export const Route = createLazyFileRoute('/layout1')({
  component: Layout1,
});
