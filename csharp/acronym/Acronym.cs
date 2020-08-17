using System;
using System.Linq;
using System.Text.RegularExpressions;

public static class Acronym
{
    public static string Abbreviate(string phrase)
    {
        string partsJoined = String.Join("",
            Regex.Matches(phrase, @"^\w{1}|(\s|-|_|,){1}([a-z]|[A-Z]){1}")
                .Select(x => x.Value.ToUpper())
        );
        return String.Join("", partsJoined.ToCharArray().Where(c => char.IsLetter(c)));
    }
}
