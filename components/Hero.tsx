import React from 'react';
import { Check, ArrowRight } from 'lucide-react';
import { AppointmentForm } from './AppointmentForm';

export const Hero: React.FC = () => {
  const scrollToForm = () => {
    const formElement = document.getElementById('register-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative bg-brand-900 min-h-[90vh] flex items-center pt-24 pb-16 overflow-hidden">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/seed/homev2/1920/1080" 
          alt="Nhà phố Gò Vấp" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-900 via-brand-900/90 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 z-10 relative">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          
          {/* Left Content */}
          <div className="flex-1 text-white space-y-8">
            <div className="inline-flex items-center space-x-2 bg-accent-600/20 text-accent-500 px-4 py-1.5 rounded-full border border-accent-600/30">
              <span className="w-2 h-2 rounded-full bg-accent-500 animate-pulse"></span>
              <span className="text-sm font-bold tracking-wide uppercase">Cơ hội mua nhà tốt 2024</span>
            </div>

            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-tight">
              Nhà Phố Gò Vấp <span className="text-accent-500">54m²</span> – Hẻm Yên Tĩnh<br className="hidden lg:block"/>
              Ở Ngay, Có Dòng Tiền <span className="text-yellow-400">7 Triệu/Tháng</span>
            </h1>

            <p className="text-lg lg:text-xl text-gray-300 max-w-2xl leading-relaxed border-l-4 border-accent-500 pl-4">
              Hẻm trước nhà 3m, chỉ 30m ra hẻm xe tải tránh. 
              Gần sân bay, bệnh viện 175 – khu dân cư an ninh.
              Pháp lý chuẩn, sổ nở hậu – giao dịch ngay.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button 
                onClick={scrollToForm}
                className="flex-1 sm:flex-none inline-flex items-center justify-center space-x-2 bg-accent-600 hover:bg-accent-700 text-white font-bold py-4 px-8 rounded-lg shadow-lg hover:shadow-orange-500/20 transition transform hover:-translate-y-1 text-lg"
              >
                <span>ĐẶT LỊCH XEM NHÀ NGAY</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>

            <div className="flex flex-wrap gap-4 text-sm font-medium text-gray-400">
              <div className="flex items-center space-x-1">
                <Check className="w-4 h-4 text-green-500" />
                <span>Sổ hồng riêng</span>
              </div>
              <div className="flex items-center space-x-1">
                <Check className="w-4 h-4 text-green-500" />
                <span>Hoàn công đầy đủ</span>
              </div>
              <div className="flex items-center space-x-1">
                <Check className="w-4 h-4 text-green-500" />
                <span>Hỗ trợ vay ngân hàng</span>
              </div>
            </div>
          </div>

          {/* Right Form */}
          <div className="w-full lg:w-[450px]" id="register-form">
            <AppointmentForm />
          </div>

        </div>
      </div>
    </div>
  );
};