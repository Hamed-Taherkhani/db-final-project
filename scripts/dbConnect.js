import { Sequelize } from "sequelize";
import * as tedious from "tedious";

const URI = process.env.MSSQL_URI || "mssql://localhost:1433/Library";

if (!URI)
  throw new Error(
    "Set your sql server connection string as MSSQL_URI environment variable"
  );

const sequelize = new Sequelize({
  dialect: "mssql",
  dialectModule: tedious,
  host: "127.0.0.1",
  username: "sa",
  password: "123456789987654321",
  database: "Library",
  dialectOptions: {
    options: {
      encrypt: true,
    },
  },
});

const dbConnect = async () => {
  try {
    await sequelize.authenticate();
    console.log("✅ successfully connected to SQL Server.");
  } catch (err) {
    console.error("❌ Couldn't connect: ", err);
  }
};
dbConnect();

export { sequelize };
