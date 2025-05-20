export function sum(a: number, b: number): number {
  return a + b;
}

type SmartReturnType<T> = T extends (...args: any[]) => infer R ? (R extends Promise<infer U> ? U : R) : never;

type Fn1 = () => string;
type Fn2 = () => Promise<boolean>;

type _R1 = SmartReturnType<Fn1>; // string
type _R2 = SmartReturnType<Fn2>; // boolean

export type Prettify<T> = {
  [K in keyof T]: T[K];
} & {};

type Point = {
  x: number;
  y: number;
};

type KeysOfPoint = keyof Point;
// 鼠标放在 check 上，查看类型
type _check = Prettify<KeysOfPoint>;

type Shapes =
  | {
      kind: 'circle';
      radius: number;
    }
  | {
      kind: 'square';
      sideLength: number;
    };

type _Omitted = Exclude<Shapes, { kind: 'circle' }>;

type GetType<T, K extends keyof T> = T[K];
type Person = {
  name: string;
  age: number;
  isStudent: boolean;
};

// 使用 GetType 取出属性类型：
type _NameType = GetType<Person, 'name'>; // string
type _AgeType = GetType<Person, 'age'>; // number
type _IsStudentType = GetType<Person, 'isStudent'>; // boolean

type key = 'age';
type _NameType2 = Person[key];
