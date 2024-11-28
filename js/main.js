var quotes =[{
            "name":"Epictetus",
            "Detail":"It's not what happens to you, but how you react to it that matters."
        },
        {
            "name":"Nelson Mandela",
            "Detail":"Resentment is like drinking poison and waiting for your enemies to die."
        },
        {
            "name":"Elbert Hubbard",
            "Detail":"Do not take life too seriously. You will not get out alive."
        },
        {
            "name":"Frank Sinatra",
            "Detail":"The best revenge is massive success."
        },
        {
            "name":"Wayne Gretzy",
            "Detail":"You miss 100% of the shots you don\'t take."
        },
        {
            "name":"Jim Rohn",
            "Detail":"Beware of what you become in pursuit of what you want."
        }
]
var lastRandom = null;
var random = 0;
function getquotes(){
    do{
        random = parseInt(Math.random()*quotes.length);
    }
    while(random == lastRandom) //لو كان الرقم نفسه فارجع جيب رقم تاني ... و لو عدد أخر ف خزنه في lastRandom
        lastRandom = random;


    console.log(random);
    document.getElementById("demo2").innerHTML=`"${quotes[random].Detail}"`;
    document.getElementById("demo").innerHTML= `--${quotes[random].name}`;
}





//للترتيب

// var quotes =[{
//     "name":"Epictetus",
//     "Detail":"It's not what happens to you, but how you react to it that matters."
// },
// {
//     "name":"Nelson Mandela",
//     "Detail":"Resentment is like drinking poison and waiting for your enemies to die."
// },
// {
//     "name":"Elbert Hubbard",
//     "Detail":"Do not take life too seriously. You will not get out alive."
// },
// {
//     "name":"Frank Sinatra",
//     "Detail":"The best revenge is massive success."
// },
// {
//     "name":"Wayne Gretzy",
//     "Detail":"You miss 100% of the shots you don\'t take."
// },
// {
//     "name":"Jim Rohn",
//     "Detail":"Beware of what you become in pursuit of what you want."
// }
// ];

// var order = 0;

// function getquotes() {
//     if (order < quotes.length) {
//         document.getElementById("demo2").innerHTML = `"${quotes[order].Detail}"`;
//         document.getElementById("demo").innerHTML = `--${quotes[order].name}`;
//         order++;
//     } else {
//         order = 0;
//         document.getElementById("demo2").innerHTML = `"${quotes[order].Detail}"`;
//         document.getElementById("demo").innerHTML = `--${quotes[order].name}`;
//     }
// }



