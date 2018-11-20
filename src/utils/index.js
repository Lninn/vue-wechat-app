export function param2Obj(url) {
    const search = url.split('?')[1]
    if (!search) {
        return {}
    }
    return JSON.parse(
        '{"' +
        decodeURIComponent(search)
            .replace(/"/g, '\\"')
            .replace(/&/g, '","')
            .replace(/=/g, '":"') +
        '"}'
    )
}

export function combinaArray(originalArray = [], dataArray = []) {
    const originalData = originalArray.slice().sort((a, b) => a.name[0].localeCompare(b.name[0]))
    const ArrayData = dataArray.slice().sort((a, b) => a.name[0].localeCompare(b.name[0]))
    const result = originalData.map((item, i) => {
        return Object.assign({}, item, ArrayData[i])
    })

    return result
}

export function getRandomInt(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1)) + min
}
