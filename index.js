const sum = document.getElementById("sum")
const tenge = document.getElementById("tenge");



function convert(elem, target, isTrue) {
    elem.addEventListener("input", () => {
        const request = new XMLHttpRequest();
        request.open("GET", "data.json");
        request.setRequestHeader("Content-type", "application/json");
        request.send()

        request.addEventListener("load", () => {
            const response = JSON.parse(request.response);
            if(isTrue) {
                target.value = (+elem.value / response.tenge)
            } else {
                target.value = (+elem.value * response.sum)
            } 
            elem.value === "" ? (target.value = "") : null;
        })   
    })
}

convert(sum, tenge)


// SECOND



function convert(elem, target, isTrue) {
    elem.addEventListener("input", () => {
        const request = new XMLHttpRequest();
        request.open("GET", "data.json");
        request.setRequestHeader("Content-type", "application/json");
        request.send()

        request.addEventListener("load", () => {
            const response = JSON.parse(request.response);
            if(isTrue) {
                target.value = (+elem.value / response.sum)
            } else {
                target.value = (+elem.value * response.sum)
            }
    
            elem.value === "" ? (target.value = "") : null;
        })   
    })
}

convert(tenge, sum, 1)