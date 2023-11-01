import fs from "node:fs/promises";

export const jsonToObjectAsync = async (jsonFilePath: string) => {
    const jsonString = await fs.readFile(jsonFilePath, "utf-8");
    return JSON.parse(jsonString);
};
