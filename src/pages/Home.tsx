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
  ResponsiveTable,
  type Column,
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

/* --- 1. HERO BANNER --- */
export const HeroBanner = React.memo(function HeroBanner() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
    }, 5500);
    return () => clearInterval(timer);
  }, []);

  const handleSelectSlide = useCallback((idx: number) => {
    setCurrentSlide(idx);
  }, []);

  return (
    <section aria-label="Banner nổi bật" className="h-[280px] sm:h-[360px] md:h-[420px] relative w-full bg-slate-900 overflow-hidden rounded-none sm:rounded-b-3xl shadow-md">
      {sliderImages.map((src, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            idx === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          <img
            alt={`Banner trình chiếu ${idx + 1}`}
            className="size-full object-cover"
            src={src}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        </div>
      ))}

      {/* Hero Title Overlay */}
      <div className="absolute inset-x-0 bottom-12 z-20 px-6 max-w-4xl mx-auto text-center flex flex-col items-center gap-3">
        <span className="bg-[#c8102e] text-white text-[11px] sm:text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full shadow-sm animate-fade-in">
          ★ Tuyển sinh Đại học & Sau Đại học 2026
        </span>
        <h2 className="font-['Inter'] font-black text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-tight m-0 drop-shadow-md tracking-tight">
          CHẤT LƯỢNG - HIỆN ĐẠI - HỘI NHẬP
        </h2>
      </div>

      {/* Slide Pagination Bullets */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2.5 z-30">
        {sliderImages.map((_, idx) => (
          <button
            key={idx}
            onClick={() => handleSelectSlide(idx)}
            aria-label={`Chuyển đến slide ${idx + 1}`}
            className={`transition-all duration-300 rounded-full border-none cursor-pointer p-0 focus:outline-none focus:ring-2 focus:ring-white ${
              idx === currentSlide ? 'w-8 h-2.5 bg-[#c8102e]' : 'size-2.5 bg-white/60 hover:bg-white'
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
    <section aria-label="Tin tức nổi bật" className="flex flex-col gap-6 px-4 sm:px-6 py-10 md:py-14 w-full max-w-5xl mx-auto">
      <SectionHeader
        title="Tin Tức & Sự Kiện"
        subtitle="Cập nhật những hoạt động đào tạo, hội thảo khoa học mới nhất của Khoa"
        accentColor="red"
        actionLabel="Xem tất cả tin tức"
        actionTo="/tin-tuc"
      />

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
                  🕒 {item.date || '10/07/2026'}
                </span>
                <CardTitle className="text-sm sm:text-base">{item.title}</CardTitle>
              </CardHeader>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
});

NewsSection.displayName = 'NewsSection';

/* --- 3. ADMISSIONS SECTION (List & Video) --- */
export const AdmissionsSection = React.memo(function AdmissionsSection() {
  const topAdmissions = useMemo(() => admissionsData.slice(0, 5), []);

  return (
    <section aria-label="Thông tin tuyển sinh và video" className="bg-white border-y border-slate-200/80 px-4 sm:px-6 py-12 md:py-16 w-full">
      <div className="max-w-5xl mx-auto flex flex-col lg:flex-row gap-10 items-start">
        {/* Left Col: Admissions Notices */}
        <div className="flex-1 flex flex-col gap-6 w-full">
          <SectionHeader
            title="Tuyển Sinh 2026"
            subtitle="Thông báo xét tuyển, chỉ tiêu và hướng dẫn đăng ký nguyện vọng"
            accentColor="blue"
            actionLabel="Xem chi tiết"
            actionTo="/tuyen-sinh"
          />

          <div className="flex flex-col gap-3 w-full">
            {topAdmissions.map((item, idx) => {
              const { day, month } = getDayAndMonth(item.date);
              const isEven = idx % 2 === 0;
              return (
                <Link
                  to={`/tin-tuc/${getSlug(item.link)}`}
                  key={idx}
                  className="group flex items-start gap-4 p-3.5 rounded-2xl border border-slate-200/70 bg-slate-50/40 hover:bg-white hover:shadow-md hover:border-[#1a428a]/30 transition-all no-underline"
                >
                  <div className="flex flex-col items-center justify-center rounded-xl size-14 shrink-0 shadow-xs border border-slate-200/60 overflow-hidden bg-white">
                    <span className={`w-full py-0.5 text-center font-bold text-[10px] uppercase text-white ${isEven ? 'bg-[#1a428a]' : 'bg-[#c8102e]'}`}>
                      {month}
                    </span>
                    <span className="font-['Inter'] font-black text-lg text-slate-800 leading-tight">
                      {day}
                    </span>
                  </div>
                  <div className="flex flex-col gap-1 flex-1 min-w-0">
                    <h3 className="font-['Inter'] font-bold text-sm sm:text-base text-slate-800 group-hover:text-[#1a428a] transition-colors line-clamp-2 m-0">
                      {item.title}
                    </h3>
                    <p className="font-['Inter'] font-normal text-xs sm:text-sm text-slate-500 line-clamp-2 m-0">
                      {item.description || "Nhấp để xem trọn bộ thông báo chỉ tiêu, điều kiện xét tuyển và thời gian nộp hồ sơ..."}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Right Col: Featured Video & Gallery Preview */}
        <div className="w-full lg:w-[420px] shrink-0 flex flex-col gap-6">
          <SectionHeader
            title="Video Nổi Bật"
            subtitle="Khoảnh khắc giảng đường SDCT"
            accentColor="red"
            actionLabel="Tất cả video"
            actionTo="/video"
          />

          {/* Main Video Box */}
          <div className="aspect-video relative rounded-2xl overflow-hidden shadow-md group cursor-pointer border border-slate-200 bg-slate-900">
            <img
              alt="Video nổi bật Khoa Sử Địa Chính Trị"
              className="absolute inset-0 object-cover size-full transition-transform duration-700 group-hover:scale-105"
              src={placeholderImg}
            />
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors flex items-center justify-center">
              <div className="size-16 rounded-full bg-[#c8102e] text-white flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="white" className="ml-1">
                  <polygon points="5 3 19 12 5 21 5 3"></polygon>
                </svg>
              </div>
            </div>
            <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-black/80 text-white text-xs sm:text-sm font-bold line-clamp-1">
              🎥 Giới thiệu Khoa Sử - Địa - Chính trị (ĐH Sư phạm Đà Nẵng)
            </div>
          </div>

          {/* Mini Thumbnails */}
          <div className="grid grid-cols-3 gap-3">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="aspect-video relative rounded-xl overflow-hidden shadow-xs group cursor-pointer border border-slate-200 bg-slate-800"
              >
                <img
                  alt={`Mini video ${i}`}
                  className="absolute inset-0 object-cover size-full transition-transform duration-500 group-hover:scale-110"
                  src={placeholderImg}
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <div className="size-8 rounded-full bg-[#c8102e]/80 text-white flex items-center justify-center shadow-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="white" className="ml-0.5">
                      <polygon points="5 3 19 12 5 21 5 3"></polygon>
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
});

AdmissionsSection.displayName = 'AdmissionsSection';

/* --- 4. ADMISSIONS DATA TABLE SECTION (Demonstrating Horizontal Scroll requirement) --- */
interface MajorInfo {
  id: string;
  majorName: string;
  code: string;
  quota: number;
  subjectGroup: string;
  method: string;
}

const majorsData: MajorInfo[] = [
  { id: '1', majorName: 'Sư phạm Lịch sử', code: '7140218', quota: 65, subjectGroup: 'C00, D01, D14', method: 'Xét học bạ / Điểm thi THPT' },
  { id: '2', majorName: 'Sư phạm Lịch sử - Địa lý', code: '7140249', quota: 80, subjectGroup: 'C00, C04, D01', method: 'Xét học bạ / Điểm thi THPT' },
  { id: '3', majorName: 'Sư phạm Địa lý', code: '7140219', quota: 60, subjectGroup: 'A00, C00, D01', method: 'Xét học bạ / Điểm thi THPT' },
  { id: '4', majorName: 'Giáo dục Công dân / Chính trị', code: '7140204', quota: 50, subjectGroup: 'C00, C19, D01', method: 'Xét học bạ / ĐGNL' },
  { id: '5', majorName: 'Việt Nam học (Hướng dẫn du lịch)', code: '7310630', quota: 100, subjectGroup: 'C00, D01, D14, D15', method: 'Xét tuyển đa phương thức' },
];

export const AdmissionsTableSection = React.memo(function AdmissionsTableSection() {
  const columns: Column<MajorInfo>[] = useMemo(() => [
    {
      key: 'majorName',
      header: 'Tên Ngành Đào Tạo',
      render: (row) => (
        <span className="font-bold text-[#036] hover:text-[#c8102e] transition-colors">
          {row.majorName}
        </span>
      ),
    },
    { key: 'code', header: 'Mã Ngành', align: 'center', width: '130px' },
    {
      key: 'quota',
      header: 'Chỉ Tiêu',
      align: 'center',
      width: '110px',
      render: (row) => (
        <span className="inline-flex items-center justify-center px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700 font-bold text-xs">
          {row.quota} SV
        </span>
      ),
    },
    { key: 'subjectGroup', header: 'Tổ Hợp Xét Tuyển', align: 'center' },
    {
      key: 'method',
      header: 'Phương Thức Xét Tuyển',
      render: (row) => (
        <span className="text-slate-600 text-xs sm:text-sm font-medium">
          {row.method}
        </span>
      ),
    },
  ], []);

  return (
    <section aria-label="Bảng chỉ tiêu tuyển sinh" className="px-4 sm:px-6 py-12 md:py-14 w-full max-w-5xl mx-auto">
      <SectionHeader
        title="Chỉ Tiêu & Mã Ngành Tuyển Sinh 2026"
        subtitle="Bảng tổng hợp chi tiết các ngành đào tạo bậc Đại học chính quy tại Khoa"
        accentColor="slate"
        actionLabel="Tải Brochure tuyển sinh PDF"
        actionTo="/tuyen-sinh"
      />

      <ResponsiveTable
        columns={columns}
        data={majorsData}
        keyExtractor={(item) => item.id}
        ariaLabel="Bảng chỉ tiêu tuyển sinh 2026"
      />
    </section>
  );
});

AdmissionsTableSection.displayName = 'AdmissionsTableSection';

/* --- 5. STUDENT ACTIVITIES & FACES SECTION --- */
export const ActivitiesSection = React.memo(function ActivitiesSection() {
  const featuredAct = useMemo(() => studentsData[0] || {
    title: "Bảo vệ chuyên đề tổng quan luận án tiến sĩ",
    description: "Vừa qua, Khoa Sử - Địa - Chính trị đã tổ chức bảo vệ chuyên đề tổng quan cho nghiên cứu sinh ngành Lịch sử thế giới...",
    image: placeholderImg,
    link: "#"
  }, []);

  const otherActs = useMemo(() => studentsData.slice(1, 5), []);

  return (
    <section aria-label="Hoạt động sinh viên và thư viện" className="bg-slate-50 border-t border-slate-200/80 px-4 sm:px-6 py-12 md:py-16 w-full">
      <div className="max-w-5xl mx-auto flex flex-col lg:flex-row gap-10 items-start">
        {/* Featured Activity Card */}
        <div className="flex-1 flex flex-col gap-6 w-full">
          <SectionHeader
            title="Hoạt Động Sinh Viên"
            subtitle="Phong trào Đoàn Hội, nghiên cứu khoa học và thực tập thực tế"
            accentColor="red"
            actionLabel="Xem tất cả"
            actionTo="/hoat-dong"
          />

          <Link to={`/tin-tuc/${getSlug(featuredAct.link)}`} className="no-underline group">
            <Card hoverEffect bordered className="h-full">
              <CardImage src={featuredAct.image || placeholderImg} alt={featuredAct.title} aspectRatio="video" badge="Hoạt động nổi bật" />
              <CardHeader className="p-5 sm:p-6">
                <CardTitle className="text-lg sm:text-xl font-extrabold">{featuredAct.title}</CardTitle>
                <CardDescription className="text-sm mt-1">{featuredAct.description}</CardDescription>
              </CardHeader>
            </Card>
          </Link>
        </div>

        {/* Photo Gallery Grid */}
        <div className="w-full lg:w-[460px] shrink-0 flex flex-col gap-6">
          <SectionHeader
            title="Thư Viện Ảnh"
            subtitle="Nhịp sống sinh viên SDCT"
            accentColor="blue"
          />

          <div className="grid grid-cols-2 gap-4">
            {otherActs.map((item, idx) => (
              <Link to={`/tin-tuc/${getSlug(item.link)}`} key={idx} className="no-underline group">
                <Card hoverEffect bordered className="h-full">
                  <CardImage src={item.image || placeholderImg} alt={item.title} aspectRatio="wide" />
                  <div className="p-3 bg-[#002452] text-white font-medium text-xs text-center line-clamp-1 group-hover:bg-[#1a428a] transition-colors">
                    {item.title}
                  </div>
                </Card>
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
    <section aria-label="Gương mặt sinh viên tiêu biểu" className="px-4 sm:px-6 py-12 md:py-16 w-full max-w-5xl mx-auto">
      <SectionHeader
        title="Gương Mặt Sinh Viên Điển Hình"
        subtitle="Những sinh viên xuất sắc trong học tập, nghiên cứu và rèn luyện"
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
              <span className="font-['Inter'] font-bold text-sm sm:text-base leading-snug line-clamp-2">{item.title}</span>
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
    <section aria-label="Đăng ký tư vấn trực tuyến" className="px-4 sm:px-6 py-6 md:py-12 w-full max-w-5xl mx-auto">
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
      <AdmissionsTableSection />
      <ActivitiesSection />
      <FacesSection />
      <ConsultationSection />
    </div>
  );
}
