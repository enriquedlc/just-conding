import { jsonToObjectCallback } from "./callbacks/jsonToObjectCallBack";

jsonToObjectCallback("./src/data/products.json", (err, obteinedUsers) => {
	if (err) {
		console.log(err);
	} else {
		console.log(obteinedUsers);
	}
});
