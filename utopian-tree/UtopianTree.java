public class UtopianTree {

  public static int utopianTree(int growthCycleMax) {
    int height = 1;

    for (int growthCycle = 1; growthCycle <= growthCycleMax; growthCycle++) {
      height = growthCycle % 2 == 0
        ? height + 1
        : height * 2;
    }

    return height;
  }

}
