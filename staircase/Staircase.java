public class Staircase {

  public static void staircase(int length) {
    for (int stairCount = 1; stairCount <= length; stairCount++) {
      String stair = "";

      int spaceCountMax = length - stairCount;
      for (int spaceCount = 1; spaceCount <= spaceCountMax; spaceCount++) {
        stair += " ";
      }

      int poundCountMax = stairCount;
      for (int poundCount = 1; poundCount <= poundCountMax; poundCount++) {
        stair += "#";
      }

      System.out.println(stair);
    }
  }

}
