
function saturdayFun (activity = "roller-skate"){
    return `This Saturday, I want to ${activity}!`
};

function mondayWork(defaultActivity = "go to the office"){
    return `This Monday, I will ${defaultActivity}.`
};


function wrapAdjective(pattern = "*"){
    let result =  function (adjective = "special"){
        return `You are ${pattern}${adjective}${pattern}!`
    }
    return result
};


