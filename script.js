
Init();

function Init(){
    UpdateClock(); //początkowa inicjacja
    UpdateDate();
    setInterval(UpdateClock,1000);    
}

function UpdateClock(){
    var date = new Date();
    document.getElementById("clock").textContent = date.getHours().toString() + ":" + date.getMinutes().toString();          
}

function UpdateDate(){
    var date = new Date();
    document.getElementById("date").textContent = TranslateWeekDay(date.getDay())
        + " " + date.getDate() + "." + ('0' + (date.getMonth()+1)).slice(-2) + "." + date.getFullYear();
}

function TranslateWeekDay(dayNumber){
    switch (dayNumber) {
        case 1:
            return "Poniedziałek";
        case 2:
            return "Wtorek";
        case 3:
            return "Środa";
        case 4:
            return "Czwartek";
        case 5:
            return "Piątek";
        case 6:
            return "Sobota";
        case 7:
            return "Niedziela";
        default:
            break;
    }
    
}