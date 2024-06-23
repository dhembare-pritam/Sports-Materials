// document.getElementById("pritam").addEventListener("click",sample)
// function sample(){
//     document.getElementById("demo").style.display="inline";
// }

// document.getElementById("imgr").addEventListener("click",sample1)
// function sample1(){
//     document.getElementById("demo").style.display="none";
// }

$("#pritam").click(sample)
  function sample(){
    $("#demo").slideDown(2000)
  }
  $("#imgr").click(sample1)
  function sample1(){
    $("#demo").slideUp(2000)
  }

  $("#fill").click(sample2)
  function sample2(){
    $("#frmd").show(2000)
  
  }
  $("#removed").click(sample3)
  function sample3(){
    $("#frmd").hide(2000)
  }

  $("#meta").click(sample4)
  function sample4(){
    $("#searched").show(2000)
  
  }
  
  document.getElementById("frm").addEventListener("submit",pritam)
      function pritam(event){
       var fname = document.getElementById("txt").value;
       var lname = document.getElementById("txt1").value;
       var email = document.getElementById("txt2").value;
       var number = document.getElementById("txt3").value
       if(fname==""){
           document.getElementById("sp").style.display="inline";
       }
       else{
           document.getElementById("sp").style.display="none";
       }
       if(lname==""){
        document.getElementById("sp1").style.display="inline";
      }
      else{
        document.getElementById("sp1").style.display="none";
      }
      if(email==""){
        document.getElementById("sp2").style.display="inline";
      }
      else{
        document.getElementById("sp2").style.display="none";
      }
      if(number==""){
        document.getElementById("sp3").style.display="inline";
      }
      else{
        document.getElementById("sp3").style.display="none";
      }
      event.preventDefault();
    }

    $("#sport").mouseover(sample7)
  function sample7(){
    $(".p1").show(3000) 
    $(".v1").hide(3000) 
  }
  $("#sport").mouseout(sample8)
  function sample8(){
    $(".p1").hide(3000) 
    $(".v1").show(3000) 
  }