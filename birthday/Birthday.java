import java.util.List;

public class Birthday {

  public static int birthday(List<Integer> ns, int targetSum, int targetSize) {
    int result = 0;

    for (int i = 0; i < ns.size(); i++) {
      int sum = 0;
      for (int j = i; j < i + targetSize && j < ns.size(); j++) {
        sum += ns.get(j);
      }

      if (sum == targetSum) {
        result++;
      }
    }

    return result;
  }

}
