import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.function.Function;
import java.util.stream.Collectors;

public class SockMerchant {

  public static int sockMerchant(int ignored, List<Integer> colors) {
    Map<Integer, Long> freqByColor = colors
      .stream()
      .collect(
            Collectors.groupingBy(
                Function.identity(),
                HashMap::new,
                Collectors.counting()
            )
        );

    int pairCount = 0;
    for (long freq : freqByColor.values()) {
      long pairableCount = freq %2 == 0
        ? freq
        : freq - 1;

      pairCount += (pairableCount / 2);
    }

    return pairCount;
  }

}
