import fs from "node:fs";

export const objectToCSVCallback = (
    data: any[],
    fields: string[],
    fileName: string,
    filter?: (data: any) => boolean,
): void => {
    const csvData = filter ? data.filter(filter) : data;

    const parsedCsvFields = fields.join(",");
    const parsedCsvData = csvData.map((row) =>
        fields.map((field) => row[field]).join(","),
    );

    fs.writeFile(
        fileName,
        `${parsedCsvFields}\n${parsedCsvData.join("\n")}`,
        (error: NodeJS.ErrnoException | null) => {
            if (error) {
                console.error(error);
            }
        },
    );
};
