package org.example;

public class UtilFunction {
    public String utilFunction(int a, int b) {
        if (a + b == 5) {
            return "a + b == 5";
        }
        if (a < b) {
            return "a < b";
        }
        if (a > b) {
            return "a > b";
        }
        if (a + b == 10) {
            return "a + b == 10";
        }
        return "a === b";
    }
}
