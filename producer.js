const { Queue } = require("bullmq");

const notificationQueue = new Queue("email-queue");

async function init() {
  const result = await notificationQueue.add("email to Kshitiz", {
    email: "kshitizsharma.00@gmail.com",
    subject: "learning sandh MQ",
    body: "I am growing daily learning what I should have way before",
  });

  console.log("job added to queue: " + result.id);
}

init();
