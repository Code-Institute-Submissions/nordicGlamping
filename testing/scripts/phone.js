function phoneNumber(phonenumber) {
    var regExpNumber = /[\d]{10,}/; 
    var regExpOther = /\D/;

    if (phonenumber.match(regExpOther)){
        return false;
    }
    else {return regExpNumber.test(phonenumber);}
}