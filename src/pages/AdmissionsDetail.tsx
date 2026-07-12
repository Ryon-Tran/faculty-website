import React from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import admissionsData from '../data/admissions.json';

const placeholderImg = "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1000";

export default function AdmissionsDetail() {
  const [comments, setComments] = React.useState([
    { id: 1, author: 'Học sinh lớp 12', text: 'Cho em hỏi phương thức xét tuyển học bạ yêu cầu cụ thể như thế nào ạ?', time: '2 giờ trước' }
  ]);
  const [newComment, setNewComment] = React.useState('');

  return (
    <div className="flex flex-col items-start w-full font-['Inter']">
      <div className="flex gap-[8px] items-center px-[80px] py-[20px] w-full md:px-[20px] lg:px-[80px]">
        <Link to="/" className="font-medium text-[#0d4d99] text-[14px] no-underline">Trang chủ</Link>
        <span className="text-[#666] text-[12px]">&gt;</span>
        <Link to="/tuyen-sinh" className="font-medium text-[#0d4d99] text-[14px] no-underline">Tuyển sinh</Link>
        <span className="text-[#666] text-[12px]">&gt;</span>
        <p className="font-normal text-[#666] text-[14px] m-0">Chi tiết</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-[40px] items-start px-[80px] py-[40px] w-full md:px-[20px] lg:px-[80px]">
        <article className="flex flex-1 flex-col gap-[24px] items-start w-full">
          <span className="bg-[#c8102e] text-white text-[12px] font-semibold px-[12px] py-[4px] rounded-[4px]">Tuyển sinh 2026</span>
          <h1 className="font-bold text-[#111] text-[28px] leading-[1.4] m-0">
            Tuyển sinh ngành Sư phạm Lịch sử - Khoa Sử - Địa - Chính trị, Trường ĐH Sư phạm, ĐH Đà Nẵng 2026
          </h1>
          <p className="font-normal text-[#808080] text-[13px] m-0">📅 30/06/2026 · 👤 Phòng Đào tạo</p>

          <div className="relative rounded-[12px] w-full overflow-hidden flex justify-center bg-gray-50">
            <img alt="" className="max-w-full h-auto max-h-[600px] object-contain rounded-[12px]" src={placeholderImg} />
          </div>

          <div className="flex flex-col gap-[16px] w-full text-[#111] text-[16px] leading-[1.8]">
            <p className="m-0">Bạn đam mê lịch sử? Bạn muốn trở thành nhà giáo truyền cảm hứng cho thế hệ trẻ về những giá trị lịch sử của dân tộc? Hãy đến với ngành Sư phạm Lịch sử tại Khoa Sử - Địa - Chính trị!</p>

            <h2 className="font-bold text-[#c8102e] text-[20px] m-0 mt-[8px]">Thông tin ngành học</h2>
            <div className="bg-[#f5f7fa] rounded-[12px] p-[24px]">
              <table className="w-full text-[15px]">
                <tbody>
                  {[
                    ["Mã ngành", "7140218"],
                    ["Tên ngành", "Sư phạm Lịch sử"],
                    ["Bậc đào tạo", "Đại học"],
                    ["Thời gian", "4 năm"],
                    ["Chỉ tiêu", "50"],
                    ["Điểm chuẩn 2026", "24.0"],
                  ].map(([label, value], idx) => (
                    <tr key={idx} className="border-b border-[#e5e7eb] last:border-b-0">
                      <td className="py-[10px] font-semibold text-[#666] w-[200px]">{label}</td>
                      <td className="py-[10px] font-medium text-[#111]">{value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h2 className="font-bold text-[#c8102e] text-[20px] m-0 mt-[8px]">Phương thức xét tuyển</h2>
            <ul className="pl-[20px] flex flex-col gap-[8px] text-[#666]">
              <li>Xét tuyển dựa trên kết quả thi tốt nghiệp THPT</li>
              <li>Xét tuyển học bạ THPT (3 năm hoặc 5 học kỳ)</li>
              <li>Xét tuyển kết hợp chứng chỉ quốc tế</li>
            </ul>

            <h2 className="font-bold text-[#c8102e] text-[20px] m-0 mt-[8px]">Cơ hội nghề nghiệp</h2>
            <ul className="pl-[20px] flex flex-col gap-[8px] text-[#666]">
              <li>Giáo viên Lịch sử tại các trường THPT</li>
              <li>Nghiên cứu viên tại các viện nghiên cứu lịch sử</li>
              <li>Chuyên viên tại các bảo tàng, di tích lịch sử</li>
              <li>Biên tập viên, nhà báo lĩnh vực văn hóa - lịch sử</li>
            </ul>
          </div>

          <div className="bg-[#1a428a] flex flex-col md:flex-row gap-[16px] items-center justify-between p-[24px] rounded-[12px] w-full mt-[16px]">
            <div>
              <p className="font-bold text-white text-[18px] m-0">Đăng ký tư vấn ngay!</p>
              <p className="font-normal text-white/80 text-[14px] m-0 mt-[4px]">Liên hệ để được hỗ trợ chọn ngành phù hợp</p>
            </div>
            <button className="bg-[#c8102e] hover:bg-[#a00c24] text-white font-bold text-[14px] px-[24px] py-[12px] rounded-[8px] border-none cursor-pointer transition-colors shrink-0">
              Liên hệ tư vấn →
            </button>
          </div>

          {/* Comment Section */}
          <div className="flex flex-col gap-[20px] w-full mt-[24px] pt-[24px] border-t border-[#e5e7eb]">
            <h3 className="font-bold text-[#1a428a] text-[20px] m-0">Bình luận ({comments.length})</h3>

            <div className="flex flex-col gap-[16px] w-full">
              <textarea
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                placeholder="Viết bình luận của bạn..."
                className="w-full p-[16px] border border-[#e5e7eb] rounded-[8px] resize-y min-h-[100px] outline-none focus:border-[#1a428a] text-[15px]"
              ></textarea>
              <button
                onClick={() => {
                  if (newComment.trim()) {
                    setComments([...comments, { id: Date.now(), author: 'Người dùng', text: newComment, time: 'Vừa xong' }]);
                    setNewComment('');
                  }
                }}
                className="bg-[#1a428a] text-white font-medium px-[24px] py-[10px] rounded-[6px] self-end hover:bg-[#0d4d99] transition-colors"
              >
                Gửi bình luận
              </button>
            </div>

            <div className="flex flex-col gap-[20px] w-full mt-[16px]">
              {comments.map(c => (
                <div key={c.id} className="flex gap-[16px] items-start w-full">
                  <div className="size-[40px] rounded-full bg-[#e2e8f0] flex items-center justify-center shrink-0 font-bold text-[#1a428a]">
                    {c.author.charAt(0)}
                  </div>
                  <div className="flex flex-col gap-[4px] w-full bg-[#f8fafc] p-[16px] rounded-[8px]">
                    <div className="flex gap-[12px] items-baseline">
                      <span className="font-bold text-[#111] text-[14px]">{c.author}</span>
                      <span className="font-normal text-[#808080] text-[12px]">{c.time}</span>
                    </div>
                    <p className="font-normal text-[#444] text-[15px] m-0 leading-[1.6]">{c.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </article>

        <aside className="flex flex-col gap-[24px] items-start w-full lg:w-[300px]">
          <div className="bg-[#f5f7fa] flex flex-col gap-[16px] items-start p-[24px] rounded-[12px] w-full">
            <p className="font-bold text-[#1a428a] text-[16px] uppercase m-0">Ngành khác</p>
            <div className="flex flex-col gap-[12px] w-full">
              {['SP Địa lý', 'GD Chính trị', 'GD Quốc phòng An ninh'].map((link, idx) => (
                <div key={idx} className="flex gap-[8px] items-center cursor-pointer hover:underline text-[#0d4d99]">
                  <span className="text-[12px]">&gt;</span>
                  <p className="font-medium text-[14px] m-0">{link}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-[#c8102e] flex flex-col gap-[12px] p-[24px] rounded-[12px] w-full">
            <p className="font-bold text-white text-[18px] m-0">Hotline tuyển sinh</p>
            <p className="font-bold text-white text-[24px] m-0">📞 0236 3733 290</p>
          </div>
        </aside>
      </div>
    </div>
  );
}
