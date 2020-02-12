var btnOrifice=document.getElementById('btnOrifice');
btnOrifice.addEventListener("click", calcOrifice);
function calcOrifice()
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
  var u=q/0.00012661265;
  var re=(1000*u*0.0127)/0.00089;
  var p=0.01*mr*9.81*582;
  var a=0.002*p;
  var qt=0.00012721*(Math.sqrt(a));
  var c=q/qt;
  alert("Beta(do/d): 0.3105"+
  	    "\r\nMass Flow Rate: "+massFlowRate+" Kg/s"+
        "\r\nVolumetric Flow Rate: "+q+" m3/s"+
        "\r\nCross Sectional Area: 0.00012661265 m2"+
        "\r\nVelocity of Water: "+u+" m/s"+
        "\r\nReynolds Number: "+re+
        "\r\nPressure Drop: "+p+" N/m2"+
        "\r\nTheoretical Volumetric Rate: "+qt+
        "\r\nOrifice Coefficient: "+c+
        "\r\nlog(Re): "+Math.log10(re)
      );
}
