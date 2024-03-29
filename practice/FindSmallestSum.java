public class FindSmallestSum {
  int findSmallest(int arr[], int n) { 
        int res = 1;
        for (int i = 0; i < n && arr[i] <= res; i++) {
            res = res + arr[i];
        }

        return res;
    } 
  
    public static void main(String[] args) { 
        FindSmallestSum small = new FindSmallestSum(); 
        int arr1[] = {1, 3, 6, 10, 11, 15}; 
        int n1 = arr1.length; 
        System.out.println(small.findSmallest(arr1, n1)); 
  
        int arr2[] = {1, 1, 1, 1}; 
        int n2 = arr2.length; 
        System.out.println(small.findSmallest(arr2, n2)); 
  
        int arr3[] = {1, 1, 3, 4}; 
        int n3 = arr3.length; 
        System.out.println(small.findSmallest(arr3, n3)); 
    } 
}