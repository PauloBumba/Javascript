const fs= require('fs')


async function LerDados()
{
  try
  {

         await fs.readFile("./Async/index.txt", function (erro,conteudo)
        {
                if(erro)
                {
                    console.log('deu erro ao tentar ler o arquivo  {}' , erro)
                }
                else{
                    console.log(String(conteudo))
                }
        })
    }
    catch(erro){
        console.log(erro)

    }
}

LerDados();