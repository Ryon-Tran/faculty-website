import React from 'react';

export default function PlaceholderPage({ title }: { title: string }) {
  return (
    <section className="flex flex-col items-center justify-center min-h-[420px] sm:min-h-[500px] px-4 sm:px-6 py-12 sm:py-16 bg-[#f5f7fa]">
      <h1 className="font-['Inter'] font-bold text-[24px] sm:text-[32px] text-[#1a428a] mb-4 text-center">{title}</h1>
      <p className="font-['Inter'] font-normal text-[16px] text-[#666] text-center max-w-[600px]">
        Nội dung của trang này đang được xây dựng. Vui lòng quay lại sau!
      </p>
    </section>
  );
}
