import { jsonToObjectPromise } from "./promises/jsonToObjectPromise";
import { objectToCSVPromise } from "./promises/objectToCSVPromise";

function main() {
    jsonToObjectPromise("./src/data/products.json").then((products) => {
        objectToCSVPromise(
            products,
            ["article", "category", "price", "stock"],
            "./src/exports/products.csv",
        );
    });
}

main();
