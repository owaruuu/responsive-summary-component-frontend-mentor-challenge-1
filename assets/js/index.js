$.getJSON("data.json", data => {
    $('.category-icon').each(function(index){
        this.src = data[index].icon;
    });
    
    $('.category-title').each(function(index){
        this.textContent = data[index].category;
    });

    $('.ammount').each(function(index){
        this.textContent = data[index].score;
    });    
}).fail((err) =>{
    console.log("An error has occurred. ", err);
});