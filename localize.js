const localMap = {
    'zh-CN': 'zh',
    'en-US': 'en'
}
function getLang () {
    return navigator.language || navigator.browserLanguage
}
function initLocalize (config, callback) {
    // callback -> need pass utils.js here - getElement
    const language = getLang()
    let L = localMap[language]
    if (L === undefined) L = 'en'
    config.forEach(item => {
        const element = callback('class', item.name)[0]
        element.textContent = item.text[L]
    })
}
