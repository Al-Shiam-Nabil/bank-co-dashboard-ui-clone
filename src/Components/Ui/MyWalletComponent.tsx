import { ChevronDown, DollarSign, Ellipsis } from "lucide-react";
import VisaCardBlack from "../../Icons/visaCardBlack.svg";
import VisaCardGreen from "../../Icons/visaCardGreen.svg";
import VisaCardRed from "../../Icons/visaCardRed.svg";
import User1 from "../../assets/customer1.png";
import User2 from "../../assets/customer2.png";

import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "swiper/css/navigation";
import { DabitCardIcon } from "../../Icons";
import GenarelDropdownComponent from "./GenarelDropdownComponent";

export default function MyWalletComponent() {
  const dropdownInfo = [
    {
      data: "Jan 10 - Jan 16",
    },
    {
      data: "Jan 10 - Jan 16",
    },
    {
      data: "Jan 10 - Jan 16",
    },
  ];
  return (
    <div className="bg-white dark:bg-[#1D1E24] dark:text-white py-5 px-8 rounded-lg">
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
        <h3 className="text-lg font-bold my-6">Quick Transfer</h3>

        {/* <div className="text-sm flex justify-between items-center h-14 px-5 border border-dark3 rounded-lg cursor-pointer">
          <div className="flex items-center gap-2">
            <DabitCardIcon /> Debit
          </div>

          <div className="flex items-center gap-2 font-bold">
            $10.43 <ChevronDown size={16} stroke="#A0AEC0" />
          </div>
        </div> */}

        <GenarelDropdownComponent dropdownInfo={dropdownInfo}>
          <div className="text-sm flex justify-between items-center h-14 px-5 border border-dark3 dark:border-gray-700 rounded-lg cursor-pointer">
            <div className="flex items-center gap-2">
              <DabitCardIcon /> Debit
            </div>

            <div className="flex items-center gap-2 font-bold">
              $10.43 <ChevronDown size={16} stroke="#A0AEC0" />
            </div>
          </div>
        </GenarelDropdownComponent>

        <div className="space-y-2 border border-dark3 dark:border-gray-700 rounded-lg p-5  mt-4">
          <p>Enter amount</p>
          <div className="flex items-center justify-between ">
            <h3 className="flex items-center text-2xl font-bold">
              <DollarSign strokeWidth={3} />
              <input type="text" className=" w-full pr-3 outline-none " />
            </h3>

            <div className=" flex items-center">
              <img src={User1} alt="user" className="w-6 h-6 object-contain" />
              <img
                src={User2}
                alt="user"
                className="w-6 h-6 object-contain relative -left-2"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
