//DOM(Document objec model) 

//DOM MANIPULATION : html ke kisibhi element ko change kar pana as per our need 

// 1.Slection:
var home = document.querySelector("#home"); //here home is the place where we will store our html tag ;here ive used a 'id' to select the home element

// 2. Changing CSS:
home.style.color = "red";
home.style.backgroundColor = "yellow"; // while doing dom manipulation we must always have a practice of "camelCase" writing.
home.style.fontFamily = "poppins"; 

// 3. Changing HTML
home.innerHTML = "<i>hey kiase ho</i>"; // yahape hume "innerhtml" isiliye use karna hai kyuki hum cahtehai ki hume kisi selected html element ke andar kuch bhi likhneka chance mile;IN THIS CASE: hume "hey kaise ho" likha hua milega website me 

// 4. text change :
home.textContent = "<I>hey kiase ho</I>"; // main diff innerhtml aur textcontent ka hai ki wo dono bhi html ke tags me jake kuch bhi likh sakte hai but; textchange me hum jo bhi likhenge wo as it is hume page pe dikhayi denelagega ;IN THIS CASE: hume yahape <I>hey kiase ho</I> likha hhua milega 

// 5.adding listners:
home.addEventListener('mouseenter', function(){ // yaha pe hum ek listner ki help se hover effect kr rahe hai
    home.style.color = "blue";
});
home.addEventListener('mouseleave', function(){
    home.style.color = "red";
});