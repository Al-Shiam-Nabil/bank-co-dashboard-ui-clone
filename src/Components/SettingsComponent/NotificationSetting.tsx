import {
  FollowerNotification,
  LockNotification,
  SellNotification,
  UploadNotification,
} from "../../Icons";

export default function NotificationSetting() {
  const notificationArr = [
    {
      title: "All Notifcation update off",
      subTitle: "Unlockable content, only revealed by the owner of the item.",
      icon: LockNotification,
      isChecked: true,
    },
    {
      title: "When you upload products",
      subTitle:
        "Evey new products upload seccessfullly doen you can get notifcation",
      icon: UploadNotification,
      isChecked: false,
    },

    {
      title: "You got sell your prodcuts",
      subTitle: "Evey new prodcuts sell you can get notifcation",
      icon: SellNotification,
      isChecked: true,
    },
    {
      title: "Got new follower",
      subTitle: "Evey new follower you can get notifcation",
      icon: FollowerNotification,
      isChecked: false,
    },
  ];

  return (
    <div>
      <h3 className="text-2xl font-bold">Notification</h3>

      <div>
        {notificationArr.map((notification, index) => (
          <div
            key={index}
            className="flex items-center justify-between py-5 border-b border-dark3"
          >
            <div className="flex items-center gap-4 ">
              {" "}
              <notification.icon />
              <div>
                <h3 className="text-lg font-bold">{notification?.title}</h3>
                <p className=" text-[#a0aec0]">{notification?.subTitle}</p>
              </div>
            </div>

            <div>
              <input checked={notification?.isChecked} type="checkbox" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
