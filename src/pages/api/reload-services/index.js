import { restartServices } from "../../../utils/restart-services";
import { sendNotification } from "../../../utils/google-chat";

export default (req, res) => {
  if (
    req.body.authorization === process.env.AUTH_KEY &&
    req.query.alertTypeFriendlyName === "Down"
  ) {
    restartServices();
    sendNotification();
    res.status(200).json({ success: true });
  } else {
    res.status(401).json({ success: false });
  }
};
