using System;
using System.Linq;

public enum Classification
{
    Perfect,
    Abundant,
    Deficient
}

public static class PerfectNumbers
{
    public static Classification Classify(int number)
    {
        if (number <= 0) throw new ArgumentOutOfRangeException();

        int result = Enumerable.Range(1, number / 2).Where(i => number % i == 0).Sum();

        if (result > number) return Classification.Abundant;
        return result == number ? Classification.Perfect : Classification.Deficient;
    }
}
