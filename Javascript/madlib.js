const madText = document.getElementById('madText');
const input = JSON.parse(localStorage.getItem('input')) || [];

const pageTitle = document.getElementById('pageTitle')
const parseTitle = JSON.parse(localStorage.getItem('madTitle'))



madText.textContent = /*highlightText*/`There once was a princess named ${input.one} who was very ${input.two}
        and lived in a castle filled with ${input.three}. 
        She loved to ${input.four} in the early morning with her friend, ${input.five}. 
        One day, there was a very bad storm, and ${input.six} fell from the sky with force. 
        One of the ${input.six} hit ${input.one} on the head, but just missed ${input.five}. 
        ${input.one} was rushed to ${input.seven} where she received lots of ${input.eight}. 
        They tried sticking one of the ${input.eight} in ${input.one}’s ${input.nine}. The end.`


     
/* Trying to figure out how to use this to bold the words in the above paragraph when displayed

function highlightText (strings, ...values){
    let str = '';
    for (var i = 0; i < strings.length; i++){
        if (i > 0){
            str += `<b>${values[i-1]}</b>`
        }
            str += strings[i]
    }
        return str;
}


I also want to figure out how to create another page that can create a template.
- user presses a button to create a new input 
- when the new input is created, they set the placeholder text by typing it in the new input
- user writes out the story, and somehow is able to denote where the input words belong in the output text

*/







