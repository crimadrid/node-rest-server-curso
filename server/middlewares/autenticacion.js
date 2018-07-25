const jwt = require('jsonwebtoken');

//=====================
//Verificar Token
//=====================

let verificarToken = (req, res, next) => {
    let token = req.get('Authorization');
    jwt.verify(token, process.env.CLAVE_SECRETA, (err, decoded) => {

        if (err) {
            return res.status(401).json({
                ok: false,
                err
            })
        }

        req.usuario = decoded.usuario;
        next();
    })

}

module.exports = {
    verificarToken
}