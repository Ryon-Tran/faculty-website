import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Inbox } from 'lucide-react';
import studentsData from '../data/students.json';

const placeholderImg = "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1000";

const getCategory = (link: string) => {
  if (link.includes('/doan-hoi-sv/')) return 'Đoàn - Hội SV';
  if (link.includes('/hoc-bong-tai-tro/')) return 'Học bổng';
  if (link.includes('/clb-dia-ly/')) return 'CLB Địa lý';
  if (link.includes('/cuu-sinh-vien/')) return 'Cựu sinh viên';
  return 'Sinh viên';
};

const getSlug = (link: string) => {
  if (!link) return '';
  const parts = link.split('/');
  const lastPart = parts[parts.length - 1];
  return lastPart.replace('.html', '');
};

const ITEMS_PER_PAGE = 6;

export default function Activities() {
  const [activeCategory, setActiveCategory] = useState('Tất cả');
  const [currentPage, setCurrentPage] = useState(1);

  const filteredItems = studentsData.filter(item => {
    if (activeCategory === 'Tất cả') return true;
    const cat = getCategory(item.link);
    if (activeCategory === 'Học bổng') return cat === 'Học bổng';
    if (activeCategory === 'CLB') return cat === 'CLB Địa lý';
    if (activeCategory === 'Cựu sinh viên') return cat === 'Cựu sinh viên';
    if (activeCategory === 'Đoàn - Hội SV') return cat === 'Đoàn - Hội SV';
    return false;
  });

  const totalPages = Math.ceil(filteredItems.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedItems = filteredItems.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const handleCategoryChange = (cat: string) => {
    setActiveCategory(cat);
    setCurrentPage(1);
  };

  return (
    <div className="flex flex-col items-start w-full font-['Inter']">
      <div className="flex gap-[8px] items-center px-[20px] py-[20px] w-full lg:px-[80px]">
        <p className="font-medium text-[#0d4d99] text-[14px] cursor-pointer m-0">Trang chủ</p>
        <span className="text-[#666] text-[12px]">&gt;</span>
        <p className="font-normal text-[#666] text-[14px] m-0">Hoạt động sinh viên</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 items-start px-[20px] lg:px-[80px] py-6 sm:py-8 w-full border-t border-[#e5e7eb]">
        <div className="flex flex-1 flex-col gap-[32px] items-start w-full">
          <div className="flex items-center w-full">
            <h2 className="font-bold text-[#c8102e] text-[24px] uppercase m-0">
              {activeCategory === 'Tất cả' ? 'Tất cả hoạt động' : `Hoạt động: ${activeCategory}`}
            </h2>
          </div>
          <div className="flex flex-wrap gap-3 mb-2">
            {["Tất cả", "Đoàn - Hội SV", "Học bổng", "CLB", "Cựu sinh viên"].map((cat, idx) => (
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

          {paginatedItems.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
              {paginatedItems.map((item, idx) => (
                <Link to={`/tin-tuc/${getSlug(item.link)}`} key={idx} className="bg-white flex flex-col overflow-hidden rounded-[12px] shadow-[0px_2px_8px_0px_rgba(0,0,0,0.08)] cursor-pointer hover:-translate-y-1 transition-transform no-underline">
                  <div className="aspect-[16/10] relative w-full bg-gray-100">
                    <img alt={item.title} className="absolute inset-0 object-cover size-full" src={item.image || placeholderImg} />
                    <span className="absolute top-[12px] left-[12px] bg-[#c8102e] text-white text-[11px] font-semibold px-[10px] py-[4px] rounded-[4px]">{getCategory(item.link)}</span>
                  </div>
                  <div className="flex flex-col gap-[8px] p-[16px]">
                    <p className="font-semibold leading-[1.4] text-[#036] text-[14px] line-clamp-2 m-0">{item.title}</p>
                    <p className="font-normal text-[#808080] text-[12px] m-0">{item.date}</p>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center w-full py-[60px] text-slate-400">
              <Inbox className="size-12 mb-3 text-slate-300" />
              <p className="mt-2 text-[15px] font-medium">Không tìm thấy hoạt động nào thuộc chuyên mục này.</p>
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
                        : 'bg-white text-[#666] border-[#e5e7eb] hover:border-[#1a428a]'
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
            <p className="font-bold text-[#1a428a] text-[16px] uppercase m-0">Loại hoạt động</p>
            <div className="flex flex-col gap-3 w-full">
              {['Đoàn - Hội SV', 'Học bổng - Tài trợ', 'CLB Địa lý', 'Cựu sinh viên'].map((cat, idx) => (
                <div key={idx} className="flex gap-[8px] items-center w-full cursor-pointer hover:underline text-[#0d4d99]">
                  <span className="text-[12px]">&gt;</span>
                  <p className="flex-1 font-medium text-[14px] m-0">{cat}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
