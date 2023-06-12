function ocultar(obj, es){
    let div = document.querySelector(obj);
    if(es==1){
        div.style.display = 'flex';
    }else{
        div.style.display = 'none';
    };
};

function red(page){
    window.location = page;
}