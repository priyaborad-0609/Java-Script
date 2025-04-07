// wap to perform method overloading to find sum of 2 to 4 arguments.
// ex. sum(10,20), sum(10,20,30), sum(_....4)

class Add{

    sum(a,b,c,d){

        if(a == undefined || b == undefined)
        {
            document.writeln("Give two values!")
        }
        else if(c == undefined || d == undefined)
        {
            document.writeln("Sum of a and b is: ",a+b);
        }
        else if(d == undefined)
        {
            document.writeln("Sum of a , b and c is: ",a+b+c);
        }
        else
        {
            document.writeln("Sum of a , b ,c and d is: ",a+b+c+d);
        }
    }
}

const print = new Add();
print.sum(10,20,30,40);