import React from 'react';
import { Link } from 'react-router-dom';

const placeholderImg = "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1000";

export default function Organization() {
  return (
    <div className="flex flex-col items-start w-full font-['Inter']">
      <div className="flex gap-[8px] items-center px-[80px] py-[20px] w-full md:px-[20px] lg:px-[80px]">
        <Link to="/" className="font-medium text-[#0d4d99] text-[14px] no-underline">Trang chủ</Link>
        <span className="text-[#666] text-[12px]">&gt;</span>
        <Link to="/gioi-thieu" className="font-medium text-[#0d4d99] text-[14px] no-underline">Giới thiệu</Link>
        <span className="text-[#666] text-[12px]">&gt;</span>
        <p className="font-normal text-[#666] text-[14px] m-0">Cơ cấu tổ chức</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 items-start px-4 sm:px-6 py-10 sm:py-12 w-full lg:px-[80px]">
        <article className="flex flex-1 flex-col gap-[32px] items-start w-full">
          <h1 className="font-bold text-[#1a428a] text-[22px] sm:text-[28px] leading-[1.4] m-0">Cơ cấu tổ chức Khoa Sử - Địa - Chính trị</h1>

          <div className="flex flex-col gap-[16px] w-full text-[#111] text-[16px] leading-[1.8]">
            <p className="m-0 text-justify">
              Cơ cấu tổ chức của Khoa Sử - Địa - Chính trị được xây dựng trên cơ sở tinh gọn, hiệu quả, đảm bảo sự phối hợp chặt chẽ giữa các bộ phận trong công tác quản lý, đào tạo và nghiên cứu khoa học. Dưới đây là sơ đồ cơ cấu tổ chức của Khoa:
            </p>

            <div className="w-full mt-[20px]">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                {/* Ban chủ nhiệm khoa */}
                <div className="bg-[#f8fafc] border border-slate-200 rounded-[12px] p-6 shadow-sm">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-[#1a428a] p-2 rounded-lg text-white">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                    </div>
                    <h2 className="font-bold text-[#1a428a] text-[20px] m-0">Ban chủ nhiệm khoa</h2>
                  </div>
                  <ul className="list-disc pl-5 m-0 text-[#444] space-y-2">
                    <li>Trưởng Khoa: Chịu trách nhiệm chung về mọi hoạt động của Khoa.</li>
                    <li>Phó Trưởng Khoa: Phụ trách đào tạo, nghiên cứu khoa học và cơ sở vật chất.</li>
                  </ul>
                </div>

                {/* Các bộ môn */}
                <div className="bg-[#fff5f6] border border-red-50 rounded-[12px] p-6 shadow-sm">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-[#c8102e] p-2 rounded-lg text-white">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg>
                    </div>
                    <h2 className="font-bold text-[#c8102e] text-[20px] m-0">Các bộ môn trực thuộc</h2>
                  </div>
                  <ul className="list-disc pl-5 m-0 text-[#444] space-y-2">
                    <li>Bộ môn Sư phạm Lịch sử</li>
                    <li>Bộ môn Sư phạm Địa lý</li>
                    <li>Bộ môn Giáo dục Chính trị</li>
                    <li>Bộ môn Giáo dục Quốc phòng An ninh</li>
                  </ul>
                </div>

                {/* Hội đồng khoa */}
                <div className="bg-amber-50 border border-amber-100 rounded-[12px] p-6 shadow-sm">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-amber-500 p-2 rounded-lg text-white">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
                    </div>
                    <h2 className="font-bold text-amber-600 text-[20px] m-0">Hội đồng Khoa & Khoa học</h2>
                  </div>
                  <ul className="list-disc pl-5 m-0 text-[#444] space-y-2">
                    <li>Hội đồng Khoa: Tư vấn định hướng phát triển chiến lược.</li>
                    <li>Hội đồng Khoa học & Đào tạo: Tham mưu, đánh giá chất lượng chuyên môn.</li>
                  </ul>
                </div>

                {/* Các tổ chức đoàn thể */}
                <div className="bg-green-50 border border-green-100 rounded-[12px] p-6 shadow-sm">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-green-600 p-2 rounded-lg text-white">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    </div>
                    <h2 className="font-bold text-green-700 text-[20px] m-0">Tổ chức Đoàn thể</h2>
                  </div>
                  <ul className="list-disc pl-5 m-0 text-[#444] space-y-2">
                    <li>Công đoàn Khoa</li>
                    <li>Đoàn Thanh niên Cộng sản Hồ Chí Minh</li>
                    <li>Liên Chi hội Sinh viên</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </article>

        <aside className="flex flex-col gap-6 items-start w-full lg:w-[300px]">
          <div className="bg-[#f5f7fa] flex flex-col gap-[16px] items-start p-[24px] rounded-[12px] w-full">
            <p className="font-bold text-[#1a428a] text-[16px] uppercase m-0">Liên kết nhanh</p>
            <div className="flex flex-col gap-[12px] w-full">
              <Link to="/gioi-thieu/co-cau-to-chuc" className="flex gap-[8px] items-center w-full cursor-pointer hover:underline text-[#0d4d99] no-underline">
                <span className="text-[12px]">&gt;</span>
                <p className="flex-1 font-medium text-[14px] m-0">Cơ cấu tổ chức</p>
              </Link>
              <Link to="/khoa-bo-mon" className="flex gap-[8px] items-center w-full cursor-pointer hover:underline text-[#0d4d99] no-underline">
                <span className="text-[12px]">&gt;</span>
                <p className="flex-1 font-medium text-[14px] m-0">Ban chủ nhiệm & Đội ngũ</p>
              </Link>
              <Link to="/tai-lieu-bieu-mau" className="flex gap-[8px] items-center w-full cursor-pointer hover:underline text-[#0d4d99] no-underline">
                <span className="text-[12px]">&gt;</span>
                <p className="flex-1 font-medium text-[14px] m-0">Tài liệu & Biểu mẫu</p>
              </Link>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
