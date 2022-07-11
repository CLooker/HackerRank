import java.util.List;
import java.util.stream.Collectors;

public class CatsAndAMouse {

  public static void main(String[] args) {
    BufferedReader reader = new BufferedReader(new InputStreamReader(System.in));
    List<String> lines = reader.lines().collect(Collectors.toList());
    
    lines
      .stream()
      .skip(1)
      .forEach(line -> {
        String[] items = line.split(" ");
        int x = Integer.parseInt(items[0]);
        int y = Integer.parseInt(items[1]);
        int z = Integer.parseInt(items[2]);

        double mouseADistance = Math.abs((double) z - (double) x);
        double mouseBDistance = Math.abs((double) z - (double) y);

        if (mouseADistance < mouseBDistance) {
          System.out.println("Cat A");
        } else if (mouseBDistance < mouseADistance) {
          System.out.println("Cat B");
        } else {
          System.out.println("Mouse C");
        }
      });
  }

}
