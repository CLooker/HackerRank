public class BiggerIsGreater {

  public static String biggerIsGreater(String word) {
    char[] chars = word.toCharArray();

    int pivotIdx = -1;
    for (int i = 1; i < chars.length; i++) {
      if (chars[i] > chars[i - 1]) {
        pivotIdx = i - 1;
      } 
    }

    if (pivotIdx == -1) {
      return "no answer";
    }

    char pivot = chars[pivotIdx];
    int pivotIdxNext = -1;
    for (int i = pivotIdx; i < chars.length; i++) {
      if (chars[i] > pivot) {
        pivotIdxNext = i;
      }
    } 
    
    chars[pivotIdx] = chars[pivotIdxNext];
    chars[pivotIdxNext] = pivot;

    String result = "";
    for (int i = 0; i <= pivotIdx; i++) {
      result += chars[i];
    }
    for (int i = chars.length - 1; i > pivotIdx; i--) {
      result += chars[i];
    }

    return result.equals(word)
      ? "no answer"
      : result;
  }

}