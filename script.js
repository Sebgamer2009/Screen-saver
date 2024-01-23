```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Unique Design</title>
    <style>
        body {
            background-color: #000;
            overflow: hidden;
        }

        .line {
            position: absolute;
            width: 100%;
            height: 1px;
            background-color: #fff;
            animation: slide 5s linear infinite;
        }

        .line.small {
            height: 0.5px;
            opacity: 0.5;
        }

        .line:nth-child(1) {
            top: 10%;
            animation-delay: 0s;
        }

        .line:nth-child(2) {
            top: 20%;
            animation-delay: 1s;
        }

        .line:nth-child(3) {
            top: 30%;
            animation-delay: 2s;
        }

        .line:nth-child(4) {
            top: 40%;
            animation-delay: 3s;
        }

        .line:nth-child(5) {
            top: 50%;
            animation-delay: 4s;
        }

        .line:nth-child(6) {
            top: 60%;
            animation-delay: 5s;
        }

        .line:nth-child(7) {
            top: 70%;
            animation-delay: 6s;
        }

        .line:nth-child(8) {
            top: 80%;
            animation-delay: 7s;
        }

        .line:nth-child(9) {
            top: 90%;
            animation-delay: 8s;
        }

        @keyframes slide {
            0% {
                transform: translateX(-100%);
            }
            100% {
                transform: translateX(100%);
            }
        }
    </style>
</head>
<body>
    <div class="line"></div>
    <div class="line small"></div>
    <div class="line"></div>
    <div class="line small"></div>
    <div class="line"></div>
    <div class="line small"></div>
    <div class="line"></div>
    <div class="line small"></div>
    <div class="line"></div>

    <script>
        // Add more lines dynamically
        for (let i = 0; i < 10; i++) {
            const line = document.createElement('div');
            line.classList.add('line');
            if (i % 2 === 0) {
                line.classList.add('small');
            }
            line.style.top = `${Math.random() * 100}%`;
            line.style.animationDelay = `${Math.random() * 10}s`;
            document.body.appendChild(line);
        }
    </script>
</body>
</html>
```