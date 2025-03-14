import { Slot, Slottable } from '@radix-ui/react-slot';

import type { ReactNode } from 'react';

interface Card1Props {
  name: string;
  children?: ReactNode;
}

const Card1 = ({ name, children }: Card1Props) => (
  <div className="border p-4 m-4">
    <h2>{name}</h2>
    <Slot>{children}</Slot>
  </div>
);

export default function TestSlot() {
  return (
    <>
      <Card1 name="aaa" />
      <Card1 name="bbb">
        <div>Custom Content</div>
      </Card1>
      <Card1 name="ccc">
        <div>Content1</div>
        <Slottable>
          <div>Replaced Content</div>
        </Slottable>
        <div>Content3</div>
      </Card1>

      <Button asChild>
        <a href="/contact" className="border bg-blue-50">
          Contact asChild=true
        </a>
      </Button>

      <Button asChild={false}>
        <a href="/contact" className="border bg-blue-50">
          Contact asChild=false
        </a>
      </Button>

      <Button2 asChild leftElement={<span>Slottable</span>} rightElement={<span>asChild=true</span>}>
        <a href="/contact" className="border bg-blue-50">
          Contact
        </a>
      </Button2>

      <Button2 asChild={false} leftElement={<span>Slottable</span>} rightElement={<span>asChild=false</span>}>
        <a href="/contact" className="border bg-blue-50">
          Contact
        </a>
      </Button2>
    </>
  );
}

interface ButtonProps {
  asChild?: boolean;
  [key: string]: any;
}

function Button({ asChild, ...props }: ButtonProps) {
  const Comp = asChild ? Slot : 'button';
  return <Comp className="border p-4 m-4" {...props} />;
}

interface Button2Props {
  asChild?: boolean;
  children?: ReactNode;
  leftElement?: ReactNode;
  rightElement?: ReactNode;
  [key: string]: any;
}

function Button2({ asChild, children, leftElement, rightElement, ...props }: Button2Props) {
  const Comp = asChild ? Slot : 'button';
  return (
    <Comp className="border p-4 m-4" {...props}>
      {leftElement}
      <Slottable>{children}</Slottable>
      {rightElement}
    </Comp>
  );
}
