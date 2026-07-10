import React from 'react';
import { Link } from 'react-router-dom';
import { AppSidebar } from '../components/ui/AppSidebar';

const imgHeroBanner = "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2070&auto=format&fit=crop";
const imgDepartmentGroupPhoto = "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1000";
const imgAvatar = "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=256&auto=format&fit=crop";
const imgAvatar1 = "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=256&auto=format&fit=crop";
const imgPromotionBanner = "https://images.unsplash.com/photo-1511629091441-ee46146481b6?q=80&w=1470&auto=format&fit=crop";

export default function About() {
  return (
    <div className="flex flex-col items-start relative w-full font-['Inter']">
      <div className="flex gap-[8px] items-center px-[80px] py-[20px] w-full md:px-[20px] lg:px-[80px]">
        <Link to="/" className="font-medium text-[#0d4d99] text-[14px] no-underline">Trang chủ</Link>
        <span className="text-[#666] text-[12px]">&gt;</span>
        <p className="font-normal text-[#666] text-[14px]">Giới thiệu</p>
      </div>

      <div className="flex h-[280px] items-center justify-center relative w-full">
        <div className="absolute inset-0 pointer-events-none">
          <img alt="" className="absolute object-cover size-full" src={imgHeroBanner} />
          <div className="absolute bg-[rgba(0,0,0,0.4)] inset-0" />
        </div>
        <p className="font-extrabold text-[48px] text-center text-white uppercase relative px-[20px]">
          Giới thiệu về Khoa Sử - Địa - Chính Trị
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-[40px] items-start p-[64px] relative w-full md:px-[20px] lg:px-[80px]">
        <div className="flex flex-1 flex-col gap-[40px] items-start relative w-full">
          <div className="flex items-center w-full">
            <h2 className="font-bold text-[#c8102e] text-[24px] uppercase m-0">Sứ mệnh & Tầm nhìn</h2>
          </div>
          <div className="flex flex-col gap-[24px] items-start w-full">
            <p className="font-normal text-[#111] text-[16px] leading-[1.8] m-0">
              Khoa Sử - Địa – Chính trị được thành lập theo Quyết định số 19/NQ-HĐT ngày 07 tháng 03 năm 2025 của Hội đồng trường Trường Đại học Sư phạm - Đại học Đà Nẵng trên cơ sở sáp nhập Khoa Lịch Sử, Khoa Địa lí và Khoa Giáo dục Chính trị. Khoa Sử - Địa – Chính trị là một trong những khoa đào tạo có uy tín, đạt chất lượng cao góp phần giữ vững và phát triển vị thế của Đại học Sư phạm - Đại học Đà Nẵng trong hệ thống các trường Đại học Sư phạm trọng điểm quốc gia.
              <br/><br/>
              Chức năng cơ bản của Khoa Sử - Địa – Chính trị là quản lý xây dựng và phát triển các CTĐT từ chính quy đến các chương trình bồi dưỡng của Khoa; quản lý các môn học thuộc lịch sử, Địa lý, GDCT, Pháp luật, văn hóa và du lịch trong các CTĐT sư phạm và cử nhân của Nhà trường; quản lý các tổ chuyên môn; quản lý đội ngũ, quản lý đào tạo, các hoạt động NCKH và hợp tác quốc tế, công tác SV, cơ sở vật chất…
              <br/><br/>
              <strong>Mục tiêu đào tạo</strong> của Khoa Sử - Địa – Chính trị là hướng đến đào tạo nguồn nhân lực có phẩm chất đạo đức, tư duy phản biện và năng lực chuyên môn vững vàng trong lĩnh vực khoa học xã hội và giáo dục. Sinh viên sau tốt nghiệp có khả năng giảng dạy, nghiên cứu các môn Lịch sử, Địa lí, Giáo dục công dân, đồng thời có thể tham gia vào các lĩnh vực liên ngành như Giáo dục, Luật pháp, Du lịch và Quan hệ quốc tế đáp ứng nhu cầu đa dạng của xã hội và thị trường lao động.
            </p>
            <div className="aspect-video relative rounded-[12px] w-full overflow-hidden">
              <img alt="Department Group" className="absolute inset-0 object-cover size-full" src={imgDepartmentGroupPhoto} />
            </div>
          </div>

          <div className="flex flex-col gap-[24px] items-start w-full">
            <div className="flex items-center w-full">
              <h2 className="font-bold text-[#c8102e] text-[24px] uppercase m-0">Ban chủ nhiệm khoa</h2>
            </div>
            <div className="flex flex-col md:flex-row gap-[24px] items-start w-full">
              <div className="bg-white drop-shadow-[0px_2px_4px_rgba(0,0,0,0.08)] flex flex-1 gap-[24px] items-center p-[24px] rounded-[12px] w-full">
                <img alt="" className="rounded-full size-[100px] object-cover" src={imgAvatar} />
                <div className="flex flex-1 flex-col gap-[8px] items-start">
                  <p className="font-bold text-[#1a428a] text-[18px] m-0">PGS.TS. Nguyễn Duy Phương</p>
                  <p className="font-semibold text-[#c8102e] text-[15px] m-0">Trưởng Khoa</p>
                  <p className="font-normal text-[#666] text-[14px] m-0">Chuyên ngành: <span className="font-medium text-[#111]">Lịch sử Việt Nam</span></p>
                  <p className="font-normal text-[#666] text-[13px] m-0 flex items-center gap-2">✉️ ndphuong@ued.udn.vn</p>
                </div>
              </div>
              <div className="bg-white drop-shadow-[0px_2px_4px_rgba(0,0,0,0.08)] flex flex-1 gap-[24px] items-center p-[24px] rounded-[12px] w-full">
                <img alt="" className="rounded-full size-[100px] object-cover" src={imgAvatar1} />
                <div className="flex flex-1 flex-col gap-[8px] items-start">
                  <p className="font-bold text-[#1a428a] text-[18px] m-0">TS. Nguyễn Thanh Tưởng</p>
                  <p className="font-semibold text-[#c8102e] text-[15px] m-0">Phó Trưởng Khoa</p>
                  <p className="font-normal text-[#666] text-[14px] m-0">Chuyên ngành: <span className="font-medium text-[#111]">Phát triển bền vững, du lịch và môi trường</span></p>
                  <p className="font-normal text-[#666] text-[13px] m-0 flex items-center gap-2">✉️ nttuong@ued.udn.vn</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-[24px] items-start w-full">
            <div className="flex items-center w-full">
              <h2 className="font-bold text-[#c8102e] text-[24px] uppercase m-0">Các bộ môn</h2>
            </div>
            <div className="flex flex-col gap-[24px] w-full">
              <div className="flex flex-col md:flex-row gap-[24px] w-full">
                <div className="bg-white border border-[#e5e7eb] flex flex-1 flex-col gap-[12px] items-center justify-center p-[20px] rounded-[8px] hover:shadow-sm transition-shadow">
                  <div className="bg-[#f5f7fa] flex items-center justify-center rounded-full size-[48px]">📖</div>
                  <p className="font-semibold text-[#1a428a] text-[16px] text-center m-0">Bộ môn Sư phạm Lịch sử</p>
                  <p className="font-normal text-[#666] text-[13px] text-center m-0">Đào tạo giáo viên Lịch sử THPT, nghiên cứu lịch sử Việt Nam và thế giới</p>
                </div>
                <div className="bg-white border border-[#e5e7eb] flex flex-1 flex-col gap-[12px] items-center justify-center p-[20px] rounded-[8px] hover:shadow-sm transition-shadow">
                  <div className="bg-[#f5f7fa] flex items-center justify-center rounded-full size-[48px]">📖</div>
                  <p className="font-semibold text-[#1a428a] text-[16px] text-center m-0">Bộ môn Sư phạm Địa lý</p>
                  <p className="font-normal text-[#666] text-[13px] text-center m-0">Đào tạo giáo viên Địa lý, nghiên cứu địa lý tự nhiên và kinh tế-xã hội</p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-[24px] w-full">
                <div className="bg-white border border-[#e5e7eb] flex flex-1 flex-col gap-[12px] items-center justify-center p-[20px] rounded-[8px] hover:shadow-sm transition-shadow">
                  <div className="bg-[#f5f7fa] flex items-center justify-center rounded-full size-[48px]">📖</div>
                  <p className="font-semibold text-[#1a428a] text-[16px] text-center m-0">Bộ môn Giáo dục Chính trị</p>
                  <p className="font-normal text-[#666] text-[13px] text-center m-0">Đào tạo giáo viên GDCD, nghiên cứu triết học, chính trị học</p>
                </div>
                <div className="bg-white border border-[#e5e7eb] flex flex-1 flex-col gap-[12px] items-center justify-center p-[20px] rounded-[8px] hover:shadow-sm transition-shadow">
                  <div className="bg-[#f5f7fa] flex items-center justify-center rounded-full size-[48px]">📖</div>
                  <p className="font-semibold text-[#1a428a] text-[16px] text-center m-0">Bộ môn Giáo dục Quốc phòng An ninh</p>
                  <p className="font-normal text-[#666] text-[13px] text-center m-0">Giảng dạy quốc phòng an ninh cho sinh viên toàn trường</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-[24px] items-start w-full lg:w-[300px]">
          <div className="bg-[#f5f7fa] flex flex-col gap-[16px] items-start p-[24px] rounded-[12px] w-full">
            <p className="font-bold text-[#1a428a] text-[16px] uppercase m-0">Liên kết nhanh</p>
            <div className="flex flex-col gap-[12px] w-full">
              <Link to="/gioi-thieu/lich-su" className="flex gap-[8px] items-center w-full cursor-pointer hover:underline text-[#0d4d99] no-underline">
                <span className="text-[12px]">&gt;</span>
                <p className="flex-1 font-medium text-[14px] m-0">Lịch sử hình thành</p>
              </Link>
              <Link to="/khoa-bo-mon" className="flex gap-[8px] items-center w-full cursor-pointer hover:underline text-[#0d4d99] no-underline">
                <span className="text-[12px]">&gt;</span>
                <p className="flex-1 font-medium text-[14px] m-0">Ban chủ nhiệm & Đội ngũ giảng viên</p>
              </Link>
              <Link to="/tai-lieu-bieu-mau" className="flex gap-[8px] items-center w-full cursor-pointer hover:underline text-[#0d4d99] no-underline">
                <span className="text-[12px]">&gt;</span>
                <p className="flex-1 font-medium text-[14px] m-0">Tài liệu & Biểu mẫu</p>
              </Link>
            </div>
          </div>
          <div className="flex flex-col h-[400px] overflow-hidden relative rounded-[12px] w-full group cursor-pointer">
            <div className="absolute inset-0 pointer-events-none">
              <img alt="" className="absolute object-cover size-full transition-transform duration-500 group-hover:scale-105" src={imgPromotionBanner} />
              <div className="absolute bg-[rgba(0,0,0,0.35)] inset-0" />
            </div>
            <div className="absolute flex flex-col gap-[6px] items-start left-[24px] text-white top-[24px]">
              <p className="font-extrabold text-[28px] m-0">Tuyển sinh 2026</p>
              <p className="font-bold text-[18px] m-0">Khoa Sử - Địa – Chính trị</p>
            </div>
            <div className="absolute bottom-[24px] flex flex-col gap-[8px] items-start left-[24px] right-[24px]">
              <p className="font-semibold text-[14px] text-[rgba(255,255,255,0.8)] m-0 leading-[1.5]">
                Đào tạo giáo viên Sư phạm Lịch sử, Sư phạm Địa lý, Giáo dục Chính trị và Giáo dục Quốc phòng An ninh
              </p>
              <Link to="/tuyen-sinh" className="bg-[#c8102e] hover:bg-[#a00c24] transition-colors flex gap-[8px] items-center px-[14px] py-[10px] rounded-[8px] no-underline">
                <p className="font-bold text-[14px] text-white m-0">Xem thông tin tuyển sinh</p>
                <span className="text-white">→</span>
              </Link>
            </div>
          </div>
          <AppSidebar />
        </div>
      </div>
    </div>
  );
}
