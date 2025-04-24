import { createLazyFileRoute } from '@tanstack/react-router';
import TestForm from '../components/examples/TestForm';

export const Route = createLazyFileRoute('/test-form')({
  component: TestForm,
});
