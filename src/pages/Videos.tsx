import React from 'react';
import { Link } from 'react-router-dom';

const placeholderImg = "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1000";

const videos = Array.from({ length: 9 }, (_, i) => ({
  id: i + 1,
  title: [
    "Giới thiệu Khoa Sử - Địa - Chính trị",
    "Ngày hội tuyển sinh 2026",
    "Hội thảo khoa học quốc gia",
    "Team building sinh viên K23",
    "Phỏng vấn cựu sinh viên thành đạt",
    "Tham quan thực tế tại bảo tàng",
    "Lễ tốt nghiệp Khóa 2024",
    "Workshop kỹ năng giảng dạy",
    "Cuộc thi NCKH sinh viên",
  ][i],
  duration: ["5:32", "12:45", "45:20", "3:18", "8:56", "6:44", "15:30", "22:10", "10:25"][i],
  views: `${Math.floor(Math.random() * 5000 + 500)}`,
  date: `${(28 - i * 3).toString().padStart(2, '0')}/06/2026`,
}));

export default function Videos() {
  return (
    <div className="flex flex-col items-start w-full font-['Inter']">
      <div className="flex gap-2 items-center px-20 py-5 w-full md:px-5 lg:px-20">
        <Link to="/" className="font-medium text-[#0d4d99] text-[14px] no-underline">Trang chủ</Link>
        <span className="text-[#666] text-[12px]">&gt;</span>
        <p className="font-normal text-[#666] text-[14px] m-0">Video</p>
      </div>

      <div className="flex h-55 sm:h-75 items-center justify-center relative w-full bg-[#1a428a]">
        <p className="font-extrabold text-[30px] sm:text-[42px] text-center text-white uppercase relative">Video</p>
      </div>

      <div className="flex flex-col gap-10 items-start px-4 sm:px-6 py-10 sm:py-16 w-full lg:px-6">
        {/* Featured video */}
        <div className="flex flex-col gap-[16px] w-full">
          <h2 className="font-bold text-[#c8102e] text-[24px] uppercase m-0">Video nổi bật</h2>
          <div className="flex h-64 sm:h-[400px] items-center justify-center overflow-hidden relative rounded-[12px] w-full group cursor-pointer">
            <div className="absolute inset-0">
              <img alt="" className="absolute object-cover size-full transition-transform duration-500 group-hover:scale-105" src={placeholderImg} />
              <div className="absolute bg-[rgba(0,0,0,0.3)] inset-0" />
            </div>
            <div className="bg-[rgba(204,0,0,0.6)] flex items-center justify-center rounded-full size-[72px] relative z-10 transition-transform group-hover:scale-110">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="white" className="ml-1"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
            </div>
            <div className="absolute bottom-[24px] left-[24px] right-[24px] z-10">
              <p className="font-bold text-white text-[22px] m-0">{videos[0].title}</p>
              <p className="font-normal text-white/80 text-[14px] m-0 mt-[4px]">{videos[0].duration} · {videos[0].views} lượt xem</p>
            </div>
          </div>
        </div>

        {/* All videos */}
        <div className="flex flex-col gap-[24px] w-full">
          <h2 className="font-bold text-[#c8102e] text-[24px] uppercase m-0">Tất cả video</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
            {videos.map((video) => (
              <div key={video.id} className="flex flex-col overflow-hidden rounded-[8px] cursor-pointer group shadow-[0px_2px_8px_0px_rgba(0,0,0,0.08)]">
                <div className="aspect-video relative w-full overflow-hidden">
                  <img alt="" className="absolute inset-0 object-cover size-full transition-transform duration-500 group-hover:scale-105" src={placeholderImg} />
                  <div className="absolute bg-[rgba(0,0,0,0.2)] inset-0" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-[rgba(204,0,0,0.6)] flex items-center justify-center rounded-full size-[48px] transition-transform group-hover:scale-110">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="white" className="ml-1"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                    </div>
                  </div>
                  <span className="absolute bottom-[8px] right-[8px] bg-black/70 text-white text-[11px] font-semibold px-[6px] py-[2px] rounded-[3px]">{video.duration}</span>
                </div>
                <div className="bg-white flex flex-col gap-[6px] p-[14px]">
                  <p className="font-semibold text-[#036] text-[14px] m-0 line-clamp-2 group-hover:text-[#1a428a] transition-colors">{video.title}</p>
                  <p className="font-normal text-[#808080] text-[12px] m-0">{video.views} lượt xem · {video.date}</p>
                </div>
              </div>
            ))}
          </div>
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
