import React, { useEffect } from "react";
import Pusher from "pusher-js";
import { NotificationManager } from "react-notifications";
const channelid = "";
const cid = "997";

const pusher = new Pusher(channelid, {
  cluster: "ap2",
});

const Notification = () => {
  useEffect(() => {
    const channel = pusher.subscribe("my-channel");
    channel.bind(cid, function (data) {
      console.log("notification");
      NotificationManager.success(
        `${data.details.type}`,
        `${data.details.key} cid : ${data.details.cid}`,
        100000000000
      );
    });
    return () => {
      pusher.unsubscribe("my-channel");
    };
  }, []);

  return <></>;
};

export default Notification;
