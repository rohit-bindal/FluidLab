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
  var area=0.00455;
  var u=q/area;
  var re=(1000*0.0095*u)/0.001;
  var p=mr*(583)*9.81*0.01;
  var f=((150*(1-0.7))/re)+1.75;
  var f2=(0.0000035*p)/(u*u);
  alert("Mass Flow Rate: " +massFlowRate+" Kg/s"+"\r\n"+"Volumetric Flow Rate: "+q+" m3/s"+"\r\n Cross Sectional Area of the bed: 0.00455 m2"+"\r\n Velocity of Water(u): "+u+" m/s"+
        "\r\nReynold's number of particle: "+re+
        "\r\nPressure Drop: "+p+" N/m2"+
        "\r\nFriction Factor (Ergun Equation): "+f+
        "\r\nPacked Bed friction factor (f): "+f2+
        "\r\nlog(f): "+Math.log10(f)+
        "\r\nlog(Re): "+Math.log10(re)
);
}
