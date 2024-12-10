/* Put code for the task below */

/*
Task Description:
On the form add validation functionality that shows the form field
(or its label) as red if the field is empty.
They should turn back to white when the data is entered.
 */

function task5Checker() {
    let name = document.getElementById("fullName").value;
    let address = document.getElementById("address").value;
    let phone = document.getElementById("phone").value;
    let email = document.getElementById("email").value;

    if (name == "" || address == "" || phone == "" || email == "") {
        document.getElementById("invalidTask5").style.visibility = "visible";
    } else {
        document.getElementById("invalidTask5").style.visibility = "hidden";
    }

    if (name == "") {
        document.getElementById("nameLabel").style.color = "red";
    } else {
        document.getElementById("nameLabel").style.color = "black";
    }

    if (address == "") {
        document.getElementById("addressLabel").style.color = "red";
    } else {
        document.getElementById("addressLabel").style.color = "black";
    }

    if (phone == "") {
        document.getElementById("phoneLabel").style.color = "red";
    } else {
        document.getElementById("phoneLabel").style.color = "black";
    }

    if (email == "") {
        document.getElementById("emailLabel").style.color = "red";
    } else {
        document.getElementById("emailLabel").style.color = "black";
    }
}