const sleepTrackerFeatures = [
    { name: 'Ipsum consequat', does: 'feature 1 does...', img: ''},
    { name: 'Amed sed feugiat', does: 'feature 2 does...', img: ''},
    { name: 'Dolor nullam', does: 'feature 3 does...', img: ''}
]

let feature = document.getElementsByClassName('features_list')

function featureList(feature) {
    const li = document.createElement('li')
    const elements = `
        <span></span>
        <h3>${feature.name}</h3>
        <p>${feature.does}</p>`

    li.innerHTML = elements
    return li
}

sleepTrackerFeatures.forEach((feature) => {
    let newFeature = featureList(feature)
    feature.appendChild(newFeature)
})



