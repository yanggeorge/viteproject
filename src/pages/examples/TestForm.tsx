import { createContextScope } from '@radix-ui/react-context';

// 创建一个 Form 作用域的上下文
const [createFormContext, createFormScope] = createContextScope('FormScope');

// 定义上下文类型并创建工具
type FormContextType = { values: Record<string, string> };
const [FormProvider, useFormContext] = createFormContext<FormContextType>('Form', { values: {} });

const useFormScope = createFormScope();

// Form 组件
function Form({ scope, initialValues }: { scope?: any; initialValues: Record<string, string> }) {
  const scopeProps = useFormScope(scope);
  return (
    <FormProvider scope={scopeProps.__scopeFormScope} values={initialValues}>
      <Field name="firstName" scope={scopeProps.__scopeFormScope} />
      <Field name="lastName" scope={scopeProps.__scopeFormScope} />
    </FormProvider>
  );
}

// Field 组件
function Field({ name, scope }: { name: string; scope?: any }) {
  const { values } = useFormContext('Field', scope);
  console.log('Field', name, values);
  return (
    <div>
      {name}: {values[name] || 'N/A'}
    </div>
  );
}

function TestForm() {
  const form1Scope = {};
  const form2Scope = {};

  return (
    <div>
      <h1>Form 1</h1>
      <Form scope={form1Scope} initialValues={{ firstName: 'John', lastName: 'Doe' }} />
      <h1>Form 2</h1>
      <Form scope={form2Scope} initialValues={{ firstName: 'Jane', lastName: 'Smith' }} />
    </div>
  );
}

export default TestForm;
