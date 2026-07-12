import React from 'react';
import { Link } from 'react-router-dom';
import { Search } from 'lucide-react';

export default function NotFoundPage() {
  return (
    <div className="flex flex-col gap-10 items-center justify-center py-20 sm:py-[120px] px-4 w-full font-['Inter']">
      <div className="flex flex-col gap-[16px] items-center">
        <p className="font-extrabold leading-none text-[#1a428a] text-[88px] sm:text-[160px]">404</p>
        <div className="flex flex-col gap-[8px] items-center">
          <p className="font-bold text-[#c8102e] text-[22px] sm:text-[28px] text-center">Trang bạn tìm kiếm không tồn tại</p>
          <p className="font-normal text-[#666] text-[16px] text-center max-w-[600px] m-0">
            Xin lỗi, trang này có thể đã bị di chuyển hoặc không còn tồn tại. Hãy thử tìm kiếm hoặc quay lại trang chủ.
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-8 items-center w-full max-w-[720px]">
        <div className="bg-[#f3f4f6] border border-[#e5e7eb] flex gap-[12px] items-center p-[16px] rounded-[8px] w-full max-w-[480px]">
          <Search className="size-5 text-slate-400 shrink-0" />
          <input type="text" placeholder="Nhập từ khóa tìm kiếm..." className="flex-1 bg-transparent border-none outline-none font-normal text-[#808080] text-[16px]" />
        </div>
        <Link to="/" className="bg-[#1a428a] hover:bg-[#0d4d99] transition-colors px-[32px] py-[14px] rounded-[8px] no-underline">
          <span className="font-bold text-[16px] text-white">Quay về trang chủ</span>
        </Link>
        <div className="flex flex-col gap-3 items-center text-[14px]">
          <p className="font-normal text-[#666] m-0">Hoặc truy cập nhanh:</p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 items-center">
            <Link to="/gioi-thieu" className="font-medium text-[#0d4d99] no-underline hover:underline">Giới thiệu</Link>
            <Link to="/tuyen-sinh" className="font-medium text-[#0d4d99] no-underline hover:underline">Tuyển sinh</Link>
            <Link to="/lien-he" className="font-medium text-[#0d4d99] no-underline hover:underline">Liên hệ</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
