var XHR = new function () {
    var notificationAjax = function (res, callback, thrownCatch) {
        try{
            if (res) {
                if (callback){
                    callback(res);
                }
            } else {
                Swal.fire({
                    title: "Fail",
                    html: res ? res : "Call don't return result",
                    type: 'error',
                    allowOutsideClick: false
                });
            }
        }
        catch{
            if (thrownCatch){
                thrownCatch();
            }
        }
    };

    this.executeAjax = function (target, prms, callback, thrownCatch, always) {
        $.ajax({
            url: target,
            type: 'post',
            contentType: "application/json; charset=utf-8",
            datatype: 'json',
            data: (prms) ? JSON.stringify(prms) : null,
            async: true
        })
            .done(function (res) {
                notificationAjax(res.d, callback, thrownCatch);
            });
    };
}
