import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { Link } from 'react-router-dom';
import newsData from '../data/news.json';
import admissionsData from '../data/admissions.json';
import studentsData from '../data/students.json';
import {
  Card,
  CardImage,
  CardHeader,
  CardTitle,
  CardDescription,
  SectionHeader,
  ConsultationForm,
} from '../components/ui';

const sliderImages = [
  "https://sdct.ued.udn.vn/uploads/slider/z6714115621939_547ee9dba18f400e2f548ac4d73083fa.jpg",
  "https://sdct.ued.udn.vn/uploads/slider/z6714115623898_f6cf88be44d2b708a757d8523a6f9493.jpg",
];

const placeholderImg = "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1000";

const getSlug = (link: string) => {
  if (!link) return '';
  const parts = link.split('/');
  const lastPart = parts[parts.length - 1];
  return lastPart.replace('.html', '');
};

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

const cleanTitle = (title: string) => {
  if (!title) return '';
  return title.replace(/[\p{Emoji_Presentation}\p{Extended_Pictographic}]/gu, '').replace(/^[-\s]+/, '').trim();
};

const ViewMoreButton = ({ to, text = "XEM THÊM" }: { to?: string; text?: string }) => {
  const content = (
    <>
      <span>{text}</span>
      <svg className="w-4 h-4 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
      </svg>
    </>
  );

  const className = "group inline-flex items-center justify-center gap-1.5 px-6 py-2.5 rounded-full font-['Inter'] font-bold text-[12px] sm:text-[13px] uppercase text-[#1a428a] bg-slate-100/80 hover:bg-[#1a428a] hover:text-white transition-all duration-300 no-underline shadow-sm hover:shadow-md";

  if (to) return <Link to={to} className={className}>{content}</Link>;
  return <span className={className}>{content}</span>;
};

/* --- 1. HERO BANNER --- */
export const HeroBanner = React.memo(function HeroBanner() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const handleSelectSlide = useCallback((idx: number) => {
    setCurrentSlide(idx);
  }, []);

  return (
    <section aria-label="Banner nổi bật" className="h-[400px] sm:h-[500px] md:h-[650px] relative w-[100vw] ml-[calc(50%-50vw)] bg-slate-950 overflow-hidden shadow-2xl group">
      {sliderImages.map((src, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${idx === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
        >
          <img
            alt={`Banner trình chiếu ${idx + 1}`}
            className="size-full object-cover"
            src={src}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        </div>
      ))}

      {/* Hero Title Overlay */}
      <div className="absolute inset-x-0 bottom-[80px] sm:bottom-[100px] z-20 px-6 max-w-4xl mx-auto flex flex-col items-center text-center gap-3 sm:gap-4">
        <div className="animate-fade-in-up" style={{ animationDelay: '100ms', animationFillMode: 'both' }}>
          <span className="bg-[#c8102e]/90 backdrop-blur-sm border border-white/20 text-white text-[11px] sm:text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full shadow-md">
            ★ Tuyển sinh Đại học & Sau Đại học 2026
          </span>
        </div>


      </div>

      {/* Slide Pagination Bullets */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-3 z-30">
        {sliderImages.map((_, idx) => (
          <button
            key={idx}
            onClick={() => handleSelectSlide(idx)}
            aria-label={`Chuyển đến slide ${idx + 1}`}
            className={`transition-all duration-300 rounded-full border-none cursor-pointer p-0 focus:outline-none focus:ring-2 focus:ring-white ${idx === currentSlide ? 'w-8 h-2.5 bg-[#c8102e]' : 'size-2.5 bg-white/60 hover:bg-white'
              }`}
          />
        ))}
      </div>
    </section>
  );
});

HeroBanner.displayName = 'HeroBanner';

/* --- 2. NEWS SECTION --- */
export const NewsSection = React.memo(function NewsSection() {
  const featuredNews = useMemo(() => newsData.slice(0, 8), []);

  return (
    <section aria-label="Tin tức nổi bật" className="flex flex-col gap-6 px-4 sm:px-6 py-6 md:py-8 w-full max-w-7xl mx-auto">
      <div className="flex justify-between items-end border-b-2 border-slate-100 pb-3">
        <div className="flex flex-col gap-1.5">
          <h2 className="font-['Inter'] font-bold text-[#003366] text-2xl md:text-3xl uppercase tracking-tight m-0">
            TIN TỨC & SỰ KIỆN
          </h2>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 w-full">
        {featuredNews.map((item, idx) => (
          <Link
            to={`/tin-tuc/${getSlug(item.link)}`}
            key={idx}
            className="no-underline group focus:outline-none"
          >
            <Card hoverEffect bordered className="h-full">
              <CardImage
                src={item.image || placeholderImg}
                alt={item.title}
                aspectRatio="wide"
                badge={idx === 0 ? 'Mới nhất' : undefined}
                badgeColor="bg-[#c8102e]"
              />
              <CardHeader>
                <span className="font-['Inter'] text-[11px] font-medium text-slate-400 flex items-center gap-1.5">
                  {item.date || '10/07/2026'}
                </span>
                <CardTitle className="text-sm sm:text-base">{cleanTitle(item.title)}</CardTitle>
              </CardHeader>
            </Card>
          </Link>
        ))}
      </div>

      <div className="flex justify-center mt-6">
        <ViewMoreButton to="/tin-tuc" text="XEM THÊM" />
      </div>
    </section>
  );
});

NewsSection.displayName = 'NewsSection';

/* --- 3. ADMISSIONS SECTION (List & Gallery) --- */
export const AdmissionsSection = React.memo(function AdmissionsSection() {
  const topAdmissions = useMemo(() => admissionsData.slice(0, 4), []);
  const featuredImages = useMemo(() => [
    "https://sdct.ued.udn.vn/uploads/slider/z6714115621939_547ee9dba18f400e2f548ac4d73083fa.jpg",
    "https://sdct.ued.udn.vn/uploads/slider/z6714115623898_f6cf88be44d2b708a757d8523a6f9493.jpg",
    "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1000",
    "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1000",
    "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1000"
  ], []);

  const scrollRef = React.useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsDragging(false);
  }, []);

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  }, [isDragging, startX, scrollLeft]);

  return (
    <section aria-label="Thông tin tuyển sinh và hình ảnh" className="bg-slate-50 px-4 sm:px-6 py-6 md:py-8 w-full">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 items-start">
        {/* Left Col: Admissions Notices */}
        <div className="flex-1 flex flex-col gap-6 w-full">
          <div className="mb-2">
            <h2 className="font-['Inter'] font-bold text-[#c8102e] text-2xl uppercase tracking-tight m-0">
              TUYỂN SINH
            </h2>
          </div>

          <div className="flex flex-col w-full">
            {topAdmissions.map((item, idx) => {
              const { day, month } = getDayAndMonth(item.date);
              const isLast = idx === topAdmissions.length - 1;
              const bgColor = isLast ? 'bg-[#c8102e]' : 'bg-[#1a428a]';
              return (
                <Link
                  to={`/tin-tuc/${getSlug(item.link)}`}
                  key={idx}
                  className="group flex items-start gap-5 py-5 border-b border-slate-200 hover:bg-white/60 transition-all no-underline"
                >
                  <div className={`flex flex-col items-center justify-center rounded-lg size-16 shrink-0 text-white shadow-sm ${bgColor}`}>
                    <span className="font-['Inter'] font-bold text-2xl leading-none">
                      {day}
                    </span>
                    <span className="font-['Inter'] font-bold text-[9px] uppercase mt-1 tracking-wider opacity-90">
                      {month}
                    </span>
                  </div>
                  <div className="flex flex-col gap-1.5 flex-1 min-w-0 pt-0.5">
                    <h3 className="font-['Inter'] font-bold text-[15px] sm:text-base text-slate-800 group-hover:text-[#1a428a] transition-colors leading-snug m-0">
                      {cleanTitle(item.title)}
                    </h3>
                    <p className="font-['Inter'] font-normal text-[13px] sm:text-sm text-slate-500 line-clamp-2 m-0">
                      {item.description || "Bạn đam mê khám phá thế giới, đọc mọi hiện tượng, con người, và muốn truyền cảm hứng..."}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>

          <div className="flex justify-center mt-3">
            <ViewMoreButton to="/tuyen-sinh" text="XEM THÊM CHUYÊN MỤC" />
          </div>
        </div>

        {/* Right Col: Featured Video & Gallery Preview */}
        <div className="w-full lg:w-[480px] shrink-0 flex flex-col gap-6">
          <div className="mb-2 flex items-center gap-3">
            <div className="w-1.5 h-6 bg-[#1a428a]"></div>
            <h2 className="font-['Inter'] font-bold text-[#1a428a] text-2xl uppercase tracking-tight m-0">
              VIDEO & HÌNH ẢNH
            </h2>
          </div>

          {/* Main Video Box */}
          <Link to="/video" className="aspect-[16/10] relative rounded-xl overflow-hidden shadow-sm group cursor-pointer bg-slate-900 border border-slate-200/60 transition-all duration-300 block no-underline">
            <img
              alt="Video nổi bật Khoa Sử Địa Chính Trị"
              className="absolute inset-0 object-cover size-full transition-transform duration-700 group-hover:scale-105 opacity-90 pointer-events-none"
              src={placeholderImg}
            />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors flex items-center justify-center pointer-events-none">
              <div className="size-14 rounded-full bg-[#c8102e]/90 text-white flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110 backdrop-blur-sm">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white" className="ml-1">
                  <polygon points="5 3 19 12 5 21 5 3"></polygon>
                </svg>
              </div>
            </div>
          </Link>

          {/* Mini Thumbnails (Drag to Scroll) */}
          <div
            ref={scrollRef}
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            className={`flex gap-3 overflow-x-auto pb-3 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] select-none ${isDragging ? 'cursor-grabbing snap-none' : 'cursor-grab'}`}
          >
            {featuredImages.map((src, idx) => (
              <div
                key={idx}
                className="w-[120px] shrink-0 aspect-[4/3] relative rounded-lg overflow-hidden shadow-sm border border-slate-200 transition-all duration-300 snap-center group pointer-events-none"
              >
                <img
                  alt={`Thumbnail ${idx + 1}`}
                  className="absolute inset-0 object-cover size-full transition-transform duration-500 group-hover:scale-110 pointer-events-none"
                  src={src}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
});

AdmissionsSection.displayName = 'AdmissionsSection';

/* --- 5. STUDENT ACTIVITIES & FACES SECTION --- */
export const ActivitiesSection = React.memo(function ActivitiesSection() {
  const featuredAct = useMemo(() => studentsData[0] || {
    title: "Bảo vệ chuyên đề tổng quan luận án tiến sĩ",
    description: "Vừa qua, Khoa Sử - Địa - Chính trị đã tổ chức bảo vệ chuyên đề tổng quan luận án tiến sĩ đối với NCS ngành Lịch sử Việt Nam. Khoa Sử - Địa - Chính trị hiện đào tạo đa ngành, đa lĩnh vực, đa cấp độ. Trong đó đào tạo bậc tiến sĩ là khẳng định năng lực đội ngũ...",
    image: placeholderImg,
    link: "#"
  }, []);

  const otherActs = useMemo(() => studentsData.slice(1, 7), []);

  return (
    <section aria-label="Hoạt động sinh viên và thư viện" className="bg-white px-4 sm:px-6 py-6 md:py-8 w-full">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 items-start">
        {/* Featured Activity Card */}
        <div className="flex-1 flex flex-col gap-6 w-full">
          <div className="mb-2">
            <h2 className="font-['Inter'] font-bold text-[#c8102e] text-2xl uppercase tracking-tight m-0">
              HOẠT ĐỘNG SINH VIÊN
            </h2>
          </div>

          <Link to={`/tin-tuc/${getSlug(featuredAct.link)}`} className="no-underline group block">
            <div className="flex flex-col bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="aspect-[16/10] w-full relative overflow-hidden bg-slate-100">
                <img src={featuredAct.image || placeholderImg} alt={featuredAct.title} className="absolute inset-0 size-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-6 flex flex-col">
                <h3 className="font-['Inter'] text-[18px] sm:text-[20px] font-bold text-slate-900 group-hover:text-[#1a428a] transition-colors leading-tight m-0">{cleanTitle(featuredAct.title)}</h3>
                <p className="font-['Inter'] text-[14px] text-slate-500 mt-3 line-clamp-3 leading-relaxed m-0">{featuredAct.description}</p>
                <div className="flex justify-end mt-5">
                  <ViewMoreButton text="XEM CHI TIẾT" />
                </div>
              </div>
            </div>
          </Link>
        </div>

        {/* Photo Gallery Grid */}
        <div className="w-full lg:w-[480px] shrink-0 flex flex-col gap-6">
          <div className="mb-2 flex items-center gap-3">
            <h2 className="font-['Inter'] font-bold text-[#c8102e] text-2xl uppercase tracking-tight m-0">
              THƯ VIỆN ẢNH
            </h2>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {otherActs.map((item, idx) => (
              <Link to={`/tin-tuc/${getSlug(item.link)}`} key={idx} className="no-underline group block">
                <div className="flex flex-col bg-white border border-slate-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow h-full">
                  <div className="aspect-[4/3] w-full relative overflow-hidden bg-slate-100">
                    <img src={item.image || placeholderImg} alt={item.title} className="absolute inset-0 size-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-3 bg-[#003366] text-white font-['Inter'] font-medium text-[12px] text-center line-clamp-1 group-hover:bg-[#1a428a] transition-colors w-full m-0">
                    {cleanTitle(item.title)}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
});

ActivitiesSection.displayName = 'ActivitiesSection';

/* --- 6. STUDENT FACES SECTION --- */
export const FacesSection = React.memo(function FacesSection() {
  const studentFaces = useMemo(() => studentsData.slice(5, 9), []);

  return (
    <section aria-label="Gương mặt sinh viên tiêu biểu" className="px-4 sm:px-6 py-6 md:py-8 w-full max-w-7xl mx-auto">
      <SectionHeader
        title="Gương mặt sinh viên điển hình"
        accentColor="red"
      />

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 w-full">
        {studentFaces.map((item, idx) => (
          <Link
            to={`/tin-tuc/${getSlug(item.link)}`}
            key={idx}
            className="aspect-[4/5] relative rounded-2xl overflow-hidden shadow-md group cursor-pointer block border border-slate-200 no-underline"
          >
            <img
              alt={item.title}
              className="absolute inset-0 object-cover size-full transition-transform duration-500 group-hover:scale-110"
              src={item.image || placeholderImg}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-90 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4 text-white">
              <span className="text-yellow-400 font-bold text-[11px] uppercase tracking-wider mb-0.5">Tiêu biểu 2026</span>
              <span className="font-['Inter'] font-bold text-sm sm:text-base leading-snug line-clamp-2">{cleanTitle(item.title)}</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
});

FacesSection.displayName = 'FacesSection';

/* --- 7. CONSULTATION FORM SECTION --- */
export const ConsultationSection = React.memo(function ConsultationSection() {
  return (
    <section aria-label="Đăng ký tư vấn trực tuyến" className="px-4 sm:px-6 py-6 md:py-8 w-full max-w-7xl mx-auto">
      <ConsultationForm />
    </section>
  );
});

ConsultationSection.displayName = 'ConsultationSection';

/* --- MAIN HOME PAGE COMPONENT --- */
export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <HeroBanner />
      <NewsSection />
      <AdmissionsSection />
      <ActivitiesSection />
      <FacesSection />
      <ConsultationSection />
    </div>
  );
}
