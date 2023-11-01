import { jsonToObjectAsync } from "./async-await/jsonToObjectAsync";
import { objectToCSVAsync } from "./async-await/objectToCSVAsync";

async function main() {
    const products = await jsonToObjectAsync("./src/data/products.json");
    await objectToCSVAsync(products, ["article"], "./src/exports/products.csv");
}

main();
