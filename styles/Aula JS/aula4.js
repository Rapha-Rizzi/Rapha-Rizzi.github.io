let senha = (prompt('digite sua senha'));
if (senha.length < 8) {
    document.getElementById('primeiro').innerHTML = 'voce digitou uma senha curta';
}
document.getElementById('senha').innerHTML = `${senha}`;


for (let i = 0; i < senha.length; i++) {

    if (senha[i] == '@') {
        console.log('você digitou o @');
    }
    else if (senha[i] == '#') {
        console.log('você digitou o #');
    }
    else if (senha[i] == '$') {
        console.log('você digitou o $');
    }
    else if (senha[i] == '%') {
        console.log('você digitou o %');
    }
    else if (senha[i] == '&') {
        console.log('você digitou o &');
    }
    else if (senha[i] == '#') {
        console.log('você digitou o #');
    }
    else {
        console.log('voce digitou uma letra')
    }
    console.warn(`a letra referente senha é ${senha}`
}

