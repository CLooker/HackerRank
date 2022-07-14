import java.util.List;

public class TheHurdleRace {

  public static int hurdleRace(int jumpMax, List<Integer> heights) {
    int heightMax = (int) heights
      .stream()
      .max(Integer::compare)
      .orElseThrow();

    return Math.max(
      0, 
      heightMax - jumpMax
    );
  }

}
