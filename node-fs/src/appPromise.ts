import { jsonToObjectPromise } from "./promises/jsonToObjectPromise";
import { objectToCSVPromise } from "./promises/objectToCSVPromise";

jsonToObjectPromise("./src/data/products.json").then((products) => {
    objectToCSVPromise(
        products,
        ["article", "category", "price", "stock"],
        "./src/exports/products.csv",
    );
});
