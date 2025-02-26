import htmlContent from './Test.html?raw';

function Test() {
  return <div dangerouslySetInnerHTML={{ __html: htmlContent }} />;
}
export default Test;
