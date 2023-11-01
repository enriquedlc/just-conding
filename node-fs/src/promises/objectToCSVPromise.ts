import fs from "node:fs/promises";

export const objectToCSVPromise = (
    data: any[],
    fields: string[],
    fileName: string,
    filter?: (data: any) => boolean,
) => {
    const csvData = filter ? data.filter(filter) : data;

    const parsedCsvFields = fields.join(",");
    const parsedCsvData = csvData.map((row) =>
        fields.map((field) => row[field]).join(","),
    );

    return fs.writeFile(
        fileName,
        `${parsedCsvFields}\n${parsedCsvData.join("\n")}`,
    );
};
