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

export function toggleClass(elem, className) {
    elem.classList.add(className)
    Array.from(elem.parentNode.children).forEach(child => {
        if (child !== elem) {
            child.classList.remove('weui-bar__item_on')
        }
    })
}

export function changeObjects(originalData, newData) {
    const keys = Object.keys(originalData)
    keys.forEach(key => {
        let tmp = originalData[key]
        if (Array.isArray(tmp)) {
            if (tmp.length !== 0) {
                tmp.map(item => {
                    item.value = newData[key][item.name]
                    return item
                })
            } else {
                originalData[key] = newData[key]
            }
        } else {
            originalData[key] = newData[key]
        }
    })
}