import java.util.List;

public class DivisibleSumPairs {

  public static int divisibleSumPairs(int ignored, int divisor, List<Integer> ns) {
    int result = 0;

    for (int i = 0; i < ns.size(); i++) {
      int n = ns.get(i);

      for (int j = i + 1; j < ns.size(); j++) {
        int sum = n + ns.get(j);
        if (sum % divisor == 0) {
          result++;
        } 
      }
    }

    return result;
  }

}
