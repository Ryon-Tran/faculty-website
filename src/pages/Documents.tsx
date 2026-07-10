import React from 'react';
import { Link } from 'react-router-dom';

const documents = Array.from({ length: 12 }, (_, i) => ({
  id: i + 1,
  title: [
    "Đơn xin nghỉ học tạm thời",
    "Đơn xin chuyển ngành",
    "Đơn xin bảo lưu kết quả học tập",
    "Đơn xin xác nhận sinh viên",
    "Biểu mẫu đăng ký đề tài NCKH",
    "Biểu mẫu báo cáo tiến độ luận văn",
    "Đơn xin miễn giảm học phí",
    "Biểu mẫu đăng ký thực tập",
    "Đơn xin cấp bảng điểm",
    "Phiếu đánh giá rèn luyện",
    "Đơn xin gia hạn nộp luận văn",
    "Biểu mẫu đăng ký học phần",
  ][i],
  category: ["Sinh viên", "Sinh viên", "Sinh viên", "Sinh viên", "NCKH", "Sau đại học", "Sinh viên", "Đào tạo", "Sinh viên", "Sinh viên", "Sau đại học", "Đào tạo"][i],
  format: ["DOCX", "DOCX", "PDF", "DOCX", "DOCX", "DOCX", "PDF", "DOCX", "PDF", "XLSX", "DOCX", "PDF"][i],
  size: ["45 KB", "38 KB", "120 KB", "32 KB", "56 KB", "78 KB", "95 KB", "42 KB", "65 KB", "88 KB", "52 KB", "110 KB"][i],
}));

export default function Documents() {
  return (
    <div className="flex flex-col items-start w-full font-['Inter']">
      <div className="flex gap-[8px] items-center px-[80px] py-[20px] w-full md:px-[20px] lg:px-[80px]">
        <Link to="/" className="font-medium text-[#0d4d99] text-[14px] no-underline">Trang chủ</Link>
        <span className="text-[#666] text-[12px]">&gt;</span>
        <p className="font-normal text-[#666] text-[14px] m-0">Tài liệu & Biểu mẫu</p>
      </div>

      <div className="flex h-[300px] items-center justify-center relative w-full bg-[#1a428a]">
        <p className="font-extrabold text-[42px] text-center text-white uppercase relative">Tài liệu & Biểu mẫu</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-[40px] items-start px-[80px] py-[64px] w-full md:px-[20px] lg:px-[80px]">
        <div className="flex flex-1 flex-col gap-[24px] items-start w-full">
          <div className="flex flex-wrap gap-[16px] mb-[8px]">
            {["Tất cả", "Sinh viên", "Đào tạo", "NCKH", "Sau đại học"].map((cat, idx) => (
              <button key={idx} className={`px-[16px] py-[8px] rounded-[20px] text-[13px] font-medium border cursor-pointer transition-colors ${idx === 0 ? 'bg-[#1a428a] text-white border-[#1a428a]' : 'bg-white text-[#666] border-[#e5e7eb] hover:border-[#1a428a] hover:text-[#1a428a]'}`}>{cat}</button>
            ))}
          </div>

          <div className="w-full overflow-x-auto">
            <table className="w-full border-collapse text-[14px]">
              <thead>
                <tr className="bg-[#1a428a] text-white">
                  <th className="p-[12px] text-left font-semibold rounded-tl-[8px] w-[40px]">#</th>
                  <th className="p-[12px] text-left font-semibold">Tên tài liệu</th>
                  <th className="p-[12px] text-center font-semibold w-[120px]">Phân loại</th>
                  <th className="p-[12px] text-center font-semibold w-[80px]">Định dạng</th>
                  <th className="p-[12px] text-center font-semibold w-[80px]">Kích thước</th>
                  <th className="p-[12px] text-center font-semibold rounded-tr-[8px] w-[100px]">Tải về</th>
                </tr>
              </thead>
              <tbody>
                {documents.map((doc) => (
                  <tr key={doc.id} className="border-b border-[#e5e7eb] hover:bg-[#f5f7fa] transition-colors">
                    <td className="p-[12px] text-[#808080]">{doc.id}</td>
                    <td className="p-[12px] font-medium text-[#111]">{doc.title}</td>
                    <td className="p-[12px] text-center"><span className="bg-[#f5f7fa] text-[#1a428a] text-[11px] font-semibold px-[8px] py-[2px] rounded-[3px]">{doc.category}</span></td>
                    <td className="p-[12px] text-center text-[#666]">{doc.format}</td>
                    <td className="p-[12px] text-center text-[#666]">{doc.size}</td>
                    <td className="p-[12px] text-center">
                      <button className="bg-[#0d4d99] hover:bg-[#1a428a] text-white text-[12px] font-semibold px-[12px] py-[6px] rounded-[4px] border-none cursor-pointer transition-colors">⬇ Tải</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <aside className="flex flex-col gap-[24px] items-start w-full lg:w-[300px]">
          <div className="bg-[#f5f7fa] flex flex-col gap-[16px] items-start p-[24px] rounded-[12px] w-full">
            <p className="font-bold text-[#1a428a] text-[16px] uppercase m-0">Hướng dẫn</p>
            <p className="font-normal text-[#666] text-[14px] m-0 leading-[1.6]">
              Nhấn nút "Tải" để tải tài liệu về máy tính. Nếu gặp vấn đề, vui lòng liên hệ Văn phòng Khoa.
            </p>
          </div>
        </aside>
      </div>
    </div>
  );
}
