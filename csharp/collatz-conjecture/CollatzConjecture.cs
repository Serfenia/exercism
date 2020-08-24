using System;

public static class CollatzConjecture
{
    public static int Steps(int number)
    {
        if (number < 1) throw new ArgumentOutOfRangeException("'number' must be higher than 1");

        int steps = 0;
        while (number != 1)
        {
            steps++;
            number = Step(number);
        }
        return steps;
    }

    private static int Step(int number)
    {
        return number % 2 == 0 ? number / 2 : (3 * number) + 1;
    }
}
