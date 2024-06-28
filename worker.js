const { Worker } = require("bullmq");

async function sendEmail() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(), 800);
  });
}

const worker = new Worker(
  "email-queue",
  async (job) => {
    console.log(`Message received id: ${job.id}`);
    console.log("Processing Message");
    console.log(`Sending email to ${job.data.email}`);
    await sendEmail();
    console.log("Email sent");
  },
  {
    connection: {
      host: "127.0.0.1",
      port: 6379, // Ensure the port is a number, not a string
    },
  }
);

worker.on("failed", (job, err) => {
  console.error(`Job ${job.id} failed with error: ${err.message}`);
});
