import java.io.*;

public class TellerDash {
  static int minTime(int[] arr, int n, int m) {
    int t = 0;
    while (true) {
      int items = 0;
      // Calculating items at each second
      for (int i = 0; i < n; i++) {
        items += (t / arr[i]);
      }
      // If items equal to m return time.
      if (items >= m) {
        return t;
      }
      t++; // Increment time
    }
  }

  // Driver Code
  static public void main(String[] args) {
    int[] arr = { 1, 2, 3 };
    int n = arr.length;
    int m = 3;
    System.out.println(minTime(arr, n, m));
  }
}