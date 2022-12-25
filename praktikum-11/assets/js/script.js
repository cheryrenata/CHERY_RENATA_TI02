// tangkap elemen a 
document.querySelectorAll('#option a').forEach((anchor) => {
    anchor.onclick = (element) => {
        computerChoice(element);
    }
});

function computerChoice(element){
    // menangkap element pilihan komputer
    let pilihankomputer = document.querySelector('#result');

    // menangkap element pilihan user
    let pilihanUser = element.target.innerText

    // membuat sebuah array untuk pilihan komputer
    let choices = ['Rock', 'Paper', 'Scissor'];

    // membuat pilihan random untuk komputer
    pilihankomputer.innerHTML = choices[Math.round(Math.random() * choices.length)];
    pilihankomputer = pilihankomputer.innerHTML;

    // let pilihankomputer = choices[Math.round(Math.random() * choices.length)];
    
    // jika pilihan seri atau draw
    if(pilihanUser == pilihankomputer){
        alert('DRAW')
    }

    // Pilihan jika user menang
    if (pilihanUser == 'Rock' && pilihankomputer == 'Scissor'){
        alert('YOU WIN');
    } else if ( pilihanUser == 'Paper' && pilihankomputer == 'Rock'){
        alert('YOU WIN')
    } else if ( pilihanUser == 'Scissor' && pilihankomputer == 'Paper'){
        alert('YOU WIN')
    }

    // Pilihan jika user kalah
    if (pilihanUser == 'Scissor' && pilihankomputer == 'Paper'){
        alert('YOU LOSE');
    } else if ( pilihanUser == 'Rock' && pilihankomputer == 'Paper'){
        alert('YOU LOSE')
    } else if ( pilihanUser == 'Paper' && pilihankomputer == 'Scissor'){
        alert('YOU LOSE')
    }


}