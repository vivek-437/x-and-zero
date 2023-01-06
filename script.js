







function clear() {
    let val = document.querySelectorAll('.cell');
    val.forEach(element => {
        element.innerHTML = ' ';
        element.style.pointerEvents='auto';
        
    });
}


val = document.querySelectorAll('.cell');

// --------------------------change val--------------------------------------------

var chance = '0';

    for (const element of val) {
        var disabled = false;
        element.addEventListener('click', function () {

            if (chance == '0') {
                chance = 'x';
                if (element.innerHTML = '' == '') {
                    element.innerHTML = chance;
                    element.style.pointerEvents='none';   
                }
            }
            else {
                chance = '0';
                if (element.innerHTML = '' == '') {
                    element.innerHTML = chance;
                    element.style.pointerEvents='none';
                      }
            }
        run_after();

        }
        )}
let x=0;
let y=0;
function incX(){
    x++;
    xpoint.value=`X = ${x}`;
   

}

function incY(){
    y++;
    ypoint.value=`Y = ${y}`;
 

}



// ------------------------------------------win--------------------------------------

// --------------------------------------winning condition---------------------------------
function run_after() {
    
    let one=document.getElementById('1').innerHTML;
    let two=document.getElementById('2').innerHTML;
    let three=document.getElementById('3').innerHTML;
    let four=document.getElementById('4').innerHTML;
    let five=document.getElementById('5').innerHTML;
    let six=document.getElementById('6').innerHTML;
    let seven=document.getElementById('7').innerHTML;
    let eight=document.getElementById('8').innerHTML;
    let nine=document.getElementById('9').innerHTML;

// console.log(one);
const x='X win';
const zero='0 win';

function winx() {
    incX();
    setTimeout(()=>{
      
        alert(x);
        clear();
    }    ,50);}
function win0() {
    incY();
    setTimeout(()=>{
        
        alert(zero);
        clear();
    },50);
}



    
if (one==='x' && two==='x'  && three==='x' ) {
   winx();
}

if ( one==='0' && two==='0' && three==='0' ) {
 win0(); 
}




if ((four==='x') && (five==='x' ) &&(six==='x' ) ) {
    winx();
}

if ((four==='0') && ( five==='0') &&( six==='0') ) {
    win0();
}



if ((seven==='x' ) && (eight==='x' ) &&(nine==='x' ) ) {
    winx();
    
}
if ((seven==='0') &&  eight==='0' &&( nine==='0') ) {
    win0();
    
}



if ((one==='x') && (four==='x' ) &&(seven==='x' ) ) {
    winx();
}

if (( one==='0') && ( four==='0') &&( seven==='0') ) {
    win0();
}




if ((three==='x' ) && (six==='x' ) &&(nine==='x' ) ) {
    winx();
}
if (( three==='0') && ( six==='0') &&( nine==='0') ) {
    win0();
}



if ((two==='x' ) && (five==='x' ) &&(eight==='x' ) ) {
    winx();
}
if (( two==='0') && ( five==='0') &&( eight==='0') ) {
    win0();
}



if ((one==='x' ) && (five==='x' ) &&(nine==='x' ) ) {
    winx();
}
if (( one==='0') && ( five==='0') &&( nine==='0') ) {
    win0();
}



if ((three==='x' ) && (five==='x' ) &&(seven==='x' ) ) {
    winx();
}
if (( three==='0') && ( five==='0') &&(seven==='0') ) {
    win0();
}

if ((one==='x' ||one==='0') && (two==='x' || two ==='0') && (three==='x' || three ==='0') && (four==='x' || four==='0') && (five==='x' || five ==='0') && (six==='x' || six ==='0') && (seven==='x' || seven ==='0') && (eight==='x' || eight ==='0') && (nine==='x' || nine ==='0')  ){
    setTimeout(()=>{
        // alert('Draw');
        clear();
    },50);
}



}

