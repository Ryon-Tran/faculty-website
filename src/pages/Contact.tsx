import React from 'react';
import { Link } from 'react-router-dom';

export default function Contact() {
  return (
    <div className="flex flex-col items-start w-full font-['Inter']">
      {/* Breadcrumb */}
      <div className="flex gap-2 items-center px-[20px] py-[20px] w-full lg:px-[80px]">
        <Link to="/" className="font-medium text-[#0d4d99] text-[14px] no-underline hover:underline">Trang chủ</Link>
        <span className="text-[#666] text-[12px]">&gt;</span>
        <p className="font-normal text-[#666] text-[14px] m-0">Liên hệ</p>
      </div>

      {/* Main Content */}
      <div className="flex flex-col gap-8 px-[20px] lg:px-[80px] py-6 sm:py-8 w-full border-t border-[#e5e7eb]">
        <h2 className="font-bold text-[#c8102e] text-[24px] uppercase m-0">Thông tin liên hệ</h2>

        <div className="flex flex-col lg:flex-row gap-8 w-full">
          {/* Left: Contact Info */}
          <div className="flex flex-1 flex-col gap-6 w-full">
            {/* Thông tin đơn vị */}
            <div className="bg-white border border-[#e5e7eb] rounded-xl p-6 flex flex-col gap-4">
              <h3 className="font-bold text-[#1a428a] text-[18px] m-0 uppercase">
                Khoa Sử - Địa - Chính trị
              </h3>
              <p className="text-[14px] text-slate-600 m-0 leading-relaxed">
                Trường Đại học Sư phạm – Đại học Đà Nẵng
              </p>

              <table className="w-full text-[14px] text-slate-700 border-collapse">
                <tbody>
                  <tr className="border-b border-slate-100">
                    <td className="py-3 pr-4 font-semibold text-[#1a428a] whitespace-nowrap align-top w-28">Địa chỉ</td>
                    <td className="py-3">459 Tôn Đức Thắng, Phường Hòa Khánh Nam, Quận Liên Chiểu, TP. Đà Nẵng</td>
                  </tr>
                  <tr className="border-b border-slate-100">
                    <td className="py-3 pr-4 font-semibold text-[#1a428a] whitespace-nowrap align-top">Điện thoại</td>
                    <td className="py-3">
                      <a href="tel:02363733290" className="text-[#0d4d99] no-underline hover:underline">0236.3733.290</a>
                    </td>
                  </tr>
                  <tr className="border-b border-slate-100">
                    <td className="py-3 pr-4 font-semibold text-[#1a428a] whitespace-nowrap align-top">Email</td>
                    <td className="py-3">
                      <a href="mailto:sdct@ued.udn.vn" className="text-[#0d4d99] no-underline hover:underline">sdct@ued.udn.vn</a>
                    </td>
                  </tr>
                  <tr className="border-b border-slate-100">
                    <td className="py-3 pr-4 font-semibold text-[#1a428a] whitespace-nowrap align-top">Website</td>
                    <td className="py-3">
                      <a href="https://sdct.ued.udn.vn" target="_blank" rel="noopener noreferrer" className="text-[#0d4d99] no-underline hover:underline">sdct.ued.udn.vn</a>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 font-semibold text-[#1a428a] whitespace-nowrap align-top">Fanpage</td>
                    <td className="py-3">
                      <a href="https://www.facebook.com/profile.php?id=61574712530208" target="_blank" rel="noopener noreferrer" className="text-[#0d4d99] no-underline hover:underline">
                        Facebook Khoa Sử - Địa - Chính trị
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Ban chủ nhiệm khoa */}
            <div className="bg-white border border-[#e5e7eb] rounded-xl p-6 flex flex-col gap-4">
              <h3 className="font-bold text-[#1a428a] text-[16px] m-0 uppercase">
                Ban chủ nhiệm khoa
              </h3>
              <table className="w-full text-[14px] text-slate-700 border-collapse">
                <thead>
                  <tr className="border-b-2 border-[#1a428a]/20">
                    <th className="py-2.5 text-left font-semibold text-[#1a428a] text-[13px] uppercase">Chức vụ</th>
                    <th className="py-2.5 text-left font-semibold text-[#1a428a] text-[13px] uppercase">Họ và tên</th>
                    <th className="py-2.5 text-left font-semibold text-[#1a428a] text-[13px] uppercase hidden sm:table-cell">Liên hệ</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-slate-100">
                    <td className="py-3">Trưởng khoa</td>
                    <td className="py-3 font-medium">PGS.TS. Lưu Trang</td>
                    <td className="py-3 hidden sm:table-cell">
                      <a href="mailto:sdct@ued.udn.vn" className="text-[#0d4d99] no-underline hover:underline text-[13px]">sdct@ued.udn.vn</a>
                    </td>
                  </tr>
                  <tr className="border-b border-slate-100">
                    <td className="py-3">Phó Trưởng khoa</td>
                    <td className="py-3 font-medium">TS. Nguyễn Văn Hiệp</td>
                    <td className="py-3 hidden sm:table-cell">
                      <a href="mailto:sdct@ued.udn.vn" className="text-[#0d4d99] no-underline hover:underline text-[13px]">sdct@ued.udn.vn</a>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3">Phó Trưởng khoa</td>
                    <td className="py-3 font-medium">TS. Trương Trung Phương</td>
                    <td className="py-3 hidden sm:table-cell">
                      <a href="mailto:sdct@ued.udn.vn" className="text-[#0d4d99] no-underline hover:underline text-[13px]">sdct@ued.udn.vn</a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Các bộ môn */}
            <div className="bg-white border border-[#e5e7eb] rounded-xl p-6 flex flex-col gap-4">
              <h3 className="font-bold text-[#1a428a] text-[16px] m-0 uppercase">
                Các bộ môn trực thuộc
              </h3>
              <ul className="m-0 p-0 list-none flex flex-col gap-2 text-[14px] text-slate-700">
                <li className="flex items-center gap-2 py-2 border-b border-slate-100">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#1a428a] shrink-0"></span>
                  Bộ môn Lịch sử
                </li>
                <li className="flex items-center gap-2 py-2 border-b border-slate-100">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#1a428a] shrink-0"></span>
                  Bộ môn Địa lý
                </li>
                <li className="flex items-center gap-2 py-2 border-b border-slate-100">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#1a428a] shrink-0"></span>
                  Bộ môn Giáo dục Chính trị
                </li>
                <li className="flex items-center gap-2 py-2 border-b border-slate-100">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#1a428a] shrink-0"></span>
                  Bộ môn Văn hóa – Du lịch
                </li>
                <li className="flex items-center gap-2 py-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#c8102e] shrink-0"></span>
                  Văn phòng Khoa
                </li>
              </ul>
            </div>
          </div>

          {/* Right: Map */}
          <div className="flex flex-col gap-4 w-full lg:w-[480px] shrink-0">
            <h3 className="font-bold text-[#1a428a] text-[16px] m-0 uppercase">Vị trí trên bản đồ</h3>
            <div className="w-full aspect-[4/3] lg:h-[480px] rounded-xl overflow-hidden bg-[#e5e7eb] border border-slate-200">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3833.7366619744487!2d108.15223087452882!3d16.07424723946826!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x314218538e8b7cf9%3A0xbc6d4230e6ed7b4!2zVHLGsOG7nW5nIMSQ4bqhaSBo4buNYyBTxrAgcGjhuqFtIETDoCBO4bq1bmcgKERORSk!5e0!3m2!1svi!2s!4v1700000000000!5m2!1svi!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Bản đồ Trường Đại học Sư phạm Đà Nẵng"
              />
            </div>
            <p className="text-[13px] text-slate-500 m-0 leading-relaxed">
              Trường Đại học Sư phạm - Đại học Đà Nẵng, 459 Tôn Đức Thắng, Phường Hòa Khánh Nam, Quận Liên Chiểu, TP. Đà Nẵng.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
