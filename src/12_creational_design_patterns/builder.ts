enum ImageFormat {
  Png = 'png',
  Jpeg = 'jpeg',
}

interface IResolution {
  width: number;
  height: number;
}

interface IImageConversion extends IResolution {
  format: ImageFormat;
}

class ImageBuilder {
  private formats: ImageFormat[] = [];
  private resolutions: IResolution[] = [];

  addPng() {
    if (this.formats.includes(ImageFormat.Png)) {
      return this; // method always returns "this"
    }
    this.formats.push(ImageFormat.Png);
    return this; // method always returns "this"
  }

  addJpeg() {
    if (this.formats.includes(ImageFormat.Jpeg)) {
      return this; // method always returns "this"
    }
    this.formats.push(ImageFormat.Jpeg);
    return this; // method always returns "this"
  }

  addResolution(width: number, height: number) {
    this.resolutions.push({ width, height });
    return this; // method always returns "this"
  }

  build(): IImageConversion[] {
    const result: IImageConversion[] = [];
    for (const resolution of this.resolutions) {
      for (const format of this.formats) {
        result.push({
          format: format,
          width: resolution.width,
          height: resolution.height,
        });
      }
    }
    return result; // return result at the end of methods chain
  }
}
// using chain
console.log(
  new ImageBuilder()
    .addJpeg()
    .addPng()
    .addResolution(100, 50)
    .addResolution(200, 100)
    .build()
);
