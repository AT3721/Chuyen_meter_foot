function meterToFoot(meter){
    document.getElementById("outputFoot").innerHTML = (meter * 0.305).toFixed(3) + " feet.";
}
function footToMeter(foot){
    document.getElementById("outputMeter").innerHTML = (foot * 3.279).toFixed(3) + " meters.";
}