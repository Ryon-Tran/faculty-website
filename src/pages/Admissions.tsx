import React from 'react';
import { Link } from 'react-router-dom';
import admissionsData from '../data/admissions.json';

const placeholderImg = "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1000";

const admissionPrograms = [
  { code: "7140218", name: "Sư phạm Lịch sử", quota: 50, method: "Xét tuyển kết hợp", score: "24.0" },
  { code: "7140219", name: "Sư phạm Địa lý", quota: 50, method: "Xét tuyển kết hợp", score: "23.5" },
  { code: "7140205", name: "Giáo dục Chính trị", quota: 40, method: "Xét tuyển kết hợp", score: "22.0" },
  { code: "7860101", name: "Giáo dục Quốc phòng An ninh", quota: 60, method: "Xét tuyển kết hợp", score: "21.5" },
];

const getDayAndMonth = (dateStr: string) => {
  if (!dateStr) return { day: "01", month: "THÁNG 1" };
  const parts = dateStr.split('/');
  if (parts.length < 3) return { day: "01", month: "THÁNG 1" };
  const day = parts[0];
  const monthNum = parseInt(parts[1], 10);
  const monthNames = [
    "THÁNG 1", "THÁNG 2", "THÁNG 3", "THÁNG 4",
    "THÁNG 5", "THÁNG 6", "THÁNG 7", "THÁNG 8",
    "THÁNG 9", "THÁNG 10", "THÁNG 11", "THÁNG 12"
  ];
  const month = monthNames[monthNum - 1] || "THÁNG 1";
  return { day, month };
};

const getSlug = (link: string) => {
  if (!link) return '';
  const parts = link.split('/');
  const lastPart = parts[parts.length - 1];
  return lastPart.replace('.html', '');
};

export default function Admissions() {
  return (
    <div className="flex flex-col items-start w-full font-['Inter']">
      <div className="flex gap-[8px] items-center px-[80px] py-[20px] w-full md:px-[20px] lg:px-[80px]">
        <p className="font-medium text-[#0d4d99] text-[14px] cursor-pointer m-0">Trang chủ</p>
        <span className="text-[#666] text-[12px]">&gt;</span>
        <p className="font-normal text-[#666] text-[14px] m-0">Tuyển sinh</p>
      </div>

      <div className="flex h-[280px] items-center justify-center relative w-full">
        <div className="absolute inset-0"><img alt="" className="absolute object-cover size-full" src={placeholderImg} /><div className="absolute bg-[rgba(0,0,0,0.5)] inset-0" /></div>
        <div className="relative flex flex-col items-center gap-[16px]">
          <p className="font-extrabold text-[48px] text-center text-white uppercase">Tuyển sinh 2026</p>
          <p className="font-normal text-[18px] text-white/80 text-center max-w-[700px]">Khoa Sử - Địa - Chính trị, Trường Đại học Sư phạm - Đại học Đà Nẵng</p>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-[40px] items-start px-[80px] py-[64px] w-full md:px-[20px] lg:px-[80px]">
        <div className="flex flex-1 flex-col gap-[40px] items-start w-full">
          <div className="flex flex-col gap-[24px] w-full">
            <h2 className="font-bold text-[#c8102e] text-[24px] uppercase m-0">Ngành đào tạo</h2>
            <div className="overflow-x-auto w-full">
              <table className="w-full border-collapse text-[14px]">
                <thead>
                  <tr className="bg-[#1a428a] text-white">
                    <th className="p-[12px] text-left font-semibold rounded-tl-[8px]">Mã ngành</th>
                    <th className="p-[12px] text-left font-semibold">Tên ngành</th>
                    <th className="p-[12px] text-center font-semibold">Chỉ tiêu</th>
                    <th className="p-[12px] text-left font-semibold">Phương thức</th>
                    <th className="p-[12px] text-center font-semibold rounded-tr-[8px]">Điểm chuẩn 2025</th>
                  </tr>
                </thead>
                <tbody>
                  {admissionPrograms.map((prog, idx) => (
                    <tr key={idx} className="border-b border-[#e5e7eb] hover:bg-[#f5f7fa] transition-colors">
                      <td className="p-[12px] font-semibold text-[#1a428a]">{prog.code}</td>
                      <td className="p-[12px] font-medium text-[#111]">{prog.name}</td>
                      <td className="p-[12px] text-center text-[#666]">{prog.quota}</td>
                      <td className="p-[12px] text-[#666]">{prog.method}</td>
                      <td className="p-[12px] text-center font-bold text-[#c8102e]">{prog.score}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="flex flex-col gap-[24px] w-full">
            <h2 className="font-bold text-[#c8102e] text-[24px] uppercase m-0">Tin tuyển sinh</h2>
            <div className="flex flex-col items-start w-full">
              {admissionsData.map((item, idx) => {
                const { day, month } = getDayAndMonth(item.date);
                const colors = ["#1a428a", "#c8102e"];
                const color = colors[idx % 2];
                return (
                  <Link to={`/tin-tuc/${getSlug(item.link)}`} key={idx} className="border-[#e5e7eb] border-b flex gap-[16px] items-start py-[12px] w-full last:border-b-0 cursor-pointer hover:bg-[#f5f7fa] transition-colors p-[8px] rounded-[8px] no-underline">
                    <div className="flex flex-col gap-[4px] items-center w-[48px] shrink-0">
                      <div className="flex items-center justify-center rounded-[4px] size-[40px]" style={{ backgroundColor: color }}>
                        <span className="font-bold text-[18px] text-white">{day}</span>
                      </div>
                      <span className="font-semibold text-[9px] uppercase" style={{ color: color }}>{month}</span>
                    </div>
                    <div className="flex flex-1 flex-col gap-[4px] items-start">
                      <p className="font-semibold text-[#111] text-[14px] m-0 line-clamp-2">{item.title}</p>
                      <p className="font-normal text-[#666] text-[13px] m-0 line-clamp-2">{item.description || "Xem chi tiết thông báo tuyển sinh tại đây..."}</p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-[24px] items-start w-full lg:w-[300px]">
          <div className="bg-[#f5f7fa] flex flex-col gap-[16px] items-start p-[24px] rounded-[12px] w-full">
            <p className="font-bold text-[#1a428a] text-[16px] uppercase m-0">Liên kết nhanh</p>
            <div className="flex flex-col gap-[12px] w-full">
              {['Hướng dẫn đăng ký', 'Điểm chuẩn 2025', 'Chương trình đào tạo', 'Học bổng & Ưu đãi', 'FAQ Tuyển sinh'].map((link, idx) => (
                <div key={idx} className="flex gap-[8px] items-center w-full cursor-pointer hover:underline text-[#0d4d99]">
                  <span className="text-[12px]">&gt;</span>
                  <p className="flex-1 font-medium text-[14px] m-0">{link}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-[#c8102e] flex flex-col gap-[12px] p-[24px] rounded-[12px] w-full">
            <p className="font-bold text-white text-[18px] m-0">Đăng ký tư vấn</p>
            <p className="font-normal text-white/80 text-[14px] m-0">Liên hệ ngay để được tư vấn chọn ngành phù hợp</p>
            <button className="bg-white hover:bg-[#f5f7fa] transition-colors text-[#c8102e] font-bold text-[14px] px-[20px] py-[10px] rounded-[8px] border-none cursor-pointer mt-[8px]">
              Liên hệ ngay →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
