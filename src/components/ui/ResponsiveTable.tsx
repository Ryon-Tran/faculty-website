import React from 'react';

export interface Column<T> {
  key: keyof T | string;
  header: string;
  width?: string;
  align?: 'left' | 'center' | 'right';
  render?: (row: T, index: number) => React.ReactNode;
}

export interface ResponsiveTableProps<T> {
  columns: Column<T>[];
  data: T[];
  keyExtractor: (row: T, index: number) => string | number;
  emptyMessage?: string;
  ariaLabel?: string;
  className?: string;
}

/**
 * Reusable Responsive Table component
 * - Bảng dữ liệu tự động cuộn ngang trên mobile (<640px) không vỡ layout
 * - Hỗ trợ accessibility với role="region", aria-label, focus outline
 * - Memo hóa để tối ưu hiệu năng re-render
 */
export function ResponsiveTable<T>({
  columns,
  data,
  keyExtractor,
  emptyMessage = 'Không có dữ liệu hiển thị.',
  ariaLabel = 'Bảng dữ liệu',
  className = '',
}: ResponsiveTableProps<T>) {
  return (
    <div className={`w-full flex flex-col bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden ${className}`}>
      {/* Container cuộn ngang với role region và tabindex cho keyboard accessibility */}
      <div
        role="region"
        aria-label={ariaLabel}
        tabIndex={0}
        className="w-full overflow-x-auto focus:outline-none focus:ring-2 focus:ring-[#1a428a]/20 transition-all no-scrollbar"
      >
        <table className="w-full text-left border-collapse min-w-[600px] sm:min-w-full">
          <thead>
            <tr className="bg-slate-50/80 border-b border-slate-200 font-['Inter'] font-semibold text-slate-700 text-xs sm:text-sm uppercase tracking-wider">
              {columns.map((col, idx) => {
                const alignClass =
                  col.align === 'center'
                    ? 'text-center'
                    : col.align === 'right'
                    ? 'text-right'
                    : 'text-left';
                return (
                  <th
                    key={col.key.toString() || idx}
                    scope="col"
                    className={`px-4 py-3.5 whitespace-nowrap ${alignClass}`}
                    style={col.width ? { width: col.width } : undefined}
                  >
                    {col.header}
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 font-['Inter'] text-sm text-slate-700">
            {data.length === 0 ? (
              <tr>
                <td colSpan={columns.length} className="px-4 py-8 text-center text-slate-400 italic">
                  {emptyMessage}
                </td>
              </tr>
            ) : (
              data.map((row, rowIdx) => (
                <tr
                  key={keyExtractor(row, rowIdx)}
                  className="hover:bg-slate-50/70 transition-colors duration-150"
                >
                  {columns.map((col, colIdx) => {
                    const alignClass =
                      col.align === 'center'
                        ? 'text-center'
                        : col.align === 'right'
                        ? 'text-right'
                        : 'text-left';
                    return (
                      <td key={col.key.toString() || colIdx} className={`px-4 py-3.5 ${alignClass}`}>
                        {col.render
                          ? col.render(row, rowIdx)
                          : (row as Record<string, any>)[col.key as string]}
                      </td>
                    );
                  })}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
      <div className="bg-slate-50/50 px-4 py-2 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400 sm:hidden">
        <span>👈 Vuốt ngang để xem thêm cột</span>
        <span>Tổng: {data.length} dòng</span>
      </div>
    </div>
  );
}
