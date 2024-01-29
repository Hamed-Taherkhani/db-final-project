import { sequelize } from "@/scripts/dbConnect";

const query = async (query) => {
  try {
    const [result, metadata] = await sequelize.query(query);
    return result;
  } catch (err) {
    console.error(`❌ Couldn't query "${query}" statement`);
  }
};

export { query };
