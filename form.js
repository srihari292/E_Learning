function jfun1(event){
    let btn = frm1.Name.value;
    event.preventDefault();
    if (btn == ""){
        alert("Please Enter Name");
        document.frm1.Name.focus();
        return false;
    }
    else{
        alert('Move Ahead');
    }
}


function calculate1(event){
    event.preventDefault();
    let math=mr1.Maths.value;
    let sci=mr1.Science.value; 
    let eng=mr1.English.value;
    let total,percentage;
    total=parseInt(math)+parseInt(sci)+parseInt(eng);
    percentage=(total/300)*100;
    mr1.Total.value=total;
    mr1.Percentage.value= percentage + '%';
}


function calculate(event){
    event.preventDefault();
    let sal=emp.salary.value;
    let per=emp.performance.value;
    let bon,tsal;

    if (per=='A'){
        bon=(30*parseInt(sal))/100;
        tsal=parseInt(sal)+bon;
        emp.bonus.value=bon;
        emp.totalsalary.value=tsal;
    }
    else if(per=='B'){
        bon=(10*parseInt(sal))/100
        tsal=parseInt(sal)+bon;
        emp.bonus.value=bon;
        emp.totalsalary.value=tsal;
    }
    else if(per=='C'){
        tsal=parseInt(sal);
        emp.bonus.value='No Bonus';
        emp.totalsalary.value=tsal;
    }
}

function quiz(event){
    event.preventDefault();
    let op1=document.getElementsByClassName( 'op1');
    let op2=document.getElementsByClassName( 'op2');
    let r1=document.getElementById('inlineRadio11').checked;
    let r2=document.getElementById('inlineRadio22').checked;
    let score=0;
    if(r1 && r2){
       score+=4;
       alert(score);
    }
    else if (r1 || r2) {
        score+=2;
        alert(score);
    }
    else{
        alert("Wrong")
    }

}


function instruct(event){
    event.preventDefault();
    window.open('pop.html','','width:50','height:50');

}