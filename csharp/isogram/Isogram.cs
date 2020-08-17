using System;
using System.Linq;
using System.Text.RegularExpressions;

public static class Isogram
{
    public static bool IsIsogram(string word)
    {
        string wordToLower = word.ToLower();
        MatchCollection matches = Regex.Matches(wordToLower, @"[a-z]", RegexOptions.IgnoreCase);
        foreach (Match match in matches)
        {
            if (wordToLower.Where(c => c == match.Value[0]).Count() > 1)
            {
                return false;
            }
        }
        return true;
    }
}
