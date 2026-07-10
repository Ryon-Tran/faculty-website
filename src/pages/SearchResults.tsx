import React, { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import newsData from '../data/news.json';
import notificationsData from '../data/notifications.json';
import admissionsData from '../data/admissions.json';
import cooperationData from '../data/cooperation.json';
import studentsData from '../data/students.json';

const placeholderImg = "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1000";

// Combine all articles to perform search
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

const ITEMS_PER_PAGE = 8;

export default function SearchResults() {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  
  const [keyword, setKeyword] = useState(query);
  const [currentPage, setCurrentPage] = useState(1);

  // Sync keyword state with URL query parameter changes
  useEffect(() => {
    setKeyword(query);
    setCurrentPage(1);
  }, [query]);

  // Search logic: check title and description
  const filteredResults = allArticles.filter(item => {
    if (!query.trim()) return false; // Show nothing or empty state if no query
    const cleanQuery = query.toLowerCase().trim();
    return (
      item.title.toLowerCase().includes(cleanQuery) || 
      (item.description && item.description.toLowerCase().includes(cleanQuery))
    );
  });

  // Calculate pagination
  const totalPages = Math.ceil(filteredResults.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedResults = filteredResults.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSearchParams({ q: keyword.trim() });
  };

  return (
    <div className="flex flex-col items-start w-full font-['Inter']">
      <div className="flex gap-[8px] items-center px-[80px] py-[20px] w-full md:px-[20px] lg:px-[80px]">
        <Link to="/" className="font-medium text-[#0d4d99] text-[14px] no-underline">Trang chủ</Link>
        <span className="text-[#666] text-[12px]">&gt;</span>
        <p className="font-normal text-[#666] text-[14px] m-0">Kết quả tìm kiếm</p>
      </div>

      <div className="flex flex-col gap-8 items-start px-4 sm:px-6 py-10 sm:py-12 w-full lg:px-6">
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 items-stretch w-full max-w-[700px]">
          <div className="bg-[#f5f7fa] border border-[#e5e7eb] flex flex-1 gap-[12px] items-center p-[14px] rounded-[8px]">
            <span className="text-[18px]">🔍</span>
            <input 
              type="text" 
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              placeholder="Nhập từ khóa tìm kiếm..." 
              className="flex-1 bg-transparent border-none outline-none font-normal text-[15px]" 
            />
          </div>
          <button type="submit" className="bg-[#1a428a] hover:bg-[#0d4d99] transition-colors text-white font-bold text-[14px] px-[28px] py-[14px] rounded-[8px] border-none cursor-pointer w-full sm:w-auto">
            Tìm
          </button>
        </form>

        {query.trim() ? (
          <>
            <p className="font-normal text-[#666] text-[15px] m-0">
              Tìm thấy <span className="font-bold text-[#111]">{filteredResults.length}</span> kết quả cho từ khóa "<span className="font-bold text-[#1a428a]">{query}</span>"
            </p>

            {paginatedResults.length > 0 ? (
              <div className="flex flex-col gap-5 w-full max-w-[900px]">
                {paginatedResults.map((item, idx) => (
                  <Link to={`/tin-tuc/${getSlug(item.link)}`} key={idx} className="flex flex-col sm:flex-row gap-4 sm:gap-5 items-start pb-5 border-b border-[#e5e7eb] last:border-b-0 cursor-pointer group no-underline">
                    <div className="w-full sm:w-[160px] h-[180px] sm:h-[100px] relative rounded-[8px] overflow-hidden shrink-0 bg-gray-100">
                      <img alt={item.title} className="absolute inset-0 object-cover size-full" src={item.image || placeholderImg} />
                    </div>
                    <div className="flex flex-1 flex-col gap-[6px]">
                      <span className="bg-[#f5f7fa] text-[#1a428a] text-[11px] font-semibold px-[8px] py-[2px] rounded-[3px] self-start">
                        {item.type}
                      </span>
                      <h3 className="font-bold text-[#1a428a] text-[16px] m-0 group-hover:text-[#c8102e] transition-colors">
                        {item.title}
                      </h3>
                      <p className="font-normal text-[#666] text-[14px] m-0 line-clamp-2 leading-[1.5]">
                        {item.description || "Nhấp để xem chi tiết nội dung thông báo/bài viết này."}
                      </p>
                      <p className="font-normal text-[#808080] text-[12px] m-0">{item.date}</p>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center w-full py-[60px] text-gray-500">
                <span className="text-[40px]">🔍</span>
                <p className="mt-2 text-[15px] font-medium">Không tìm thấy kết quả nào phù hợp.</p>
              </div>
            )}

            {totalPages > 1 && (
              <div className="flex items-center justify-center gap-[8px] w-full mt-[16px]">
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
          </>
        ) : (
          <div className="flex flex-col items-center justify-center w-full py-[60px] text-gray-500">
            <span className="text-[40px]">🔍</span>
            <p className="mt-2 text-[15px] font-medium">Nhập từ khóa bên trên để tìm kiếm các bài viết trong hệ thống.</p>
          </div>
        )}
      </div>
    </div>
  );
}
