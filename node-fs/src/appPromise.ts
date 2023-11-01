import { jsonToObjectPromise } from "./promises/jsonToObjectPromise";

jsonToObjectPromise("./src/data/products.json").then((products) => {
    console.log(products);
});
