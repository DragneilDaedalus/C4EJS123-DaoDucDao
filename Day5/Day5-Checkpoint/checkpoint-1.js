//1) Create a random number from 0 to 1
{
    let random = Math.random().toFixed(2);
    console.log(random)
}

//2) Randomly pick an item from an array
{
   let arr = [8 , 5 , 9 , 3 , 1 , 2 , 6];
   let random = Math.floor(Math.random()*arr.length);
   console.log(arr[random]);
}
//3) Create  quizzes
    const quiz = [
        {
            question : "Who is Daedalus?",
            answer:[ 'A architect' , 'A soldier', 'A farmer' , 'A king' ],
            'right answer' : 1,
        },
        {
            question : 'Who is Quentin Taratino',
            answer : [ 'A actor', 'A director', 'A businessman', 'A stunman'],
            'right answer' : 2,
        },
        {
            question : 'Who is Freddrick Zoller',
            answer : ['A soldier', 'A movie star', 'A farmer', 'A bartender'],
            'right answer' : 1,
        },
        {
            question : 'Who is Diep Tri Thu',
            answer : [ 'A thug', 'A bussinessman', 'A martial art fighter', 'A fisherman'],
            'right answer' : 1,
        },
    ];    
//4-5-6-7) 

{
    let random = Math.floor(Math.random()*quiz.length);
    let altstr = '';
    let useranswer;
    let point = 0;
    let originallength = quiz.length;
    const availans = [  1 , 2 , 3 , 4 ];
    for( let i =quiz.length ; i > 0 ; i--){
            altstr += quiz[random].question + '\n';
            for( let j = 0 ; j < quiz[random].answer.length ; j++){  //we would have a uncaught type error here if we use <=, so best is <
                altstr += j+1 + '. ' + quiz[random].answer[j] + '\n';
            }
            if(quiz.length == 0){
                alert('Out of questions!');
            } else {
                useranswer = Number(prompt(altstr));
            }
            while(!availans.includes(useranswer)){
                alert('Invalid answer');
                useranswer = Number(prompt(altstr));
            }
            if( useranswer === quiz[random]['right answer']){
                alert ('The answer is correct!');
                point ++;
            } else {
                alert('The answer is not correct!')
            }
            quiz.splice(random , 1);
            random = Math.floor(Math.random()*quiz.length);
            altstr = '';
        }
        alert(`You answered ${point} out of ${originallength} questions!`)
}
