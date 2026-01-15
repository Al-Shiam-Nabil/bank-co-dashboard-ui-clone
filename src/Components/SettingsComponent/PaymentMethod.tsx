import {
  ChevronDown,
  DollarSign,
  Ellipsis,
  FolderPlus,
  RotateCcw,
  X,
} from "lucide-react";
import { Flag, PayPal } from "../../Icons";
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

import { useRef, useState } from "react";
import "swiper/css/navigation";
import { DabitCardIcon } from "../../Icons";
import GenarelDropdownComponent from "../Ui/GenarelDropdownComponent";

export default function PaymentMethod() {
  const [showModal, setShowModal] = useState<boolean>(false);

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

      <div className="grid grid-cols-3 gap-10 mt-8 border-b border-dark3 dark:border-gray-700 pb-12">
        {paymentMethodsArr.map((payment, index) => (
          <div
            key={index}
            className="bg-[#F3F4F6] dark:bg-[#23262B] rounded-lg p-6 space-y-3"
          >
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
        <div
          onClick={() => setShowModal((prev) => !prev)}
          className="select-none border-2 rounded-lg border-dashed border-[#a0aec0] grid place-items-center cursor-pointer"
        >
          <div className="grid place-items-center">
            {" "}
            <FolderPlus size={50} stroke="#a0aec0" />
            <h3 className="text-lg font-medium text-dark2">Add Wallet</h3>
          </div>
        </div>
      </div>

      <div className="bg-white  dark:bg-[#1D1E24] dark:text-white px-8 rounded-lg grid grid-cols-2 gap-10 my-10">
        <div className="col-span-1 px-20 border-r-4 border-dark3 dark:border-gray-700 ">
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

      <Modal
        showModal={showModal}
        onClose={() => setShowModal((prev) => !prev)}
      />
    </div>
  );
}

type ModalProps = {
  showModal: boolean;
  onClose: () => void;
};

const Modal = ({ showModal, onClose }: ModalProps) => {
  const modalRef = useRef<HTMLDivElement | null>(null);

  const handleModal = (e: React.MouseEvent<HTMLDivElement>) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      onClose();
    }
  };

  if (showModal === false) {
    return;
  }
  return (
    <div
      onClick={handleModal}
      className="fixed z-80 top-0 left-0 right-0 grid place-items-center bg-gray-500/50  min-h-screen"
    >
      <div
        ref={modalRef}
        className=" w-3xl rounded-lg bg-white dark:bg-[#1D1E24] dark:text-white p-6 pb-10"
      >
        <div className="text-right">
          <div className="inline-block">
            <X
              className="cursor-pointer text-dark2"
              onClick={() => onClose()}
            />
          </div>
        </div>

        <h3 className="text-2xl font-bold">Add new card</h3>
        <p className="text-sm text-dark2 font-medium my-2">
          Manage where you collect taxes and duties. Check with a tax expert if
          you're unsure where you have a tax obligation.
        </p>

        <table className="w-full mt-4">
          <thead className="w-full ">
            <tr
              className="text-left border-y border-dark3 dark:border-gray-700 text-dark2 
            "
            >
              <th className="p-4 font-medium text-sm ">Country or region</th>
              <th className="p-4 font-medium text-sm ">Collecting</th>
              <th className="pp-4 font-medium text-sm ">Percentage</th>
            </tr>
          </thead>

          <tbody className="w-full">
            <tr className="border-y border-dark3 dark:border-gray-700">
              <td className="flex items-center text-sm  font-semibold gap-2 p-4  ">
                <Flag />
                United States
              </td>

              <td className="p-4 font-medium text-sm ">One time</td>
              <td className="p-4 font-medium text-sm ">20%</td>
            </tr>

            <tr className="border-y border-dark3 dark:border-gray-700">
              <td className="flex items-center text-sm  font-semibold gap-2 p-4  ">
                <RotateCcw stroke="gray" size={20} />
                Rest of History
              </td>

              <td className="p-4 font-medium text-sm ">-</td>
              <td className="p-4 font-medium text-sm ">- </td>
            </tr>
          </tbody>
        </table>

        <form className="space-y-7 py-7">
          <div className="flex items-center gap-8">
            <div className="flex flex-col gap-2 w-full">
              <label className="font-medium text-dark2">Card Holder Name</label>
              <input
                type="text"
                value="Asik Khan"
                className="h-14 px-4 bg-dark4 dark:bg-[#23262B] dark:text-white rounded-lg w-full shrink-0 focus:outline focus:outline-primary"
              />
            </div>

            <div className="flex flex-col gap-2 w-full">
              <label className="font-medium text-dark2">Card Number</label>
              <input
                type="text"
                value="0123 2545 4545"
                className="h-14 px-4 bg-dark4 dark:bg-[#23262B] dark:text-white rounded-lg  w-full shrink-0 focus:outline focus:outline-primary"
              />
            </div>
          </div>

          <div className="flex items-center gap-8">
            <div className="flex flex-col gap-2 w-full">
              <label className="font-medium text-dark2">Valid Date</label>
              <input
                type="email"
                value="15/01/2026"
                className="h-14 px-4 bg-dark4 dark:bg-[#23262B] dark:text-white rounded-lg w-full shrink-0 focus:outline focus:outline-primary"
              />
            </div>

            <div className="flex flex-col gap-2 w-full">
              <label className="font-medium text-dark2">Card Type</label>
              <input
                type="text"
                value="Visa Card"
                className="h-14 px-4 bg-dark4 dark:bg-[#23262B] dark:text-white rounded-lg  w-full shrink-0 focus:outline focus:outline-primary"
              />
            </div>
          </div>

          <div className="flex justify-center mt-10">
            <button
              onClick={() => onClose()}
              type="submit"
              className="py-4 px-20 bg-primary text-white font-semibold rounded-lg mt-2 cursor-pointer hover:bg-green-600 transition-all duration-300 ease-in-out"
            >
              Confirmed
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
