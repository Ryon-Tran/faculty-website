import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import notificationsData from '../data/notifications.json';


const getCategory = (link: string) => {
  if (link.includes('/dao-tao/')) return 'Đào tạo';
  if (link.includes('/sinh-vien/')) return 'Sinh viên';
  if (link.includes('/hop-tac/')) return 'Hợp tác';
  if (link.includes('/tuyen-sinh/')) return 'Tuyển sinh';
  return 'Thông báo';
};

const getSlug = (link: string) => {
  if (!link) return '';
  const parts = link.split('/');
  const lastPart = parts[parts.length - 1];
  return lastPart.replace('.html', '');
};

const ITEMS_PER_PAGE = 10;

export default function Notifications() {
  const [activeCategory, setActiveCategory] = useState('Tất cả');
  const [currentPage, setCurrentPage] = useState(1);

  // Filter based on active category
  const filteredNotifications = notificationsData.filter(item => {
    if (activeCategory === 'Tất cả') return true;
    return getCategory(item.link) === activeCategory;
  });

  // Calculate pagination
  const totalPages = Math.ceil(filteredNotifications.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedNotifications = filteredNotifications.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const handleCategoryChange = (cat: string) => {
    setActiveCategory(cat);
    setCurrentPage(1); // Reset to page 1
  };

  return (
    <div className="flex flex-col items-start w-full font-['Inter']">
      <div className="flex gap-[8px] items-center px-[20px] py-[20px] w-full lg:px-[80px]">
        <Link to="/" className="font-medium text-[#0d4d99] text-[14px] no-underline">Trang chủ</Link>
        <span className="text-[#666] text-[12px]">&gt;</span>
        <p className="font-normal text-[#666] text-[14px] m-0">Thông báo</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 items-start px-[20px] lg:px-[80px] py-6 sm:py-8 w-full border-t border-[#e5e7eb]">
        <div className="flex flex-1 flex-col gap-[24px] items-start w-full">
          <div className="flex flex-wrap gap-3 mb-2">
            {["Tất cả", "Đào tạo", "Sinh viên", "Tuyển sinh", "Hợp tác"].map((cat, idx) => (
              <button
                key={idx}
                onClick={() => handleCategoryChange(cat)}
                className={`px-[16px] py-[8px] rounded-[20px] text-[13px] font-medium border cursor-pointer transition-colors ${
                  activeCategory === cat
                    ? 'bg-[#1a428a] text-white border-[#1a428a]'
                    : 'bg-white text-[#666] border-[#e5e7eb] hover:border-[#1a428a] hover:text-[#1a428a]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {paginatedNotifications.length > 0 ? (
            <div className="flex flex-col w-full">
              {paginatedNotifications.map((item, idx) => {
                // Pin the first 2 items of the entire list for visual effect
                const isPinned = activeCategory === 'Tất cả' && idx < 2;
                const cleanTitle = item.title.replace(/[\p{Emoji_Presentation}\p{Extended_Pictographic}]/gu, '').trim();
                return (
                  <Link to={`/tin-tuc/${getSlug(item.link)}`} key={idx} className="border-b border-[#e5e7eb] flex flex-col sm:flex-row gap-4 sm:gap-4 items-start py-4 w-full cursor-pointer hover:bg-[#f5f7fa] transition-colors px-3 -mx-3 rounded-[8px] no-underline">
                    <div className="flex flex-row sm:flex-col items-center shrink-0 w-auto sm:w-[120px] gap-2 sm:gap-0">
                      <div className={`relative flex items-center justify-center rounded-[4px] w-full aspect-video overflow-hidden bg-gray-100 ${isPinned ? 'border-2 border-[#c8102e]' : ''}`}>
                        <img alt={cleanTitle} className="absolute inset-0 object-cover size-full" src={item.image || "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1000"} />
                      </div>
                    </div>
                    <div className="flex flex-1 flex-col gap-[4px]">
                      <div className="flex gap-[8px] items-center mb-1">
                        {isPinned && <span className="bg-[#c8102e] text-white text-[10px] font-bold px-[6px] py-[2px] rounded-[3px]">GHIM</span>}
                        <span className="bg-[#f5f7fa] text-[#1a428a] text-[11px] font-semibold px-[8px] py-[2px] rounded-[3px]">{getCategory(item.link)}</span>
                      </div>
                      <p className="font-semibold text-[#111] text-[15px] m-0 hover:text-[#1a428a] transition-colors">{cleanTitle}</p>
                      <p className="font-normal text-[#808080] text-[12px] m-0 mt-1">{item.date}</p>
                    </div>
                  </Link>
                );
              })}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center w-full py-[60px] text-gray-500">
              <span className="text-[40px]">📭</span>
              <p className="mt-2 text-[15px] font-medium">Không tìm thấy thông báo nào thuộc chuyên mục này.</p>
            </div>
          )}

          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-[8px] w-full mt-[24px]">
              {Array.from({ length: totalPages }).map((_, pIdx) => {
                const p = pIdx + 1;
                return (
                  <button
                    key={p}
                    onClick={() => setCurrentPage(p)}
                    className={`size-[36px] flex items-center justify-center rounded-[6px] text-[14px] font-medium cursor-pointer border transition-colors ${
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
      </div>
    </div>
  );
}
