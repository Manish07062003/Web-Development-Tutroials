#include<stdio.h>
void x(int *a);
int main(){
    int a=5;
    int *ptr;
    ptr=&a;
    x(ptr);
    printf("%d",a);
}
void x(int *a)
{
    *a=10;
}