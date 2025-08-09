//for a given string teel me whether it has even number of characters or not

function evenSizedString(str){
    const size = str.length;
    if(size%2 ===0){
        console.log('even Size')
        return true;
    }
    else{
        console.log('odd size')
        return false;
    }
    console.log(str, size)
}

// evenSizedString('dhaka');
// evenSizedString('haka');

function doubleOrnot(number, doDouble){
    if(doDouble === true){
        const result = number*2
        return result
    }
    else{
        const result = number * 3;
        return result;
    }
}
// console.log (doubleOrnot(5 , true));
// console.log (doubleOrnot(5 , false));

function numberOfElements(numbers){
    const length = numbers.length;
    return length;
}

// numberOfElements([12, 34, 45, 46, 67, 78])

function getAge(person){
    const age = person.age;
    return age;
}

