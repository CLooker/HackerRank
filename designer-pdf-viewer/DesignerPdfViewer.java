public class DesignerPdfViewer {

  public static int designerPdfViewer(List<Integer> letterHeights, String word) {
    String alphabet = "abcdefghijklmnopqrstuvwxyz";

    int letterHeightMax = 0;
    for (int i = 0; i < word.length(); i++) {
      char letter = word.charAt(i);
      int alphabetIdx = alphabet.indexOf(letter);
      int letterHeight = letterHeights.get(alphabetIdx);
      letterHeightMax = Math.max(letterHeightMax, letterHeight);
    }

    return letterHeightMax * word.length();
  }

}
