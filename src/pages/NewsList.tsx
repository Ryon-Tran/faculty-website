import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import newsData from '../data/news.json';


const placeholderImg = "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1000";

const getCategory = (link: string) => {
  if (link.includes('/tuyen-sinh/')) return 'Tuyển sinh';
  if (link.includes('/thong-bao/')) return 'Thông báo';
  if (link.includes('/dao-tao/')) return 'Đào tạo';
  if (link.includes('/hop-tac/')) return 'Hợp tác';
  if (link.includes('/sinh-vien/')) return 'Sinh viên';
  return 'Tin Khoa';
};

const getSlug = (link: string) => {
  if (!link) return '';
  const parts = link.split('/');
  const lastPart = parts[parts.length - 1];
  return lastPart.replace('.html', '');
};

const ITEMS_PER_PAGE = 8;

export default function NewsList() {
  const [activeCategory, setActiveCategory] = useState('Tất cả');
  const [currentPage, setCurrentPage] = useState(1);

  // Filter news based on category
  const filteredNews = newsData.filter(item => {
    if (activeCategory === 'Tất cả') return true;
    return getCategory(item.link) === activeCategory;
  });

  // Calculate pagination
  const totalPages = Math.ceil(filteredNews.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedNews = filteredNews.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const handleCategoryChange = (cat: string) => {
    setActiveCategory(cat);
    setCurrentPage(1); // Reset to first page
  };

  return (
    <div className="flex flex-col items-start w-full font-['Inter']">
      <div className="flex gap-2 items-center px-[20px] py-[20px] w-full lg:px-[80px]">
        <Link to="/" className="font-medium text-[#0d4d99] text-[14px] no-underline">Trang chủ</Link>
        <span className="text-[#666] text-[12px]">&gt;</span>
        <p className="font-normal text-[#666] text-[14px] m-0">Tin tức</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 items-start px-[20px] lg:px-[80px] py-6 sm:py-8 w-full border-t border-[#e5e7eb]">
        <div className="flex flex-1 flex-col gap-[32px] items-start w-full">
          <div className="flex items-center w-full">
            <h2 className="font-bold text-[#c8102e] text-[24px] uppercase m-0">
              {activeCategory === 'Tất cả' ? 'Tất cả bài viết' : `Chuyên mục: ${activeCategory}`}
            </h2>
          </div>
          <div className="flex flex-wrap gap-[12px] mb-[12px]">
            {["Tất cả", "Tuyển sinh", "Thông báo", "Đào tạo", "Hợp tác", "Sinh viên"].map((cat, idx) => (
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
          
          {paginatedNews.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[24px] w-full">
              {paginatedNews.map((item, idx) => {
                const cleanTitle = item.title.replace(/[\p{Emoji_Presentation}\p{Extended_Pictographic}]/gu, '').trim();
                return (
                <Link to={`/tin-tuc/${getSlug(item.link)}`} key={idx} className="bg-white flex flex-col overflow-hidden rounded-[12px] shadow-[0px_2px_8px_0px_rgba(0,0,0,0.08)] cursor-pointer hover:-translate-y-1 transition-transform no-underline">
                  <div className="aspect-[16/10] relative w-full bg-gray-100">
                    <img alt={cleanTitle} className="absolute inset-0 object-cover size-full" src={item.image || placeholderImg} />
                    <span className="absolute top-[12px] left-[12px] bg-[#1a428a] text-white text-[11px] font-semibold px-[10px] py-[4px] rounded-[4px]">
                      {getCategory(item.link)}
                    </span>
                  </div>
                  <div className="flex flex-col gap-[8px] p-[16px]">
                    <p className="font-semibold leading-[1.4] text-[#036] text-[14px] line-clamp-2 m-0">{cleanTitle}</p>
                    <p className="font-normal text-[#808080] text-[12px] m-0">{item.date}</p>
                  </div>
                </Link>
                );
              })}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center w-full py-[60px] text-gray-500">
              <span className="text-[40px]">📭</span>
              <p className="mt-2 text-[15px] font-medium">Không tìm thấy bài viết nào thuộc chuyên mục này.</p>
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

        <div className="flex flex-col gap-6 items-start w-full lg:w-75">
          <div className="bg-[#f5f7fa] flex flex-col gap-4 items-start p-6 rounded-xl w-full">
            <p className="font-bold text-[#1a428a] text-[16px] uppercase m-0">Bài viết mới nhất</p>
            <div className="flex flex-col gap-4 w-full">
              {newsData.slice(0, 4).map((item, idx) => (
                <Link to={`/tin-tuc/${getSlug(item.link)}`} key={idx} className="flex gap-3 items-start cursor-pointer group no-underline">
                  <div className="w-20 h-[52px] relative rounded-md overflow-hidden shrink-0 bg-gray-100">
                    <img alt={item.title} className="absolute inset-0 object-cover size-full" src={item.image || placeholderImg} />
                  </div>
                  <div className="flex flex-col gap-[4px]">
                    <p className="font-semibold text-[#036] text-[13px] line-clamp-2 m-0 group-hover:text-[#c8102e] transition-colors">{item.title}</p>
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
