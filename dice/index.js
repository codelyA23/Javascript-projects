function rollDice() {
    const result = document.getElementById('result');
    const roll = Number(document.getElementById('dice').value);
    const diceContainer = document.getElementById('dice-container');
    const min = 1;
    const max = 6;
    let randoms = [];
    let dices = [];

    // Function to sum all dice values
    function addDices(numbers) {
        return numbers.reduce((sum, num) => sum + num, 0);
    }

    // Validate input to ensure it's a positive number
    if (isNaN(roll) || roll <= 0) {
        diceContainer.innerHTML = '';
        result.textContent = "Please enter a valid number greater than zero.";
        return;
    }

    for (let i = 0; i < roll; i++) {
        const random = Math.floor(Math.random() * (max - min + 1) + min);
        console.log(random);
        randoms.push(random);
        dices.push(`<img src="imgs/${random}.png" alt="dice${random}" />`);
    }

    // Display both dice rolls and their total sum
    result.textContent = `Dices: ${randoms.join(', ')} | Sum: ${addDices(randoms)}`;
    diceContainer.innerHTML = dices.join('');
}
