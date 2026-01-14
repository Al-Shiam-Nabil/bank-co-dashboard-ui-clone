import { ChevronDown, DollarSign, Ellipsis, FolderPlus } from "lucide-react";
import { PayPal } from "../../Icons";
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
import GenarelDropdownComponent from "../Ui/GenarelDropdownComponent";

export default function PaymentMethod() {
  const paymentMethodsArr = [
    {
      title: "Credit or Debit Card",
      description:
        "Offers payment processing software for e-commerce websites and mobile applications.",
      avatar: PayPal,
    },
    {
      title: "PayPal",
      description:
        "Offers payment processing software for e-commerce websites and mobile applications.",
      avatar: PayPal,
    },
    {
      title: "American Express",
      description:
        "Offers payment processing software for e-commerce websites and mobile applications.",
      avatar: PayPal,
    },
    {
      title: "Amazon",
      description:
        "Offers payment processing software for e-commerce websites and mobile applications.",
      avatar: PayPal,
    },
    {
      title: "Payoner",
      description:
        "Offers payment processing software for e-commerce websites and mobile applications.",
      avatar: PayPal,
    },
  ];

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
    <div>
      <h3 className="text-2xl font-bold">Payment and Billing</h3>

      <div className="grid grid-cols-3 gap-10 mt-8 border-b border-dark3 pb-12">
        {paymentMethodsArr.map((payment, index) => (
          <div key={index} className="bg-[#F3F4F6] rounded-lg p-6 space-y-3">
            <div className="flex items-center justify-between mb-4">
              <div>
                <payment.avatar />
              </div>
              <Ellipsis stroke="gray" />
            </div>

            <h3 className="font-bold">{payment?.title}</h3>
            <p className="text-sm">{payment?.description}</p>
          </div>
        ))}
        <div className=" border-2 rounded-lg border-dashed border-[#a0aec0] grid place-items-center cursor-pointer">
          <div className="grid place-items-center">
            {" "}
            <FolderPlus size={50} stroke="#a0aec0" />
            <h3 className="text-lg font-medium text-dark2">Add Wallet</h3>
          </div>
        </div>
      </div>

      <div className="bg-white  dark:bg-[#1D1E24] dark:text-white px-8 rounded-lg grid grid-cols-2 gap-10 my-10">
        <div className="col-span-1 px-20 border-r-4 border-dark3 ">
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
            className="mySwiper h-70 visaCardPagination"
          >
            <SwiperSlide className="w-100 h-60">
              <img
                src={VisaCardBlack}
                alt="visa card"
                className="w-full h-full"
              />
            </SwiperSlide>
            <SwiperSlide className="w-100">
              <img
                src={VisaCardGreen}
                alt="visa card"
                className="w-full h-full"
              />
            </SwiperSlide>
            <SwiperSlide className="w-100">
              <img
                src={VisaCardRed}
                alt="visa card"
                className="w-full h-full"
              />
            </SwiperSlide>
          </Swiper>
        </div>

        {/* quick transfer */}
        <div className="col-span-1 px-15">
          <h3 className="text-lg font-bold my-6">Quick Transfer</h3>

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
                <img
                  src={User1}
                  alt="user"
                  className="w-6 h-6 object-contain"
                />
                <img
                  src={User2}
                  alt="user"
                  className="w-6 h-6 object-contain relative -left-2"
                />
              </div>
            </div>
          </div>

          <button className="bg-primary  font-semibold rounded-lg text-white w-full p-4 mt-7 cursor-pointer">
            Confirmed
          </button>
        </div>
      </div>
    </div>
  );
}
