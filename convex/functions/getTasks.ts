import { query } from "../_generated/server";

export const getAllTasks = query(async ({ db }) => {
  return await db.query("tasks").collect();
});
