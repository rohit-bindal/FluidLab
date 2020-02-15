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
 var area=0.00012265;
 var qi=(mr*3.785*0.001)/60;
 var cd=q/qi;
 alert("Mass Flow Rate: " +massFlowRate+" Kg/s"+"\r\n"+"Indicated Volumetric Flow Rate: "+qi+" m3/s"+"\r\nCross Sectional Area: 0.00012265 m2"+
       "\r\nVolumetric Flow Rate: "+q+"m3/s"+
       "\r\nCoefficient of Discharge: "+cd
 );
 }
