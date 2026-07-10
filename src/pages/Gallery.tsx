import React from 'react';
import { Link } from 'react-router-dom';

const placeholderImg = "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1000";

const albums = [
  { title: "Tự hào tân cử nhân 2025", count: 45 },
  { title: "Gặp mặt tân sinh viên K2025", count: 32 },
  { title: "Hội thảo khoa học quốc gia", count: 28 },
  { title: "Team building Việt Nam học", count: 56 },
  { title: "Tình nguyện mùa hè xanh", count: 38 },
  { title: "Lễ kỷ niệm thành lập Khoa", count: 64 },
  { title: "Ngày hội việc làm 2025", count: 22 },
  { title: "Cuộc thi NCKH sinh viên", count: 41 },
  { title: "Hoạt động ngoại khoá K23", count: 35 },
  { title: "Tham quan bảo tàng Đà Nẵng", count: 29 },
  { title: "Giải thể thao sinh viên", count: 48 },
  { title: "Đêm văn nghệ chào tân SV", count: 37 },
];

export default function Gallery() {
  return (
    <div className="flex flex-col items-start w-full font-['Inter']">
      <div className="flex gap-[8px] items-center px-[80px] py-[20px] w-full md:px-[20px] lg:px-[80px]">
        <Link to="/" className="font-medium text-[#0d4d99] text-[14px] no-underline">Trang chủ</Link>
        <span className="text-[#666] text-[12px]">&gt;</span>
        <p className="font-normal text-[#666] text-[14px] m-0">Thư viện ảnh</p>
      </div>

      <div className="flex h-[300px] items-center justify-center relative w-full bg-[#1a428a]">
        <p className="font-extrabold text-[42px] text-center text-white uppercase relative">Thư viện ảnh</p>
      </div>

      <div className="flex flex-col gap-[40px] items-start px-[80px] py-[64px] w-full md:px-[20px] lg:px-[80px]">
        <h2 className="font-bold text-[#c8102e] text-[24px] uppercase m-0">Tất cả album</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[20px] w-full">
          {albums.map((album, idx) => (
            <div key={idx} className="flex flex-col items-start overflow-hidden rounded-[8px] cursor-pointer group shadow-[0px_2px_8px_0px_rgba(0,0,0,0.08)]">
              <div className="aspect-[16/10] relative w-full overflow-hidden">
                <img alt="" className="absolute inset-0 object-cover size-full transition-transform duration-500 group-hover:scale-110" src={placeholderImg} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-[8px] right-[8px] bg-black/60 text-white text-[11px] font-semibold px-[8px] py-[3px] rounded-[4px]">
                  📷 {album.count} ảnh
                </div>
              </div>
              <div className="bg-[#036] group-hover:bg-[#1a428a] transition-colors flex items-center justify-center p-[12px] w-full">
                <span className="font-medium text-[13px] text-white text-center line-clamp-1">{album.title}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-center gap-[8px] w-full mt-[16px]">
          {[1, 2, 3].map(p => (
            <button key={p} className={`size-[36px] flex items-center justify-center rounded-[6px] text-[14px] font-medium cursor-pointer border transition-colors ${p === 1 ? 'bg-[#1a428a] text-white border-[#1a428a]' : 'bg-white text-[#666] border-[#e5e7eb] hover:border-[#1a428a]'}`}>{p}</button>
          ))}
        </div>
      </div>
    </div>
  );
}
