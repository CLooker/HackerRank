import java.util.List;

public class AppleAndOrange {

  public static void countApplesAndOranges(int s, int t, int a, int b, List<Integer> apples, List<Integer> oranges) {
    System.out.println(getHitCount(s, t, a, apples));
    System.out.println(getHitCount(s, t, b, oranges));
  }

  private static long getHitCount(
    int targetStart,
    int targetEnd,
    int hitterStart,
    List<Integer> hitterDistances
  ) {
    return hitterDistances
      .stream()
      .map(hitterDistance -> hitterDistance + hitterStart)
      .filter(hitterEnd -> 
        hitterEnd >= targetStart
        &&
        hitterEnd <= targetEnd
      )
      .count();
  }

}
