import { createLazyFileRoute } from '@tanstack/react-router';
import IndexPage from '../components/Index';

export const Route = createLazyFileRoute('/index-page')({
  component: IndexPage,
});
