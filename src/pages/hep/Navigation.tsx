import { useEffect, useRef, useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';

interface Menu {
  name: string;
  text: string;
  link: string;
}

function Navigation() {
  const menus: Menu[] = [
    { name: 'index', text: '首页', link: '/' },
    { name: 'about', text: '关于', link: '/about' },
    { name: 'login', text: '登录', link: '/login' },
  ];

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // 关闭菜单的处理函数
  const handleClickOutside = (event: { target: any }) => {
    if (
      menuRef.current &&
      !menuRef.current.contains(event.target) &&
      buttonRef.current &&
      !buttonRef.current.contains(event.target)
    ) {
      setIsMenuOpen(false);
    }
  };

  // 添加点击外部关闭菜单的事件监听
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // 菜单选项点击处理
  const handleMenuItemClick = (item: string) => {
    alert(`您点击了：${item}`);
    setIsMenuOpen(false);
  };

  return (
    <div>
      <div id="md-navigation-container" className="hidden md:flex justify-between">
        <div id="logo" className="flex gap-2 py-6 px-6">
          <img src="/static/logo-old.png" alt="logo" className="w-16 h-16" />
          <div id="name" className="flex flex-col justify-evenly">
            <p className="text-2xl font-bold">HepAI 高能物理人工智能平台</p>
            <p className="text-sm font-bold">Artificial Intelligence Platform for High Energy Physics</p>
          </div>
        </div>
        <div id="md-menu-container" className="flex justify-center items-center gap-6 py-6 px-10">
          {menus.map((menu) => (
            <div key={menu.name} className="p-2">
              <p className="text-base">{menu.text}</p>
            </div>
          ))}
        </div>
      </div>

      <div id="navigation-container" className="md:hidden flex justify-between">
        <div id="logo" className="flex gap-2 py-6 px-6">
          <img src="/static/logo-old.png" alt="logo" className="w-16 h-16" />
          <div id="name" className="flex flex-col justify-evenly">
            <p className="text-2xl font-bold">HepAI 高能物理人工智能平台</p>
          </div>
        </div>
        <button
          id="menu-button"
          ref={buttonRef}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden flex justify-center items-center py-6 px-6"
          aria-label="菜单"
        >
          <AiOutlineMenu size={24} />
        </button>
      </div>

      {/* 弹出菜单 */}
      {isMenuOpen && (
        <div
          ref={menuRef}
          className="absolute top-16 right-4 w-40 bg-white rounded-lg shadow-lg overflow-hidden z-50 transform origin-top-right transition-all duration-200"
        >
          <ul className="py-1">
            {menus.map((item) => (
              <li
                key={item.name}
                onClick={() => handleMenuItemClick(item.name)}
                className="px-4 py-3 text-gray-800 text-sm hover:bg-gray-100 cursor-pointer border-b border-gray-100 last:border-b-0"
              >
                {item.text}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
export default Navigation;
