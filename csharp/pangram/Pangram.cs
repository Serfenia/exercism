using System;
using System.Linq;
using System.Text.RegularExpressions;

public static class Pangram
{
    public const int AlphabetSize = 26;
    public static bool IsPangram(string input)
    {
        return Regex.Matches(input, @"[a-z]", RegexOptions.IgnoreCase)
            .Select(x => x.Value.ToLower())
            .Distinct()
            .Count() == AlphabetSize;
    }
}
