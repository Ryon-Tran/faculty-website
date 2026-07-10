import React from 'react';
import { Link } from 'react-router-dom';

const placeholderImg = "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1000";

const programs = [
  { name: "Sư phạm Lịch sử", level: "Đại học", duration: "4 năm", desc: "Đào tạo giáo viên Lịch sử THPT, nghiên cứu lịch sử Việt Nam và thế giới" },
  { name: "Sư phạm Địa lý", level: "Đại học", duration: "4 năm", desc: "Đào tạo giáo viên Địa lý, nghiên cứu địa lý tự nhiên và kinh tế-xã hội" },
  { name: "Giáo dục Chính trị", level: "Đại học", duration: "4 năm", desc: "Đào tạo giáo viên GDCD, nghiên cứu triết học, chính trị học" },
  { name: "Giáo dục Quốc phòng An ninh", level: "Đại học", duration: "4 năm", desc: "Giảng dạy quốc phòng an ninh cho sinh viên toàn trường" },
  { name: "Lịch sử Việt Nam", level: "Thạc sĩ", duration: "2 năm", desc: "Nghiên cứu chuyên sâu về lịch sử Việt Nam qua các thời kỳ" },
  { name: "Lịch sử Việt Nam", level: "Tiến sĩ", duration: "3-4 năm", desc: "Nghiên cứu khoa học ở trình độ cao nhất trong lĩnh vực lịch sử" },
];

export default function Education() {
  return (
    <div className="flex flex-col items-start w-full font-['Inter']">
      <div className="flex gap-[8px] items-center px-[80px] py-[20px] w-full md:px-[20px] lg:px-[80px]">
        <Link to="/" className="font-medium text-[#0d4d99] text-[14px] no-underline">Trang chủ</Link>
        <span className="text-[#666] text-[12px]">&gt;</span>
        <p className="font-normal text-[#666] text-[14px] m-0">Đào tạo</p>
      </div>

      <div className="flex h-[280px] items-center justify-center relative w-full">
        <div className="absolute inset-0"><img alt="" className="absolute object-cover size-full" src={placeholderImg} /><div className="absolute bg-[rgba(0,0,0,0.5)] inset-0" /></div>
        <p className="font-extrabold text-[48px] text-center text-white uppercase relative">Chương trình đào tạo</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-[40px] items-start px-[80px] py-[64px] w-full md:px-[20px] lg:px-[80px]">
        <div className="flex flex-1 flex-col gap-[40px] items-start w-full">
          <div className="flex flex-col gap-[24px] w-full">
            <h2 className="font-bold text-[#c8102e] text-[24px] uppercase m-0">Các ngành đào tạo</h2>
            <div className="flex flex-col gap-[16px] w-full">
              {programs.map((prog, idx) => (
                <div key={idx} className="bg-white border border-[#e5e7eb] flex flex-col md:flex-row gap-[20px] items-start p-[24px] rounded-[12px] hover:shadow-md transition-shadow cursor-pointer">
                  <div className="bg-[#f5f7fa] flex items-center justify-center rounded-full size-[48px] shrink-0 text-[20px]">📖</div>
                  <div className="flex flex-1 flex-col gap-[8px]">
                    <div className="flex items-center gap-[12px]">
                      <h3 className="font-bold text-[#1a428a] text-[18px] m-0">{prog.name}</h3>
                      <span className={`text-[11px] font-semibold px-[8px] py-[2px] rounded-[4px] ${prog.level === 'Đại học' ? 'bg-[#1a428a]/10 text-[#1a428a]' : prog.level === 'Thạc sĩ' ? 'bg-[#c8102e]/10 text-[#c8102e]' : 'bg-[#036]/10 text-[#036]'}`}>{prog.level}</span>
                    </div>
                    <p className="font-normal text-[#666] text-[14px] m-0 leading-[1.6]">{prog.desc}</p>
                    <p className="font-medium text-[#666] text-[13px] m-0">Thời gian đào tạo: <span className="text-[#111]">{prog.duration}</span></p>
                  </div>
                  <span className="text-[#0d4d99] font-bold text-[12px] underline shrink-0 cursor-pointer hover:text-[#c8102e]">CHI TIẾT →</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-[24px] w-full">
            <h2 className="font-bold text-[#c8102e] text-[24px] uppercase m-0">Chuẩn đầu ra</h2>
            <div className="bg-[#f5f7fa] p-[24px] rounded-[12px] w-full">
              <p className="font-normal text-[#111] text-[15px] leading-[1.8] m-0">
                Sinh viên tốt nghiệp các ngành đào tạo của Khoa Sử - Địa – Chính trị có khả năng giảng dạy, nghiên cứu các môn Lịch sử, Địa lí, Giáo dục công dân, đồng thời có thể tham gia vào các lĩnh vực liên ngành như Giáo dục, Luật pháp, Du lịch và Quan hệ quốc tế đáp ứng nhu cầu đa dạng của xã hội và thị trường lao động.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-[24px] items-start w-full lg:w-[300px]">
          <div className="bg-[#f5f7fa] flex flex-col gap-[16px] items-start p-[24px] rounded-[12px] w-full">
            <p className="font-bold text-[#1a428a] text-[16px] uppercase m-0">Bậc đào tạo</p>
            <div className="flex flex-col gap-[12px] w-full">
              {['Đại học chính quy', 'Thạc sĩ', 'Tiến sĩ', 'Bồi dưỡng nghiệp vụ'].map((link, idx) => (
                <div key={idx} className="flex gap-[8px] items-center w-full cursor-pointer hover:underline text-[#0d4d99]">
                  <span className="text-[12px]">&gt;</span>
                  <p className="flex-1 font-medium text-[14px] m-0">{link}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-[#f5f7fa] flex flex-col gap-[16px] items-start p-[24px] rounded-[12px] w-full">
            <p className="font-bold text-[#1a428a] text-[16px] uppercase m-0">Tài liệu</p>
            <div className="flex flex-col gap-[12px] w-full">
              {['Khung chương trình đào tạo', 'Đề cương chi tiết', 'Biểu mẫu', 'Quy chế đào tạo'].map((link, idx) => (
                <div key={idx} className="flex gap-[8px] items-center w-full cursor-pointer hover:underline text-[#0d4d99]">
                  <span className="text-[12px]">📄</span>
                  <p className="flex-1 font-medium text-[14px] m-0">{link}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
