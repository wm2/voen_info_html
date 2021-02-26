import Vue from 'vue'
import sourceData from '@/choices.json'
import moment from 'moment'

Vue.filter('formatDateGrip', function (value) {
    console.log(value)
    console.log(value)
    console.log(value)

    // return moment(value).locale('ru').format('DD MMMM YYYY h:mm:ss')
    return moment(value).locale('ru').format('DD MMMM YYYY')
})

Vue.filter('statusParentsQFiltersDataGrip', function (value) {
    let parents_q = sourceData.parents_q
    return parents_q[value]
})

Vue.filter('statusClientFiltersDataGrip', function (value) {
    let status_q = sourceData.status_q
    return status_q[value]
})

Vue.filter('statusReportFiltersDataGrip', function (value) {
    let reportStatus = sourceData.reports_q
    return reportStatus[value]
})

Vue.filter('regionFilters', function (value) {
    let regions = sourceData.regions
    for (let i = 0; i < regions.length; i++) {
       if (regions[i].key == value){
           return regions[i].value
       }
    }
    return "Не УКАЗАНО"

})

Vue.filter('streetFilters', function (value) {
    let street = sourceData.streets
    for (let i = 0; i < street.length; i++) {
        if (street[i].key == value){
            return street[i].value
        }
    }
    return "Не УКАЗАНО"
})

Vue.filter('cityFilters', function (value) {
    let city = sourceData.cities
    for (let i = 0; i < city.length; i++) {
        if (city[i].key == value){
            return city[i].value
        }
    }
    return "Не УКАЗАНО"
})