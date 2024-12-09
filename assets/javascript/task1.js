/* Put code for the task below */

/* Function to summon button upon hovering over the image */
function taskOneImgHover(){
    document.getElementById("buttonTask1").style.visibility = "visible";
}

/* Function to hide the image by clicking aforementioned button */
function taskOneButton(){
    //Used visibility hidden so it wouldn't rearrange the webpage upon disappearing
    document.getElementById("imageTask1").style.visibility = "hidden";
}