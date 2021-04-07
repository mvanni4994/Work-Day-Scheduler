$(document).ready(function(){
    const currentDay = document.querySelector("#currentDay");
    currentDay.textContent = dayjs().format("dddd, MMMM D, YYYY");
    
    const currentTime = document.querySelector("#currentTime")
    let now = dayjs();
    currentTime.textContent = now.format("HH") 
    currentTime.style.display = "none"
    
    
    for (i = 0; i < 9; i++) {
        $("#0").clone().attr("id", i+1).appendTo(".extras")
    }
    var allRows = $(".row")
    var timeText = document.querySelectorAll("#time")
    var timeBlock = document.querySelectorAll(".time-block")
    
    for ( i=0; i < allRows.length; i++) {
        var time = dayjs("2020-12-06T09:00:00")
        timeText[i].textContent = dayjs(time).add(i, 'hour').format("HH")
        if (timeText[i].textContent === currentTime.textContent) {
            timeBlock[i].classList.add("present")
        } else if (timeText[i].textContent < currentTime.textContent) {
            timeBlock[i].classList.add("past")
        } else if (timeText[i].textContent > currentTime.textContent) {
            timeBlock[i].classList.add("future")
        }     
    }
    
    var currentRow = 0
        $(".saveBtn").on("click", function(event) {
            event.preventDefault();
            currentRow = parseInt(event.target.parentElement.id);
            var task = document.querySelectorAll(".task");
            var input = task[currentRow].value;
            task[currentRow] += localStorage.setItem(currentRow, JSON.stringify(input))
            });
    
        var writtenTask = document.querySelectorAll(".task");
    
        setTasks();
    
        function setTasks() {
        for (i = 0; i < allRows.length; i++) {
            writtenTask[i].textContent = JSON.parse(localStorage.getItem(i))
        } 
        }
    });