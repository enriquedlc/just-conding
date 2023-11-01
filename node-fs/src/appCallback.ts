import { jsonToObjectCallback } from "./callbacks/jsonToObjectCallBack";
import { objectToCSVCallback } from "./callbacks/objectToCSVCallback";

function main() {
    jsonToObjectCallback("./src/data/products.json", (err, obteinedUsers) => {
        if (err) {
            console.log(err);
        } else {
            objectToCSVCallback(
                obteinedUsers as unknown as any[],
                ["article", "name", "price"],
                "./src/exports/products.csv",
                (data) => data.price > 7,
            );
        }
    });
}

main();
