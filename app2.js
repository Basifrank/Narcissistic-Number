const myFunction = () => {
    //const nasNum = document.querySelector('[nars-Num]>input:nth-child(1)')
    const nasNum = document.getElementById("Number").value
///convert to interger
    const nasInt = parseInt(nasNum)
    const arrayOfDigits = Array.from(String(nasNum), Number);

    const numLength = arrayOfDigits.length

    let numA = 0;
    var i;
    for (i = 0; i < numLength; i++) {
        let text = Math.pow(arrayOfDigits[i], numLength)
        numA = numA + text
  }
    if (numA===nasInt) {
        alert("Number is a Narcissistic number")
}
    else{
        alert("Number is not a Narcissistic number")
}

}
