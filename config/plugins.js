module.exports = ({ env }) => ({
  email: {
    config: {
      provider: "nodemailer",
      providerOptions: {
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
          user: "Info@eventcage.com",
          pass: env("EMAIL_TOKEN"),
        },
      },
      settings: {
        defaultFrom: "Info@eventcage.com",
        defaultReplyTo: "Info@eventcage.com",
      },
    },
  },
});
