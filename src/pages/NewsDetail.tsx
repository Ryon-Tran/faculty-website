import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { Calendar, User } from 'lucide-react';
import newsData from '../data/news.json';
import notificationsData from '../data/notifications.json';
import admissionsData from '../data/admissions.json';
import cooperationData from '../data/cooperation.json';
import studentsData from '../data/students.json';
import outcomesData from '../data/outcomes.json';

const placeholderImg = "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1000";

// Combine all articles to easily find the clicked one
const allArticles = [
  ...newsData,
  ...notificationsData,
  ...admissionsData,
  ...cooperationData,
  ...studentsData,
  ...outcomesData
];

const getCategory = (link: string) => {
  if (link.includes('/tuyen-sinh/')) return 'Tuyển sinh';
  if (link.includes('/thong-bao/')) return 'Thông báo';
  if (link.includes('/dao-tao/')) return 'Đào tạo';
  if (link.includes('/hop-tac/')) return 'Hợp tác';
  if (link.includes('/sinh-vien/')) return 'Sinh viên';
  if (link.includes('/ban-tin-noi-bo/')) return 'Bản tin nội bộ';
  return 'Tin tức';
};

export default function NewsDetail() {
  const { slug } = useParams();
  const [comments, setComments] = React.useState([
    { id: 1, author: 'Nguyễn Văn Nam', text: 'Bài viết rất hữu ích!', time: '2 giờ trước' }
  ]);
  const [newComment, setNewComment] = React.useState('');

  // Find article by matching link filename (slug)
  const article = allArticles.find(item => {
    const itemSlug = item.link.split('/').pop()?.replace('.html', '');
    return itemSlug === slug;
  });

  if (!article) {
    return (
      <div className="flex flex-col items-center justify-center py-[100px] font-['Inter']">
        <h2 className="text-[#c8102e] text-[24px] font-bold">Không tìm thấy bài viết</h2>
        <Link to="/tin-tuc" className="text-[#1a428a] font-medium hover:underline mt-4">Quay về trang tin tức</Link>
      </div>
    );
  }

  // Generate some random related news from the same list
  const relatedNews = newsData
    .filter(item => item.title !== article.title)
    .slice(0, 4);

  const cleanTitle = article.title.replace(/[\p{Emoji_Presentation}\p{Extended_Pictographic}]/gu, '').trim();

  return (
    <div className="flex flex-col items-start w-full font-['Inter']">
      <div className="flex gap-[8px] items-center px-[80px] py-[20px] w-full md:px-[20px] lg:px-[80px]">
        <Link to="/" className="font-medium text-[#0d4d99] text-[14px] no-underline">Trang chủ</Link>
        <span className="text-[#666] text-[12px]">&gt;</span>
        <Link to="/tin-tuc" className="font-medium text-[#0d4d99] text-[14px] no-underline">Tin tức</Link>
        <span className="text-[#666] text-[12px]">&gt;</span>
        <p className="font-normal text-[#666] text-[14px] m-0 line-clamp-1">{cleanTitle}</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 items-start px-4 w-full lg:px-6">
        <article className="flex flex-1 flex-col gap-[24px] items-start w-full">
          <div className="flex flex-col gap-[12px] w-full">
            <span className="bg-[#1a428a] text-white text-[12px] font-semibold px-[12px] py-[4px] rounded-[4px] self-start">
              {getCategory(article.link)}
            </span>
            <h1 className="font-bold text-[#111] text-[22px] sm:text-[26px] leading-[1.4] m-0">
              {cleanTitle}
            </h1>
            <div className="flex gap-[16px] items-center text-[#808080] text-[13px]">
              <span className="flex items-center gap-1"><Calendar className="size-4" /> {article.date}</span>
              <span className="flex items-center gap-1"><User className="size-4" /> Ban Biên Tập</span>
            </div>
          </div>

          {'image' in article && article.image && (
            <div className="relative rounded-[12px] w-full overflow-hidden flex justify-center bg-gray-50">
              <img alt={article.title} className="max-w-full h-auto max-h-[600px] object-contain rounded-[12px]" src={article.image} />
            </div>
          )}

          <div className="flex flex-col gap-[16px] w-full text-[#111] text-[16px] leading-[1.8]">
            <p className="m-0 font-medium text-gray-700">
              {'description' in article && article.description ? article.description : "Dưới đây là thông tin chi tiết về bài viết/thông báo được cập nhật từ văn phòng khoa."}
            </p>
            <p className="m-0">
              Khoa Sử - Địa - Chính trị luôn đặt mục tiêu nâng cao chất lượng giảng dạy và nghiên cứu khoa học, tạo điều kiện tốt nhất cho các giảng viên và sinh viên tham gia vào các hoạt động học tập, trao đổi chuyên môn.
            </p>
            <p className="m-0">
              Để đọc toàn văn chi tiết bài viết, tài liệu đính kèm hoặc đăng ký biểu mẫu trực tuyến liên quan đến thông báo này, vui lòng truy cập đường dẫn bài viết gốc tại hệ thống cổng thông tin chính thức của Trường Đại học Sư phạm Đà Nẵng bên dưới.
            </p>

            <div className="bg-[#f5f7fa] border-l-4 border-[#c8102e] p-[20px] rounded-r-[8px] mt-[16px]">
              <p className="font-semibold text-[#111] m-0 mb-[8px]">Xem bài viết gốc trên Website Khoa:</p>
              <a href={article.link} target="_blank" rel="noopener noreferrer" className="text-[#0d4d99] hover:underline font-medium break-all text-[14px]">
                {article.link} ↗
              </a>
            </div>
          </div>

          <div className="flex gap-[12px] items-center border-t border-[#e5e7eb] pt-[24px] mt-[16px] w-full">
            <span className="text-[13px] text-[#666] font-medium">Chia sẻ:</span>
            {['Facebook', 'LinkedIn', 'Twitter'].map((s, i) => (
              <span key={i} className="bg-[#1a428a] text-white text-[12px] font-medium px-[12px] py-[6px] rounded-[4px] cursor-pointer hover:bg-[#0d4d99] transition-colors">{s}</span>
            ))}
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
                  if(newComment.trim()) {
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
            <p className="font-bold text-[#1a428a] text-[16px] uppercase m-0">Bài viết mới nhất</p>
            <div className="flex flex-col gap-[16px] w-full">
              {relatedNews.map((item, idx) => {
                const itemSlug = item.link.split('/').pop()?.replace('.html', '');
                return (
                  <Link to={`/tin-tuc/${itemSlug}`} key={idx} className="flex flex-col sm:flex-row gap-3 items-start cursor-pointer group no-underline">
                    <div className="w-full sm:w-[80px] h-[160px] sm:h-[52px] relative rounded-[4px] overflow-hidden shrink-0 bg-gray-100">
                      <img alt={item.title} className="absolute inset-0 object-cover size-full" src={item.image || placeholderImg} />
                    </div>
                    <div className="flex flex-col gap-[4px]">
                      <p className="font-semibold text-[#036] text-[13px] line-clamp-2 m-0 group-hover:text-[#c8102e] transition-colors">{item.title}</p>
                      <p className="font-normal text-[#808080] text-[11px] m-0">{item.date}</p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
          
        </aside>
      </div>
    </div>
  );
}
