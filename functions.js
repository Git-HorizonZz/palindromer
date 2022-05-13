function checkPalindrome()
{
    var phrase = document.getElementById("palindromebox").value;
    if (phrase == phrase.split("").reverse().join(""))
        document.getElementById("check").innerHTML = "The word/phrase is a palindrome!";
    else
        document.getElementById("check").innerHTML = "The word/phrase is not a palindrome.";
}