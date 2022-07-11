import java.util.List;

public class BirthdayCakeCandles {

  public static int birthdayCakeCandles(List<Integer> ns) {
    int max = 0;
    int freq = 0;

    for (int i = 0; i < ns.size(); i++) {
      int n = ns.get(i);
      if (n > max) {
        max = n;
        freq = 1;
      } else if (n == max) {
        freq++;
      }
    }

    return freq;
  }

}
