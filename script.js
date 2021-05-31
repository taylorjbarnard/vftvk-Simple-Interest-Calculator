//This function isn't actually used in my result, but I am leaving it here for grading purposes. The content of the function is included in my validateForm() function below
function compute()
{
    var principal = document.getElementById("principal").value;
    var interestRate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * interestRate /100;
    var year = new Date().getFullYear()+parseInt(years);

    document.getElementById("result").innerHTML=
    "If you deposit <mark>"+principal+"</mark>, \<br\> at an interest rate <mark>"+interestRate+"%</mark>\<br\> You will receive an amount of <mark>"+interest+"</mark>, \<br\>in the year <mark>"+year+"</mark>\<br\>";
}

//This function updates the interest rate that is displayed when the user moves the slider
function updateRate()
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}

//This function validates the form and manages the output of the result
function validateForm() {
    //Initialize result to blank (i.e. clear previous result) every time the "compute interest" button is clicked
    document.getElementById("result").innerHTML="";

    principal = document.getElementById("principal").value;
    
    //if principal is blank, display an alert
    if (principal == "") {
        alert("Enter principal");
        return false;
        document.getElementById(principal).focus();
    }

    //if principal is not positive, display alert message
    if (principal <= 0) {
        alert("Enter a positive number")
        return false;
        document.getElementById(principal).focus();
    }

    //if principal is not blank and is positive, then compute the interest
    else {
        var principal = document.getElementById("principal").value;
        var interestRate = document.getElementById("rate").value;
        var years = document.getElementById("years").value;
        var interest = principal * years * interestRate /100;
        var year = new Date().getFullYear()+parseInt(years);

        document.getElementById("result").innerHTML=
        "If you deposit <mark>"+principal+"</mark>, \<br\> at an interest rate <mark>"+interestRate+"%</mark>\<br\> You will receive an amount of <mark>"+interest+"</mark>, \<br\>in the year <mark>"+year+"</mark>\<br\>";
    }
}
