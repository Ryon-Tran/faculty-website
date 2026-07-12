import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Search() {
  const [keyword, setKeyword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (keyword.trim()) {
      navigate(`/ket-qua-tim-kiem?q=${encodeURIComponent(keyword.trim())}`);
    }
  };

  const handleTagClick = (tag: string) => {
    navigate(`/ket-qua-tim-kiem?q=${encodeURIComponent(tag)}`);
  };

  return (
    <div className="flex flex-col items-start w-full font-['Inter']">
      {/* Breadcrumb */}
      <div className="flex gap-2 items-center px-[20px] py-[20px] w-full lg:px-[80px]">
        <Link to="/" className="font-medium text-[#0d4d99] text-[14px] no-underline hover:underline">Trang chủ</Link>
        <span className="text-[#666] text-[12px]">&gt;</span>
        <p className="font-normal text-[#666] text-[14px] m-0">Tìm kiếm</p>
      </div>

      {/* Main Search Area */}
      <div className="flex flex-col gap-8 items-center justify-center py-16 px-[20px] lg:px-[80px] w-full border-t border-[#e5e7eb] min-h-[400px]">
        <div className="flex flex-col gap-3 items-center text-center">
          <h1 className="font-bold text-[#1a428a] text-[28px] sm:text-[32px] uppercase m-0 tracking-tight">
            TÌM KIẾM THÔNG TIN
          </h1>
          <p className="font-normal text-slate-500 text-[14px] sm:text-[15px] max-w-[500px] m-0 leading-relaxed">
            Tìm kiếm tin tức, thông báo, tài liệu, chương trình đào tạo và các thông tin liên quan của Khoa Sử - Địa - Chính trị.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 items-stretch w-full max-w-[640px]">
          <div className="bg-white border border-slate-300 flex flex-1 gap-3 items-center px-4 py-3 rounded-lg shadow-sm focus-within:border-[#1a428a] focus-within:ring-2 focus-within:ring-[#1a428a]/20 transition-all">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#64748b" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
            <input 
              type="text" 
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              placeholder="Nhập từ khóa tìm kiếm..." 
              className="flex-1 bg-transparent border-none outline-none font-normal text-[15px] text-slate-800 placeholder:text-slate-400" 
            />
          </div>
          <button type="submit" className="bg-[#1a428a] hover:bg-[#0d4d99] transition-colors text-white font-bold text-[15px] px-8 py-3 rounded-lg border-none cursor-pointer shrink-0 w-full sm:w-auto shadow-sm hover:shadow-md">
            Tìm kiếm
          </button>
        </form>

        <div className="flex flex-col gap-3 items-center mt-2">
          <p className="font-medium text-slate-400 text-[13px] uppercase tracking-wider m-0">Gợi ý từ khóa</p>
          <div className="flex flex-wrap gap-2 justify-center">
            {['tuyển sinh', 'sư phạm lịch sử', 'sư phạm địa lý', 'giáo dục chính trị', 'thông báo'].map((tag, i) => (
              <button 
                key={i} 
                onClick={() => handleTagClick(tag)}
                className="bg-white border border-slate-200 text-[#0d4d99] text-[13px] font-medium px-4 py-1.5 rounded-full cursor-pointer hover:bg-[#1a428a] hover:text-white hover:border-[#1a428a] transition-all shadow-sm"
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
