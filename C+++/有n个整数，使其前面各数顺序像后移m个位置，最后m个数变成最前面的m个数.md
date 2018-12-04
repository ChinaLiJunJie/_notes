```
//若n=10，m=5
#include <iostream>
using namespace std;

void main()
{
	int num[10] = { 6, 7, 8, 9, 10, 1, 2, 3, 4, 5 };
	int front[5];
	int back[5];
	for (int i = 0; i < 5; i++)
	{
		front[i] = num[i];
	}
	for (int i = 0; i < 5; i++)
	{
		back[i] = num[i+5];
	}
	for (int i = 0; i < 10; i++)
	{
		if (i < 5)
		{
			num[i] = back[i];
		}
		else{
			num[i] = front[i - 5];
		}
	}
	for (int i = 0; i < 10; i++)
	{
		cout << num[i] << endl;
	}
	system("pause");
}
```