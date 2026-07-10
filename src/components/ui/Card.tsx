import React from 'react';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  hoverEffect?: boolean;
  bordered?: boolean;
  as?: React.ElementType;
}

/**
 * Reusable Card Container
 * Tự động đồng nhất border-radius, shadow và hiệu ứng hover transition mượt mà
 */
export const Card = React.memo(function Card({
  children,
  hoverEffect = true,
  bordered = true,
  as: Component = 'div',
  className = '',
  ...props
}: CardProps & { as?: React.ElementType }) {
  const hoverClasses = hoverEffect
    ? 'hover:-translate-y-1.5 hover:shadow-xl transition-all duration-300'
    : 'transition-shadow duration-300';
  const borderClasses = bordered ? 'border border-slate-200/80' : '';

  return (
    <Component
      className={`bg-white rounded-2xl shadow-sm overflow-hidden flex flex-col ${borderClasses} ${hoverClasses} ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
});

Card.displayName = 'Card';

export interface CardImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  aspectRatio?: 'video' | 'square' | 'wide' | 'auto';
  badge?: string;
  badgeColor?: string;
}

const aspectClasses: Record<string, string> = {
  video: 'aspect-video',
  square: 'aspect-square',
  wide: 'aspect-[16/10]',
  auto: 'h-auto',
};

/**
 * Reusable Card Image với hỗ trợ tỷ lệ khung hình chuẩn và huy hiệu (Badge)
 */
export const CardImage = React.memo(function CardImage({
  src,
  alt = '',
  aspectRatio = 'wide',
  badge,
  badgeColor = 'bg-[#c8102e]',
  className = '',
  ...props
}: CardImageProps) {
  return (
    <div className={`relative w-full overflow-hidden bg-slate-100 shrink-0 ${aspectClasses[aspectRatio]} ${className}`}>
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className="absolute inset-0 size-full object-cover transition-transform duration-500 group-hover:scale-105"
        {...props}
      />
      {badge && (
        <span
          className={`absolute top-3 left-3 ${badgeColor} text-white text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md shadow-sm z-10`}
        >
          {badge}
        </span>
      )}
    </div>
  );
});

CardImage.displayName = 'CardImage';

export const CardHeader = React.memo(function CardHeader({
  children,
  className = '',
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={`flex flex-col gap-1.5 p-4 sm:p-5 pb-2 ${className}`} {...props}>
      {children}
    </div>
  );
});

CardHeader.displayName = 'CardHeader';

export const CardTitle = React.memo(function CardTitle({
  children,
  className = '',
  as: Component = 'h3',
  ...props
}: React.HTMLAttributes<HTMLHeadingElement> & { as?: React.ElementType }) {
  return (
    <Component
      className={`font-['Inter'] font-bold text-slate-800 text-sm sm:text-base leading-snug group-hover:text-[#1a428a] transition-colors line-clamp-2 ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
});

CardTitle.displayName = 'CardTitle';

export const CardDescription = React.memo(function CardDescription({
  children,
  className = '',
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p className={`font-['Inter'] font-normal text-slate-500 text-xs sm:text-sm leading-relaxed line-clamp-2 ${className}`} {...props}>
      {children}
    </p>
  );
});

CardDescription.displayName = 'CardDescription';

export const CardContent = React.memo(function CardContent({
  children,
  className = '',
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={`p-4 sm:p-5 pt-0 flex-1 flex flex-col justify-start ${className}`} {...props}>
      {children}
    </div>
  );
});

CardContent.displayName = 'CardContent';

export const CardFooter = React.memo(function CardFooter({
  children,
  className = '',
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={`p-4 sm:p-5 pt-0 mt-auto flex items-center justify-between border-t border-slate-100 text-xs text-slate-500 ${className}`} {...props}>
      {children}
    </div>
  );
});

CardFooter.displayName = 'CardFooter';
