public class DrawingBook {

  public static int pageCount(int pageMax, int pageTarget) {
    int fromStart = pageTarget - 1;
    int fromEnd = pageMax - pageTarget;

    if (fromStart < fromEnd) {
      return (int) Math.ceil(
        (double) fromStart / (double) 2
      );
    } else if (fromEnd == 1 && pageMax % 2 == 0) {
      return (fromEnd / 2) + 1;
    } else {
      return fromEnd / 2;
    }
  }

}
