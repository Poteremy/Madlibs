const input1 = document.getElementById('input1');
const input2 = document.getElementById('input2');
const input3 = document.getElementById('input3');
const input4 = document.getElementById('input4');
const input5 = document.getElementById('input5');
const input6 = document.getElementById('input6');
const input7 = document.getElementById('input7');
const input8 = document.getElementById('input8');
const input9 = document.getElementById('input9');



submitWords = (e) => {
    e.preventDefault();
    
    const input = {
        one: input1.value,
        two: input2.value,
        three: input3.value,
        four: input4.value,
        five: input5.value,
        six: input6.value,
        seven: input7.value,
        eight: input8.value,
        nine: input9.value
    };

    localStorage.setItem('input', JSON.stringify(input));

    window.location.href="/HTML/madlib.html";

    };


