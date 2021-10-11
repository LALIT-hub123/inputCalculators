
 
const fadd = () => {
    var num1 = document.getElementById('num1').value;
    var num2 = document.getElementById('num2').value;
    var b = parseInt(num1) + parseInt(num2) ;
    document.getElementById('result').innerHTML= b;
    

}
const fsubs = () => {
    var num1 = document.getElementById('num1').value;
    var num2 = document.getElementById('num2').value;
    var b = parseInt(num1) - parseInt(num2) ;
    document.getElementById('result').innerHTML= b;
    

}
const fmult = () => {
    var num1 = document.getElementById('num1').value;
    var num2 = document.getElementById('num2').value;
    var b = parseInt(num1) * parseInt(num2) ;
    document.getElementById('result').innerHTML= b;
    

}
const fdevs = () => {
    var num1 = document.getElementById('num1').value;
    var num2 = document.getElementById('num2').value;
    var b = parseInt(num1) / parseInt(num2) ;
    document.getElementById('result').innerHTML= b;
    

}
