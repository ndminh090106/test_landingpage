import React, { useState } from 'react';
import { Calendar, Clock, User, Phone, Mail, CheckCircle, Loader2 } from 'lucide-react';

interface FormData {
  name: string;
  phone: string;
  email: string;
  date: string;
  time: string;
}

export const AppointmentForm: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    email: '',
    date: '',
    time: ''
  });

  // Đã cập nhật URL Google Apps Script của bạn
  const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbw70mXDLiQ66kbhKO5rMxEelXG2F_L5-2TiiWGM-S6np_sYBVeqjHpiisdcB0to2GKN/exec';

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Tạo FormData để gửi dữ liệu dạng POST
      const formPayload = new FormData();
      formPayload.append('name', formData.name);
      formPayload.append('phone', formData.phone);
      formPayload.append('email', formData.email);
      formPayload.append('date', formData.date);
      formPayload.append('time', formData.time);
      
      // Gửi request thực tế
      // mode: 'no-cors' là bắt buộc khi gọi Google Apps Script từ trình duyệt
      await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        body: formPayload,
        mode: 'no-cors'
      });
      
      setIsSubmitted(true);
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Có lỗi xảy ra khi kết nối. Vui lòng thử lại hoặc liên hệ hotline.');
    } finally {
      setIsLoading(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="bg-white p-8 rounded-xl shadow-2xl text-center border-t-4 border-accent-600 h-full flex flex-col justify-center items-center animate-fade-in-up">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6 shadow-sm">
          <CheckCircle className="w-10 h-10 text-green-600" />
        </div>
        <h3 className="text-2xl font-bold text-brand-900 mb-2">Đăng ký thành công!</h3>
        <div className="w-16 h-1 bg-gray-200 mx-auto my-4"></div>
        <p className="text-gray-600 mb-8 leading-relaxed">
          Cảm ơn <span className="font-bold text-brand-900">{formData.name}</span> đã quan tâm.<br/>
          Thông tin đã được lưu vào hệ thống.<br/>
          Nhân viên sẽ liên hệ lại qua số <span className="font-bold text-brand-900">{formData.phone}</span><br/>
          trong vòng 30 phút để xác nhận lịch xem nhà.
        </p>
        <button 
          onClick={() => {
            setIsSubmitted(false);
            setFormData({ name: '', phone: '', email: '', date: '', time: '' });
          }}
          className="text-accent-600 font-bold hover:text-accent-700 hover:underline transition"
        >
          Đặt lịch khác
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white p-6 md:p-8 rounded-xl shadow-2xl border-t-4 border-accent-600 h-full">
      <h3 className="text-xl md:text-2xl font-bold text-brand-900 mb-6 text-center">
        Đăng ký xem nhà thực tế
      </h3>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Họ và tên <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <User className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
            <input 
              type="text" 
              name="name"
              value={formData.name}
              onChange={handleChange}
              required 
              className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-transparent outline-none transition bg-gray-50 focus:bg-white"
              placeholder="Nhập họ tên của bạn"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Số điện thoại <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <Phone className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
            <input 
              type="tel" 
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required 
              pattern="[0-9]{10,11}"
              className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-transparent outline-none transition bg-gray-50 focus:bg-white"
              placeholder="Nhập số điện thoại"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email (không bắt buộc)
          </label>
          <div className="relative">
            <Mail className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
            <input 
              type="email" 
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-transparent outline-none transition bg-gray-50 focus:bg-white"
              placeholder="example@gmail.com"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Ngày xem <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <Calendar className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
              <input 
                type="date" 
                name="date"
                value={formData.date}
                onChange={handleChange}
                required 
                className="w-full pl-10 pr-2 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-transparent outline-none transition text-sm bg-gray-50 focus:bg-white"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Giờ xem <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <Clock className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
              <select 
                name="time"
                value={formData.time}
                onChange={handleChange}
                required
                className="w-full pl-10 pr-2 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-transparent outline-none transition appearance-none text-sm bg-gray-50 focus:bg-white"
              >
                <option value="">Chọn giờ</option>
                <option value="08:00">08:00</option>
                <option value="09:00">09:00</option>
                <option value="10:00">10:00</option>
                <option value="11:00">11:00</option>
                <option value="14:00">14:00</option>
                <option value="15:00">15:00</option>
                <option value="16:00">16:00</option>
                <option value="17:00">17:00</option>
              </select>
            </div>
          </div>
        </div>

        <button 
          type="submit" 
          disabled={isLoading}
          className="w-full bg-accent-600 hover:bg-accent-700 text-white font-bold py-3.5 rounded-lg shadow-lg hover:shadow-xl transition transform hover:-translate-y-0.5 mt-2 text-lg uppercase tracking-wide flex items-center justify-center space-x-2 disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {isLoading ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              <span>Đang xử lý...</span>
            </>
          ) : (
            <span>XÁC NHẬN LỊCH XEM</span>
          )}
        </button>

        <p className="text-xs text-center text-gray-500 mt-3 flex items-center justify-center gap-1">
          <CheckCircle className="w-3 h-3 text-green-500" />
          Thông tin của bạn được bảo mật tuyệt đối 100%.
        </p>
      </form>
    </div>
  );
};