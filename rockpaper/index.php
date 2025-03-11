<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>rock paper scissors</title>
    
    <!--My CSS style-->
    <link rel="stylesheet" href="style.css">

    <!--Fonts-->
    <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=VT323&display=swap" rel="stylesheet">

    <link href="https://db.onlinewebfonts.com/c/63f874d192fb3892d88d5e26f942b5e2?family=DS-Digital" rel="stylesheet" type="text/css"/>

    <link href="https://fonts.cdnfonts.com/css/led-dot-matrix" rel="stylesheet" type="text/css"/>


</head>
<body>
    <div class="body">
        <!-- <div class="animation-container">
            <div class="emoji left">⚔️</div>
            <div class="emoji right">🛡️</div>
        </div> -->
        <h1 class="pickplay">Pick and Play</h1>
        <div id="choices">
            <button onclick="playGame('rock')" class="push--flat">✊</button>
            <button onclick="playGame('paper')" class="push--flat">🖐️</button>
            <button onclick="playGame('scissors')" class="push--flat">✌️</button>
        </div>
        <div class="matchup">
            <h1 class="p1">You: </h1>
            <h3 id="playerChoiceDisplay"></h3>
            <h1 class="vs">VS.</h1>
            <h3 id="computerChoiceDisplay"></h3>
            <h1 class="p2"> :Computer</h1>
        </div>      
        <div >
            <h1 id="resultDisplay">&#8204;</h1>
        </div>
        <div class="scoreboard">
            <h1 class="scoreboardTitle">SCOREBOARD</h1>
            <div id="scoreboardDisplay">          
                <h3 id="playerScoreDisplay">0</h3>           
                <h3 id="tieScoreDisplay">0</h3>                       
                <h3 id="computerScoreDisplay">0</h3>           
            </div>
            <div class="scoreboardWLT">
                <h3 class="scbdPlayer">Player Wins</h3>
                <h3 class="scbdTies">Ties</h3>
                <h3 class="scbdPC">Computer Wins</h3>
            </div>  
        </div>
    </div>
    <script src="scripts.js"></script>
</body>
</html>