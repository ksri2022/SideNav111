var index =0;


function changecolors(){
var colors = ['red', 'pink', 'violet', 
'yellow', 'brown', 'Orange', 'blue'];

document.getElementsByTagName("body")[0]
.style.backgroundColor = colors[index++];

console.log(index)


 
if(index > colors.length-1 ){
    index =0;
}


}