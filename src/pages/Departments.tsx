import React from 'react';
import { Link } from 'react-router-dom';
import { AppSidebar } from '../components/ui/AppSidebar';

const imgAvatar1 = "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=256&auto=format&fit=crop";
const imgAvatar2 = "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=256&auto=format&fit=crop";

const departments = [
  { name: "Bộ môn Sư phạm Lịch sử", head: "TS. Nguyễn Văn A", members: 12, desc: "Đào tạo giáo viên Lịch sử THPT, nghiên cứu lịch sử Việt Nam và thế giới" },
  { name: "Bộ môn Sư phạm Địa lý", head: "PGS.TS. Trần Thị B", members: 10, desc: "Đào tạo giáo viên Địa lý, nghiên cứu địa lý tự nhiên và kinh tế-xã hội" },
  { name: "Bộ môn Giáo dục Chính trị", head: "TS. Lê Văn C", members: 8, desc: "Đào tạo giáo viên GDCD, nghiên cứu triết học, chính trị học" },
  { name: "Bộ môn GD Quốc phòng An ninh", head: "ThS. Phạm Văn D", members: 15, desc: "Giảng dạy quốc phòng an ninh cho sinh viên toàn trường" },
];

const staff = Array.from({ length: 8 }, (_, i) => ({
  name: ["PGS.TS. Nguyễn Duy Phương", "TS. Nguyễn Thanh Tưởng", "TS. Lê Thị Hồng", "ThS. Trần Minh Quang", "TS. Phạm Văn Nam", "ThS. Nguyễn Thị Lan", "TS. Hoàng Đức Mạnh", "ThS. Vũ Thị Mai"][i],
  role: ["Trưởng Khoa", "Phó Trưởng Khoa", "Giảng viên", "Giảng viên", "Giảng viên", "Giảng viên", "Giảng viên", "Giảng viên"][i],
  dept: ["Lịch sử", "Địa lý", "Lịch sử", "Chính trị", "Địa lý", "Lịch sử", "QPAN", "Chính trị"][i],
  email: `gv${i + 1}@ued.udn.vn`,
}));

export default function Departments() {
  return (
    <div className="flex flex-col items-start w-full font-['Inter']">
      <div className="flex gap-[8px] items-center px-[20px] py-[20px] w-full lg:px-[80px]">
        <Link to="/" className="font-medium text-[#0d4d99] text-[14px] no-underline">Trang chủ</Link>
        <span className="text-[#666] text-[12px]">&gt;</span>
        <p className="font-normal text-[#666] text-[14px] m-0">Khoa & Bộ môn</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 items-start px-[20px] lg:px-[80px] py-6 sm:py-8 w-full border-t border-[#e5e7eb]">
        <div className="flex flex-1 flex-col gap-[64px] items-start w-full">
          <div className="flex flex-col gap-[24px] w-full">
            <h2 className="font-bold text-[#c8102e] text-[24px] uppercase m-0">Các bộ môn</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[24px] w-full">
              {departments.map((dept, idx) => (
                <div key={idx} className="bg-white border border-[#e5e7eb] flex flex-col gap-[16px] p-[24px] rounded-[12px] hover:shadow-md transition-shadow cursor-pointer">
                  <div className="flex gap-[12px] items-center">
                    <div className="bg-[#f5f7fa] flex items-center justify-center rounded-full size-[48px] text-[20px]">📖</div>
                    <h3 className="font-bold text-[#1a428a] text-[18px] m-0">{dept.name}</h3>
                  </div>
                  <p className="font-normal text-[#666] text-[14px] m-0 leading-[1.6]">{dept.desc}</p>
                  <div className="flex gap-[24px] text-[13px]">
                    <span className="text-[#666]">👤 Trưởng BM: <span className="font-semibold text-[#111]">{dept.head}</span></span>
                    <span className="text-[#666]">👥 <span className="font-semibold text-[#111]">{dept.members}</span> thành viên</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-[24px] w-full">
            <h2 className="font-bold text-[#c8102e] text-[24px] uppercase m-0">Đội ngũ giảng viên</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px] w-full">
              {staff.map((s, idx) => (
                <div key={idx} className="bg-white border border-[#e5e7eb] flex flex-col items-center gap-[12px] p-[20px] rounded-[12px] hover:shadow-md transition-shadow text-center">
                  <img alt="" className="rounded-full size-[80px] object-cover" src={idx % 2 === 0 ? imgAvatar1 : imgAvatar2} />
                  <p className="font-bold text-[#1a428a] text-[15px] m-0">{s.name}</p>
                  <p className="font-semibold text-[#c8102e] text-[13px] m-0">{s.role}</p>
                  <span className="bg-[#f5f7fa] text-[#1a428a] text-[11px] font-semibold px-[8px] py-[2px] rounded-[4px]">{s.dept}</span>
                  <p className="font-normal text-[#666] text-[12px] m-0">✉️ {s.email}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <aside className="flex flex-col gap-6 items-start w-full lg:w-[300px]">
          <AppSidebar />
        </aside>
      </div>
    </div>
  );
}
