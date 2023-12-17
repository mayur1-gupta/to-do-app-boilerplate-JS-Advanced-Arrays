var input=document.getElementById("input")
var button=document.getElementById("button")
var todolist=document.getElementById("todolist")


button.onclick=cliick

todolistarr=[]
function cliick(){
    todolistarr.push(input.value)
    input.value=" ";
    console.log(todolistarr);
    showlist();
}  

function showlist(){
    todolist.innerHTML=" ";

        todolistarr.forEach(function (n, i) {
        todolist.innerHTML +=
            "<li>"+
            n +
            "<a onclick='editItem("+
            i +
            ")'>Edit</a>" + 
            "<a onclick='deleteItem(" +
            i +
            ")'>&times | </a></li>";
    });

}


function deleteItem(i){
    todolistarr.splice(i,1)
    showlist();
}

function editItem(i){
    var newvalue = prompt("please insert your new value");
    todolistarr.splice(i, 1 , newvalue);
    showlist();
}