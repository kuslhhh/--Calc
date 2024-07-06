function correctInput(){

    var correct = document.getElementById("correct").value
    var total = document.getElementById("total").value

    if(correct == "" || total == ""){
        document.getElementById("answer").style.color = "white"
        return
    }

    var roundedSolution = Math.round(((correct / total) *100) *10) /10
    document.getElementById("answer").style.color = "grey"

    if(roundedSolution >= 0 && roundedSolution < 10000){
        document.getElementById("answer").textContent = roundedSolution + "%"
    } else{
        document.getElementById("answer").textContent = "Invalid Input"
    }

}