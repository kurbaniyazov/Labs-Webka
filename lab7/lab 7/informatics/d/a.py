x = int(input())
a = [int(i) for i in input().split()]
for i in range(len(a)):
    if(i==0 or i%2==0):
        print(a[i],end=" ")