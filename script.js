//DOM html for navigation bar
document.getElementById("navMenu").innerHTML =
    `<ul> <li><a href="homepage.html">Home</a></li>
     <li><a href="search.html" >Find a Pet</a></li>
     <li><a href="information.html">Caring for a Pet</a></li>
     <li><a href="contact.html" >Contact US</a></li> </ul>`;

//eventListerner for buttons
document.addEventListener('DOMContentLoaded', bindButtons);

function bindButtons(){
    document.getElementById('pic1').addEventListener('click', function(event){
        window.open("https://www.petfinder.com");
    });

    document.getElementById('pic2').addEventListener('click', function(event){
        window.open("https://www.animalhumanesociety.org/");
    });

    document.getElementById('pic3').addEventListener('click', function(event){
        window.open("https://www.akc.org/");
    });

    document.getElementById('pic4').addEventListener('click', function(event){
        window.open("https://www.aspca.org/");
    });
}