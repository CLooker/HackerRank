import java.util.List;
import java.util.stream.Collectors;

public class Grading {

  public static List<Integer> gradingStudents(List<Integer> grades) {
    return grades
      .stream()
      .map(grade -> {
        if (grade < 38) {
          return grade;
        }

        int multiple = nextMultiple(5, grade);
        if (multiple - grade >= 3) {
          return grade;
        }

        return multiple;
      })
      .collect(Collectors.toList());
  }

  private static int nextMultiple(int denom, int n) {
    int next = n + 1;

    return next % denom == 0
      ? next
      : nextMultiple(denom, next);
  }

}