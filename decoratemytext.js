window.onload = function(){
    
document.getElementById("decorateBy").onclick = function decorateByButton(){

    // window.alert("Hellow World");
    document.getElementById("bigdecor").style.fontWeight = "bold";

    var size = parseInt($("#bigdecor").css("font-size"));
    var newsize = size + 2 + "px";
    $("#bigdecor").css("font-size", newsize ); 
   
}

document.getElementById("pigLatinButton").onclick = function() {
    
    let pigLatin ="";
    let nword = "";
    let newValue = document.getElementById('bigdecor').value;
	var lstring = document.getElementById('bigdecor').value;
    for(let i = 0; i < lstring.length; ++i) {
        let ch = lstring.charAt(i);
        nword += ch;
        if(ch == ' ' || ch == '\n' || i >= lstring.length-1) {
            pigLatin = checkLatinPigWord(nword.trim())
            newValue = newValue.replace(nword.trim(), pigLatin);

            nword = "";
        }
    }
    document.getElementById('bigdecor').value = newValue;
};

function checkLatinPigWord(str)
{
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let newStr = "";
    if (vowels.indexOf(str.charAt(0)) > -1) {
        newStr = str + "ay";
        return newStr;
    } else {

        newStr = str.substring(1,str.length) + str.charAt(0) + "ay";
        return newStr;
    }
}

document.getElementById("bling").onchange = function decorateByCheckbox(){ // Jquery checking for detecting weather checkbox checked or not 

   if ($("#bling").prop("checked")){

    document.getElementById("bigdecor").style.fontWeight = "bold";
    document.getElementById("bigdecor").style.color= "green";
    document.getElementById("bigdecor").style.textDecoration = "underline";
    document.body.style.background = "url('images/hundred-dollar-bill.jpg')";

   }
   else
   {
    document.getElementById("bigdecor").style.fontWeight = "normal";
    document.body.style.background = "url('')";
   
   }

}


// another way of assigning on click listhner to a button using EventListener
document.getElementById("malkovich").addEventListener("click", function() {

    let nword = "";
    let newValue = document.getElementById('bigdecor').value;
	var lstring = document.getElementById('bigdecor').value;
	for(var i = 0; i < lstring.length; i++){
        var ch = lstring.charAt(i);
        nword+= ch;

        if(ch == ' ' || i >= lstring.length-1)
        {
            if (nword.trim().length >= 5)
            {
                newValue = newValue.replace(nword, "Malkovich ");
               
                nword = "";
            }
            else
            {
                nword = "";
            }
        }
		
	}

   document.getElementById('bigdecor').value = newValue;
	
  });

function decorateByCheckbox1(checbx){ //  another way of detecting checkbox using self object

    if (checbx.checked == true){

        document.getElementById("bigdecor").style.fontWeight = "bold";
        document.getElementById("bigdecor").style.color= "green";
        document.getElementById("bigdecor").style.textDecoration = "underline";

    }
    else
    {
    document.getElementById("bigdecor").style.fontWeight = "normal";
    }

}

// another way of assigning on click listhner to a button

// document.getElementById("malkovich").onclick= function MalkovichReplace(){
	
//     let nword = "";
//     let newValue = document.getElementById('bigdecor').value;
// 	var lstring = document.getElementById('bigdecor').value;
// 	for(var i = 0; i < lstring.length; i++){
//         var ch = lstring.charAt(i);
//         nword+= ch;

//         if(ch == ' ' || i >= lstring.length-1)
//         {
//             if (nword.trim().length >= 5)
//             {
//                 newValue = newValue.replace(nword, "Malkovich ");
               
//                 nword = "";
//             }
//             else
//             {
//                 nword = "";
//             }
        
       

//         //newValue += nword;
        
//         }
		
// 	}

//    document.getElementById('bigdecor').value = newValue;
	
// }

}


