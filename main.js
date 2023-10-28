//Find the Sum of numbers in an array and find average also using while
document.write("Find the Sum of numbers in an array and find average also using while"+"<br>");
document.write("---------------------------------------------------------"+"<br>");

var a=[10,20,5,10,18,3];
var b=0;
var x;
document.write("The array elements are:"+a+"<br>");
document.write("The counts of array elemente are:"+a.length+"<br>");
let i=0;
while(i<a.length){
     b=b+a[i];
     x=b/a.length;
     i++;
}
document.write("The sum of array value is:"+b+"<br>");
document.write("The average value is:"+x);