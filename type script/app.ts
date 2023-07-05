const number1= document.getElementById('num1') as HTMLInputElement ;
const number2= document.getElementById('num2') as HTMLInputElement ;
const buttonElement=document.querySelector('button')!;

type numOrString=number|string;
type objResult={val:number;timeStamp:Date};

interface resultObj{
    al:number;
    timeStamp:Date;
}

function add(num1:numOrString,num2:numOrString){
    if(typeof num1 === 'number' && typeof num2 === 'number'){
        return +num1 + +num2;
    }else if(typeof num1 === 'string' && typeof num2 === 'string'){
        return num1 + num2;
    }
}

const numResult:number[]=[];
const stringResultArray:string[]=[];

function printResult(resultObj:objResult){
    console.log(resultObj.val);
}

buttonElement.addEventListener('click',()=>{
    const num1=number1.value;
    const num2=number2.value;
    const result=add(+num1,+num2);
    numResult.push(result as number)
    const stringResult = add(num1,num2);
    //console.log(stringResult as string);
    stringResultArray.push(stringResult as string);
    printResult({val:result as number,timeStamp:new Date()});
    console.log(numResult,stringResultArray)
});