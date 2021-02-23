var XHR = new function () {
    var notificationAjax = function (data, callback) {
        if (data) {
            if (callback){
                callback(data);
            }
        } else {
            Swal.fire({
                title: "Fail",
                html: data ? data : "Call don't return result",
                type: 'error',
                allowOutsideClick: false
            });
        }
    };

    this.executeAjax = function (target, prms, callback, failed, always) {
        $.ajax({
            url: target,
            type: 'post',
            contentType: "application/json; charset=utf-8",
            datatype: 'json',
            data: (prms) ? JSON.stringify(prms) : null,
            async: true
        })
            .done(function (data) {
                notificationAjax(data.d, callback);
            })
            .fail(function(data){
                failed(data);
            })
            .always(function(dataOrjqXHR, textStatus, jqXHRorErrorThrown){
                always(dataOrjqXHR, textStatus, jqXHRorErrorThrown);
            });
    };
}
