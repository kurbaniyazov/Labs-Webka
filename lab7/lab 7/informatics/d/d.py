x = int(input())
x = 0
a = [int(i) for i in input().split()]
for i in range(len(a)):
    if(a[i]<a[i+1]):
        x+=1
print(x)