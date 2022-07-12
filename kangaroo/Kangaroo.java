package kangaroo;

import java.util.Map;

public class Kangaroo {

  public static String kangaroo(int aPos, int aJumpSize, int bPos, int bJumpSize) {
    Map<Integer, Integer> jumpSizeByPosition = Map.of(
      aPos, aJumpSize,
      bPos, bJumpSize
    );

    int behindJumpSize = aPos <= bPos
      ? jumpSizeByPosition.get(aPos)
      : jumpSizeByPosition.get(bPos);

    int aheadJumpSize = aPos <= bPos
      ? jumpSizeByPosition.get(bPos)
      : jumpSizeByPosition.get(aPos);

    if (aheadJumpSize >= behindJumpSize) {
      return "NO";
    }

    int behindPos = Math.min(aPos, bPos);
    int aheadPos = Math.max(aPos, bPos);

    return isWinnable(behindPos, behindJumpSize, aheadPos, aheadJumpSize)
        ? "YES"
        : "NO";
  }

  private static boolean isWinnable(int behindPos, int behindJumpSize, int aheadPos, int aheadJumpSize) {
    return aheadPos <= behindPos
        ? aheadPos == behindPos
        : isWinnable(
            behindPos + behindJumpSize,
            behindJumpSize,
            aheadPos + aheadJumpSize,
            aheadJumpSize);
  }

}
