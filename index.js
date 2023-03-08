//to uppercase
function shout(string){
    return string.toUpperCase();
}
shout("Hello");


//to lowercase
function whisper(string){
    return string.toLowerCase();
}
whisper("Hello");



//logs it all in caps using console.log
function logShout(string){
    let spy = string.toUpperCase(); 
    console.log(spy);
}
logShout("Hello"); 


//logs it all in lowercase using console.log
function logWhisper(string){
    let spy = string.toLowerCase();
    console.log(spy);
}
logWhisper("Hello");


//3 conditions for the test to pass
function sayHiToHeadphonedRoommate(string){
    if (string === string.toLowerCase()){
        return "I can't hear you!";  
    } else if (string === string.toUpperCase()){
        return "YES INDEED!"; 
    } else if (string === "Let's have dinner together!"){
        return "I would love to!";
    }
}