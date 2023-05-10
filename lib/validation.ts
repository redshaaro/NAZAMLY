

export function checkempty(username, password, email) {

    if (!username || !password || !email) {
        return false
    } else {
        if (password < 6) {
            return false
        } else return true


    }
}
export function checkemptyLogin(username, password) {

    if (!username || !password) return false
    else return true

}
export function checkemail(email) {
    if (!email) return false
    else return true


}
export function checkuser(username) {
    if (username) return true
    else return false


}
export function checkpassword(password) {
    if (password) return false
    else return true


}



