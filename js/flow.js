//for packed bed
var btn=document.getElementById('btn');
btn.addEventListener("click", calc);
function calc()
{
  var mr=parseFloat(document.getElementById('Rm').value);
  var wt=parseFloat(document.getElementById('wt').value);
  var time=parseFloat(document.getElementById('time').value);
  var ewt=parseFloat(document.getElementById('ewt').value);
  if(!mr || !wt || !time || !ewt)
 {
   alert("Please provide complete required data!")
   return;
 }
  var massFlowRate= (wt-ewt)/time;
  var q=massFlowRate/1000;
  var area=0.000132665;
  var u=q/area;
  var re=(1000*0.013*u)/0.001;
  var p=mr*(590)*9.81*0.01;
  var f=(p*0.013)/(2*1000*u*u*2);
  alert("Mass Flow Rate: " +massFlowRate+" Kg/s"+"\r\n"+"Volumetric Flow Rate: "+q+" m3/s"+"\r\n Cross Sectional Area: "+area+" m2"+"\r\n Velocity of Water(u): "+u+" m/s"+
        "\r\nReynold's number of particle: "+re+
        "\r\nPressure Drop: "+p+" N/m2"+
        "\r\nFriction Factor: "+f+
        "\r\nlog(f): "+Math.log10(f)+
        "\r\nlog(Re): "+Math.log10(re)
);
}
