import java.util.ArrayList;
import java.util.List;
import java.util.stream.IntStream;

public class PickingNumbers {

  public static int pickingNumbers(List<Integer> ns) {
    return IntStream
        .range(0, ns.size())
        .boxed()
        .map(i -> getPickedNs(ns, i))
        .map(List::size)
        .max(Integer::compare)
        .orElse(-1);
  }

  private static List<Integer> getPickedNs(List<Integer> ns, int i) {
    List<Integer> pickedNs = new ArrayList<>();
    pickedNs.add(ns.get(i));

    IntStream
        .range(0, ns.size())
        .boxed()
        .filter(j -> j != i)
        .forEach(j -> {
          final int n = ns.get(j);

          boolean isPickableN = pickedNs.stream().allMatch(pn -> Math.abs(pn - n) <= 1);

          if (isPickableN) {
            pickedNs.add(n);
          }
        });

    return pickedNs;
  }

}
