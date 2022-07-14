import java.util.List;

public class MiniMaxSum {

  public static void miniMaxSum(List<Integer> ns) {
    long sumMin = Long.MAX_VALUE;
    long sumMax = Long.MIN_VALUE;

    for (int i = 0; i < ns.size(); i++) {
      long sum = 0;

      for (int j = 0; j < ns.size(); j++) {
        if (i != j) {
          sum += ns.get(j);  
        }
      }

      sumMin = Math.min(sumMin, sum);
      sumMax = Math.max(sumMax, sum);
    }

    System.out.println(
      String.format("%s %s", sumMin, sumMax)
    );
  }

}
