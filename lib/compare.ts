const bcrypt = require('bcrypt')

export default function isSame(unhashed, hashed) {
    return bcrypt.compare(unhashed, hashed).then(function (result) {
        return result
    })

}