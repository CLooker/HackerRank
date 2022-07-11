import java.util.List;

public class BetweenTwoSets {

  public static int getTotalX(List<Integer> leftNs, List<Integer> rightNs) {
    int nStart = leftNs.get(leftNs.size() - 1);
    int nEnd = rightNs.get(0);

    int result = 0;

    for (int n = nStart; n <= nEnd; n += nStart) {
      final int nFinal = n;
      
      boolean evenlyDivisibleByAllLeftNs = leftNs
        .stream()
        .allMatch(leftN -> nFinal % leftN == 0);
      
      if (!evenlyDivisibleByAllLeftNs) {
        continue;
      }

      boolean factorForAllRightNs = rightNs
        .stream()
        .allMatch(rightN -> rightN % nFinal == 0);

      if (factorForAllRightNs) {
        result++;
      }
    }

    return result;
  }

}
