/* Put code for the task below */

/*
Task Description:
On the form add validation functionality that shows the form field
(or its label) as red if the field is empty.
They should turn back to white when the data is entered.
 */

function task5Checker(){
    let name = document.getElementById("fullName").value;
    let address = document.getElementById("address").value;
    let phone = document.getElementById("phone").value;
    let email = document.getElementById("email").value;

    if (name == "" || address == "" || phone == "" || email == "")
        document.getElementById("invalidTask5").style.visibility = "visible";
    else
        document.getElementById("invalidTask5").style.visibility = "hidden";
}