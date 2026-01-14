import {
  BellDot,
  CircleQuestionMark,
  CreditCard,
  NotebookText,
  User,
} from "lucide-react";
import { useState } from "react";
import NotificationSetting from "../../Components/SettingsComponent/NotificationSetting";

import FAQ from "../../Components/SettingsComponent/FAQ";
import PaymentMethod from "../../Components/SettingsComponent/PaymentMethod";
import PersonalInformation from "../../Components/SettingsComponent/PersonalInformation";
import ProgramResourses from "../../Components/SettingsComponent/ProgramResourses";

export default function SettingPage() {
  const [showIndex, setShowIndex] = useState<number>(0); //
  const settingsArr = [
    {
      title: "Personal Informations",
      subTitle: "Est arcu pharetra proin pellentesque",
      icon: User,
      component: PersonalInformation,
    },
    {
      title: "Notification Setting",
      subTitle: "Est arcu pharetra proin pellentesque",
      icon: BellDot,
      component: NotificationSetting,
    },
    {
      title: "Program & Resources",
      subTitle: "Est arcu pharetra proin pellentesque",
      icon: NotebookText,
      component: ProgramResourses,
    },
    {
      title: "Payment Method",
      subTitle: "Est arcu pharetra proin pellentesque",
      icon: CreditCard,

      component: PaymentMethod,
    },
    {
      title: "FAQ",
      subTitle: "Est arcu pharetra proin pellentesque",
      icon: CircleQuestionMark,

      component: FAQ,
    },
  ];

  const MyComponent = settingsArr[showIndex].component;
  return (
    <>
      <div className="grid grid-cols-12 bg-white rounded-lg m-12">
        {/* left section */}
        <div className="col-span-3 py-6 px-4 border-r border-dark3">
          {settingsArr.map((setting, index: number) => {
            const isActive = showIndex === index;
            return (
              <div
                key={index}
                onClick={() => setShowIndex(index)}
                className={`flex ${
                  isActive && "bg-[#F7FAFC]"
                } items-center gap-3 p-4 rounded-lg cursor-pointer`}
              >
                <div
                  className={`${
                    isActive
                      ? "bg-primary text-white"
                      : "bg-[#F7FAFC] text-gray-500"
                  }  p-3 rounded-full inline-block`}
                >
                  <setting.icon />
                </div>
                <div className="select-none">
                  <h3 className="font-bold">{setting.title}</h3>
                  <p className="text-sm font-medium text-dark2">
                    {setting.subTitle}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* right section */}
        <div className="col-span-9 py-8 px-10">
          {MyComponent && <MyComponent />}
        </div>
      </div>
    </>
  );
}
