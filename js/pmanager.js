// Chiedo il nome
let name = prompt('Qualè il tuo nome???')

// Chiedo il cognome
let surname = prompt('Qualè il tuo cognome???')


// Chiedo il colore
let color = prompt('Qual è il tuo colore preferito???')

// Aggiungo il numero
let number = prompt('Qual è il numero dietro la tua postepay?')

// Do la nuova password super sicura
let password =
`
${name}${surname}${color}${number}

`

console.log(password)

document.getElementById('passShow').innerHTML=
(password)