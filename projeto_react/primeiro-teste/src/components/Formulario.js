import { useState } from "react";

function Formulario(){

    function cadastroUsuario(e){
        e.preventDefault()
       // console.log(nome)
       //console.log('cadastrou um usuario')
       console.log(`Usuario ${nome} cadastrado com a senha: ${senha}`)
    }

    const [nome, setNome] = useState('anna')
    const [senha, setSenha] = useState()


    return(
        <div>
            <h1>Cadastro</h1>
            <form onSubmit={cadastroUsuario}>
                <div>
                    <label htmlFor="nome">Nome:</label>
                    <input 
                    type="text" 
                    id="nome"
                    name="nome"
                    placeholder="digite seu nome"
                    onChange={(e)=> setNome(e.target.value)}/>
                </div>
                <div>
                <label htmlFor="senha">Senha:</label>
                    <input type="passaword" 
                    id="senha"
                    name="senha"
                    placeholder="digite sua senha"
                    onChange={(e)=>setSenha(e.target.value)}/>
                </div>
                <div>
                    <input type="submit" value="cadastrar"/>
                </div>
            </form>
        </div>
    )
}

export default Formulario