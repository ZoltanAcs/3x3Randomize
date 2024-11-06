<!DOCTYPE html>
<html lang="hu">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Véletlenszerű számok</title>
    <style>
        body {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
            font-family: Arial, sans-serif;
        }
        .container {
            text-align: center;
        }
        .grid {
            display: grid;
            grid-template-columns: repeat(3, 50px);
            gap: 10px;
            margin-bottom: 20px;
        }
        .number {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 50px;
            height: 50px;
            font-size: 24px;
            background-color: lightgray;
            border: 1px solid #000;
            border-radius: 5px;
        }
        .button {
            padding: 10px 20px;
            font-size: 16px;
            cursor: pointer;
            border: none;
            background-color: #4CAF50;
            color: white;
            border-radius: 5px;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="grid" id="grid">
            <div class="number">1</div>
            <div class="number">2</div>
            <div class="number">3</div>
            <div class="number">4</div>
            <div class="number">5</div>
            <div class="number">6</div>
            <div class="number">7</div>
            <div class="number">8</div>
            <div class="number">9</div>
        </div>
        <button class="button" onclick="shuffleNumbers()">Keverés</button>
    </div>

    <script>
        const originalOrder = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        
        function shuffleArray(array) {
            for (let i = array.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [array[i], array[j]] = [array[j], array[i]];
            }
        }

        function shuffleNumbers() {
            const grid = document.getElementById('grid');
            const numbers = [...originalOrder];
            shuffleArray(numbers);
            grid.innerHTML = numbers.map(num => `<div class="number">${num}</div>`).join('');
        }
    </script>
</body>
</html>
