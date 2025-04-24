import React from 'react';

type Machine<S> = { [k: string]: { [k: string]: S } };
type MachineState<T> = keyof T;
type MachineEvent<T> = keyof UnionToIntersection<T[keyof T]>;

// 🤯 https://fettblog.eu/typescript-union-to-intersection/
type UnionToIntersection<T> = (T extends any ? (x: T) => any : never) extends (x: infer R) => any ? R : never;

function useStateMachine<M>(initialState: MachineState<M>, machine: M & Machine<MachineState<M>>) {
  return React.useReducer((state: MachineState<M>, event: MachineEvent<M>): MachineState<M> => {
    const nextState = (machine[state] as any)[event];
    return nextState ?? state;
  }, initialState);
}

type LightMachine = {
  off: {
    toggle: 'on';
  };
  on: {
    toggle: 'off';
    blink: 'blinking';
  };
  blinking: {
    toggle: 'off';
    blink: 'on';
  };
};

function LightSwitch() {
  const [state, dispatch] = useStateMachine<LightMachine>('off', {
    off: { toggle: 'on' },
    on: { toggle: 'off', blink: 'blinking' },
    blinking: { toggle: 'off', blink: 'on' },
  });

  return (
    <div className="border p-4 m-4">
      <p>
        Light is <span className="text-red-500">{state}</span> !
      </p>
      <p>three states: off on blinking</p>
      <p>toggle and blink are events that trigger state changes</p>
      <button className="border p-4 m-4" onClick={() => dispatch('toggle')}>
        Toggle
      </button>
      {state === 'on' ? (
        <button className="border p-4 m-4" onClick={() => dispatch('blink')}>
          Blink
        </button>
      ) : null}
      {state === 'blinking' ? (
        <button className="border p-4 m-4" onClick={() => dispatch('blink')}>
          Stop Blinking
        </button>
      ) : null}
    </div>
  );
}

export default function TestStateMachine() {
  return <LightSwitch />;
}
