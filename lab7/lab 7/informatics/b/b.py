def is_leap(year):
    leap = False
    
    if (year%4==0):
        if(year%400==0):
            leap = True;
        elif(year%100==0):
            leap = False;
        else:
            leap = True;

    
    return leap

year = int(input())

if(is_leap(year)):
    print("YES")
else:
    print("NO")