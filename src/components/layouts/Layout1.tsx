function Layout1() {
  return (
    <div id="upgrade-help-container" style={{ backgroundColor: '#f8fafe' }} className="h-80 w-80 grid grid-rows-3">
      <div className="row-span-1"></div>
      <div className="row-span-1 place-self-center justify-self-center">
        <button className="mx-2.5 bg-gradient-to-r from-blue-700 to-indigo-400 text-white p-2 w-24 text-sm font-bold rounded-full">
          升级
        </button>
      </div>
      <div className="row-span-1">
        <p className="m-2.5 text-sm text-gray-500 font-bold">
          说明：升级Plus可用GPT-4，资费: 140元/月。
          <a href="#" className="text-custom-blue">
            详情此处
          </a>
        </p>
      </div>
    </div>
  );
}

export default Layout1;
