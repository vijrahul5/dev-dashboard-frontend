import React from "react";
import useAuthorize from "../JIRA_Authorize/useAuthorize";
import Auth from "../JIRA_Authorize/JiraAuth";
import "react-notifications/lib/notifications.css";
import { NotificationContainer } from "react-notifications";
import Notification from "../Notify/Notification";
import Widgetjira from "../WidgetJira";

const JiraDashboard = () => {
  const { doneAuthentication } = useAuthorize();

  return (
    <>
      {doneAuthentication === false ? <Auth /> : <Widgetjira />}
      <NotificationContainer />
      <Notification />
    </>
  );
};

export default JiraDashboard;
