import { jsonToObjectAsync } from "./async-await/jsonToObjectAsync";

async function main() {
    const products = await jsonToObjectAsync("./src/data/products.json");
    console.log(products);
}

main();
