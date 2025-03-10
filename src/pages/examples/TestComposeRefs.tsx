import * as React from 'react';
import { useComposedRefs } from '@radix-ui/react-compose-refs';

export default function TestComposeRefs() {
  const ref1 = React.useRef<HTMLButtonElement>(null);

  // React 在严格模式的双重渲染中，只在最终挂载到真实 DOM 时调用 ref 回调函数，而不是在模拟渲染时也调用。
  const ref2 = (node: HTMLButtonElement | null) => {
    console.log('ref2', node);
  };

  React.useEffect(() => {
    console.log('ref1.current after mount', ref1.current); // 挂载后输出 DOM 节点
  }, []);

  const ref3 = useComposedRefs(ref1, ref2);
  console.log('ref3 created');
  return <button ref={ref3}>Click me</button>;
}
