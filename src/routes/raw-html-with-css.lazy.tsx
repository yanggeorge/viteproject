import { createLazyFileRoute } from '@tanstack/react-router';
import RawHTMLWithCSS from '../components/examples/rawHTMLWithCSS';

export const Route = createLazyFileRoute('/raw-html-with-css')({
  component: RawHTMLWithCSS,
});
