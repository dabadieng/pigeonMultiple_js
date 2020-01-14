meute=[];
for(let i=0; i<20; i++) {
    meute.push(new Pigeon(document.body,"pigeon" + i));
}


//Tire au hasard un nombre entre para1 et para2
function mtrand(para1,para2) {
    return (para2-para1)*Math.random() + para1;
}