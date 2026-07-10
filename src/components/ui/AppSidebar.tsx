import React from 'react';
import { SidebarMenu } from './SidebarMenu';
import type { MenuItem } from './SidebarMenu';

const APP_SIDEBAR_ITEMS: MenuItem[] = [
  { id: '1', label: 'Thông báo', to: '/thong-bao' },
  { 
    id: '2', label: 'Đào tạo', 
    children: [
      { id: '2-1', label: 'Chương trình', to: '/dao-tao' },
      { id: '2-2', label: 'Chuẩn đầu ra', to: '/dao-tao' },
      { id: '2-3', label: 'Quy chế - Quy định', to: '/tai-lieu-bieu-mau' },
      { id: '2-4', label: 'Thời khóa biểu', to: '/dao-tao' },
      { id: '2-5', label: 'Tra cứu điểm thi', to: '/dao-tao' },
      { id: '2-6', label: 'Lịch thi', to: '/dao-tao' }
    ] 
  },
  { 
    id: '3', label: 'Nghiên cứu KH', 
    children: [
      { id: '3-1', label: 'Hoạt động khoa học', to: '/nghien-cuu' },
      { id: '3-2', label: 'Lý lịch khoa học', to: '/nghien-cuu' },
      { id: '3-3', label: 'Công trình khoa học', to: '/nghien-cuu' },
      { id: '3-4', label: 'Hội nghị - hội thảo', to: '/nghien-cuu' }
    ] 
  },
  { 
    id: '4', label: 'Hợp tác', 
    children: [
      { id: '4-1', label: 'Trong nước', to: '/hop-tac' },
      { id: '4-2', label: 'Quốc tế', to: '/hop-tac' }
    ] 
  },
  { 
    id: '5', label: 'Sinh viên', 
    children: [
      { id: '5-1', label: 'Học bổng - tài trợ', to: '/hoat-dong' },
      { id: '5-2', label: 'Biểu mẫu văn bản', to: '/tai-lieu-bieu-mau' },
      { id: '5-3', label: 'Đoàn - Hội SV', to: '/hoat-dong' },
      { id: '5-4', label: 'CLB Địa lý', to: '/hoat-dong' },
      { id: '5-5', label: 'Cựu sinh viên', to: '/hoat-dong' }
    ] 
  },
  { 
    id: '6', label: 'Tuyển sinh', 
    children: [
      { id: '6-1', label: 'ĐH chính quy', to: '/tuyen-sinh' },
      { id: '6-2', label: 'Hoạt động tuyển sinh', to: '/tuyen-sinh' }
    ] 
  },
  { 
    id: '7', label: 'Tài nguyên', 
    children: [
      { id: '7-1', label: 'Giáo trình, bài giảng', to: '/tai-lieu-bieu-mau' },
      { id: '7-2', label: 'Tài liệu tham khảo', to: '/tai-lieu-bieu-mau' }
    ] 
  }
];

export const AppSidebar: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`w-full ${className}`}>
      <SidebarMenu items={APP_SIDEBAR_ITEMS} />
    </div>
  );
};
