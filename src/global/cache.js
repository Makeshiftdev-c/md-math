import ButtonEncodings from "../src/global/encodings";

const imagesUrlAssets = [];

ButtonEncodings.math.forEach((asset) => imagesUrlAssets.push(asset.url));

this.addEventListener("install", function (event) {
  event.waitUntil(
    caches.open("v1").then(function (cache) {
      return cache.addAll(imagesUrlAssets);
    })
  );
});
