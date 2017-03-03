package examples;

import static org.junit.Assert.assertEquals;

import org.junit.Test;

/**
 * Created by A4811584 on 03/03/2017.
 */
public class EvaluatorTest {
    @Test
    public void testMagicNumber() {
        Evaluator ev = new Evaluator();
        assertEquals(ev.magicNumber(), 12);
    }
}
