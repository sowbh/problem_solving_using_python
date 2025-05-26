# in js;
# num = +prompt("Enter a number:");
# prod = 1;
# res ="";
# for(i=0;i<=num;i++){
#     prod*=i;
#     if(i!=num){
#         res+=i+"=";
#     }
#     else{
#         res+=i+"*";
#     }
# }
# console.log(res+prod);

# in python;
num = int(input("Enter a number:"));
prod=1;
res="";
for i in range(1, num+1):
    prod*=i;
    if i!= num:
        res+=str(i)+"*";
    else:
        res+=str(i)+"=";
print(res+str(prod));
