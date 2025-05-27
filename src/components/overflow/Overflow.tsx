function Overflow() {
  return (
    <div className="flex flex-col max-[896]:overflow-x-scroll">
      <h1>当宽度小于896 则增加横向滚动条</h1>
      <div className="border min-w-4xl">
        <p>内容</p>
      </div>
    </div>
  );
}

export default Overflow;
