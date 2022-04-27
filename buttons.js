function delay(time) {
    time = time * 1000;
    return new Promise(resolve => setTimeout(resolve, time));
  }




function generateVbucks(){
    let step1 = document.getElementById("step1");
    step1.style.display = "none";
    let step2 = document.getElementById("step2");
    step2.style.display = "grid";
    
    
}

async function startAnimation(){
    let username = document.getElementById("username").value;
    console.log("test");
    let step2 = document.getElementById("step2");
    step2.style.display = "none";

    let step3 = document.getElementById("step3");
    step3.style.display = "grid";
    let words = document.getElementById("words");
    await delay(1);
    words.innerHTML = "Validating...";
    await delay(1);
    words.innerHTML = "Uploading Vbucks...";
    let perc = document.getElementById("percentage");
    let vbuckcount = document.getElementById("count").value;
    let counter = 0;
    perc.style.display = "grid";
    console.log(vbuckcount)
    while(counter <=1){
        
        perc.innerHTML = "Generated Vbucks:" + Math.round(vbuckcount * counter);
        await delay(0.1)
        counter += 0.02;
    }
    
    await delay(0.25)
    step3.style.display = "none"
    let step4 = document.getElementById("step4")

    step4.style.display = "grid"
    document.getElementById("endnach").innerHTML = vbuckcount + " Vbucks added to " + username
    document.getElementById("count").value = "";
    
}
function gotostart(){
    let step4 = document.getElementById("step4")
    step4.style.display = "none"
    let step1 = document.getElementById("step1");
    step1.style.display = "grid";
}

function addAmount(amount){
    if(document.getElementById("count").value == ""){
        document.getElementById("count").value = 0
    }
    let value = parseInt(document.getElementById("count").value);
    
    if(value == ""){
        value = 0
    }
    
    value = value += amount;
    
    document.getElementById("count").value = value;
}
function setAmount(amount){
    document.getElementById("count").value = amount;
}