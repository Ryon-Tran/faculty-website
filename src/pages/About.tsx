import React from 'react';
import { Link } from 'react-router-dom';

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

      <div className="flex flex-col lg:flex-row gap-[40px] items-start p-[4px] relative w-full md:px-[20px] lg:px-[80px]">
        <div className="flex flex-1 flex-col gap-[40px] items-start relative w-full">
          <div className="flex flex-col gap-[24px] items-start w-full">
            <div className="flex flex-col gap-[12px] w-full mb-2">
              <h2 className="font-extrabold text-[#1a428a] text-[28px] md:text-[32px] m-0 leading-tight">
                Giới thiệu chung
              </h2>
            </div>

            <div className="flex flex-col gap-5">
              <p className="font-normal text-[#111] text-[16px] leading-[1.8] m-0 text-justify">
                <span className="text-[#c8102e] font-bold text-[28px] leading-none float-left mr-1.5 mt-1.5">K</span>hoa Sử - Địa – Chính trị tự hào được thành lập theo Quyết định số 19/NQ-HĐT ngày 07/03/2025 của Hội đồng trường Trường Đại học Sư phạm - Đại học Đà Nẵng. Sự kiện này đánh dấu một cột mốc lịch sử quan trọng thông qua việc sáp nhập ba đơn vị giàu truyền thống: Khoa Lịch sử, Khoa Địa lí và Khoa Giáo dục Chính trị. Sự hội tụ của ba lĩnh vực khoa học cơ bản này không chỉ tạo ra một sức mạnh tổng hợp mới mà còn mở ra những hướng đi mang tính liên ngành, đáp ứng các yêu cầu ngày càng khắt khe của quá trình đổi mới giáo dục và hội nhập quốc tế.
              </p>
              <p className="font-normal text-[#111] text-[16px] leading-[1.8] m-0 text-justify">
                Kế thừa bề dày thành tích xuất sắc và những giá trị cốt lõi từ các khoa tiền nhiệm, Khoa Sử - Địa – Chính trị đang từng bước khẳng định vững chắc vị thế là một trong những đơn vị đào tạo nòng cốt, có uy tín và chất lượng cao hàng đầu tại khu vực miền Trung - Tây Nguyên cũng như trên phạm vi cả nước. Với đội ngũ giảng viên tâm huyết, giàu kinh nghiệm và chuyên môn sâu rộng, chúng tôi cam kết tiếp tục đóng góp mạnh mẽ vào sự nghiệp trồng người và sự phát triển toàn diện của Trường Đại học Sư phạm - Đại học Đà Nẵng trên bản đồ giáo dục đại học trọng điểm quốc gia.
              </p>
              <p className="font-normal text-[#111] text-[16px] leading-[1.8] m-0 text-justify">
                <strong>Về chức năng cốt lõi</strong>, Khoa chịu trách nhiệm quản lý, xây dựng và phát triển các chương trình đào tạo từ chính quy đến các chương trình bồi dưỡng ngắn hạn. Chúng tôi trực tiếp điều hành và đảm bảo chất lượng chuyên môn cho các bộ môn như Lịch sử, Địa lý, Giáo dục chính trị, Pháp luật, Văn hóa và Du lịch. Song song với công tác giảng dạy, Khoa đặc biệt chú trọng đẩy mạnh hoạt động nghiên cứu khoa học, mở rộng mạng lưới hợp tác quốc tế và không ngừng đầu tư nâng cấp hệ thống cơ sở vật chất, trang thiết bị học tập nhằm tạo ra một môi trường giáo dục lý tưởng nhất cho sinh viên.
              </p>
              <p className="font-normal text-[#111] text-[16px] leading-[1.8] m-0 text-justify">
                <strong>Về mục tiêu đào tạo</strong>, triết lý giáo dục của chúng tôi là kiến tạo nên một thế hệ nguồn nhân lực chất lượng cao, hội tụ đầy đủ ba yếu tố: Đạo đức trong sáng, Tư duy phản biện sắc bén và Năng lực chuyên môn vững vàng. Sinh viên tốt nghiệp từ Khoa Sử - Địa – Chính trị không chỉ hoàn toàn tự tin đảm nhận các vai trò giảng dạy, nghiên cứu chuyên sâu, mà còn sở hữu khả năng thích ứng linh hoạt với nhiều lĩnh vực công tác liên ngành đa dạng như Giáo dục, Luật pháp, Du lịch, và Quan hệ quốc tế, sẵn sàng đáp ứng mọi nhu cầu ngày càng cao của thị trường lao động trong kỷ nguyên số.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
