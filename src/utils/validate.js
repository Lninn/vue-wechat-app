export function validPassword(s) {
    const reg = /^.*(?=.{8,16})(?=.*[a-zA-Z])(?=.*\d).*$/
    return reg.test(s)
}

export function validPhone(s) {
    const reg = /^1\d{10}$/
    return reg.test(s)
}

