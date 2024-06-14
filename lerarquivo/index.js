

const fs =require('fs');

fs.readFile("lerarquivo/index.txt", (erro, conteudo)=>{
    if(erro)
    {
        console.log(erro)
    }
    else{
        console.log(String(conteudo))
    }
})