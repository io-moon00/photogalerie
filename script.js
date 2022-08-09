let imiges = ['img/0.JPG', 'img/1.JPG', 'img/2.JPG', 'img/3.JPG', 'img/4.JPG', 'img/5.JPG', 'img/6.JPG', 'img/7.JPG', 
'img/8.JPG', 'img/9.JPG', 'img/10.JPG', 'img/11.JPG', 'img/12.JPG', 'img/13.JPG', 'img/14.JPG', 'img/15.JPG', 'img/16.JPG', 'img/17.JPG', 'img/18.JPG', 'img/19.JPG'];

function load(){

    for (let i=0; i < imiges.length; i++){
        document.getElementById('imiges').innerHTML += /*html*/ `
        <img onclick="showImg(${i})" class="img_style" src = ${imiges[i]}>
        `;
    }
    
}

function showImg(i){
    document.getElementById('img-container').innerHTML += /*html*/ `
    <img onclick="closeImg()" class= "close-cross" src="img/x-mark.png">
    <img class = "fullsize_img" src=${imiges[i]}>
    `;
    document.getElementById('content').classList.add('d-none');
    document.getElementById('img-container').classList.remove('d-none');
}

function closeImg(){

    document.getElementById('img-container').innerHTML = ``;
    document.getElementById('content').classList.remove('d-none');
    document.getElementById('img-container').classList.add('d-none');

}