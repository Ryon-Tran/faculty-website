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
      <div className="flex gap-[8px] items-center px-[80px] py-[20px] w-full md:px-[20px] lg:px-[80px]">
        <Link to="/" className="font-medium text-[#0d4d99] text-[14px] no-underline">Trang chủ</Link>
        <span className="text-[#666] text-[12px]">&gt;</span>
        <p className="font-normal text-[#666] text-[14px] m-0">Tìm kiếm</p>
      </div>

      <div className="flex flex-col gap-10 items-center justify-center py-12 sm:py-20 px-4 w-full min-h-[420px] sm:min-h-[500px]">
        <div className="flex flex-col gap-[16px] items-center">
          <span className="text-[64px]">🔍</span>
          <h1 className="font-bold text-[#1a428a] text-[32px] m-0">Tìm kiếm</h1>
          <p className="font-normal text-[#666] text-[16px] text-center max-w-[500px] m-0">
            Nhập từ khóa để tìm kiếm bài viết, thông báo, chương trình đào tạo và nhiều nội dung khác
          </p>
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 items-stretch w-full max-w-[600px] px-0 sm:px-5">
          <div className="bg-[#f5f7fa] border border-[#e5e7eb] flex flex-1 gap-[12px] items-center p-[16px] rounded-[8px]">
            <span className="text-[20px]">🔍</span>
            <input 
              type="text" 
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              placeholder="Nhập từ khóa tìm kiếm..." 
              className="flex-1 bg-transparent border-none outline-none font-normal text-[16px]" 
            />
          </div>
          <button type="submit" className="bg-[#1a428a] hover:bg-[#0d4d99] transition-colors text-white font-bold text-[16px] px-[24px] py-[14px] rounded-[8px] border-none cursor-pointer shrink-0 w-full sm:w-auto">
            Tìm kiếm
          </button>
        </form>
        <div className="flex flex-col gap-[12px] items-center">
          <p className="font-medium text-[#666] text-[14px] m-0">Tìm kiếm phổ biến:</p>
          <div className="flex flex-wrap gap-[8px] justify-center">
            {['tuyển sinh', 'sư phạm', 'chính trị', 'lịch sử', 'địa lý'].map((tag, i) => (
              <span 
                key={i} 
                onClick={() => handleTagClick(tag)}
                className="bg-[#f5f7fa] text-[#0d4d99] text-[13px] font-medium px-[14px] py-[6px] rounded-[20px] cursor-pointer hover:bg-[#1a428a] hover:text-white transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
