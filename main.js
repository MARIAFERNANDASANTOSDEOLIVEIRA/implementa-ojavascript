const dataatual= new date();
let dataniver = prompt (data do próximo niver );
dataniver = new Date (dataniver + "T23:59:59");
let diasquefaltam = Math.floor((dataniver-dataatual)/86400000);
document.querySelector("#dias_restantes").textcontent=diasquefaltam;