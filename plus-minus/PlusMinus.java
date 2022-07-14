import java.util.List;

public class PlusMinus {

  public static void plusMinus(List<Integer> ns) {
    int positiveCount = 0;
    int negativeCount = 0;
    int zeroCount = 0;

    for (int n : ns) {
      if (n > 0) {
        positiveCount++;
      } else if (n < 0) {
        negativeCount++;
      } else {
        zeroCount++;
      }
    }

    List
      .of(positiveCount, negativeCount, zeroCount)
      .stream()
      .map(count -> (double) count / (double) ns.size())
      .forEach(System.out::println);
  }

}
