import React from 'react';
import { Link } from 'react-router-dom';

export interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  accentColor?: 'red' | 'blue' | 'slate';
  actionLabel?: string;
  actionTo?: string;
  onActionClick?: () => void;
  className?: string;
}

const accentColorMap: Record<'red' | 'blue' | 'slate', { bar: string; title: string }> = {
  red: { bar: 'bg-[#c8102e]', title: 'text-[#c8102e]' },
  blue: { bar: 'bg-[#1a428a]', title: 'text-[#1a428a]' },
  slate: { bar: 'bg-slate-700', title: 'text-slate-800' },
};

/**
 * Reusable Section Header cho các trang chính
 * - Đảm bảo typography rõ ràng, khoảng cách đồng đều
 * - Hỗ trợ thanh accent màu và nút Xem tất cả (action label)
 */
export const SectionHeader = React.memo(function SectionHeader({
  title,
  subtitle,
  accentColor = 'red',
  actionLabel,
  actionTo,
  onActionClick,
  className = '',
}: SectionHeaderProps) {
  const { bar, title: titleColor } = accentColorMap[accentColor];

  return (
    <div className={`flex flex-col sm:flex-row sm:items-end justify-between gap-4 w-full mb-6 ${className}`}>
      <div className="flex items-start gap-3">
        <div className={`w-1.5 min-h-[28px] rounded-full self-stretch shrink-0 ${bar}`} />
        <div className="flex flex-col gap-1">
          <h2 className={`font-['Inter'] font-extrabold text-xl sm:text-2xl md:text-3xl uppercase tracking-tight m-0 ${titleColor}`}>
            {title}
          </h2>
          {subtitle && (
            <p className="font-['Inter'] font-normal text-slate-500 text-xs sm:text-sm m-0">
              {subtitle}
            </p>
          )}
        </div>
      </div>

      {(actionLabel && (actionTo || onActionClick)) && (
        <div className="shrink-0 self-start sm:self-center">
          {actionTo ? (
            <Link
              to={actionTo}
              className="inline-flex items-center gap-1.5 font-['Inter'] font-bold text-xs sm:text-sm uppercase text-[#1a428a] hover:text-[#c8102e] transition-colors group no-underline py-1"
            >
              <span>{actionLabel}</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="transition-transform duration-200 group-hover:translate-x-1 size-4"
              >
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </Link>
          ) : (
            <button
              type="button"
              onClick={onActionClick}
              className="inline-flex items-center gap-1.5 font-['Inter'] font-bold text-xs sm:text-sm uppercase text-[#1a428a] hover:text-[#c8102e] transition-colors group bg-transparent border-none cursor-pointer py-1"
            >
              <span>{actionLabel}</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="transition-transform duration-200 group-hover:translate-x-1 size-4"
              >
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </button>
          )}
        </div>
      )}
    </div>
  );
});

SectionHeader.displayName = 'SectionHeader';
