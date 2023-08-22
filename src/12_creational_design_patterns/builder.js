var ImageFormat;
(function (ImageFormat) {
    ImageFormat["Png"] = "png";
    ImageFormat["Jpeg"] = "jpeg";
})(ImageFormat || (ImageFormat = {}));
var ImageBuilder = /** @class */ (function () {
    function ImageBuilder() {
        this.formats = [];
        this.resolutions = [];
    }
    ImageBuilder.prototype.addPng = function () {
        if (this.formats.includes(ImageFormat.Png)) {
            return this; // method always returns "this"
        }
        this.formats.push(ImageFormat.Png);
        return this; // method always returns "this"
    };
    ImageBuilder.prototype.addJpeg = function () {
        if (this.formats.includes(ImageFormat.Jpeg)) {
            return this; // method always returns "this"
        }
        this.formats.push(ImageFormat.Jpeg);
        return this; // method always returns "this"
    };
    ImageBuilder.prototype.addResolution = function (width, height) {
        this.resolutions.push({ width: width, height: height });
        return this; // method always returns "this"
    };
    ImageBuilder.prototype.build = function () {
        var result = [];
        for (var _i = 0, _a = this.resolutions; _i < _a.length; _i++) {
            var resolution = _a[_i];
            for (var _b = 0, _c = this.formats; _b < _c.length; _b++) {
                var format = _c[_b];
                result.push({
                    format: format,
                    width: resolution.width,
                    height: resolution.height,
                });
            }
        }
        return result; // return result at the end of methods chain
    };
    return ImageBuilder;
}());
// using chain
console.log(new ImageBuilder()
    .addJpeg()
    .addPng()
    .addResolution(100, 50)
    .addResolution(200, 100)
    .build());
