import { createLazyFileRoute } from '@tanstack/react-router';
import UpgradeForm from '../components/hep/UpgradeForm';

export const Route = createLazyFileRoute('/upgrade-form')({
  component: UpgradeForm,
});
