import java.util.List;
import java.util.stream.Collectors;

public class ElectronicsShop {

  public static void main(String[] args) {
    ParsedArgs parsedArgs = new ParsedArgs();
    int moneyTotal = parsedArgs.moneyTotal;
    List<Integer> keyboardPrices = parsedArgs.keyboardPrices;
    List<Integer> drivePrices = parsedArgs.drivePrices;

    int result = -1;

    for (int i = 0; i < keyboardPrices.size(); i++) {
      int keyboardPrice = keyboardPrices.get(i);

      for (int j = 0; j < drivePrices.size(); j++) {
        int drivePrice = drivePrices.get(j);
        int price = keyboardPrice + drivePrice;
        if (price <= moneyTotal && price > result) {
          result = price;
        }
      }
    }

    System.out.println(result);
  }

  public static class ParsedArgs {

    public final int moneyTotal;
    public final List<Integer> keyboardPrices;
    public final List<Integer> drivePrices;

    public ParsedArgs() {
      BufferedReader reader = new BufferedReader(new InputStreamReader(System.in));
      List<String> lines = reader.lines().collect(Collectors.toList());

      moneyTotal = Integer.parseInt(lines.get(0).split(" ")[0]);

      keyboardPrices = Arrays
          .stream(lines.get(1).split(" "))
          .map(Integer::parseInt)
          .collect(Collectors.toList());

      drivePrices = Arrays
          .stream(lines.get(2).split(" "))
          .map(Integer::parseInt)
          .collect(Collectors.toList());
    }

  }
}
