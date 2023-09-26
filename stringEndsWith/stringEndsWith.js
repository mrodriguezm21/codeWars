function solution(str, ending){

    // return str.endsWith(ending);
    if (!ending) {
        return true
    }
    return str.substr(-ending.length) == ending
}

solution('abc', '') // returns false