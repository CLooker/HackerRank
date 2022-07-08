import java.util.List;

public class AVeryBigSum {

  public static long aVeryBigSum(List<Long> ns) {
    return ns
      .stream()
      .reduce(0L, Long::sum);
  }

}
