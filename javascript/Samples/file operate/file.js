window.onload = function() {
    /**
     * 上传函数
     * @param fileInput DOM对象
     * @param callback 回调函数
     */
    var getFileContent = function (fileInput, callback) {
        if (fileInput.files && fileInput.files.length > 0 && fileInput.files[0].size > 0) {
            //下面这一句相当于JQuery的：var file =$("#upload").prop('files')[0];
            var file = fileInput.files[0];
            if (window.FileReader) {
                var reader = new FileReader();
                reader.onloadend = function (evt) {
                    if (evt.target.readyState == FileReader.DONE) {
                        callback(evt.target.result);
                    }
                };
                // 包含中文内容用gbk编码
                reader.readAsText(file, 'gbk');
            }
        }
    };

    /**
     * upload内容变化时载入内容
     */
    document.getElementById('upload').onchange = function () {
        var content = document.getElementById('content');

        getFileContent(this, function (str) {
            content.value = str;
        });
    };
};