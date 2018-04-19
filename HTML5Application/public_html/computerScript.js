function output() {
    console.log("we in here");
    let price = document.getElementsByName('price');
    let genre = document.getElementsByName('genre');
    let LOV = document.getElementsByName('LOVE');
    let playLevel = document.getElementsByName('Play Level');
    let worldStyle = document.getElementsByName('World Style');
    let GPU = document.getElementsByName('gpu');

    price = parseInt(scanButtons(price));
    genre = parseInt(scanButtons(genre));
    LOV = parseInt(scanButtons(LOV));
    playLevel = parseInt(scanButtons(playLevel));
    worldStyle = parseInt(scanButtons(worldStyle));
    GPU = parseInt(scanButtons(GPU));





    let answers = [price,genre, LOV, playLevel, worldStyle, GPU]; // survey answers

    //fill answers

    let gameData = {}; //adding in game data for all games (limited for now)
    gameData["Rocket League"] = [1, 3, 0, 1, 0, 1];
    gameData["Skyrim"] =  [1, 0, 1, 1, 1, 0];
    gameData["Pubg"] =  [1, 1,  1, 0, 1, 0];
    gameData["League Of Legends"] = [0, 5, 0, 1, 1, 0];
    gameData["HoloPoint"] = [1, 1, 1, 1, 1,  2];
    gameData["Dota 2"] = [0, 5, 0, 1, 1, 0];


    let matchedGames = [];
    for(let j = 5; j >= -1; j--)
    {
        if(matchedGames.length > 0)
        {
            let pick = Math.floor((Math.random() * matchedGames.length)); //pick one of matched games randomnly
            console.log(matchedGames[pick]);
            //let return_box = document.getElementById("algorithm return");
            //return_box.innerHTML = matchedGames[pick];
            break;
        }

        for (const [key, value] of Object.entries(gameData))
        {
            let match = 0;

            for(let i = j;  i>= 0; i--)
            {

                if(answers[i] === value[i])
                {
                    match++;
                }
            }
            if(match === j + 1)
            {

                matchedGames.push(key);
            }
            else
            {
                match = 0;

            }
        }
    }
}

function scanButtons(button)
{
    for(let i = 0; i < button.length; i ++)
    {
        if(button[i].checked)
        {
            return button[i].value;
        }
    }
}


