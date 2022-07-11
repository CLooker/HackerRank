public class CountingValleys {

  public static int countingValleys(int ignored, String directions) {
    int position = 0;
    int valleyCount = 0;
    boolean inValley = false;

    for (int i = 0; i < directions.length(); i++) {
      char direction = directions.charAt(i);
      if (direction == 'U') {
        position++;
      } else {
        position--;
      }

      if (position < 0) {
        inValley = true;
      }

      if (position == 0 && inValley) {
        inValley = false;
        valleyCount++;
      }
    }

    return valleyCount;
  }

}
