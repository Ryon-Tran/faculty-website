import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Inbox } from 'lucide-react';
import educationData from '../data/education.json';

const placeholderImg = "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1000";

const getSlug = (link: string) => {
  if (!link) return '';
  const parts = link.split('/');
  const lastPart = parts[parts.length - 1];
  return lastPart.replace('.html', '');
};

const cleanTitle = (title: string) => {
  if (!title) return '';
  return title.replace(/[\p{Emoji_Presentation}\p{Extended_Pictographic}]/gu, '').replace(/^[-\s]+/, '').trim();
};

const ITEMS_PER_PAGE = 8;

const sidebarLinks = [
  { label: 'Tất cả bài viết', path: '/dao-tao' },
  { label: 'Chương trình đào tạo', path: '/dao-tao' },
  { label: 'Chuẩn đầu ra', path: '/chuan-dau-ra' },
  { label: 'Quy chế - Quy định', path: '/dao-tao' },
  { label: 'Thời khóa biểu', path: '/dao-tao' },
  { label: 'Tra cứu điểm thi', path: '/dao-tao' },
  { label: 'Lịch thi', path: '/dao-tao' },
];

export default function Education() {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(educationData.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedItems = educationData.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  return (
    <div className="flex flex-col items-start w-full font-['Inter']">
      {/* Breadcrumb */}
      <div className="flex gap-2 items-center px-[20px] py-[20px] w-full lg:px-[80px]">
        <Link to="/" className="font-medium text-[#0d4d99] text-[14px] no-underline hover:underline">Trang chủ</Link>
        <span className="text-[#666] text-[12px]">&gt;</span>
        <p className="font-normal text-[#666] text-[14px] m-0">Đào tạo</p>
      </div>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row gap-8 items-start px-[20px] lg:px-[80px] py-6 sm:py-8 w-full border-t border-[#e5e7eb]">
        {/* Left: Article List */}
        <div className="flex flex-1 flex-col gap-8 items-start w-full">
          <div className="flex items-center w-full">
            <h2 className="font-bold text-[#c8102e] text-[24px] uppercase m-0">
              Đào tạo
            </h2>
          </div>

          {paginatedItems.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
              {paginatedItems.map((item, idx) => {
                const title = cleanTitle(item.title);
                return (
                  <Link
                    to={`/tin-tuc/${getSlug(item.link)}`}
                    key={idx}
                    className="bg-white flex flex-col overflow-hidden rounded-xl shadow-[0px_2px_8px_0px_rgba(0,0,0,0.08)] cursor-pointer hover:-translate-y-1 transition-transform no-underline group"
                  >
                    <div className="aspect-[16/10] relative w-full bg-gray-100">
                      <img
                        alt={title}
                        className="absolute inset-0 object-cover size-full transition-transform duration-500 group-hover:scale-105 pointer-events-none"
                        src={item.image || placeholderImg}
                      />
                      <span className="absolute top-3 left-3 bg-[#1a428a] text-white text-[11px] font-semibold px-2.5 py-1 rounded">
                        Đào tạo
                      </span>
                    </div>
                    <div className="flex flex-col gap-2 p-4">
                      <p className="font-semibold leading-[1.4] text-[#036] text-[14px] line-clamp-2 m-0 group-hover:text-[#c8102e] transition-colors">
                        {title}
                      </p>
                      <p className="font-normal text-[#808080] text-[12px] m-0">
                        {item.date}
                      </p>
                    </div>
                  </Link>
                );
              })}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center w-full py-[60px] text-slate-400">
              <Inbox className="size-12 mb-3 text-slate-300" />
              <p className="mt-2 text-[15px] font-medium">Không tìm thấy bài viết nào.</p>
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-2 w-full mt-6">
              {Array.from({ length: totalPages }).map((_, pIdx) => {
                const p = pIdx + 1;
                return (
                  <button
                    key={p}
                    onClick={() => { setCurrentPage(p); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                    className={`size-9 flex items-center justify-center rounded-lg text-[14px] font-medium cursor-pointer border transition-colors ${
                      p === currentPage
                        ? 'bg-[#1a428a] text-white border-[#1a428a]'
                        : 'bg-white text-[#666] border-[#e5e7eb] hover:border-[#1a428a] hover:text-[#1a428a]'
                    }`}
                  >
                    {p}
                  </button>
                );
              })}
            </div>
          )}
        </div>

        {/* Sidebar */}
        <div className="flex flex-col gap-6 items-start w-full lg:w-72 shrink-0">
          {/* Menu con */}
          <div className="bg-[#f5f7fa] flex flex-col gap-4 items-start p-6 rounded-xl w-full">
            <p className="font-bold text-[#1a428a] text-[16px] uppercase m-0 border-l-4 border-[#c8102e] pl-2.5">
              Chuyên mục Đào tạo
            </p>
            <div className="flex flex-col gap-3 w-full">
              {sidebarLinks.map((link, idx) => (
                <Link
                  key={idx}
                  to={link.path}
                  className="flex gap-2 items-center text-[#0d4d99] hover:text-[#c8102e] transition-colors no-underline"
                >
                  <span className="text-[12px]">❯</span>
                  <p className="font-medium text-[14px] m-0">{link.label}</p>
                </Link>
              ))}
            </div>
          </div>

          {/* Bài viết mới nhất */}
          <div className="bg-[#f5f7fa] flex flex-col gap-4 items-start p-6 rounded-xl w-full">
            <p className="font-bold text-[#1a428a] text-[16px] uppercase m-0 border-l-4 border-[#c8102e] pl-2.5">
              Bài viết mới nhất
            </p>
            <div className="flex flex-col gap-4 w-full">
              {educationData.slice(0, 4).map((item, idx) => (
                <Link to={`/tin-tuc/${getSlug(item.link)}`} key={idx} className="flex gap-3 items-start cursor-pointer group no-underline">
                  <div className="w-20 h-[52px] relative rounded-md overflow-hidden shrink-0 bg-gray-100">
                    <img alt={item.title} className="absolute inset-0 object-cover size-full" src={item.image || placeholderImg} />
                  </div>
                  <div className="flex flex-col gap-1">
                    <p className="font-semibold text-[#036] text-[13px] line-clamp-2 m-0 group-hover:text-[#c8102e] transition-colors">
                      {cleanTitle(item.title)}
                    </p>
                    <p className="font-normal text-[#808080] text-[11px] m-0">{item.date}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
