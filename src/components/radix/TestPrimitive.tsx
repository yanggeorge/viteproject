import { Primitive } from '@radix-ui/react-primitive';

const TestPrimitive = () => {
  return (
    <>
      <Primitive.div>
        <div className="border p-4 m-4">TestPrimitive</div>
      </Primitive.div>
      <Primitive.div asChild>
        <span className="border p-4 m-4">TestPrimitive</span>
      </Primitive.div>
    </>
  );
};

export default TestPrimitive;
