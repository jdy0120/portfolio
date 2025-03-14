import { configDotenv } from "./shared/configs/dotenv.config";
import { connectPostgres } from "./shared/configs/sequelize.config";
configDotenv();

const runServer = async () => {
  const app = (await import("./shared/configs/express.config"))
    .default;
  // Start Server
  const PORT = process.env.PORT;
  app.listen(PORT, async () => {
    await connectPostgres();
    console.log("Connected to PostgreSQL!");

    console.log(`Server is running on http://localhost:${PORT}`);
  });
};

runServer();
