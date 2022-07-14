import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Map.Entry;
import java.util.function.Function;
import java.util.stream.Collectors;

public class MigratoryBirds {

  public static int migratoryBirds(List<Integer> ids) {
    Map<Integer, Long> freqById = ids
        .stream()
        .collect(
            Collectors.groupingBy(
                Function.identity(),
                HashMap::new,
                Collectors.counting()
            )
        );

    long freqMax = -1;
    int idOfFreqMax = -1;
    for (Entry<Integer, Long> entry : freqById.entrySet()) {
      int id = entry.getKey();
      long freq = entry.getValue();
      if (freq > freqMax) {
        freqMax = freq;
        idOfFreqMax = id;
      }
    }

    return idOfFreqMax;
  }

}
