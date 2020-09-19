function Love()
{
    var love_score = Math.ceil(Math.random()*100);

    if(love_score<50)
    {
        var result = "Your Love Score Is "+love_score+", Poor Score Download Tinder";
    }
    else if(love_score>50 && love_score<75)
    {
        var result = "Your Love Score is "+love_score+", Avg Score";
    }
    else
    {
        var result = "Your Love Score is "+love_score+", Perfect YAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAYYYYYYYYYYYYYYYYYYYY";
    }
    document.getElementById("result_tab").innerHTML=result;
}