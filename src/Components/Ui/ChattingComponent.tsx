import { format } from "date-fns";
import { Mic, Paperclip, Plus, Send } from "lucide-react";
import { useState } from "react";
import User1 from "../../assets/customer1.png";
import User3 from "../../assets/customer3.png";

export default function ChattingComponent() {
  const [message, setMessage] = useState<string>("");
  const [messageList, setMessageList] = useState<messageInfoType[]>([]);

  type messageInfoType = {
    id: number;
    type: string;
    message: string;
    avatar: string;
    time: Date;
  };

  let messageArr: messageInfoType[] = [];

  const handleSubmit = (e) => {
    e.preventDefault();

    if (message.length === 0) {
      return;
    }

    let sendingMessage: messageInfoType = {
      id: parseInt(Math.random() * 100),
      type: "sender",
      message,
      avatar: User1,
      time: new Date(),
    };

    messageArr.push(sendingMessage);
    setMessageList((prev) => [...prev, sendingMessage]);
    setMessage("");
  };

  return (
    <div className="bg-white dark:bg-[#1D1E24] dark:text-white  rounded-lg mt-8">
      <div className="flex items-center justify-between p-6 border-b border-dark3 dark:border-gray-700">
        <h3 className="text-2xl font-semibold">Team chat</h3>
        <div className="flex items-center gap-1">
          <div className="flex items-center">
            <img src={User1} alt="user" className="w-8 h-8 object-contain" />
            <img
              src={User3}
              alt="user"
              className="w-8 h-8 object-contain relative -left-3"
            />
          </div>
          <div className="w-9 h-9 bg-dark5  grid place-items-center rounded-full">
            <Plus stroke="#718096" />
          </div>
        </div>
      </div>

      {/* messaging */}
      <div className="h-112 m-8 relative">
        <div className=" h-85 overflow-y-auto noScrollBar">
          {messageList.length === 0 ? (
            <p className="absolute bottom-35 text-dark2 text-center">
              You can message with us.Please message us.Our team will response
              shortly.
            </p>
          ) : (
            <>
              {" "}
              {messageList.map((data, index) => (
                <div key={index} className="space-y-5">
                  {data?.type === "receiver" && (
                    <div className="flex   items-end gap-3 ">
                      <div className="flex items-center gap-3">
                        <img
                          src={User1}
                          alt="user"
                          className="w-9 h-9 object-contain"
                        />
                        <p className="text-sm bg-dark5 dark:bg-[#23262B] rounded-lg max-w-57 font-medium p-3">
                          {data?.message}
                        </p>
                      </div>
                      <p className="text-sm text-dark2">10:30 PM</p>
                    </div>
                  )}

                  {/* sender */}
                  {data?.type === "sender" && (
                    <div className="flex flex-row-reverse  items-end gap-3 my-5">
                      <div className="flex flex-row-reverse items-center gap-3">
                        <img
                          src={User1}
                          alt="user"
                          className="w-9 h-9 object-contain"
                        />
                        <p className="text-sm bg-dark5 dark:bg-[#23262B] rounded-lg max-w-57 font-medium p-3">
                          {data?.message}
                        </p>
                      </div>
                      <p className="text-sm text-dark2">
                        {format(new Date(data?.time), "p")}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </>
          )}
        </div>

        {/* input field */}

        <form
          onSubmit={handleSubmit}
          className="flex items-center gap-5  h-14.5 absolute bottom-8 w-full"
        >
          <div className="h-full flex-1 relative">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className=" w-full h-full rounded-lg bg-dark5 dark:bg-[#23262B] border-none focus:outline focus:outline-primary px-12"
            />

            <div className="absolute top-5 left-5 ">
              <Paperclip size={18} stroke="#CBD5E0" />
            </div>
            <div className="absolute top-5 right-5">
              <Mic stroke="#CBD5E0" />
            </div>
          </div>
          <button type="submit">
            <Send
              fill="#22C55E"
              stroke="#22C55E"
              className="shrink-0 cursor-pointer"
            />
          </button>
        </form>
      </div>
    </div>
  );
}
