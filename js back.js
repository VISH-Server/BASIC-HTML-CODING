<html>
<head>
<script>
funtion changecolor(obj)
{
document.body.style.backgroundColor = obj.value;
}
</script>
</head>
<body>
<form>
<input type="radio" name="col" value="red" onclick="changecolor(this)">Red<br>
<input type="radio" name="col" value="blue" onclick="changecolor(this)">blue<br>
<input type="radio" name="col" value="green" onclick="changecolor(this)">green<br>
</form>
</body>
</html>
