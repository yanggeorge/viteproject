import { createLazyFileRoute } from '@tanstack/react-router';
import Overflow from '../components/overflow/Overflow';

export const Route = createLazyFileRoute('/overflow')({
  component: Overflow,
});
