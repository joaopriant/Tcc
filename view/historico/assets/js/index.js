function toggleDiv(divid,down,up){
    if(document.getElementById(divid).style.display == 'none'){
        document.getElementById(divid).style.display = 'block';
        document.getElementById(up).style.display = 'block';
        document.getElementById(down).style.display = 'none';
    }else{
     document.getElementById(divid).style.display = 'none';
     document.getElementById(down).style.display = 'block';
     document.getElementById(up).style.display = 'none';
   }
 }
