






function showName(){
                var name = document.getElementById("txtFName").value;
            var surname = document.getElementById("txtLName").value;
            
            var full_name = name +" "+ surname;
            
            document.getElementById("fullName").innerHTML = full_name;
            
            }

function changeColor(){
    
    var color = "grey";
     var name = document.getElementById("txtFName").value;
     
     if (name.legth === 3) {
     color = "green";
}else if (name.length === 4){
    
    color = "black";
}else if (name.length > 4){
    
    color = "limegreen";
}
     document.bgColor = color;   
    }



function checkName(){
     var name = document.getElementById("txtFName").value;
     
     if (name.length < 3) {
        
        alert('Name Should at least be 3 characters long');
    }
}

