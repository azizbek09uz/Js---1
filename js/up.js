'use strict'

let numberOfSeries = prompt('Nechta serial ko`rdingiz?', '')

const seriesDB = {
    count: numberOfSeries,
    series:{},
    actors:{},
    genres:[],
    private:false
}

let savol1 = prompt("Oxirgi ko`rgan serialingiz?", '')
let savol2 = prompt("Nechi baxo berasiz?", '')
let savol3 = prompt("Oxirgi ko`rgan serialingiz?", '')
let savol4 = prompt("Nechi baxo berasiz?", '')

seriesDB.series[savol1] = savol2
seriesDB.series[savol3] = savol4

console.log(seriesDB)