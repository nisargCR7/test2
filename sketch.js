var inp
function  preload() {
 

}



function setup() {
 
    inp = createInput('');
    inp.input(myInputEvent);
    
  
  
}

function draw() {

  inp.style('display','inline-block')


}
function myInputEvent() {
  console.log('you are typing: ', this.value());
}
function keyPressed(){
if(keyCode===13){
inp.value('sent!!!')

}

}
