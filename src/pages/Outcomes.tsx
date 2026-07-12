import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import outcomesData from '../data/outcomes.json';

const placeholderImg = "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1000";

const ITEMS_PER_PAGE = 10;

export default function Outcomes() {
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate pagination
  const totalPages = Math.ceil(outcomesData.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedItems = outcomesData.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const getSlug = (link: string) => {
    if (!link) return '';
    const parts = link.split('/');
    const lastPart = parts[parts.length - 1];
    return lastPart.replace('.html', '');
  };

  return (
    <div className="flex flex-col items-start w-full font-['Inter']">
      <div className="flex gap-[8px] items-center px-[20px] py-[20px] w-full lg:px-[80px]">
        <Link to="/" className="font-medium text-[#0d4d99] text-[14px] no-underline">Trang chủ</Link>
        <span className="text-[#666] text-[12px]">&gt;</span>
        <p className="font-normal text-[#666] text-[14px] m-0">Chuẩn đầu ra</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 items-start px-[20px] lg:px-[80px] py-6 sm:py-8 w-full border-t border-[#e5e7eb]">
        <div className="flex flex-1 flex-col gap-[24px] items-start w-full">
          <div className="flex flex-col w-full">
            {paginatedItems.map((item, idx) => {
              const cleanTitle = item.title.replace(/[\p{Emoji_Presentation}\p{Extended_Pictographic}]/gu, '').trim();
              return (
                <Link to={`/tin-tuc/${getSlug(item.link)}`} key={idx} className="border-b border-[#e5e7eb] flex flex-col sm:flex-row gap-4 sm:gap-4 items-start py-4 w-full cursor-pointer hover:bg-[#f5f7fa] transition-colors px-3 -mx-3 rounded-[8px] no-underline">
                  <div className="flex flex-row sm:flex-col items-center shrink-0 w-auto sm:w-[120px] gap-2 sm:gap-0">
                    <div className="relative flex items-center justify-center rounded-[4px] w-full aspect-video overflow-hidden bg-gray-100">
                      <img alt={cleanTitle} className="absolute inset-0 object-cover size-full" src={(item as any).thumbnail || placeholderImg} />
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col gap-[4px]">
                    <div className="flex gap-[8px] items-center mb-1">
                      <span className="bg-[#f5f7fa] text-[#1a428a] text-[11px] font-semibold px-[8px] py-[2px] rounded-[3px]">Bản tin nội bộ</span>
                    </div>
                    <p className="font-semibold text-[#111] text-[15px] m-0 hover:text-[#1a428a] transition-colors">{cleanTitle}</p>
                    <p className="font-normal text-[#808080] text-[12px] m-0 mt-1">{item.date}</p>
                  </div>
                </Link>
              );
            })}
          </div>

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

        <aside className="flex flex-col gap-[24px] items-start w-full lg:w-[300px]">
          <div className="bg-[#f5f7fa] flex flex-col gap-[16px] items-start p-[24px] rounded-[12px] w-full">
            <p className="font-bold text-[#1a428a] text-[16px] uppercase m-0">Đào tạo</p>
            <div className="flex flex-col gap-[12px] w-full">
              {['Chương trình', 'Chuẩn đầu ra', 'Thời khóa biểu', 'Tra cứu điểm thi', 'Lịch thi'].map((cat, idx) => (
                <div
                  key={idx}
                  className={`flex gap-[8px] items-center cursor-pointer hover:underline ${
                    cat === 'Chuẩn đầu ra' ? 'text-[#c8102e] font-bold' : 'text-[#0d4d99]'
                  }`}
                >
                  <span className="text-[12px]">&gt;</span>
                  <p className="font-medium text-[14px] m-0">{cat}</p>
                </div>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
