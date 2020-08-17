using System;

public static class Gigasecond
{
    private const int GIGASECOND = 1000000000;

    public static DateTime Add(DateTime moment)
    {
        return moment.AddSeconds(GIGASECOND);
    }
}
