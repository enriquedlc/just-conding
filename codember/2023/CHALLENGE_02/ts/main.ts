function miniCompiler(program: string): string {
  let numericValue: number = 0;
  let result: string = "";

  for (let i = 0; i < program.length; i++) {
    const operation = program[i];
    if (operation === "#") {
      numericValue += 1;
    } else if (operation === "@") {
      numericValue -= 1;
    } else if (operation === "*") {
      numericValue *= numericValue;
    } else if (operation === "&") {
      result += numericValue.toString();
    }
  }

  return result;
}

const input1: string =
  "&###@&*&###@@##@##&######@@#####@#@#@#@##@@@@@@@@@@@@@@@*&&@@@@@@@@@####@@@@@@@@@#########&#&##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@&";
const output1: string = miniCompiler(input1);
console.log(`Input: ${input1}\nExpected Output: ${output1}`);
