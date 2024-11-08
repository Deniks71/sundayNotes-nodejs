import pool from "../database/connection.js";

export async function addUserEmail (req,res){
    //Pega o nome e email no body da requisição
    const {name,email} = req.body;

    //Valida os valores de nome e email.
    if(!name) {
        return res.status(422).json({msg: 'O Nome é obrigatório!'});
    };

    if(!email) {
        return res.status(422).json({msg: 'O Email é obrigatório!'});
    };

    try{
        //Query SQL para achar o email informado
        const checkEmailSql = "SELECT email FROM usuarios WHERE email = ?"

        const [emailExists] = await pool.execute(checkEmailSql,[email]);

        //Checa se o email informado já existe no banco de dadosS
        if(emailExists[0]){
            return res.status(422).json({msg:"Email ja cadastrado, por favor insira outro Email."})
        };

        const createUserSql = "INSERT INTO usuarios (`nome`, `email`) VALUES (?, ?);"
        const usuario = [name,email]

        const [result,fields] = await pool.execute(createUserSql,usuario);
        console.log(result,fields)

        return res.status(200).json({name,email});

    } catch(err){
        return res.status(400).json({msg: `Houve um erro. Segue erro: ${err}.`});
    }
}