const express = require("express");
const axios = require("axios");

const app = express();
app.use(express.json());

const events = [];

// receive events
app.post("/events", async (req, res) => {
  const event = req.body;
  events.push(event);

  // broadcast event to all services
  await axios
    .post("http://identity-service:3001/events", event)
    .catch(() => {});
  await axios.post("http://catalog-service:3002/events", event).catch(() => {});
  await axios.post("http://order-service:3003/events", event).catch(() => {});

  res.send({ status: "OK" });
});

app.get("/events", (req, res) => {
  res.send(events);
});

app.listen(3005, () => {
  console.log("Event Bus running on 3005");
});
