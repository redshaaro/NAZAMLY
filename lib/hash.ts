const bcrypt = require('bcrypt')
export default function hash(password) {
    return bcrypt.hash(password, 10).then(function (hash) {
        return hash
    })

}
