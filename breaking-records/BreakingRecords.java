import java.util.List;

public class BreakingRecords {

  public static List<Integer> breakingRecords(List<Integer> scores) {
    int max = scores.get(0);
    int min = max;
    int nMaxChanges = 0;
    int nMinChanges = 0;

    for (int i = 0; i < scores.size(); i++) {
      int score = scores.get(i);
      if (score > max) {
        max = score;
        nMaxChanges++;
      } else if (score < min) {
        min = score;
        nMinChanges++;
      }
    }

    return List.of(nMaxChanges, nMinChanges);
  }

}
