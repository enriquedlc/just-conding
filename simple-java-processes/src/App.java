import java.io.BufferedWriter;
import java.io.File;
import java.io.FileWriter;
import java.io.IOException;

public class App {
    public static void main(String[] args) throws Exception {

        String filePath = "C:\\Users\\Enrique\\Desktop\\Proyectos\\just-coding\\simple-java-processes\\src\\files\\out.txt";

        String contentToWrite = "Hello World!";

        try {
            File file = new File(filePath);

            if (!file.exists())
                file.createNewFile();

            FileWriter fileWriter = new FileWriter(file);
            BufferedWriter bufferedWriter = new BufferedWriter(fileWriter);

            bufferedWriter.write(contentToWrite);
            bufferedWriter.newLine();
            bufferedWriter.close();

        } catch (IOException e) {
            System.out.println(e.getMessage());
        }
    }
}
