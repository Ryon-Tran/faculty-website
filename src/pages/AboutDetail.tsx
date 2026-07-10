import React from 'react';
import { Link } from 'react-router-dom';

const placeholderImg = "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1000";

export default function AboutDetail() {
  return (
    <div className="flex flex-col items-start w-full font-['Inter']">
      <div className="flex gap-[8px] items-center px-[80px] py-[20px] w-full md:px-[20px] lg:px-[80px]">
        <Link to="/" className="font-medium text-[#0d4d99] text-[14px] no-underline">Trang chủ</Link>
        <span className="text-[#666] text-[12px]">&gt;</span>
        <Link to="/gioi-thieu" className="font-medium text-[#0d4d99] text-[14px] no-underline">Giới thiệu</Link>
        <span className="text-[#666] text-[12px]">&gt;</span>
        <p className="font-normal text-[#666] text-[14px] m-0">Lịch sử hình thành</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 items-start px-4 sm:px-6 py-10 sm:py-12 w-full lg:px-6">
        <article className="flex flex-1 flex-col gap-[32px] items-start w-full">
          <h1 className="font-bold text-[#1a428a] text-[22px] sm:text-[28px] leading-[1.4] m-0">Lịch sử hình thành và phát triển</h1>

          <div className="aspect-video relative rounded-[12px] w-full overflow-hidden">
            <img alt="" className="absolute inset-0 object-cover size-full" src={placeholderImg} />
          </div>

          <div className="flex flex-col gap-[16px] w-full text-[#111] text-[16px] leading-[1.8]">
            <p className="m-0">
              Khoa Sử - Địa – Chính trị được thành lập theo Quyết định số 19/NQ-HĐT ngày 07 tháng 03 năm 2025 của Hội đồng trường Trường Đại học Sư phạm - Đại học Đà Nẵng trên cơ sở sáp nhập Khoa Lịch Sử, Khoa Địa lí và Khoa Giáo dục Chính trị.
            </p>
            <h2 className="font-bold text-[#c8102e] text-[20px] m-0 mt-[8px]">Các mốc lịch sử quan trọng</h2>
            <div className="flex flex-col gap-[20px] border-l-2 border-[#1a428a] pl-[24px] ml-[12px]">
              {[
                { year: "1975", text: "Thành lập Khoa Sử và Khoa Địa lý tại Trường Đại học Sư phạm Đà Nẵng" },
                { year: "1994", text: "Thành lập Khoa Giáo dục Chính trị" },
                { year: "2005", text: "Mở thêm ngành Giáo dục Quốc phòng An ninh" },
                { year: "2020", text: "Đào tạo Thạc sĩ và Tiến sĩ ngành Lịch sử Việt Nam" },
                { year: "2025", text: "Sáp nhập 3 Khoa thành Khoa Sử - Địa - Chính trị" },
              ].map((item, idx) => (
                <div key={idx} className="flex gap-[16px] items-start relative">
                  <div className="absolute -left-[33px] top-[4px] size-[14px] bg-[#1a428a] rounded-full border-2 border-white" />
                  <span className="font-bold text-[#1a428a] text-[16px] shrink-0">{item.year}</span>
                  <p className="font-normal text-[#666] text-[15px] m-0">{item.text}</p>
                </div>
              ))}
            </div>
            <p className="m-0 mt-[8px]">
              Hiện nay, Khoa Sử - Địa – Chính trị là một trong những khoa đào tạo có uy tín, đạt chất lượng cao góp phần giữ vững và phát triển vị thế của Đại học Sư phạm - Đại học Đà Nẵng trong hệ thống các trường Đại học Sư phạm trọng điểm quốc gia.
            </p>
          </div>
        </article>

        <aside className="flex flex-col gap-6 items-start w-full lg:w-[300px]">
          <div className="bg-[#f5f7fa] flex flex-col gap-[16px] items-start p-[24px] rounded-[12px] w-full">
            <p className="font-bold text-[#1a428a] text-[16px] uppercase m-0">Liên kết nhanh</p>
            <div className="flex flex-col gap-[12px] w-full">
              <Link to="/gioi-thieu/lich-su" className="flex gap-[8px] items-center w-full cursor-pointer hover:underline text-[#0d4d99] no-underline">
                <span className="text-[12px]">&gt;</span>
                <p className="flex-1 font-medium text-[14px] m-0">Lịch sử hình thành</p>
              </Link>
              <Link to="/khoa-bo-mon" className="flex gap-[8px] items-center w-full cursor-pointer hover:underline text-[#0d4d99] no-underline">
                <span className="text-[12px]">&gt;</span>
                <p className="flex-1 font-medium text-[14px] m-0">Ban chủ nhiệm & Đội ngũ giảng viên</p>
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
