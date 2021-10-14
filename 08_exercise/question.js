var quiz=[
    {question:" What does HTML stands for",
     answers: ["Hyper Text Markup Language","What does HTML stand for?","Hyper Text Markup Language"],
     correctAnswer: "1"},
     {question:" Home Tool Markup Language",
     answers: ["Hyper Text Markup Language","What does HTML stand for?","Hyper Text Markup Language"],
     correctAnswer: "1"},
     {question:" Home Tool Markup Language",
     answers: ["Hyper Text Markup Language","What does HTML stand for?","Hyper Text Markup Language"],
     correctAnswer: "1"},
     {question:" Home Tool Markup Language",
     answers: ["Hyper Text Markup Language","What does HTML stand for?","Hyper Text Markup Language"],
     correctAnswer: "1"},
     {question:" Home Tool Markup Language",
     answers: ["Hyper Text Markup Language","What does HTML stand for?","Hyper Text Markup Language"],
     correctAnswer: "1"}
     
    ]
    let main=document.querySelector("main");
for(let i=0;i<quiz.length; i++){
    let label=document.createElement("label");
    label.textContent = quiz[i].question;
    main.appendChild(label);
    
    

for(let x=0;x<quiz[i].answers.length;x++){
    let list=document.createElement("li");
    list.textContent = quiz[i].answers[x];
    
    let checkBox=document.createElement("input");
     checkBox.type="checkbox";

    list.appendChild(checkBox);
    main.appendChild(list);

    
}}


   
    
    
    
    