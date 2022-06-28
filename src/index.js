import app from "./app.js";
import { sequelize } from "../databases/database.js";
import '../models/routetest.js';

async function main() {
  await sequelize.sync({force: true});
  app.listen(4000);
  console.log("Server on port 4000");
}

main();