import { Plus } from "lucide-react";

export default function FAQ() {
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
            <div className="flex items-center gap-4 py-6 border-b border-dark3 cursor-pointer">
              <Plus stroke="#22C55E" strokeWidth={2.5} />
              <h3 className="text-lg">{data?.title}</h3>
            </div>

            <div className=" text-[#9aa2b1] p-5">
              <p>{data?.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
