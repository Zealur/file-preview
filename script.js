
Init();

function UpdateFocusedSearchBar(){
    if(document.getElementById("search-box") === document.activeElement || document.getElementById("search-button") === document.activeElement){
        document.getElementById("search-bar").style.opacity = 1;
        document.getElementById("search-bar").style.transform = "scale(1.05)";
    }       
    else{
        document.getElementById("search-bar").style.opacity = null;
        document.getElementById("search-bar").style.transform = "";   
    }
}

function Search(){
    SimpleSearchInGoogle(document.getElementById("search-box").value.toString());
}

function Init(){
    document.getElementById("search-button").onclick = Search;
    UpdateClock(); //początkowa inicjacja
    UpdateDate();
    document.addEventListener("focusin", UpdateFocusedSearchBar);
    document.addEventListener("focusout", UpdateFocusedSearchBar);
    setInterval(UpdateClock,1000);    
}

function UpdateClock(){
    var date = new Date();
    document.getElementById("clock").textContent = ('0' + date.getHours()).slice(-2).toString() + ":" +('0' + date.getMinutes()).slice(-2).toString();          
    document.getElementById("clock").setAttribute("data-content",('0' + date.getSeconds()).slice(-2).toString());
}

function UpdateDate(){
    var date = new Date();
    document.getElementById("date").textContent = TranslateWeekDay(date.getDay())
        + " " + ('0' + date.getDate()).slice(-2).toString() + "." + ('0' + (date.getMonth()+1)).slice(-2) + "." + date.getFullYear();
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
        case 0:
            return "Niedziela";
        default:
            break;
    }
    
}

function SimpleSearchInGoogle(text){
    window.location.href ="https://www.google.pl/search?q=" + text;
}