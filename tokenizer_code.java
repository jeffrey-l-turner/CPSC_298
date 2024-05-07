public class TwoDArraySort {
    public static void main(String[] args) {
        int[][] array2D = {
            {5, 8, 1},
            {4, 7, 3},
            {2, 9, 6}
        };

        System.out.println("Original 2D array:");
        print2DArray(array2D);

        sort2DArray(array2D);

        System.out.println("\nSorted 2D array:");
        print2DArray(array2D);
    }

    public static void sort2DArray(int[][] arr) {
        for (int i = 0; i < arr.length; i++) {
            Arrays.sort(arr[i]);
        }
    }

    public static void print2DArray(int[][] arr) {
        for (int i = 0; i < arr.length; i++) {
            for (int j = 0; j < arr[i].length; j++) {
                System.out.print(arr[i][j] + " ");
            }
            System.out.println();
        }
    }
}

//Tokenized response
//[898, 538, 9220, 35, 1895, 10442, 341, 262, 586, 1118, 742, 1925, 2292, 1318, 2897, 8, 341, 286, 528, 17024, 1358, 17, 35, 284, 341, 310, 314, 20, 11, 220, 23, 11, 220, 16, 1613, 310, 314, 19, 11, 220, 22, 11, 220, 18, 1613, 310, 314, 17, 11, 220, 24, 11, 220, 21, 534, 286, 3718, 286, 744, 2594, 2986, 446, 18902, 220, 17, 35, 1358, 25293, 286, 1194, 17, 35, 1895, 6238, 17, 35, 629, 286, 3460, 17, 35, 1895, 6238, 17, 35, 629, 286, 744, 2594, 2986, 5026, 77, 52151, 220, 17, 35, 1358, 25293, 286, 1194, 17, 35, 1895, 6238, 17, 35, 317, 262, 557, 262, 586, 1118, 742, 3460, 17, 35, 1895, 1577, 17024, 2961, 8, 341, 286, 369, 320, 396, 602, 284, 220, 15, 26, 602, 366, 2961, 1996, 26, 602, 2516, 341, 310, 23824, 10838, 11179, 1004, 2622, 286, 457, 262, 557, 262, 586, 1118, 742, 1194, 17, 35, 1895, 1577, 17024, 2961, 8, 341, 286, 369, 320, 396, 602, 284, 220, 15, 26, 602, 366, 2961, 1996, 26, 602, 2516, 341, 310, 369, 320, 396, 503, 284, 220, 15, 26, 503, 366, 2961, 1004, 948, 4222, 26, 503, 2516, 341, 394, 744, 2594, 2263, 11179, 1004, 1483, 73, 60, 489, 330, 7468, 310, 457, 310, 744, 2594, 2986, 545, 286, 457, 262, 457, 534, 220] 