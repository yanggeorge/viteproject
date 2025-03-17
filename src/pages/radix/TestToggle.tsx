import { Toggle } from '@radix-ui/react-toggle';
import styles from './TestToggle.module.css';

const Styled = () => <Toggle className={styles.root}>Toggle</Toggle>;

export default function TestToggle() {
  return <Styled />;
}
