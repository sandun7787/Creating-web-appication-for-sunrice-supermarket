<!DOCTYPE html>
<html>
<body>
<h2>java script string</h2>

<p>you can use quotes inside a string as loang as they dont match the quotes surrounding the string:</p>

<p id="demo"></p>
<script>
    let answer1="It's alright";
    let answer2="He is called 'Johnny'"
    let answer3 ='he is called "jhny"'
    document.getElementById("demo").innerHTML=answer1+"<br>"+
    answer2+"<br>"+
    answer3+"<br>"+
</script>
</body>