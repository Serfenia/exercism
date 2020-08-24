using System;
using System.Linq;
using System.Collections.Generic;

public static class Grains
{
    private static IEnumerable<int> board = Enumerable.Range(1, 64);
    public static ulong Square(int n)
    {
        if (!board.Contains(n)) throw new ArgumentOutOfRangeException();
        return (ulong)Math.Pow(2, n - 1);
    }

    public static ulong Total()
    {
        return board.Aggregate(0UL, (acc, x) => acc + Grains.Square(x));
    }
}
