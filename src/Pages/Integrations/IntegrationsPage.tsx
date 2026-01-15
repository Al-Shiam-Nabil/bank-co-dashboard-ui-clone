import {
  Mailchimp,
  MicrosoftExcel,
  Slack,
  StackOverflowIcon,
  Trelo,
  Zoom,
} from "../../Icons";

export default function IntegrationsPage() {
  const integrationArr = [
    {
      title: "Stack Overflow",
      category: "Social",
      description:
        "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum.",
      status: "connect",
      icon: StackOverflowIcon,
    },
    {
      title: "Microsoft Excel",
      category: "Analitycs",
      description:
        "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum.",
      status: "disconnect",
      icon: MicrosoftExcel,
    },
    {
      title: "Trello",
      category: "Management",
      description:
        "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum.",
      status: "disconnect",
      icon: Trelo,
    },
    {
      title: "Mail Chimp",
      category: "Business",
      description:
        "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum.",
      status: "disconnect",
      icon: Mailchimp,
    },
    {
      title: "Slack",
      category: "Social",
      description:
        "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum.",
      status: "connect",
      icon: Slack,
    },
    {
      title: "Zoom",
      category: "Management",
      description:
        "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum.",
      status: "connect",
      icon: Zoom,
    },
    {
      title: "Drop Box",
      category: "Business",
      description:
        "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum.",
      status: "connect",
      icon: StackOverflowIcon,
    },
    {
      title: "Wordpress",
      category: "Business",
      description:
        "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum.",
      status: "connect",
      icon: StackOverflowIcon,
    },
    {
      title: "Facebook",
      category: "Social",
      description:
        "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum.",
      status: "connect",
      icon: StackOverflowIcon,
    },
    {
      title: "Twitter",
      category: "Social",
      description:
        "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum.",
      status: "connect",
      icon: StackOverflowIcon,
    },
    {
      title: "YouTube",
      category: "Entertainment",
      description:
        "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum.",
      status: "connect",
      icon: StackOverflowIcon,
    },
    {
      title: "TikTok",
      category: "Business",
      description:
        "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum.",
      status: "connect",
      icon: StackOverflowIcon,
    },
  ];

  return (
    <div className="m-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6">
        {integrationArr.map((data, index) => (
          <div
            key={index}
            className="bg-white dark:bg-[#1D1E24] dark:text-white p-6 rounded-lg"
          >
            <div className="flex items-center gap-5">
              <data.icon />
              <div>
                <h3 className="text-2xl font-bold">{data?.title}</h3>
                <p className="text-dark2 dark:text-white">{data?.category}</p>
              </div>
            </div>

            <p className="text-dark2 dark:text-white text-lg my-7">
              {data?.description}
            </p>

            <button
              className={`h-12 rounded-lg w-full ${
                data?.status === "connect"
                  ? "border-primary text-primary hover:bg-primary hover:text-white "
                  : "border-dark2 text-dark2 hover:bg-dark2 hover:text-white"
              } border  capitalize font-medium cursor-pointer transition-all duration-300 ease-in-out`}
            >
              {data?.status}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
