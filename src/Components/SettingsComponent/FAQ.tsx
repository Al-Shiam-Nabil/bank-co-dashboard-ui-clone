import { Minus, Plus } from "lucide-react";
import { useState } from "react";

export default function FAQ() {
  const [showCollapse, setShowCollapse] = useState<number | null>(1);
  const FAQArray = [
    {
      title: "What is the most important part of a dashboard?",
      description:
        "In reality, the most important aspect of a great dashboard is the part that gets the least amount of attention: The underlying data. More than any other aspect, the data will make or break a dashboard.Within this definition, successful administration appears to rest on three basic skills, which we will call technical, human, and conceptual.Dashboards are business intelligence.",
    },
    {
      title: "What are the three types of dashboard?",
      description:
        "In reality, the most important aspect of a great dashboard is the part that gets the least amount of attention: The underlying data. More than any other aspect, the data will make or break a dashboard.Within this definition, successful administration appears to rest on three basic skills, which we will call technical, human, and conceptual.Dashboards are business intelligence.",
    },
    {
      title: "What are examples of admin?",
      description:
        "In reality, the most important aspect of a great dashboard is the part that gets the least amount of attention: The underlying data. More than any other aspect, the data will make or break a dashboard.Within this definition, successful administration appears to rest on three basic skills, which we will call technical, human, and conceptual.Dashboards are business intelligence.",
    },
    {
      title: "What are 5 benefits of dashboards?",
      description:
        "In reality, the most important aspect of a great dashboard is the part that gets the least amount of attention: The underlying data. More than any other aspect, the data will make or break a dashboard.Within this definition, successful administration appears to rest on three basic skills, which we will call technical, human, and conceptual.Dashboards are business intelligence.",
    },
    {
      title: "What makes a good dashboard?",
      description:
        "In reality, the most important aspect of a great dashboard is the part that gets the least amount of attention: The underlying data. More than any other aspect, the data will make or break a dashboard.Within this definition, successful administration appears to rest on three basic skills, which we will call technical, human, and conceptual.Dashboards are business intelligence.",
    },
    {
      title: "What are the 3 basic skills of administrator?",
      description:
        "In reality, the most important aspect of a great dashboard is the part that gets the least amount of attention: The underlying data. More than any other aspect, the data will make or break a dashboard.Within this definition, successful administration appears to rest on three basic skills, which we will call technical, human, and conceptual.Dashboards are business intelligence.",
    },
  ];

  return (
    <div>
      <h3 className="text-2xl font-bold">FAQ</h3>

      <div>
        {FAQArray.map((data, index) => (
          <div key={index}>
            <div
              onClick={() =>
                setShowCollapse((prev) => (prev === index ? null : index))
              }
              className="flex items-center gap-4 py-6 border-b select-none border-dark3 dark:border-gray-700 cursor-pointer"
            >
              {showCollapse === index ? (
                <Minus stroke="#22C55E" strokeWidth={2.5} />
              ) : (
                <Plus stroke="#22C55E" strokeWidth={2.5} />
              )}

              <h3 className="text-lg">{data?.title}</h3>
            </div>

            {showCollapse === index && (
              <div className=" text-[#9aa2b1] m-5 pl-5 border-l-4  border-primary ">
                <p>{data?.description}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
