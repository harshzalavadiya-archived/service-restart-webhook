import shell from "shelljs";

import { sendNotification } from "./google-chat";

export const restartServices = () => {
  process.env.APP_SERVICES.split(",").map((service) => {
    shell.exec(`sudo service ${service} stop`);
    shell.exec(`sudo service ${service} start`);
    sendNotification(`${service} service restarted`);
  });
};
