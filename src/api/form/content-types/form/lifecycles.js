module.exports = {
  async afterCreate(event) {
    const { result } = event;

    const documentId = result?.documentId;
    const adminPath = `/admin/content-manager/collection-types/api::form.form/${documentId}`;
    const baseURL = process.env.URL || "http://localhost:1337";
    const fullURL = `${baseURL}${adminPath}`;
    const emailOptions = {
      to: "sales@eventcage.com",
      subject: `dev-mode --> New entity in Form table `,
      text: `New entity in ->  ${fullURL}`,
    };
    try {
      await strapi.plugin("email").service("email").send(emailOptions);
      strapi.log.info(`Retrieve email sent to '' for location ID `);
    } catch (error) {
      strapi.log.error(`Failed to send retrieve email: ${error.message}`);
    }
  },
};
