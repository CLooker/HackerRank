import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class DiagonalDifference {
  
  public static int diagonalDifference(List<List<Integer>> matrix) {
    List<Integer> primaries = getDiagonals(matrix);
    int primariesSum = getSum(primaries);

    Collections.reverse(matrix);
    List<Integer> secondaries = getDiagonals(matrix);
    int secondariesSum = getSum(secondaries);

    return (int) Math.abs(
      (double) primariesSum - (double) secondariesSum
    );
  }

  private static List<Integer> getDiagonals(List<List<Integer>> matrix) {
    List<Integer> result = new ArrayList<>();

    for (int i = 0; i < matrix.size(); i++) {
      List<Integer> ns = matrix.get(i);
      int n = ns.get(i);
      result.add(n);
    }

    return result;
  }

  private static int getSum(List<Integer> ns) {
    return ns
      .stream()
      .reduce(0, Integer::sum);
  }
}
