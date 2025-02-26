function RawHTMLWithCSS() {
  const rawHTMLWithCSS = `
    <style>
      .my-container {
        background-color: #f0f0f0;
        padding: 20px;
        border-radius: 8px;
      }
      .my-title {
        color: #0066cc;
        font-size: 24px;
      }
      .my-paragraph {
        color: #333;
        line-height: 1.5;
      }
    </style>
    <div class="my-container">
      <h2 class="my-title">这是标题</h2>
      <p class="my-paragraph">这是一段文本内容。</p>
    </div>
  `;

  return <div dangerouslySetInnerHTML={{ __html: rawHTMLWithCSS }} />;
}
export default RawHTMLWithCSS;
