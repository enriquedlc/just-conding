import fs from "node:fs/promises";

export const jsonToObjectPromise = (jsonFilePath: string) => {
    return fs
        .readFile(jsonFilePath, "utf-8")
        .then((jsonString) => JSON.parse(jsonString));
};
