import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;

public class App {
    public static void main(String[] args) throws Exception {

        String filePath = "C:\\Users\\Enrique\\Desktop\\Proyectos\\just-coding\\simple-java-processes\\src\\files\\out.txt";

        String contentToWrite = "to the out.txt file";

        try {
            File file = new File(filePath);

            if (!file.exists())
                file.createNewFile();

            FileOutputStream fos = new FileOutputStream(file);

            byte[] contentInBytes = contentToWrite.getBytes();

            fos.write(contentInBytes);
            fos.flush();
            fos.close();

        } catch (IOException e) {
            System.out.println(e.getMessage());
        }
    }
}
