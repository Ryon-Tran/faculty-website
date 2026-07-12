import React from 'react';
import { Link } from 'react-router-dom';

const departmentData = [
  {
    id: 1,
    name: "Bộ môn Sư phạm Lịch sử",
    members: [
      { id: 1, name: "Trương Anh Thuận", degree: "TS., GV", link: "http://scv.udn.vn/tathuan", role: "Trưởng Bộ môn" },
      { id: 2, name: "Nguyễn Văn Sang", degree: "PGS.TS., GVC", link: "http://scv.udn.vn/nvsang", role: "" },
      { id: 3, name: "Lê Thị Thu Hiền", degree: "TS., GV", link: "http://scv.udn.vn/ltthien", role: "" },
      { id: 4, name: "Lê Thị Mai", degree: "TS., GV", link: "http://scv.udn.vn/ltmai", role: "" },
      { id: 5, name: "Đặng Thị Thùy Dương", degree: "ThS., GV", link: "http://scv.udn.vn/dtthuyduong", role: "" },
    ]
  },
  {
    id: 2,
    name: "Bộ môn Sư phạm Địa lý",
    members: [
      { id: 1, name: "Nguyễn Thanh Tưởng", degree: "TS., GV", link: "http://scv.udn.vn/nttuong", role: "Phó Trưởng Khoa\nTrưởng Bộ môn" },
      { id: 2, name: "Nguyễn Phú Thắng", degree: "TS., GV", link: "http://scv.udn.vn/npthang", role: "" },
      { id: 3, name: "Nguyễn Văn Thái", degree: "TS., GV", link: "http://scv.udn.vn/nvthai", role: "" },
      { id: 4, name: "Nguyễn Thị Diệu", degree: "ThS., GV", link: "http://scv.udn.vn/ntdieu", role: "" },
      { id: 5, name: "Nguyễn Đặng Thảo Nguyên", degree: "ThS., GV", link: "http://scv.udn.vn/ndtnguyen", role: "" },
      { id: 6, name: "Nguyễn Thị Kim Thoa", degree: "ThS., GV", link: "http://scv.udn.vn/ntkthoa", role: "" },
    ]
  },
  {
    id: 3,
    name: "Bộ môn Giáo dục Chính trị",
    members: [
      { id: 1, name: "Đinh Thị Phượng", degree: "TS., GV", link: "http://scv.udn.vn/dtphuong", role: "Trưởng Khoa\nTrưởng Bộ môn" },
      { id: 2, name: "Nguyễn Văn Quế", degree: "TS., GVC", link: "http://scv.udn.vn/nvque", role: "" },
    ]
  },
  {
    id: 4,
    name: "Bộ môn Giáo dục Quốc phòng An ninh",
    members: [
      { id: 1, name: "Phạm Văn Dũng", degree: "ThS., GV", link: "", role: "Trưởng Bộ môn" },
      { id: 2, name: "Trần Minh Quang", degree: "ThS., GV", link: "", role: "" },
    ]
  }
];

export default function Departments() {
  return (
    <div className="flex flex-col items-start w-full font-['Inter']">
      <div className="flex gap-[8px] items-center px-[20px] py-[20px] w-full lg:px-[80px]">
        <Link to="/" className="font-medium text-[#0d4d99] text-[14px] no-underline">Trang chủ</Link>
        <span className="text-[#666] text-[12px]">&gt;</span>
        <p className="font-normal text-[#666] text-[14px] m-0">Ban chủ nhiệm & Đội ngũ</p>
      </div>

      <div className="flex flex-col gap-[32px] items-start px-[20px] lg:px-[80px] py-6 sm:py-8 w-full border-t border-[#e5e7eb]">
        <div className="flex flex-col gap-[12px] w-full mb-4">
          <h1 className="font-extrabold text-[#1a428a] text-[28px] md:text-[32px] m-0 leading-tight">
            Ban chủ nhiệm & Đội ngũ giảng viên Khoa Sử - Địa - Chính trị
          </h1>
          <div className="h-[4px] w-[60px] bg-[#c8102e] rounded-full"></div>
          <div className="flex gap-4 items-center text-[#666] text-[14px] mt-2">
            <span>Cập nhật năm 2025</span>
          </div>
        </div>

        <div className="flex flex-col gap-[48px] w-full">
          {departmentData.map((dept) => (
            <div key={dept.id} className="flex flex-col gap-[16px] w-full">
              <h2 className="font-bold text-[#c8102e] text-[22px] m-0">
                {dept.id}. {dept.name}
              </h2>
              
              <div className="w-full overflow-x-auto rounded-[8px] border border-[#e5e7eb] shadow-sm">
                <table className="w-full text-left border-collapse min-w-[800px]">
                  <thead>
                    <tr className="bg-[#f8fafc] border-b border-[#e5e7eb]">
                      <th className="py-3 px-4 font-semibold text-[#1a428a] text-[15px] w-[60px] text-center border-r border-[#e5e7eb]">TT</th>
                      <th className="py-3 px-4 font-semibold text-[#1a428a] text-[15px] border-r border-[#e5e7eb] w-[250px]">Họ và tên</th>
                      <th className="py-3 px-4 font-semibold text-[#1a428a] text-[15px] border-r border-[#e5e7eb] w-[180px]">Học hàm/Học vị</th>
                      <th className="py-3 px-4 font-semibold text-[#1a428a] text-[15px] border-r border-[#e5e7eb]">Thông tin GV</th>
                      <th className="py-3 px-4 font-semibold text-[#1a428a] text-[15px] w-[220px]">Chức vụ</th>
                    </tr>
                  </thead>
                  <tbody>
                    {dept.members.map((member) => (
                      <tr key={member.id} className="border-b border-[#e5e7eb] hover:bg-[#fcfcfc] transition-colors">
                        <td className="py-3 px-4 text-[#444] text-[15px] text-center border-r border-[#e5e7eb]">{member.id}</td>
                        <td className="py-3 px-4 text-[#111] font-medium text-[15px] border-r border-[#e5e7eb]">{member.name}</td>
                        <td className="py-3 px-4 text-[#444] text-[15px] border-r border-[#e5e7eb]">{member.degree}</td>
                        <td className="py-3 px-4 text-[#0d4d99] text-[14px] border-r border-[#e5e7eb]">
                          {member.link ? (
                            <a href={member.link} target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center gap-1 break-all">
                              <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
                              {member.link.replace('http://', '').replace('https://', '')}
                            </a>
                          ) : (
                            <span className="text-[#999] italic">-</span>
                          )}
                        </td>
                        <td className="py-3 px-4 text-[#444] text-[15px] whitespace-pre-line">
                          {member.role || <span className="text-[#999] italic">-</span>}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
