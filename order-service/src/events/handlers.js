const Event = require("../models/event.model");
const User = require("../models/user.model");

exports.handleEvent = async (event) => {
  const { id, type, data, version } = event;

  // 1️⃣ Idempotency check
  const exists = await Event.findOne({ eventId: id });
  if (exists) {
    console.log(`Skipping duplicate event ${id}`);
    return;
  }

  // 2️⃣ Persist event first
  await Event.create({
    eventId: id,
    type,
    data,
    version,
  });

  // 3️⃣ Apply business logic
  switch (type) {
    case "USER_CREATED":
      await User.create({
        userId: data.id,
        email: data.email,
        name: data.name,
      });
      break;

    default:
      console.log(`Unhandled event type: ${type}`);
  }
};
