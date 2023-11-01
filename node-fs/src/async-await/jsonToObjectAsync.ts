import fs from "node:fs/promises";

export const jsonToObjectAsync = async (jsonFilePath: string) => {
    try {
        const jsonString = await fs.readFile(jsonFilePath, "utf-8");
        return JSON.parse(jsonString);
    } catch (error) {
        console.log(error);
    }
};
