import React from 'react';
import { 
  ShieldCheck, 
  Wallet, 
  MapPin, 
  VolumeX, 
  Zap, 
  Maximize, 
  Layout, 
  CheckCircle2, 
  Phone,
  HelpCircle,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

/* --- Trust Indicators --- */
export const TrustIndicators: React.FC = () => {
  return (
    <section className="bg-gray-50 py-12 border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center text-center p-4">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 text-blue-600">
              <Wallet className="w-8 h-8" />
            </div>
            <h4 className="text-lg font-bold text-gray-900">Có dòng tiền sẵn</h4>
            <p className="text-gray-600">Nhà đang có khách thuê ổn định 7 triệu/tháng</p>
          </div>
          <div className="flex flex-col items-center text-center p-4">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4 text-green-600">
              <ShieldCheck className="w-8 h-8" />
            </div>
            <h4 className="text-lg font-bold text-gray-900">Pháp lý minh bạch</h4>
            <p className="text-gray-600">Sổ hồng riêng, hoàn công đầy đủ, sang tên ngay</p>
          </div>
          <div className="flex flex-col items-center text-center p-4">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4 text-orange-600">
              <MapPin className="w-8 h-8" />
            </div>
            <h4 className="text-lg font-bold text-gray-900">An cư lý tưởng</h4>
            <p className="text-gray-600">Khu dân cư lâu năm, an ninh, hàng xóm thân thiện</p>
          </div>
        </div>
      </div>
    </section>
  );
};

/* --- Benefits Section --- */
export const Benefits: React.FC = () => {
  const benefits = [
    {
      icon: <VolumeX className="w-10 h-10 text-brand-900" />,
      title: "Ở yên tĩnh – không ồn xe",
      desc: "Vị trí trong hẻm cụt an ninh, không bị ảnh hưởng bởi tiếng ồn giao thông, cực kỳ phù hợp cho gia đình có người già và trẻ nhỏ."
    },
    {
      icon: <Zap className="w-10 h-10 text-brand-900" />,
      title: "Di chuyển thuận tiện",
      desc: "Chỉ 30m ra hẻm xe tải, kết nối nhanh chóng ra các trục đường chính Nguyễn Văn Công, Nguyễn Kiệm, Phạm Văn Đồng."
    },
    {
      icon: <Layout className="w-10 h-10 text-brand-900" />,
      title: "Công năng sử dụng tốt",
      desc: "Thiết kế trệt lầu kiên cố, 3 phòng ngủ đáp ứng đủ nhu cầu cho gia đình 4-6 thành viên sinh hoạt thoải mái."
    },
    {
      icon: <ShieldCheck className="w-10 h-10 text-brand-900" />,
      title: "Pháp lý & phong thủy",
      desc: "Sổ hồng riêng chính chủ, thế đất nở hậu mang lại tài lộc cho gia chủ. Mua bán công chứng trong ngày."
    }
  ];

  return (
    <section id="benefits" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-accent-600 font-bold tracking-wider uppercase text-sm">Giá trị sống thực</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-brand-900 mt-2">
            Vì sao căn nhà này phù hợp để ở lâu dài?
          </h2>
          <div className="w-24 h-1 bg-accent-500 mx-auto mt-6"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {benefits.map((item, idx) => (
            <div key={idx} className="flex p-6 md:p-8 bg-gray-50 rounded-xl hover:shadow-lg transition border border-gray-100">
              <div className="mr-6 shrink-0">
                <div className="p-3 bg-white rounded-lg shadow-sm">
                  {item.icon}
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-brand-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* --- Property Details --- */
export const PropertyDetails: React.FC = () => {
  return (
    <section id="details" className="py-20 bg-brand-900 text-white relative overflow-hidden">
      {/* Decorative background circle */}
      <div className="absolute -right-20 -top-20 w-96 h-96 bg-accent-600/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full lg:w-1/2">
             <img 
               src="https://picsum.photos/seed/interior123/800/600" 
               alt="Nội thất minh họa" 
               className="rounded-2xl shadow-2xl border-4 border-brand-700/50"
             />
          </div>
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-8">
              Thông tin chi tiết căn nhà
            </h2>
            
            <ul className="space-y-6">
              <li className="flex items-start">
                <Maximize className="w-6 h-6 text-accent-500 mr-4 mt-1" />
                <div>
                  <span className="block text-gray-400 text-sm">Diện tích sổ</span>
                  <span className="text-xl font-bold">54m² (Công nhận đủ)</span>
                </div>
              </li>
              <li className="flex items-start">
                <Layout className="w-6 h-6 text-accent-500 mr-4 mt-1" />
                <div>
                  <span className="block text-gray-400 text-sm">Kích thước</span>
                  <span className="text-xl font-bold">Ngang 4m (nở hậu 5.7m) x Dài 12m</span>
                </div>
              </li>
              <li className="flex items-start">
                <MapPin className="w-6 h-6 text-accent-500 mr-4 mt-1" />
                <div>
                  <span className="block text-gray-400 text-sm">Kết cấu</span>
                  <span className="text-xl font-bold">1 Trệt + 1 Lầu đúc kiên cố</span>
                </div>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="w-6 h-6 text-accent-500 mr-4 mt-1" />
                <div>
                  <span className="block text-gray-400 text-sm">Công năng</span>
                  <span className="text-xl font-bold">3 Phòng ngủ – 2 WC – Phòng khách – Bếp</span>
                </div>
              </li>
               <li className="flex items-start">
                <ShieldCheck className="w-6 h-6 text-accent-500 mr-4 mt-1" />
                <div>
                  <span className="block text-gray-400 text-sm">Pháp lý</span>
                  <span className="text-xl font-bold">Sổ hồng riêng, hướng Tây</span>
                </div>
              </li>
            </ul>

            <div className="mt-10 p-6 bg-brand-800 rounded-xl border border-brand-700 flex items-center justify-between">
              <div>
                <span className="block text-gray-400 text-sm mb-1">Giá bán công khai</span>
                <span className="text-3xl font-extrabold text-white">5.25 Tỷ</span>
                <span className="block text-xs text-gray-400 mt-1">(Còn thương lượng cho khách thiện chí)</span>
              </div>
              <button 
                onClick={() => document.getElementById('register-form')?.scrollIntoView({behavior: 'smooth'})}
                className="bg-accent-600 hover:bg-accent-700 text-white px-6 py-3 rounded-lg font-bold transition"
              >
                XEM NHÀ
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

/* --- Location Section --- */
export const Location: React.FC = () => {
  return (
    <section id="location" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-brand-900">
            Vị trí thuận tiện cho sinh hoạt hằng ngày
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Kết nối nhanh chóng đến các tiện ích trung tâm Gò Vấp, Phú Nhuận và Sân Bay.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center text-red-600 mr-4 shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-lg text-gray-900">Bệnh viện 175</h4>
                <p className="text-gray-600">Cách chỉ 5 phút đi xe, thuận tiện chăm sóc sức khỏe</p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mr-4 shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-lg text-gray-900">Chợ Tân Sơn Nhất</h4>
                <p className="text-gray-600">Gần chợ truyền thống, siêu thị tiện lợi xung quanh</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 mr-4 shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-lg text-gray-900">Sân Bay Tân Sơn Nhất</h4>
                <p className="text-gray-600">Chỉ 10 phút di chuyển qua đường Bạch Đằng - Hồng Hà</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 mr-4 shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-lg text-gray-900">Kết nối giao thông</h4>
                <p className="text-gray-600">Trục Nguyễn Văn Công – Nguyễn Kiệm – Bạch Đằng</p>
              </div>
            </div>
          </div>

          <div className="h-[400px] bg-gray-200 rounded-2xl overflow-hidden relative shadow-inner">
             {/* Map Placeholder */}
             <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-100 text-gray-400">
               <MapPin className="w-16 h-16 mb-4 text-gray-300" />
               <span className="font-semibold">Khu vực bản đồ</span>
               <span className="text-sm">(Đã ẩn vì lý do bảo mật vị trí chính xác)</span>
             </div>
             {/* Simulate map UI */}
             <div className="absolute top-4 right-4 bg-white p-2 rounded shadow">
               <div className="w-8 h-8 bg-gray-100 mb-2 rounded"></div>
               <div className="w-8 h-8 bg-gray-100 rounded"></div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

/* --- How It Works --- */
export const HowItWorks: React.FC = () => {
  const steps = [
    { num: "01", title: "Điền form đăng ký", desc: "Để lại thông tin và thời gian bạn rảnh trong form đăng ký." },
    { num: "02", title: "Nhân viên xác nhận", desc: "Chúng tôi sẽ gọi lại ngay để chốt lịch hẹn chính xác." },
    { num: "03", title: "Xem nhà thực tế", desc: "Đến xem nhà đúng giờ đã hẹn. Tư vấn pháp lý tại chỗ." },
    { num: "04", title: "Làm việc chính chủ", desc: "Thương lượng giá cả và thủ tục trực tiếp với chủ nhà." },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-extrabold text-brand-900 text-center mb-16">
          Quy trình xem nhà đơn giản
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {steps.map((step, idx) => (
            <div key={idx} className="relative group">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-brand-900 text-white flex items-center justify-center text-2xl font-bold mb-6 group-hover:bg-accent-600 transition duration-300 shadow-lg relative z-10">
                  {step.num}
                </div>
                {idx !== steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-1/2 w-full h-1 bg-gray-200 -z-0"></div>
                )}
                <h3 className="text-xl font-bold text-brand-900 mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* --- FAQ Section --- */
export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = React.useState<number | null>(0);

  const faqs = [
    { q: "Nhà có vay ngân hàng được không?", a: "Được. Nhà có sổ hồng riêng, pháp lý chuẩn, ngân hàng định giá cao và hỗ trợ vay tới 70% giá trị." },
    { q: "Giá còn thương lượng không?", a: "Giá 5.25 tỷ là giá mong muốn của chủ nhà. Tuy nhiên, nếu khách thiện chí mua nhanh, chủ nhà sẵn sàng thương lượng thêm." },
    { q: "Nhà hiện đang ở hay trống?", a: "Hiện tại nhà đang có khách thuê 7 triệu/tháng. Khi xem nhà vui lòng hẹn trước để chúng tôi báo khách thuê mở cửa." },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-3xl font-extrabold text-brand-900 text-center mb-12">
          Câu hỏi thường gặp
        </h2>
        
        <div className="space-y-4">
          {faqs.map((item, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
              <button 
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
              >
                <span className="font-bold text-brand-900 text-lg">{item.q}</span>
                {openIndex === idx ? (
                  <ChevronUp className="w-5 h-5 text-accent-600" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-400" />
                )}
              </button>
              {openIndex === idx && (
                <div className="px-6 pb-6 text-gray-600 leading-relaxed border-t border-gray-50 pt-4">
                  {item.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* --- Final CTA --- */
export const FinalCTA: React.FC = () => {
  return (
    <section className="py-20 bg-brand-900 text-center text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-accent-600/10"></div>
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl md:text-5xl font-extrabold mb-6">
          Bạn đang tìm nhà ở Gò Vấp, pháp lý rõ ràng – giá hợp lý?
        </h2>
        <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
          Đừng bỏ lỡ cơ hội sở hữu căn nhà vị trí đẹp, giá tốt nhất khu vực thời điểm này.
        </p>
        <button 
          onClick={() => document.getElementById('register-form')?.scrollIntoView({behavior: 'smooth'})}
          className="bg-accent-600 hover:bg-accent-700 text-white font-bold py-4 px-10 rounded-full shadow-2xl hover:shadow-orange-500/40 transition transform hover:-translate-y-1 text-lg"
        >
          ĐẶT LỊCH XEM NHÀ NGAY
        </button>
      </div>
    </section>
  );
};

/* --- Footer --- */
export const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-950 text-white pt-16 pb-8 border-t border-brand-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div className="mb-8 md:mb-0 text-center md:text-left">
            <h3 className="text-2xl font-extrabold uppercase tracking-wide mb-2">Nhà Phố Gò Vấp</h3>
            <p className="text-gray-400">Nguồn chuẩn pháp lý - An tâm giao dịch</p>
          </div>
          
          <div className="text-center md:text-right">
             <a href="tel:0974801129" className="inline-flex items-center space-x-2 text-2xl font-bold text-accent-500 hover:text-accent-400 mb-2">
               <Phone className="w-6 h-6" />
               <span>0974 801 129</span>
             </a>
             <p className="text-lg font-medium">Thành Nam</p>
             <p className="text-gray-400 text-sm">Chuyên nhà thổ cư Gò Vấp</p>
          </div>
        </div>
        
        <div className="border-t border-brand-800 pt-8 text-center text-gray-500 text-sm">
          <p className="mb-2">© 2024 Nha Pho Go Vap. All rights reserved.</p>
          <p>Thông tin trên website là chính xác và trung thực.</p>
        </div>
      </div>
    </footer>
  );
};