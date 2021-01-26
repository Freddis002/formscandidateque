
function selectEtoileA(aEtoiles, bUnselect, iNote, sClassSlelected){
    for(var h = 0; h < aEtoiles.length; h++) {
      let oClass = aEtoiles[h].classList;
      if(bUnselect==false && h <= iNote - 1 ){//
        oClass.add(sClassSlelected);
      }else{
        oClass.remove(sClassSlelected);
      }
    }//for
  }//fct
  
  function selectEtoileTemp(oEvent){
    var oEl = oEvent.currentTarget,
        oFormExempleA =  oEl.parentNode,
        aEtoilesExempleA = oFormExempleA.getElementsByClassName('etoile'),
        sClassSlelected = 'gold';
    selectEtoileA(aEtoilesExempleA, false, (oEvent.type == 'mouseleave')? oFormExempleA.note.value:oEl.iNote, sClassSlelected);
  }//fct
  
  function selectEtoileB(oEvent){
    var oEl = oEvent.currentTarget,
        sClass = "selected"; 
    if(oEvent.type == 'mouseleave'|| oEvent.type == 'touchend'){
      oEl.classList.remove(sClass);
    }else{
      oEl.classList.add(sClass);
    } 
  }//fct