var text = document.getElementById('text');
var btn = document.querySelector('.btn');
var list = document.getElementById('list');

btn.addEventListener('click', function(){

    let paragraph = document.createElement('p');
    paragraph.classList.add('paragraph-styling');
    list.appendChild(paragraph);
    paragraph.innerHTML = text.value;
    text.value = "";


    paragraph.addEventListener('dblclick', function(){
        list.removeChild(paragraph);
    });
    
}); 

