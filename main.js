const dataatual= nerv date();
let dataniver=prompt (data do próximo niver );
dataniver=new date (dataniver+"t23:59:59");
let diasquefaltam=math.floor((dataniver-dataatual)/86400000)
document.querySelector("#dias_restantes").textcontent=diasquefaltam;