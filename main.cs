public static void Main(string[] args)
{
    int[] arr = GetInputArray(n);

    int total = Sum(arr, n);

    Console.WriteLine($"Sum of the numbers: {total}");
}

private static int[] GetInputArray(int n)
{
    int[] arr = new int[n];

    Console.WriteLine($"Enter {n} integers:");
    for (int i = 0; i < n; i++)
    {
        if (!int.TryParse(Console.ReadLine(), out arr[i]))
        {
            Console.WriteLine("Invalid input. Please enter valid integers.");
            Environment.Exit(1);
        }
    }

    return arr;
}