isPalindrome(prompt("ededin palindrom olub olmadigini yoxlayin"))
function isPalindrome(num) {
    var a = 0;
    b = num;
    sum = 0;
    if(num>9){
        while (num > 0) {
            a = num % 10;
            num = (num - a) / 10;
            sum = sum*10 + a;
        }
        if (b == sum) {
            alert("Eded Palindromdur");
        }
        else {
            alert("Eded palindrom deyil")
        }
    }
    else {
        alert("duz reqem yazin")
    }
}
