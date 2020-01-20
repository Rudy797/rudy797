var my={};function exponentcalcMain(base,exp){my.base=typeof base!=='undefined'?base:3;my.exp=typeof exp!=='undefined'?exp:4;this.version='0.82';w=360;h=180;var s="";s+='<div style="position:relative; width:'+w+'px; height:'+h+'px; border: 2px solid #ddeeff; border-radius: 10px;  margin:auto; display:block;">';s+='<canvas id="canvasId" width="'+w+'" height="'+h+'" style="z-index:1;"></canvas>';s+='<input type="text" id="num" style="color: #0000ff; position:absolute; top:30px; left:120px; width:70px; background-color: #eeffee; text-align:right; padding-right:10px; font-size: 24px;  border-radius: 10px; " value="'+my.base+'" onKeyUp="go()" />';s+='<input type="button" id="numDnBtn" style="color: #000aae;  position:absolute; top:45px; left: 88px; "  value="&#x25BC;"  class="circbtn"  onclick="numDn()"/>';s+='<input type="button" id="numUpBtn" style="color: #000aae;  position:absolute; top:21px; left: 88px;"  value="&#x25B2;"  class="circbtn"  onclick="numUp()"/>';s+='<input type="text" id="exp" style="color: #0000ff; position:absolute; top:20px; left:192px; width:50px; background-color: #eeffee; text-align:left; padding-left:5px; font-size: 20px; border-radius: 10px; " value="'+my.exp+'" onKeyUp="go()" />';s+='<input type="button" id="expDnBtn" style="color: #000aae;  position:absolute; top:30px; left:248px; "  value="&#x25BC;"  class="circbtn"  onclick="expDn()"/>';s+='<input type="button" id="expUpBtn" style="color: #000aae;  position:absolute; top: 6px; left:248px;"  value="&#x25B2;"  class="circbtn"  onclick="expUp()"/>';s+='<div id="ans"'+
' style="text-align:center; z-index:3; position:absolute; top:75px; left:2px; width:346px; height:75px;'+
' border: 1px solid blue; padding:5px; background-color: #ddeeff; font: bold 16px/18px Arial, Tahoma, sans-serif; "></div>';s+='<div id="copyrt" style="font: bold 10px Arial; color: #6600cc; position:absolute; right:3px; bottom:3px;">&copy; 2015 MathsIsFun.com  v'+this.version+'</div>';s+='</div>';document.write(s);MIN=-99;MAX=99;go();}
function go(){document.getElementById("ans").innerHTML=getAns();}
function getNum(){var num=document.getElementById("num").value;num=num.replace(/[,\(\)]/gm,"");return num;}
function numDn(){var num=getNum();num--;document.getElementById("num").value=num;go();}
function numUp(){var num=getNum();num++;document.getElementById("num").value=num;go();}
function getExp(){var num=document.getElementById("exp").value;num=num.replace(/,/gm,"");num=parseInt(num);if(isNaN(num))num=0;if(num>this.MAX)num=this.MAX;if(num<this.MIN)num=this.MIN;document.getElementById("exp").value=num;return num;}
function expDn(){var num=getExp();if(num>this.MIN){num--;document.getElementById("exp").value=num;go();}}
function expUp(){var num=getExp();if(num<this.MAX){num++;document.getElementById("exp").value=num;go();}}
function getAns(){var base=getNum();var exp=getExp();var baseStr=base.toString();if(base<0){baseStr="("+baseStr+")";document.getElementById("num").value=baseStr;}
var preamble=baseStr;preamble+="<sup>"+exp+"</sup>";preamble+=" = ";var val=1;var s="";var i;if(base==0){if(exp>0){if(exp==1){s="0";}else{for(i=0;i<exp;i++){if(s.length>0)
s+=" &times; ";s+="0";}
s+=" = 0";}}
if(exp==0){s="indeterminant";}
if(exp<0){s="divide by zero";}}else{if(exp>0){if(exp==1){s=baseStr;}else{for(i=0;i<exp;i++){if(s.length>0)
s+=" &times; ";s+=baseStr;val*=base;}
s+=" = "+val.sigDigits(12);}}
if(exp==0){s="1";}
if(exp<0){s="1";for(i=0;i>exp;i--){s+=" &divide; ";s+=baseStr;val/=base;}
s+=" = "+val.sigDigits(12);}}
return preamble+s;}
Number.prototype.sigDigits=function(n){var s=this.toPrecision(n);if(s.indexOf(".")>-1){if(s.toLowerCase().indexOf("e")==-1){s=s.replace(/0+$/,'');}
s=s.replace(/\.+$/,'');}
return s;};
