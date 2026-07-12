import React, { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import newsData from '../data/news.json';
import notificationsData from '../data/notifications.json';
import admissionsData from '../data/admissions.json';
import cooperationData from '../data/cooperation.json';
import studentsData from '../data/students.json';

const placeholderImg = "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1000";

const allArticles = [
  ...newsData.map(item => ({ ...item, type: "Tin tức" })),
  ...notificationsData.map(item => ({ ...item, type: "Thông báo" })),
  ...admissionsData.map(item => ({ ...item, type: "Tuyển sinh" })),
  ...cooperationData.map(item => ({ ...item, type: "Hợp tác" })),
  ...studentsData.map(item => ({ ...item, type: "Hoạt động" }))
];

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

export default function SearchResults() {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  
  const [keyword, setKeyword] = useState(query);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setKeyword(query);
    setCurrentPage(1);
  }, [query]);

  const filteredResults = allArticles.filter(item => {
    if (!query.trim()) return false;
    const cleanQuery = query.toLowerCase().trim();
    return (
      item.title.toLowerCase().includes(cleanQuery) || 
      (item.description && item.description.toLowerCase().includes(cleanQuery))
    );
  });

  const totalPages = Math.ceil(filteredResults.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedResults = filteredResults.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSearchParams({ q: keyword.trim() });
  };

  return (
    <div className="flex flex-col items-start w-full font-['Inter']">
      {/* Breadcrumb */}
      <div className="flex gap-2 items-center px-[20px] py-[20px] w-full lg:px-[80px]">
        <Link to="/" className="font-medium text-[#0d4d99] text-[14px] no-underline hover:underline">Trang chủ</Link>
        <span className="text-[#666] text-[12px]">&gt;</span>
        <Link to="/tim-kiem" className="font-medium text-[#0d4d99] text-[14px] no-underline hover:underline">Tìm kiếm</Link>
        <span className="text-[#666] text-[12px]">&gt;</span>
        <p className="font-normal text-[#666] text-[14px] m-0">Kết quả</p>
      </div>

      {/* Main Content Area */}
      <div className="flex flex-col lg:flex-row gap-8 items-start px-[20px] lg:px-[80px] py-6 sm:py-8 w-full border-t border-[#e5e7eb]">
        {/* Left Column: Search Field & Results */}
        <div className="flex flex-1 flex-col gap-6 w-full">
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 items-stretch w-full max-w-[640px]">
            <div className="bg-white border border-slate-300 flex flex-1 gap-3 items-center px-4 py-3 rounded-lg shadow-sm focus-within:border-[#1a428a] focus-within:ring-2 focus-within:ring-[#1a428a]/20 transition-all">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#64748b" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
              <input 
                type="text" 
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
                placeholder="Nhập từ khóa tìm kiếm..." 
                className="flex-1 bg-transparent border-none outline-none font-normal text-[15px] text-slate-800" 
              />
            </div>
            <button type="submit" className="bg-[#1a428a] hover:bg-[#0d4d99] transition-colors text-white font-bold text-[14px] px-8 py-3 rounded-lg border-none cursor-pointer w-full sm:w-auto">
              Tìm kiếm
            </button>
          </form>

          {query.trim() ? (
            <div className="flex flex-col gap-6 w-full">
              <p className="font-normal text-slate-500 text-[14px] m-0">
                Tìm thấy <span className="font-bold text-[#111]">{filteredResults.length}</span> kết quả cho từ khóa "<span className="font-bold text-[#1a428a]">{query}</span>"
              </p>

              {paginatedResults.length > 0 ? (
                <div className="flex flex-col gap-6 w-full max-w-[840px]">
                  {paginatedResults.map((item, idx) => {
                    const title = cleanTitle(item.title);
                    return (
                      <Link 
                        to={`/tin-tuc/${getSlug(item.link)}`} 
                        key={idx} 
                        className="flex flex-col sm:flex-row gap-4 items-start pb-6 border-b border-slate-100 last:border-b-0 cursor-pointer group no-underline"
                      >
                        <div className="w-full sm:w-[180px] aspect-[16/10] relative rounded-lg overflow-hidden shrink-0 bg-slate-50 border border-slate-200">
                          <img alt={title} className="absolute inset-0 object-cover size-full transition-transform duration-500 group-hover:scale-105 pointer-events-none" src={item.image || placeholderImg} />
                        </div>
                        <div className="flex flex-1 flex-col gap-1.5 min-w-0">
                          <span className="bg-slate-100 text-[#1a428a] text-[11px] font-semibold px-2 py-0.5 rounded self-start">
                            {item.type}
                          </span>
                          <h3 className="font-bold text-[#1a428a] text-[15px] sm:text-[16px] leading-snug m-0 group-hover:text-[#c8102e] transition-colors line-clamp-2">
                            {title}
                          </h3>
                          <p className="font-normal text-[#666] text-[13px] sm:text-[14px] m-0 line-clamp-2 leading-[1.6]">
                            {item.description || "Nhấp để xem chi tiết nội dung thông báo/bài viết này."}
                          </p>
                          <p className="font-normal text-[#808080] text-[11px] m-0">{item.date}</p>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center w-full py-16 text-slate-400">
                  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="mb-3 text-slate-300">
                    <circle cx="11" cy="11" r="8"></circle>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                  </svg>
                  <p className="m-0 text-[14px] font-medium">Không tìm thấy kết quả nào phù hợp.</p>
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
          ) : (
            <div className="flex flex-col items-center justify-center w-full py-16 text-slate-400">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="mb-3 text-slate-300">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
              <p className="m-0 text-[14px] font-medium">Nhập từ khóa bên trên để tìm kiếm các bài viết trong hệ thống.</p>
            </div>
          )}
        </div>

        {/* Sidebar */}
        <div className="flex flex-col gap-6 items-start w-full lg:w-75 shrink-0">
          <div className="bg-[#f5f7fa] flex flex-col gap-4 items-start p-6 rounded-xl w-full">
            <p className="font-bold text-[#1a428a] text-[16px] uppercase m-0 border-l-4 border-[#c8102e] pl-2.5">
              Bài viết mới nhất
            </p>
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
