function calculateMeanAndSum(numbers) {
    if (numbers.length === 0) {
        return { mean: NaN, sum: 0 };
    }

    const sum = numbers.reduce((acc, num) => acc + num, 0);
    const mean = sum / numbers.length;

    return { mean, sum };
}

function getUserInputArray() {
    let input = document.getElementById("numberInput").value.trim();

    if (!input) {
        return [];
    }

    return input.split(',').map(Number);
}

function addItem() {
    const userNumbers = getUserInputArray();
    const result = calculateMeanAndSum(userNumbers);

    console.log("User Input Array:", userNumbers);
    console.log("Mean:", result.mean);
    console.log("Sum:", result.sum);

    // Display the results on the page
    const resultElement = document.getElementById("result");
    resultElement.textContent = `User Input Array: ${userNumbers}\nMean: ${result.mean}\nSum: ${result.sum}`;
}
