import shell from "shelljs";

export const restartServices = () => {
  process.env.APP_SERVICES.split(",").map((service) => {
    shell.exec(`sudo service ${service} stop`);
    shell.exec(`sudo service ${service} start`);
  });
};
