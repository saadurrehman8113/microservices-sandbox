const axios = require("axios");
const { handleEvent } = require("../events/handlers");

module.exports = async () => {
  const res = await axios.get("http://event-bus:3000/events");

  for (let event of res.data) {
    await handleEvent(event);
  }

  console.log("Event replay completed.");
};
