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

    $('.category-section').each(function(index){
        const categ = data[index].category.toLowerCase();
        this.classList.add(categ);
    });
}).fail((err) =>{
    console.log("An error has occurred. ", err);
});
