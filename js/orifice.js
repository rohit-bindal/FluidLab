var btnOrifice=document.getElementById('btnOrifice');
btnOrifice.addEventListener("click", calcOrifice);
function calcOrifice()
{
  var mr=parseFloat(document.getElementById('Rm').value);
  var wt=parseFloat(document.getElementById('wt').value);
  var time=parseFloat(document.getElementById('time').value);
  var ewt=parseFloat(document.getElementById('ewt').value);
  var massFlowRate= (wt-ewt)/time;
  var q=massFlowRate/1000;
  alert("Mass Flow Rate: "+massFlowRate+" Kg/s"+
        "\r\nVolumetric Flow Rate: "+q+" m3/s"
      );
}
