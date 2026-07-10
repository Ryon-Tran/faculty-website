import React from 'react';
import { Link } from 'react-router-dom';

export default function Contact() {
  return (
    <div className="flex flex-col items-start w-full font-['Inter']">
      <div className="flex gap-[8px] items-center px-[80px] py-[20px] w-full md:px-[20px] lg:px-[80px]">
        <Link to="/" className="font-medium text-[#0d4d99] text-[14px] no-underline">Trang chủ</Link>
        <span className="text-[#666] text-[12px]">&gt;</span>
        <p className="font-normal text-[#666] text-[14px] m-0">Liên hệ</p>
      </div>

      <div className="flex h-[300px] items-center justify-center relative w-full bg-[#1a428a]">
        <p className="font-extrabold text-[42px] text-center text-white uppercase relative">Liên hệ</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-[40px] items-start px-[80px] py-[64px] w-full md:px-[20px] lg:px-[80px]">
        <div className="flex flex-1 flex-col gap-[32px] items-start w-full">
          <h2 className="font-bold text-[#c8102e] text-[24px] uppercase m-0">Thông tin liên hệ</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[24px] w-full">
            <div className="bg-[#f5f7fa] flex flex-col gap-[12px] p-[24px] rounded-[12px]">
              <span className="text-[32px]">📍</span>
              <p className="font-bold text-[#1a428a] text-[16px] m-0">Địa chỉ</p>
              <p className="font-normal text-[#666] text-[14px] m-0 leading-[1.6]">459 Tôn Đức Thắng - Liên Chiểu - Đà Nẵng</p>
            </div>
            <div className="bg-[#f5f7fa] flex flex-col gap-[12px] p-[24px] rounded-[12px]">
              <span className="text-[32px]">📞</span>
              <p className="font-bold text-[#1a428a] text-[16px] m-0">Điện thoại</p>
              <p className="font-normal text-[#666] text-[14px] m-0 leading-[1.6]">+84 0236 3733 290</p>
            </div>
            <div className="bg-[#f5f7fa] flex flex-col gap-[12px] p-[24px] rounded-[12px]">
              <span className="text-[32px]">✉️</span>
              <p className="font-bold text-[#1a428a] text-[16px] m-0">Email</p>
              <p className="font-normal text-[#666] text-[14px] m-0 leading-[1.6]">sdct@ued.udn.vn</p>
            </div>
            <div className="bg-[#f5f7fa] flex flex-col gap-[12px] p-[24px] rounded-[12px]">
              <span className="text-[32px]">🌐</span>
              <p className="font-bold text-[#1a428a] text-[16px] m-0">Website</p>
              <p className="font-normal text-[#666] text-[14px] m-0 leading-[1.6]">www.sdct.ued.udn.vn</p>
            </div>
          </div>

          <h2 className="font-bold text-[#c8102e] text-[24px] uppercase m-0 mt-[16px]">Gửi tin nhắn</h2>
          <form className="flex flex-col gap-[16px] w-full">
            <div className="flex flex-col md:flex-row gap-[16px]">
              <input type="text" placeholder="Họ và tên" className="flex-1 bg-[#f5f7fa] border border-[#e5e7eb] rounded-[8px] p-[14px] text-[14px] outline-none focus:border-[#1a428a] transition-colors" />
              <input type="email" placeholder="Email" className="flex-1 bg-[#f5f7fa] border border-[#e5e7eb] rounded-[8px] p-[14px] text-[14px] outline-none focus:border-[#1a428a] transition-colors" />
            </div>
            <input type="text" placeholder="Tiêu đề" className="bg-[#f5f7fa] border border-[#e5e7eb] rounded-[8px] p-[14px] text-[14px] outline-none focus:border-[#1a428a] transition-colors w-full" />
            <textarea placeholder="Nội dung tin nhắn..." rows={6} className="bg-[#f5f7fa] border border-[#e5e7eb] rounded-[8px] p-[14px] text-[14px] outline-none focus:border-[#1a428a] transition-colors resize-none w-full" />
            <button type="submit" className="bg-[#1a428a] hover:bg-[#0d4d99] transition-colors text-white font-bold text-[14px] px-[32px] py-[14px] rounded-[8px] border-none cursor-pointer self-start">
              Gửi tin nhắn
            </button>
          </form>
        </div>

        <div className="flex flex-col gap-[24px] w-full lg:w-[480px]">
          <h2 className="font-bold text-[#c8102e] text-[24px] uppercase m-0">Bản đồ</h2>
          <div className="w-full h-[400px] rounded-[12px] overflow-hidden bg-[#e5e7eb]">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3833.7366619744487!2d108.15223087452882!3d16.07424723946826!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x314218538e8b7cf9%3A0xbc6d4230e6ed7b4!2zVHLGsOG7nW5nIMSQ4bqhaSBo4buNYyBTxrAgcGjhuqFtIETDoCBO4bq1bmcgKERORSk!5e0!3m2!1svi!2s!4v1700000000000!5m2!1svi!2s"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Bản đồ"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
