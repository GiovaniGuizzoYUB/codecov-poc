package org.example;

import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.assertEquals;

public class UtilsTest {
    @Test
    public void testUtilFunction1() {
        UtilFunction utilFunction = new UtilFunction();
        String result = utilFunction.utilFunction(1, 2);
        assertEquals("a < b", result, "Test case where a is less than b failed.");
    }

    @Test
    public void testUtilFunction2() {
        UtilFunction utilFunction = new UtilFunction();
        String result = utilFunction.utilFunction(2, 1);
        assertEquals("a > b", result, "Test case where a is greater than b failed.");
    }

    @Test
    public void testUtilFunction3() {
        UtilFunction utilFunction = new UtilFunction();
        String result = utilFunction.utilFunction(1, 1);
        assertEquals("a === b", result, "Test case where a is equal to b failed.");
    }

    @Test
    public void testUtilFunction4() {
        UtilFunction utilFunction = new UtilFunction();
        String result = utilFunction.utilFunction(5, 5);
        assertEquals("a + b == 10", result, "Test case where a + b is equal to 10 failed.");
    }

    @Test
    public void testUtilFunction5() {
        UtilFunction utilFunction = new UtilFunction();
        String result = utilFunction.utilFunction(1, 4);
        assertEquals("a + b == 5", result, "Test case where a + b is equal to 5 failed.");
    }
}
