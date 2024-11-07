<html>
<head>
<title>Animation</title>
<script>
var imgob=null;
var animate;
function init()
{
imgob=document.getElementsById("IMG-20211218-WA0000");
imgob.style.position='relative'
imgob.style.left='0px';
}
function moveright()
{
imgob.style.left=parseInt(imgob.style.left)+10+'px';
animate=setTimeout(moveRight,25);
}
function stop()
{
clearTimeout(animate);
imgob.style,left='0px';
}
window.onload=init;
</script>
</head>
<body>
<form>
<img src="D:\WEBPROMAX\IMG-20211218-WA0000.jpg" img id="IMG-20211218-WA0000" height=150 width=150/>
<p>click the button below</p>
<input type="button" value="start" onclick="moveright()";/>
<input type="button" value="stop" onclick="stop()"/>
</form>
</body>
</html>

