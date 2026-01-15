import { writeFileSync } from "node:fs";

function saveToDatabase(DB) {
  writeFileSync("./src/database/db.json", JSON.stringify(DB, null, 2), {
    encoding: "utf-8",
  });
}

export { saveToDatabase };
