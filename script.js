        let hrs=document.getElementById("hrs");
        let min=document.getElementById("min");
        let sec=document.getElementById("sec");

        setInterval(()=>{
    //    a variable which holds the current timing
       let currentTime = new Date();
  //  the updated timing in hr min and sec
    hrs.innerHTML = (currentTime.getHours()<10?"0":"")+currentTime.getHours();
    min.innerHTML = (currentTime.getMinutes()<10?"0":"")+currentTime.getMinutes();
    sec.innerHTML = (currentTime.getSeconds()<10?"0":"")+currentTime.getSeconds();
    // 1000 mili sec = 1 sec
        },1000);