function BMI()
{
    var w = Number(document.getElementById("weight").value);
    var h = Number(document.getElementById("height").value);

    var result = bmi(w,h) 
    result = Math.round(result)
    var r = "Your Bmi ="+result
    

    if(result < 18)
    {
        var u = "You are underweight";
        
    }

    else if(result >18 && result <25)
    {
        var u = "You are underweight"
        
    }
    else
    {
        var u = "You are underweight"
        
    }
    var ans = ""+r+"<br>"+u
    document.getElementById("result").innerHTML=ans
    }

    function bmi(w,h)
    {
    h = Math.pow(h,2);
    var bmi = w/h;

    return bmi;
}