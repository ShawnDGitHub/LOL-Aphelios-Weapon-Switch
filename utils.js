function getElement (type = 'id', name = 'root') {
    if (type === 'id') return document.getElementById(name)
    else if (type === 'class') {
        // HTMLCollection
        const HTMLCollection = document.getElementsByClassName(name)
        const list = [].slice.call(HTMLCollection)
        return list
    } else console.error('必须指定元素类型') // ERROR
}