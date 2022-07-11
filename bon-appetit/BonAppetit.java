import java.util.List;

public class BonAppetit {

  public static void bonAppetit(List<Integer> bill, int k, int b) {
    int sum = 0;

    for (int i = 0; i < bill.size(); i++) {
      if (i != k) {
        sum += bill.get(i);
      }
    }

    int amountOwed = sum / 2;
    int difference = b - amountOwed;

    if (difference == 0) {
      System.out.println("Bon Appetit");
    } else {
      System.out.println(difference);
    }
  }

}
