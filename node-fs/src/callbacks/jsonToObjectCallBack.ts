import fs from "node:fs";

export const jsonToObjectCallback = (
	jsonPath: string,
	callback: (error: Error | null, data: JSON | null) => void,
) => {
	fs.readFile(
		jsonPath,
		{ encoding: "utf-8" },
		(error: NodeJS.ErrnoException | null, data: string) => {
			if (error) {
				console.error(error);
				callback(error, null);
			} else {
				try {
					const parsedData = JSON.parse(data);
					callback(null, parsedData);
				} catch (parseError) {
					console.error(parseError);
					callback(parseError as Error, null);
				}
			}
		},
	);
};
