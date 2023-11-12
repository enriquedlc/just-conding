function miniCompiler(program: string): string {
  let numericValue: number = 0;
  let result: string = "";

  for (let operation of program) {
    switch (operation) {
      case "#":
        numericValue += 1;
        break;
      case "@":
        numericValue -= 1;
        break;
      case "*":
        numericValue *= numericValue;
        break;
      case "&":
        result += numericValue.toString();
        break;
    }
  }

  return result;
}

const input: string =
  "&###@&*&###@@##@##&######@@#####@#@#@#@##@@@@@@@@@@@@@@@*&&@@@@@@@@@####@@@@@@@@@#########&#&##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@&";

console.log(miniCompiler(input));
