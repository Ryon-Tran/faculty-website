import React, { useState, useCallback } from 'react';
import { Button } from './Button';

export interface ConsultationFormProps {
  title?: string;
  subtitle?: string;
  onSuccess?: () => void;
  className?: string;
}

interface FormData {
  fullName: string;
  phone: string;
  email: string;
  major: string;
  question: string;
}

/**
 * Reusable Consultation Form Component
 * - Tối ưu kích thước input trên mobile (min-h 48px) dễ nhấn
 * - Focus ring rõ ràng và contrast cao đạt chuẩn WCAG
 * - Validation mượt mà không re-render toàn phần dư thừa
 */
export const ConsultationForm = React.memo(function ConsultationForm({
  title = 'Đăng Ký Nhận Tư Vấn Tuyển Sinh',
  subtitle = 'Để lại thông tin, Ban Tư vấn Tuyển sinh Khoa Sử - Địa - Chính trị sẽ liên hệ hỗ trợ bạn trong vòng 24h.',
  onSuccess,
  className = '',
}: ConsultationFormProps) {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    phone: '',
    email: '',
    major: 'Sư phạm Lịch sử',
    question: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error for field
    setErrors((prev) => {
      if (!prev[name as keyof FormData]) return prev;
      const next = { ...prev };
      delete next[name as keyof FormData];
      return next;
    });
  }, []);

  const validate = useCallback(() => {
    const newErrors: Partial<Record<keyof FormData, string>> = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Vui lòng nhập họ và tên';
    if (!formData.phone.trim() || !/^[0-9]{9,11}$/.test(formData.phone.trim())) {
      newErrors.phone = 'Số điện thoại không hợp lệ (9-11 chữ số)';
    }
    if (formData.email.trim() && !/\S+@\S+\.\S+/.test(formData.email.trim())) {
      newErrors.email = 'Email không đúng định dạng';
    }
    return newErrors;
  }, [formData]);

  const handleSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ fullName: '', phone: '', email: '', major: 'Sư phạm Lịch sử', question: '' });
      if (onSuccess) onSuccess();
      setTimeout(() => setIsSuccess(false), 6000);
    }, 1200);
  }, [validate, onSuccess]);

  return (
    <div className={`bg-white rounded-3xl border border-slate-200/80 p-6 sm:p-8 md:p-10 shadow-lg relative overflow-hidden ${className}`}>
      {/* Decorative background circle */}
      <div className="absolute -right-16 -top-16 size-48 bg-[#c8102e]/5 rounded-full blur-2xl pointer-events-none" />
      <div className="absolute -left-16 -bottom-16 size-48 bg-[#1a428a]/5 rounded-full blur-2xl pointer-events-none" />

      <div className="relative z-10 flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <h3 className="font-['Inter'] font-extrabold text-xl sm:text-2xl text-[#036] tracking-tight">
            {title}
          </h3>
          <p className="font-['Inter'] text-sm text-slate-600 leading-relaxed">
            {subtitle}
          </p>
        </div>

        {isSuccess ? (
          <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 p-6 rounded-2xl flex flex-col items-center justify-center text-center gap-3 animate-fade-in">
            <div className="size-12 bg-emerald-600 text-white rounded-full flex items-center justify-center text-2xl shadow-sm">
              ✓
            </div>
            <h4 className="font-bold text-lg m-0">Đăng ký tư vấn thành công!</h4>
            <p className="text-sm opacity-90 m-0">
              Thông tin của bạn đã được ghi nhận. Thầy/Cô ban tư vấn sẽ sớm liên hệ cho bạn.
            </p>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setIsSuccess(false)}
              className="mt-2"
            >
              Gửi yêu cầu mới
            </Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} noValidate className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
            {/* Họ và tên */}
            <div className="flex flex-col gap-1.5 sm:col-span-1">
              <label htmlFor="fullName" className="font-['Inter'] font-semibold text-xs sm:text-sm text-slate-700">
                Họ và tên học sinh <span className="text-[#c8102e]">*</span>
              </label>
              <input
                id="fullName"
                name="fullName"
                type="text"
                placeholder="Nguyễn Văn A"
                value={formData.fullName}
                onChange={handleChange}
                aria-required="true"
                aria-invalid={!!errors.fullName}
                aria-describedby={errors.fullName ? 'fullName-error' : undefined}
                className={`w-full h-12 px-4 rounded-xl border font-['Inter'] text-sm text-slate-800 bg-slate-50/50 outline-none transition-all duration-200 focus:bg-white focus:ring-2 ${
                  errors.fullName
                    ? 'border-red-500 focus:ring-red-500/20'
                    : 'border-slate-200 focus:border-[#1a428a] focus:ring-[#1a428a]/20 hover:border-slate-300'
                }`}
              />
              {errors.fullName && (
                <span id="fullName-error" className="text-xs text-red-600 font-medium">
                  {errors.fullName}
                </span>
              )}
            </div>

            {/* Số điện thoại */}
            <div className="flex flex-col gap-1.5 sm:col-span-1">
              <label htmlFor="phone" className="font-['Inter'] font-semibold text-xs sm:text-sm text-slate-700">
                Số điện thoại liên hệ <span className="text-[#c8102e]">*</span>
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                placeholder="0912 345 678"
                value={formData.phone}
                onChange={handleChange}
                aria-required="true"
                aria-invalid={!!errors.phone}
                aria-describedby={errors.phone ? 'phone-error' : undefined}
                className={`w-full h-12 px-4 rounded-xl border font-['Inter'] text-sm text-slate-800 bg-slate-50/50 outline-none transition-all duration-200 focus:bg-white focus:ring-2 ${
                  errors.phone
                    ? 'border-red-500 focus:ring-red-500/20'
                    : 'border-slate-200 focus:border-[#1a428a] focus:ring-[#1a428a]/20 hover:border-slate-300'
                }`}
              />
              {errors.phone && (
                <span id="phone-error" className="text-xs text-red-600 font-medium">
                  {errors.phone}
                </span>
              )}
            </div>

            {/* Email */}
            <div className="flex flex-col gap-1.5 sm:col-span-1">
              <label htmlFor="email" className="font-['Inter'] font-semibold text-xs sm:text-sm text-slate-700">
                Email (tùy chọn)
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="example@gmail.com"
                value={formData.email}
                onChange={handleChange}
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? 'email-error' : undefined}
                className={`w-full h-12 px-4 rounded-xl border font-['Inter'] text-sm text-slate-800 bg-slate-50/50 outline-none transition-all duration-200 focus:bg-white focus:ring-2 ${
                  errors.email
                    ? 'border-red-500 focus:ring-red-500/20'
                    : 'border-slate-200 focus:border-[#1a428a] focus:ring-[#1a428a]/20 hover:border-slate-300'
                }`}
              />
              {errors.email && (
                <span id="email-error" className="text-xs text-red-600 font-medium">
                  {errors.email}
                </span>
              )}
            </div>

            {/* Ngành quan tâm */}
            <div className="flex flex-col gap-1.5 sm:col-span-1">
              <label htmlFor="major" className="font-['Inter'] font-semibold text-xs sm:text-sm text-slate-700">
                Ngành học quan tâm
              </label>
              <select
                id="major"
                name="major"
                value={formData.major}
                onChange={handleChange}
                aria-label="Chọn ngành học quan tâm"
                className="w-full h-12 px-4 rounded-xl border border-slate-200 font-['Inter'] text-sm text-slate-800 bg-slate-50/50 outline-none transition-all duration-200 focus:bg-white focus:border-[#1a428a] focus:ring-2 focus:ring-[#1a428a]/20 hover:border-slate-300 cursor-pointer"
              >
                <option value="Sư phạm Lịch sử">Sư phạm Lịch sử</option>
                <option value="Sư phạm Lịch sử - Địa lý">Sư phạm Lịch sử - Địa lý</option>
                <option value="Sư phạm Địa lý">Sư phạm Địa lý</option>
                <option value="Giáo dục Công dân / Chính trị">Giáo dục Công dân / Chính trị học</option>
                <option value="Việt Nam học (Hướng dẫn du lịch)">Việt Nam học (Hướng dẫn du lịch)</option>
              </select>
            </div>

            {/* Câu hỏi hoặc thắc mắc */}
            <div className="flex flex-col gap-1.5 sm:col-span-2">
              <label htmlFor="question" className="font-['Inter'] font-semibold text-xs sm:text-sm text-slate-700">
                Câu hỏi hoặc thắc mắc cần tư vấn
              </label>
              <textarea
                id="question"
                name="question"
                rows={3}
                placeholder="Ghi rõ thắc mắc của bạn về điểm chuẩn, học phí, cơ hội việc làm..."
                value={formData.question}
                onChange={handleChange}
                className="w-full p-4 rounded-xl border border-slate-200 font-['Inter'] text-sm text-slate-800 bg-slate-50/50 outline-none transition-all duration-200 focus:bg-white focus:border-[#1a428a] focus:ring-2 focus:ring-[#1a428a]/20 hover:border-slate-300 resize-y min-h-[88px]"
              />
            </div>

            {/* Nút gửi */}
            <div className="sm:col-span-2 flex items-center justify-end mt-2">
              <Button
                type="submit"
                variant="primary"
                size="lg"
                isLoading={isSubmitting}
                className="w-full sm:w-auto px-8"
                rightIcon={
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="22" y1="2" x2="11" y2="13"></line>
                    <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                  </svg>
                }
              >
                Gửi Đăng Ký Tư Vấn
              </Button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
});

ConsultationForm.displayName = 'ConsultationForm';
