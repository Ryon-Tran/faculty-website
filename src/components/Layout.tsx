import React, { useState, useEffect, useCallback } from 'react';
import { Outlet, NavLink, Link, useNavigate, useLocation } from 'react-router-dom';

const imgUniversity = "/logo.png";

export interface HeaderProps {
  menuOpen: boolean;
  onToggleMenu: () => void;
}

export const Header = React.memo(function Header({ menuOpen, onToggleMenu }: HeaderProps) {
  const [keyword, setKeyword] = useState('');
  const navigate = useNavigate();

  const handleSearch = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    if (keyword.trim()) {
      navigate(`/ket-qua-tim-kiem?q=${encodeURIComponent(keyword.trim())}`);
    } else {
      navigate('/tim-kiem');
    }
  }, [keyword, navigate]);

  return (
    <header className="border-b border-slate-100 w-full bg-white transition-all">
      <div className="flex flex-wrap md:flex-nowrap items-center justify-between gap-3 px-4 py-3 md:h-28 md:px-6 md:py-6 max-w-5xl mx-auto w-full">
        {/* Brand / Logo Section */}
        <Link
          to="/"
          aria-label="Trang chủ Khoa Sử - Địa - Chính trị"
          className="flex flex-1 min-w-0 gap-2.5 sm:gap-3.5 items-center shrink-0 no-underline text-left group focus:outline-none focus:ring-2 focus:ring-[#1a428a]/30 rounded-xl p-1 -ml-1 transition-transform active:scale-[0.99]"
        >
          <div className="bg-[#f5f7fa] flex items-center justify-center relative rounded-3xl shrink-0 size-12 sm:size-14 md:size-16 p-1.5 shadow-sm border border-slate-200/60 overflow-hidden group-hover:border-[#1a428a]/40 transition-colors">
            <div className="relative shrink-0 size-full flex items-center justify-center">
              <img
                alt="Logo Khoa Sử - Địa - Chính trị"
                className="block size-full object-contain"
                src={imgUniversity}
              />
            </div>
          </div>
          <div className="flex min-w-0 flex-col gap-0.5 items-start leading-[normal] shrink-0">
            <h1 className="font-['Inter'] font-extrabold text-[#1a428a] text-[13px] sm:text-[16px] md:text-[22px] m-0 leading-tight tracking-[-0.01em] group-hover:text-[#c8102e] transition-colors">
              KHOA SỬ - ĐỊA - CHÍNH TRỊ
            </h1>
            <p className="hidden sm:block font-['Inter'] font-normal italic text-slate-500 text-xs md:text-sm m-0">
              Trường Đại học Sư phạm - Đại học Đà Nẵng
            </p>
          </div>
        </Link>

        {/* Mobile Hamburger Button */}
        <div className="flex items-center gap-2 md:hidden shrink-0">
          <button
            type="button"
            aria-label={menuOpen ? "Đóng menu điều hướng" : "Mở menu điều hướng"}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav-drawer"
            onClick={onToggleMenu}
            className="size-11 flex flex-col items-center justify-center gap-1.5 rounded-xl bg-slate-100/80 hover:bg-slate-200 active:bg-slate-300 transition-colors focus:outline-none focus:ring-2 focus:ring-[#1a428a]"
          >
            <span className={`h-0.5 w-5 bg-slate-800 rounded-full transition-transform duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`h-0.5 w-5 bg-slate-800 rounded-full transition-opacity duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`h-0.5 w-5 bg-slate-800 rounded-full transition-transform duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>

        {/* Search Bar */}
        <form
          role="search"
          onSubmit={handleSearch}
          className="w-full order-3 md:order-2 md:w-80 lg:w-[320px] max-w-full shrink-0"
        >
          <div className="flex items-center bg-[#f3f4f6] rounded-2xl border border-transparent focus-within:border-[#1a428a] focus-within:bg-white focus-within:ring-2 focus-within:ring-[#1a428a]/20 transition-all px-3.5 h-11 sm:h-11">
            <input
              type="search"
              placeholder="Tìm kiếm thông báo, ngành học..."
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              aria-label="Từ khóa tìm kiếm"
              className="flex-1 bg-transparent border-none outline-none font-['Inter'] font-normal text-slate-700 placeholder:text-slate-400 text-sm"
            />
            <button
              type="submit"
              aria-label="Thực hiện tìm kiếm"
              className="bg-transparent border-none cursor-pointer shrink-0 size-8 flex items-center justify-center rounded-lg text-slate-500 hover:text-[#1a428a] hover:bg-slate-200/60 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </button>
          </div>
        </form>
      </div>
    </header>
  );
});

Header.displayName = 'Header';

export interface NavBarProps {
  menuOpen: boolean;
  onCloseMenu: () => void;
}

export const NavBar = React.memo(function NavBar({ menuOpen, onCloseMenu }: NavBarProps) {
  const navItems = [
    { label: 'Trang Chủ', path: '/' },
    { label: 'Giới Thiệu', path: '/gioi-thieu' },
    { label: 'Tuyển Sinh', path: '/tuyen-sinh' },
    { label: 'Đào Tạo', path: '/dao-tao' },
    { label: 'Hợp Tác', path: '/hop-tac' },
    { label: 'Hoạt Động Sinh Viên', path: '/hoat-dong' },
  ];

  // Prevent background scroll when mobile drawer is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [menuOpen]);

  return (
    <>
      {/* Desktop Navigation */}
      <nav aria-label="Menu chính" className="border-b border-slate-200/80 bg-white/95 backdrop-blur-md sticky top-0 z-30 shadow-xs w-full hidden md:block">
        <div className="max-w-5xl mx-auto w-full px-6 flex justify-center">
          <ul className="flex items-center justify-center gap-1 lg:gap-2 m-0 p-0 list-none">
            {navItems.map((item, index) => (
              <li key={index}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `flex items-center px-3.5 lg:px-4 py-3.5 no-underline transition-colors border-b-2 font-['Inter'] text-xs lg:text-[13px] uppercase tracking-wide whitespace-nowrap focus:outline-none ${
                      isActive
                        ? 'border-[#c8102e] text-[#c8102e] font-bold bg-red-50/40'
                        : 'border-transparent text-slate-700 font-medium hover:text-[#1a428a] hover:bg-slate-50'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Mobile Drawer Navigation */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-50 md:hidden flex animate-fade-in"
          role="dialog"
          aria-modal="true"
          aria-label="Menu điều hướng di động"
        >
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
            onClick={onCloseMenu}
            aria-hidden="true"
          />

          {/* Drawer Content */}
          <aside
            id="mobile-nav-drawer"
            className="relative w-[82%] max-w-sm bg-white h-full shadow-2xl flex flex-col justify-between z-10 overflow-y-auto animate-slide-right"
          >
            <div className="flex flex-col">
              {/* Drawer Header */}
              <div className="p-5 border-b border-slate-100 flex items-center justify-between bg-slate-50">
                <div className="flex items-center gap-3">
                  <img src={imgUniversity} alt="Logo" className="size-9 object-contain" />
                  <span className="font-['Inter'] font-bold text-sm text-[#1a428a] leading-tight">
                    KHOA SỬ - ĐỊA - CHÍNH TRỊ
                  </span>
                </div>
                <button
                  type="button"
                  onClick={onCloseMenu}
                  aria-label="Đóng menu"
                  className="size-9 flex items-center justify-center rounded-lg bg-white border border-slate-200 text-slate-600 hover:text-red-600 active:scale-95 transition-all"
                >
                  ✕
                </button>
              </div>

              {/* Nav List */}
              <ul className="flex flex-col py-3 px-3 m-0 list-none gap-1">
                {navItems.map((item, index) => (
                  <li key={index}>
                    <NavLink
                      to={item.path}
                      onClick={onCloseMenu}
                      className={({ isActive }) =>
                        `flex items-center justify-between px-4 py-3.5 rounded-xl no-underline font-['Inter'] text-sm transition-all min-h-[44px] ${
                          isActive
                            ? 'bg-[#c8102e] text-white font-bold shadow-sm'
                            : 'text-slate-700 font-medium hover:bg-slate-100 active:bg-slate-200'
                        }`
                      }
                    >
                      <span>{item.label}</span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="opacity-70">
                        <polyline points="9 18 15 12 9 6"></polyline>
                      </svg>
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>

            {/* Drawer Footer */}
            <div className="p-5 border-t border-slate-100 bg-slate-50 flex flex-col gap-3 text-xs text-slate-500">
              <p className="m-0 font-semibold text-slate-700">📍 Liên hệ tư vấn</p>
              <p className="m-0">459 Tôn Đức Thắng, Liên Chiểu, Đà Nẵng</p>
              <a
                href="tel:02363733290"
                className="inline-flex items-center justify-center gap-2 h-11 bg-[#1a428a] text-white rounded-xl font-semibold no-underline hover:bg-[#133166] transition-colors"
              >
                📞 Gọi hotline Ban Tư vấn
              </a>
            </div>
          </aside>
        </div>
      )}
    </>
  );
});

NavBar.displayName = 'NavBar';

export const Footer = React.memo(function Footer() {
  return (
    <footer className="bg-[#002452] w-full text-white mt-auto border-t border-slate-800">
      <div className="max-w-5xl mx-auto w-full px-4 sm:px-6 py-10 md:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 pb-8 border-b border-white/10">
          {/* Col 1: Brand info */}
          <div className="flex flex-col gap-4 sm:col-span-2 lg:col-span-2">
            <div className="flex items-center gap-3.5 text-white">
              <div className="bg-white p-1.5 rounded-2xl flex items-center justify-center shrink-0 size-12 sm:size-14 shadow-sm">
                <img src={imgUniversity} alt="Logo Khoa Sử - Địa - Chính trị" className="size-full object-contain" />
              </div>
              <div className="flex flex-col gap-1 items-start">
                <h2 className="font-['Inter'] font-bold text-lg sm:text-xl m-0 leading-tight">
                  Khoa Sử - Địa - Chính trị
                </h2>
                <p className="font-['Inter'] font-normal text-slate-300 text-sm m-0">
                  Trường Đại học Sư phạm - Đại học Đà Nẵng
                </p>
              </div>
            </div>
            <address className="flex flex-col gap-2.5 text-slate-300 not-italic text-sm leading-relaxed mt-1">
              <p className="m-0 flex items-start gap-2.5">
                <span className="shrink-0 text-base">📍</span>
                <span>459 Tôn Đức Thắng, Phường Hòa Khánh Nam, Quận Liên Chiểu, TP. Đà Nẵng</span>
              </p>
              <p className="m-0 flex items-center gap-2.5">
                <span className="shrink-0 text-base">📞</span>
                <a href="tel:02363733290" className="text-white hover:underline transition-all no-underline">+84 0236 3733 290</a>
              </p>
              <p className="m-0 flex items-center gap-2.5">
                <span className="shrink-0 text-base">✉️</span>
                <a href="mailto:sdct@ued.udn.vn" className="text-white hover:underline transition-all no-underline">sdct@ued.udn.vn</a>
              </p>
            </address>
          </div>

          {/* Col 2: Chuyên mục chính */}
          <div className="flex flex-col gap-4">
            <h3 className="font-['Inter'] font-bold text-sm sm:text-base uppercase tracking-wider text-[#ffcc00] m-0 border-l-4 border-[#c8102e] pl-2.5">
              Chuyên Mục Chính
            </h3>
            <ul className="flex flex-col gap-2.5 m-0 p-0 list-none text-sm text-slate-300">
              <li><Link to="/gioi-thieu" className="text-slate-300 hover:text-white hover:translate-x-1 transition-all inline-block no-underline">❯ Giới thiệu chung</Link></li>
              <li><Link to="/tuyen-sinh" className="text-slate-300 hover:text-white hover:translate-x-1 transition-all inline-block no-underline">❯ Thông tin tuyển sinh</Link></li>
              <li><Link to="/dao-tao" className="text-slate-300 hover:text-white hover:translate-x-1 transition-all inline-block no-underline">❯ Chương trình đào tạo</Link></li>
              <li><Link to="/hop-tac" className="text-slate-300 hover:text-white hover:translate-x-1 transition-all inline-block no-underline">❯ Hợp tác & Nghiên cứu</Link></li>
              <li><Link to="/hoat-dong" className="text-slate-300 hover:text-white hover:translate-x-1 transition-all inline-block no-underline">❯ Hoạt động sinh viên</Link></li>
            </ul>
          </div>

          {/* Col 3: Liên kết nhanh */}
          <div className="flex flex-col gap-4">
            <h3 className="font-['Inter'] font-bold text-sm sm:text-base uppercase tracking-wider text-[#ffcc00] m-0 border-l-4 border-[#c8102e] pl-2.5">
              Liên Kết Nhanh
            </h3>
            <ul className="flex flex-col gap-2.5 m-0 p-0 list-none text-sm text-slate-300">
              <li><a href="https://ued.udn.vn" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-white hover:translate-x-1 transition-all inline-block no-underline">❯ ĐH Sư phạm Đà Nẵng</a></li>
              <li><a href="https://udn.vn" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-white hover:translate-x-1 transition-all inline-block no-underline">❯ Đại học Đà Nẵng</a></li>
              <li><Link to="/lien-he" className="text-slate-300 hover:text-white hover:translate-x-1 transition-all inline-block no-underline">❯ Hỗ trợ sinh viên</Link></li>
              <li><a href="mailto:sdct@ued.udn.vn" className="text-slate-300 hover:text-white hover:translate-x-1 transition-all inline-block no-underline">❯ Email công vụ</a></li>
            </ul>
          </div>
        </div>

        {/* Copyright & bottom bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p className="m-0 text-center sm:text-left">
            © {new Date().getFullYear()} KHOA SỬ - ĐỊA - CHÍNH TRỊ. Tất cả quyền được bảo lưu.
          </p>
          <div className="flex items-center gap-6">
            <Link to="/gioi-thieu" className="text-slate-400 hover:text-white transition-colors no-underline">Điều khoản</Link>
            <Link to="/lien-he" className="text-slate-400 hover:text-white transition-colors no-underline">Bảo mật</Link>
            <button
              type="button"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              aria-label="Lên đầu trang"
              className="text-slate-400 hover:text-[#ffcc00] transition-colors cursor-pointer bg-transparent border-none flex items-center gap-1"
            >
              <span>Lên đầu trang ↑</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = 'Footer';

export function Layout() {
  const { pathname } = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const toggleMenu = useCallback(() => {
    setMenuOpen((prev) => !prev);
  }, []);

  const closeMenu = useCallback(() => {
    setMenuOpen(false);
  }, []);

  return (
    <div className="bg-[#f8fafc] flex flex-col items-center relative min-h-screen w-full font-['Inter'] selection:bg-[#c8102e] selection:text-white">
      <Header menuOpen={menuOpen} onToggleMenu={toggleMenu} />
      <NavBar menuOpen={menuOpen} onCloseMenu={closeMenu} />
      <main aria-label="Nội dung chính" className="max-w-5xl w-full flex-1 flex flex-col min-w-0 pb-12">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
