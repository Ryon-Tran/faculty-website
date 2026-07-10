import React from 'react';
import { Link } from 'react-router-dom';

const placeholderImg = "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1000";

const admissionPosts = Array.from({ length: 8 }, (_, i) => ({
  id: i + 1,
  title: [
    "Đã có điểm thi THPT 2026 - Chọn đúng ngành!",
    "Tuyển sinh ngành Sư phạm Địa lý 2026",
    "Tuyển sinh ngành Sư phạm Lịch sử 2026",
    "Tuyển sinh ngành Giáo dục Chính trị 2026",
    "Hướng dẫn đăng ký nguyện vọng xét tuyển",
    "Điểm chuẩn các năm của Khoa Sử - Địa - CT",
    "Chính sách học bổng năm 2026",
    "Thông tin ngày hội tư vấn tuyển sinh",
  ][i],
  date: `${(30 - i * 3).toString().padStart(2, '0')}/06/2026`,
}));

export default function AdmissionsList() {
  return (
    <div className="flex flex-col items-start w-full font-['Inter']">
      <div className="flex gap-2 items-center px-20 py-5 w-full md:px-5 lg:px-20">
        <Link to="/" className="font-medium text-[#0d4d99] text-[14px] no-underline">Trang chủ</Link>
        <span className="text-[#666] text-[12px]">&gt;</span>
        <p className="font-normal text-[#666] text-[14px] m-0">Tuyển sinh</p>
      </div>

      <div className="flex h-55 sm:h-75 items-center justify-center relative w-full">
        <div className="absolute inset-0"><img alt="" className="absolute object-cover size-full" src={placeholderImg} /><div className="absolute bg-[rgba(0,0,0,0.5)] inset-0" /></div>
        <p className="font-extrabold text-[42px] text-center text-white uppercase relative">Thông tin tuyển sinh</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 items-start px-4 sm:px-6 py-10 sm:py-16 w-full lg:px-6">
        <div className="flex flex-1 flex-col gap-[24px] items-start w-full">
          <h2 className="font-bold text-[#c8102e] text-[24px] uppercase m-0">Danh sách bài viết tuyển sinh</h2>
          <div className="flex flex-col gap-[16px] w-full">
            {admissionPosts.map((item) => (
              <div key={item.id} className="bg-white flex flex-col sm:flex-row gap-4 sm:gap-5 items-start p-4 sm:p-5 rounded-xl border border-[#e5e7eb] cursor-pointer hover:shadow-md transition-shadow">
                <div className="w-full sm:w-50 h-45 sm:h-32.5 relative rounded-lg overflow-hidden shrink-0">
                  <img alt="" className="absolute inset-0 object-cover size-full" src={placeholderImg} />
                </div>
                <div className="flex flex-1 flex-col gap-2">
                  <h3 className="font-bold text-[#1a428a] text-[16px] m-0 hover:text-[#c8102e] transition-colors line-clamp-2">{item.title}</h3>
                  <p className="font-normal text-[#666] text-[14px] m-0 leading-[1.6] line-clamp-2">
                    Khoa Sử - Địa - Chính trị thông báo tuyển sinh năm 2026 với nhiều chính sách ưu đãi dành cho thí sinh...
                  </p>
                  <p className="font-normal text-[#808080] text-[12px] m-0">{item.date}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-center gap-2 w-full mt-4">
            {[1, 2, 3].map(p => (
              <button key={p} className={`size-9 flex items-center justify-center rounded-md text-[14px] font-medium cursor-pointer border transition-colors ${p === 1 ? 'bg-[#1a428a] text-white border-[#1a428a]' : 'bg-white text-[#666] border-[#e5e7eb] hover:border-[#1a428a]'}`}>{p}</button>
            ))}
          </div>
        </div>

        <aside className="flex flex-col gap-6 items-start w-full lg:w-75">
          <div className="bg-[#c8102e] flex flex-col gap-3 p-6 rounded-xl w-full">
            <p className="font-bold text-white text-[18px] m-0">Tư vấn tuyển sinh</p>
            <p className="font-normal text-white/80 text-[14px] m-0">Liên hệ ngay để được hỗ trợ</p>
            <p className="font-bold text-white text-[16px] m-0">📞 0236 3733 290</p>
          </div>
          <div className="bg-[#f5f7fa] flex flex-col gap-4 items-start p-6 rounded-xl w-full">
            <p className="font-bold text-[#1a428a] text-[16px] uppercase m-0">Liên kết nhanh</p>
            <div className="flex flex-col gap-3 w-full">
              {['Hướng dẫn đăng ký', 'Điểm chuẩn 2025', 'Chương trình đào tạo', 'Học bổng'].map((link, idx) => (
                <div key={idx} className="flex gap-2 items-center cursor-pointer hover:underline text-[#0d4d99]">
                  <span className="text-[12px]">&gt;</span>
                  <p className="font-medium text-[14px] m-0">{link}</p>
                </div>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
