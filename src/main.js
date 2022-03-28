var fs = require('fs')

const dirProjeto = './aula_01/'
const html = `<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./css/main.css">
    <title>${dirProjeto}</title>
</head>
<body>
    
<script src="./js/main.js"></script>
</body>
</html>`

if (fs.existsSync(dirProjeto)) {
    console.log('Diretório ja existe')
} else {
    //Efetua a criação do diretório
    console.log(`Criando diretorio ${dirProjeto}`)
    
    fs.mkdirSync(dirProjeto); 
    fs.appendFile(`${dirProjeto}/index.html`, `${html}`, (err) => {
        if (err) throw err
        console.log('Saved!')
    })  
}



if (fs.existsSync(`${dirProjeto}/js`)) {
    console.log('Diretório ja existe')
} else {
    //Efetua a criação do diretório
    console.log('Criando diretorio js')
    
    fs.mkdirSync(`${dirProjeto}/js`);

    fs.appendFile(`${dirProjeto}/js/main.js`, '', (err) => {
        if (err) throw err
        console.log('Saved!')
    })
}

if (fs.existsSync(`${dirProjeto}/css`)) {
    console.log('Diretório ja existe')
} else {
    //Efetua a criação do diretório
    console.log('Criando diretorio css')

    fs.mkdirSync(`${dirProjeto}/css`);

    fs.appendFile(`${dirProjeto}/css/main.css`, '', (err) => {
        if (err) throw err
        console.log('Saved!')
    })
}

