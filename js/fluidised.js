var btn=document.getElementById('btnBed');
btn.addEventListener("click", calcFluidised);
function calcFluidised()
{
  var mr=parseFloat(document.getElementById('Rm').value);
  var v=parseFloat(document.getElementById('v').value);
  var time=parseFloat(document.getElementById('time').value);
  var bh=parseFloat(document.getElementById('bh').value);
  if(!mr || !v || !time || !bh)
  {
  	alert("Please provide complete required data!")
  	return;
  }
  var q=(v*0.000001)/time;
  var u=q/0.00049087;
  var re=(1000*0.0047*u)/0.001;
  var p=mr*583*9.81*0.01;
  var k=(p*0.0047*0.0047*0.0047*1000)/(2*0.083*0.001*0.001);
  var er=1-(0.0775/bh);
  alert("Volumetric Flow Rate: "+q+" m3/s"+
        "\r\nVelocity: "+u+" m/s"+
        "\r\nParticle Reynold's number: "+re+
        "\r\nPressure Drop: "+p+" Pa"+
        "\r\nKp: "+k+
        "\r\nEr: "+er);
}
