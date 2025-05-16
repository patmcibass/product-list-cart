fetch ("./JS/data.json")
    .then(function(resp) {
        return resp.json();
    })
    .then(function(obj) {
        jsonData = obj
        obj.forEach((e) => createDiv(e))
    });


const createDiv = (obj) => {
    console.log(obj)
}