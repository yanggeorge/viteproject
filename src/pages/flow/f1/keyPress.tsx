import { useKeyPress } from '@xyflow/react';

export default function KeyListener() {
  const spacePressed = useKeyPress('Space');
  const cmdAndCPressed = useKeyPress(['Meta+c', 'Ctrl+c']);
  const cmdAndVPressed = useKeyPress(['Meta+v', 'Ctrl+v']);

  return (
    <div>
      {spacePressed && <p>Space pressed!</p>}
      {cmdAndCPressed && <p>Cmd + C pressed!</p>}
      {cmdAndVPressed && <p>Cmd + V pressed!</p>}
    </div>
  );
}
