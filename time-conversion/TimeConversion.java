public class TimeConversion {

  public static String timeConversion(String time) {
    String[] split = time.split(":");
    String hhUnformatted = split[0].substring(0, 2);
    String mm = split[1];
    String ssUnformatted = split[2];

    String hh = hhUnformatted;
    if (ssUnformatted.contains("PM")) {
      int hhUnformattedN = Integer.parseInt(hhUnformatted);
      hh = String.valueOf(
          hhUnformattedN + 12);
    }
    if (hh.equals("24")) {
      hh = "12";
    } else if (hh.equals("12")) {
      hh = "00";
    }

    String ss = ssUnformatted.substring(0, 2);

    return String.format(
     "%s:%s:%s",
      hh,
      mm,
      ss
    );
  }

}
