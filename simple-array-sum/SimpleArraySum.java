import java.util.List;

class SimpleArraySum {

  public static int simpleArraySum(List<Integer> ns) {
    return ns
      .stream()
      .reduce(0, Integer::sum);
  }

}