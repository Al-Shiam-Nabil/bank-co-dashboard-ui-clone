import { format } from "date-fns";
import {
  Ellipsis,
  EllipsisVertical,
  Mail,
  Mic,
  Paperclip,
  Search,
  Send,
  SquarePen,
} from "lucide-react";
import { useState } from "react";
import User1 from "../../assets/customer2.png";

export default function Inbox() {
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
    <div className="grid grid-cols-12">
      {/* left */}
      <div className="border border-dark3  col-span-3 h-[calc(100vh-108px)] pt-6 pr-7 pb-10 pl-12 bg-white">
        <div className="flex items-center justify-between">
          <h3 className="text-[28px] font-semibold">Messages (22)</h3>
          <SquarePen stroke="gray" />
        </div>

        {/* search */}
        <div className="relative my-5">
          <input
            type="text"
            className="bg-dark5 w-full py-3.5 rounded-lg pl-12 pr-4 focus:outline focus:outline-primary"
            placeholder="Search message"
          />
          <div className="absolute top-3 left-4">
            <Search stroke="gray" />
          </div>
        </div>

        {/* all message */}
        <div>
          <div className="flex items-center justify-between mb-5">
            <div className="flex items-center gap-3">
              <Mail size={18} stroke="gray" />
              <p className=" font-medium text-dark2">All Message</p>
            </div>

            <div>
              <Ellipsis />
            </div>
          </div>

          <div className="flex items-center justify-between py-4 px-2 hover:rounded-lg border-b border-dark3 cursor-pointer hover:bg-dark5">
            <div className="flex items-cente gap-3">
              <div className="relative w-14 h-14">
                <img src={User1} alt="" className="w-14 h-14 object-contain" />

                <div className="w-3 h-3 rounded-full bg-green-400 border-2 border-white absolute right-0 bottom-1"></div>
              </div>

              <div className="space-y-1">
                <h3 className="text-xl font-bold">Emilia Sam</h3>
                <p className="text-sm text-dark2">Sent message</p>
              </div>
            </div>
            {/* time */}
            <div>
              <p className="text-lg font-semibold text-dark2">6:15</p>
            </div>
          </div>
        </div>
      </div>

      {/* right */}
      <div className="border border-l-0 border-r-0 border-b-0 border-dark3  col-span-9">
        <div className="flex justify-between items-center p-5 bg-white">
          <div className="flex items-center gap-3">
            <div className="relative w-12 h-12">
              <img
                src={User1}
                alt=""
                className="w-full h-full object-contain"
              />

              <div className="w-3 h-3 rounded-full bg-green-400 border-2 border-white absolute right-0 bottom-1"></div>
            </div>

            <div>
              <h3 className="font-bold ">Emilia Sam</h3>
              <p className="text-dark2 text-sm">Online</p>
            </div>
          </div>

          <div>
            {" "}
            <EllipsisVertical stroke="gray" />
          </div>
        </div>

        {/* message */}

        <div className="h-[calc(100vh-300px)] m-8 relative">
          <div className=" h-85 overflow-y-auto noScrollBar">
            {messageList.length === 0 ? (
              <p className="absolute bottom-35 text-dark2 text-center  w-full">
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
                          <p className="text-sm bg-dark5 dark:bg-[#23262B] rounded-lg max-w-125 font-medium p-3">
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
                          <p className="text-sm text-white bg-primary dark:bg-[#23262B] rounded-tl-0 rounded-b-lg rounded-tr-lg max-w-125 font-medium p-3">
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
                className=" w-full h-full rounded-lg bg-white border-dark2 dark:bg-[#23262B]  focus:outline focus:outline-primary px-12"
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
    </div>
  );
}
