fn mini_compiler(program: &str) -> String {
    let mut value = 0;
    let mut output = String::new();

    for symbol in program.chars() {
        match symbol {
            '#' => value += 1,
            '@' => value -= 1,
            '*' => value *= value,
            '&' => output.push_str(&value.to_string()),
            _ => (),
        }
    }

    output
}

fn main() {
    let input = "&###@&*&###@@##@##&######@@#####@#@#@#@##@@@@@@@@@@@@@@@*&&@@@@@@@@@####@@@@@@@@@#########&#&##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@&";
    let output = mini_compiler(input);
    println!("submit {}", output);
}
