import java.util.List;

public class CompareTheTriplets {

  public static List<Integer> compareTriplets(List<Integer> a, List<Integer> b) {
    int aPoints = 0;
    int bPoints = 0;

    for (int i = 0; i < a.size() && i < b.size(); i++) {
      int aItem = a.get(i);
      int bItem = b.get(i);
      if (aItem > bItem) {
        aPoints++;
      } else if (bItem > aItem) {
        bPoints++;
      }
    }

    return List.of(aPoints, bPoints);
  }
}
