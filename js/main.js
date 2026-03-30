function convertDoller(){
    var doller =document.getElementById("doller").value;
    var result =document.getElementById("result");

    result.innerHTML = doller*55;

    if(doller==""){
        result.innerHTML = "Enter Data";
        return false;
    }else if(isNaN(doller)){
        result.innerHTML = "Enter Number Not Text";
        return false;
    }else if (doller<0){
        result.innerHTML = "Enter Postive Number";
        return false;  
    }else if (doller==0){
        result.innerHTML = "Enter Number Rether Than Zero"
        return false;
    }else{
        result.innerHTML = doller *55 + "Egyption Pound"
        return false;
     }
}