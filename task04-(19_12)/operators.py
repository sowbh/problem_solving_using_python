# arithmetic operators;
a , b = 20, 40;
print(a + b);
print(a - b);
print(a * b);
print(a / b);     
print(a % b);   

# relational operators;
p , q = 10 , 7;
print(p<q);
print(p<=q);
print(p>q);
print(p>=q);
print(p==q);
print(p!=q);

# logical operators;
m , n = 5, 7;
print(m>n or m%n==0);
print(m>n and m%n==0);
print(not(m>n or m%n==0));

# left shift and right shift;
# left shift: a * 2^b;
s,t = 4,3;
print(s<<t);

# right shift: a/2^b;
print(s>>t);

# exclusive OR;
print(s ^ t);

# assignment operators;
i,j= 4, 2;
i+=j;
print(i);

i-=j;
print(i);

i*=j;
print(i);
