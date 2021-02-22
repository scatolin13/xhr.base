var xhrs = new function () {
    this.GetById = function (prms, callback) {
        XHR.executeAjax('endpoint-webservice/GetByid', { Id: prms }, callback);
    };

    this.Save = function (prms, callback) {
        XHR.executeAjax('endpoint-webservice/RetornarEpiEntrega', callback, { object: prms });
    };
}

function GetById(){
    let id = 123;

    xhrs.GetById(id, function(res){
        CreateGrid(res);
    })
}

function Save(){
    let obj = {
        Name: 'Claudio Scatolin',
        Age: '40',
        Company: 'M2RG Solutions'
    };

    xhrs.Save(obj, function(){
        alert('Save success');
    })
}

function CreateGrid(data){
    // function for populate table
}