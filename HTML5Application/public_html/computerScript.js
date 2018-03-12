var answers = []; // survey answers


//fill answers

var gameData = {}; //adding in game data for all games (limited for now)
gameData["Rocket League"] = [1, 2, 0, 1, 0];
gameData["Skyrim"] =  [1, 0, 1, 1, 1];
gameData["Pubg"] =  [1, 1,  1, 0, 1];
gameData["League Of Legends"] = [0, 5, 0, 1, 0];
gameData["HoloPoint"] = [1, 1, 1, 1, 2];
gameData["Test Game"] = [0, 5, 0, 1, 0];

var matchedGames = [];
for(var j = 4; j >= -1; j--)
{
    if(matchedGames.length > 0)
    {
        var pick = Math.floor((Math.random() * matchedGames.length)); //pick one of matched games randomnly
        console.log(matchedGames[pick]);
        break;
    }

    for (const [key, value] of Object.entries(gameData))
    {
        var match = 0;

        for(var i = j;  i>= 0; i--)
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