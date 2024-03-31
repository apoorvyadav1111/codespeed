// sum of two numbers
#include <iostream>
using namespace std;

int getSum(int a, int b) {
    return b == 0 ? a : getSum(a ^ b, (a & b) << 1);
}

int main() {
    int a = 1, b = 2;
    cout << getSum(a, b) << endl;
    return 0;
}