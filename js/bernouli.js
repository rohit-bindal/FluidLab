var btn=document.getElementById('btn');
btn.addEventListener("click",mycalc);
function mycalc()
{
  alert("All Data is now in Table!");
  var height=parseFloat(document.getElementById('ht').value);
  var time=parseFloat(document.getElementById('t').value);
  var values=new Array();
  for(var i=0;i<9;i++)
  {
    values[i]=parseFloat(document.getElementById(i).value);
  }
  var areas=new Array();
  for(var k=9;k<18;k++)
  {
    areas[k-9]=parseFloat(document.getElementById(k).innerHTML);
  }
  var q=(1000*height)/time;
  var velocities=new Array();
  for(var j=0;j<9;j++)
  {
    velocities[j]=q/areas[j];
  }
  for(var n=18;n<=26;n++)
  {
    document.getElementById(n).textContent = velocities[n-18];
  }
  var head=new Array();
  for(var i=0;i<9;i++)
  {
    head[i]=(velocities[i]*velocities[i])/(2*9.81*100);
  }
  for(var i=27;i<=35;i++)
  {
    document.getElementById(i).textContent = head[i-27];
  }
  var totalHead = new Array();
  for(var i=0;i<9;i++)
  {
    totalHead[i]=values[i]+head[i];
  }
  for(i=36;i<=44;i++)
  {
    document.getElementById(i).textContent=totalHead[i-36];
  }
}
