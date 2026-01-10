import { Ellipsis } from "lucide-react";
import VisaCardBlack from "../../Icons/visaCardBlack.svg";
import VisaCardGreen from "../../Icons/visaCardGreen.svg";
import VisaCardRed from "../../Icons/visaCardRed.svg";

import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "swiper/css/navigation";

export default function MyWalletComponent() {
  return (
    <div className="bg-white py-5 px-8 rounded-lg">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-bold">My Wallet</h3>{" "}
        <Ellipsis stroke="#A0AEC0" />
      </div>

      {/* swiper */}

      <Swiper
        loop={true}
        slidesPerView={1}
        centeredSlides={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination]}
        className="mySwiper h-63 visaCardPagination"
      >
        <SwiperSlide className="w-full">
          <img src={VisaCardBlack} alt="visa card" className="w-full" />
        </SwiperSlide>
        <SwiperSlide className="w-full">
          <img src={VisaCardGreen} alt="visa card" className="w-full" />
        </SwiperSlide>
        <SwiperSlide className="w-full">
          <img src={VisaCardRed} alt="visa card" className="w-full" />
        </SwiperSlide>
      </Swiper>

      {/* quick transfer */}
      <div>
        <h3 className="text-lg font-bold my-4">Quick Transfer</h3>

        <div></div>
      </div>
    </div>
  );
}
