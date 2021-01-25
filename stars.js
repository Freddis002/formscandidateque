$NbStar=4;


function NotationSystem() {
    for(i=1;i<Nbstar+1;i++) {
        var img =document.getElementById('Star'+i);
        img.onclick=function(){alert('Vous avez donné la note de'+Name2Nb(this.id)+'.');}

        img.alt='Donner la note de '+i;

        img.src = StartOutUrl;
        img.onmouseover=function() {StarOver(this.id);};
        img.onmouseover=function() {StarOut(this.id);};
    }
}

function StarOver(Star) {
    StarNb=Name2Nb(Star);
    for(i=1;i<(StarNb*1)+1;i++) {
        document.getElementById('Star'+i).src=StarOverUrl;
    }
}