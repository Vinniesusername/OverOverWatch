function output(dataset, platform, answers) {

    console.log(answers);

    let gameData = dataset;
    let pick;

    let matchedGames = [];
    for(let j = 5; j >= -1; j--)
    {
        if(matchedGames.length > 0)
        {
            pick = Math.floor((Math.random() * matchedGames.length));
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
    return matchedGames[pick];
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


