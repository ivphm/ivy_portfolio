'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"manifest.json": "5e19fc50abd8e9ffca95b1143df394b6",
"index.html": "623e5d1b91f846696a2eec13af029f21",
"/": "623e5d1b91f846696a2eec13af029f21",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin.json": "42b11c8bf82ac55709e96e6f67a01cdc",
"assets/assets/images/project9.png": "cbd3e1ca2e55905bd1aa9ccb7fde007e",
"assets/assets/images/project8.png": "3db1281e4aa4aa93f46a67589dd6e2a8",
"assets/assets/images/fameline3.png": "0964f0b6c47fcd1ec491cb1a0490a1ca",
"assets/assets/images/ex5.png": "3dbeed194422b340e0286b51e7e04a21",
"assets/assets/images/researchlogo1.png": "54a2f97d2054fc509b517a9431e6e00e",
"assets/assets/images/raiarender3.png": "9b2986b29cd3a789f994312695d38942",
"assets/assets/images/midwhere11.png": "a42d660726ee9b221d6b98a0b7fbf3c2",
"assets/assets/images/aigen2.png": "adcb633a9a47a9b741e43fc04b3a8132",
"assets/assets/images/ex4.png": "7579de0c4cb7e4e5082859a41af57907",
"assets/assets/images/etfc8.jpg": "9163d54efe3390249eaa5d3d5032ab8e",
"assets/assets/images/etfc14.jpg": "e968db6bce90bca7dd0a4dc837e9cc61",
"assets/assets/images/ex1.png": "7699bdd0a299cb6931ad3d4ed29eefaf",
"assets/assets/images/fcsutd10.png": "110a2537f86758a7383465b68a143005",
"assets/assets/images/clarion2.png": "94afb817c9c68078e51451d0e490dbd8",
"assets/assets/images/oriental1.png": "012149f8381dad5cf7a56bd5c6a5aae1",
"assets/assets/images/etfc3.jpg": "e37a827ca350f903b177c73035c9ce8d",
"assets/assets/images/project_2.png": "b88159ce5fe0e49c0a13415cb7148b44",
"assets/assets/images/fameline2.png": "216b725d37c82ec33b0f41487a960f3b",
"assets/assets/images/midwhere9.png": "0371045a072d653151f10661fae2dd1c",
"assets/assets/images/raia.png": "34ff4fff194e366f0865df1381b8ea8b",
"assets/assets/images/profile.jpg": "1b126413d120d465661852125224d779",
"assets/assets/images/aboutmeheader.png": "a9fb41a0698e9123ea6a43fca6060efb",
"assets/assets/images/etfc9.jpg": "3699c816d2ba12c577eed7d4538c6244",
"assets/assets/images/ex8.png": "5cb09ab889b2836954c6a0a7f7664ce9",
"assets/assets/images/midwhere12.png": "7937a335f84dbb1e675e1d7181422f26",
"assets/assets/images/aigen1.png": "a7d61f3b3d840efa8d1c9764e3c329d0",
"assets/assets/images/midwhere5.png": "9c4fde24122fa3e3c6f623951cb2125b",
"assets/assets/images/etfc1.jpg": "028fafc459585b70b19c16a7a3de06ec",
"assets/assets/images/project13.png": "7d6e7624c7993885d8167ceda1a57c8a",
"assets/assets/images/full_logo.png": "51bae6409166978db3667b3df4bf3c87",
"assets/assets/images/etfc6.jpg": "31987fed1c325f8b2476d009ffb0ff0c",
"assets/assets/images/research_3.png": "01179ac52dcf35a906c2af8748f0861d",
"assets/assets/images/home.png": "06ec2aa14fe1f46fcb316696ebe06373",
"assets/assets/images/projectsheader.png": "a05998c5ac8f6db4706ef5a99122b5f8",
"assets/assets/images/midwhere3.png": "3caf81d7fb779070f1e106a5e7e1a6ed",
"assets/assets/images/oriental2.png": "f2de68645ff4094b25be5c582809e189",
"assets/assets/images/aigen3.png": "36586d76cb6069cc69b7bfb312fb0d2b",
"assets/assets/images/fcsutd6.png": "a3620e19734173bf90f0fea2a3a2024e",
"assets/assets/images/ex2.png": "66c67d427a81aa9df33f36b72a523a04",
"assets/assets/images/experienceheader.png": "f8d3468de7e951f79cb22680e80444c6",
"assets/assets/images/etfc13.jpg": "68fb246e8376f72deea056c70d400b85",
"assets/assets/images/logo.svg": "7d622beaa1ba8dce0c35415194384cae",
"assets/assets/images/ex6.png": "124d0e57bb3ecb8396c518aac7897cab",
"assets/assets/images/fcsutd3.png": "7575fd550ca8451a8f8816d3e6fb6ef8",
"assets/assets/images/raiarender2.png": "dd5d3f6c344b147ee48a298736b9a6a2",
"assets/assets/images/project_4.png": "2570e8898f7c54816b09719128362377",
"assets/assets/images/project14.png": "345f26ca9346df9fcc18c8db7b50a3bd",
"assets/assets/images/ex9.png": "25ae0b6eeeb657bee04509d387e249b8",
"assets/assets/images/project3.png": "37ee55a4f5ad1b467f5710b08d3a0def",
"assets/assets/images/raiarender1.png": "5e4e10db9922f092dd734bd26fe1fcf7",
"assets/assets/images/fcsutd9.png": "0587bdaf2c9e632665cc44104152147f",
"assets/assets/images/camera.png": "a0252cd4ae543f28ea69e2ec29fb918d",
"assets/assets/images/fcsutd2.png": "dc1ceec0ef01764ebc0be1d98799cfc9",
"assets/assets/images/midwhere4.png": "f567df2dda23f67b6c62cbb67047749b",
"assets/assets/images/ex7.png": "077bd3e11fc0d7891886ad39a1ab65e7",
"assets/assets/images/fcsutd4.png": "279aa03adc1aa1bfcb36a5c9bac10e53",
"assets/assets/images/etfc2.jpg": "723c1cc10aeec5e602acfd0d7fe452ad",
"assets/assets/images/aigen6.png": "62738472a78d4404e6d291229177ed70",
"assets/assets/images/orientalposter.png": "52fd3779e1db93e4f8c66261f470d7fe",
"assets/assets/images/project7.png": "9c27f9910534960f1d07564e12f53f80",
"assets/assets/images/etfc7.jpg": "342193798df37d563cd12cb4443064e9",
"assets/assets/images/clarion1.png": "3bbb3062ab051eb23316f740df49dfa6",
"assets/assets/images/project6.png": "4de21816b2af9ad70f7a28d7c5540ad8",
"assets/assets/images/fcsutd8.png": "643b4bb8fe75bb2af6c434b2dd45b97e",
"assets/assets/images/project5.png": "f3b80c62acdc75b8ad4557b8042eca80",
"assets/assets/images/etfc11.jpg": "056a91bb6cb84fdbe553d38f992c3610",
"assets/assets/images/logo.png": "04ec09430adfa8bfd49faeda3272a6ca",
"assets/assets/images/etfc10.jpg": "f11d7b51e4212e91bed9d4e982a79c4f",
"assets/assets/images/eyevpham.png": "e74401c5100f18ccfc8bc80f0fa4cdb9",
"assets/assets/images/midwhere2.png": "2f0102e283ab9d9979e80571937590b0",
"assets/assets/images/project_10.png": "e67adbd03b7432a356874f84494c0d08",
"assets/assets/images/fcsutd1.png": "600b20b0216547ed2ba70daa91f41f16",
"assets/assets/images/midwhere8.png": "cf66a2ced89bfe4ca84386953cdd1d95",
"assets/assets/images/midwhere10.png": "2564e617b8c8d71067ff78b45efe8936",
"assets/assets/images/midwhereposter.png": "f4ee567c85b91dc6d83670283358956a",
"assets/assets/images/midwhere7.png": "00ca459db2472decfcd2de1e28f141a8",
"assets/assets/images/project1.png": "aa8ec84c5701d958c7ea1c5996ce1e99",
"assets/assets/images/raiaposter.png": "965ac3434a49fdef31e528ea83c20bb5",
"assets/assets/images/etfc5.jpg": "0192e509cd263e0359e0d45f69fe7f1c",
"assets/assets/images/midwhere1.png": "c77d9ea05da929bf88b32eff056cbcca",
"assets/assets/images/raiaheader.png": "2baea6ed75dc567bced0fcb8a61de2e1",
"assets/assets/images/aigen4.png": "7c797cc0003ba1e035fa13bccc44b3f3",
"assets/assets/images/research_1.png": "60eb604518342e68ff44c4bd91935477",
"assets/assets/images/etfc12.jpg": "b95e4d48120cffe96de8c32318859a85",
"assets/assets/images/project11cover.png": "60eb604518342e68ff44c4bd91935477",
"assets/assets/images/fcsutd5.png": "bdd388ed42848e0c3d67296c3f158055",
"assets/assets/images/midwhere13.png": "68db5522c97b0f64ca1e5a539fa343cc",
"assets/assets/images/fameline1.png": "a10878942152a040fa617d69f1b216ff",
"assets/assets/images/midwhere6.png": "08d80e67a039741ded820fe0bbd64a9e",
"assets/assets/images/aigen5.png": "0140227d3dba7725501c08c9eb013ab7",
"assets/assets/images/raiaapp.png": "2b5d84a01010079f8aaa6fe4f5c8c710",
"assets/assets/images/research_4.png": "ff3965375cd8ee0ce8f034b23f29b135",
"assets/assets/images/research_2.png": "2a5b9d3fbfb1f3f6569d2d339688347e",
"assets/assets/images/ex3.png": "359c751738307eb4d5cfd58a7bcdaa6b",
"assets/assets/images/fcsutd7.png": "f54d9611fa9de33ef80176ae56ed68c8",
"assets/assets/images/researchlogo2.png": "6f6e490f1aba654165f4b9547b849e64",
"assets/assets/images/resumev2.png": "77ea19f72bd437f3e8a02b528db761d8",
"assets/assets/images/etfc4.jpg": "649d89420723f6ea21e20eb1b1cdfed3",
"assets/assets/fonts/glacial-indifference/GlacialIndifference-Bold.otf": "070a9269082474ecd06b6d64ebd0fa2f",
"assets/assets/fonts/glacial-indifference/GlacialIndifference-Regular.otf": "008080d5594fd00507fc8a2c93443d39",
"assets/fonts/MaterialIcons-Regular.otf": "2d049c67aed0b21377dbf6daeebc8e25",
"assets/NOTICES": "2e6be545633f34f30b1eb218deb59ea4",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "a6fb3caddf07684faeafee6849f03a9a",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "3ca5dc7621921b901d513cc1ce23788c",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "a2eb084b706ab40c90610942d98886ec",
"assets/FontManifest.json": "f5d8fdb28f1d820f0b96beb4505e2799",
"assets/AssetManifest.bin": "35916a2402005bcb6b78f59e6cd16cfe",
"assets/AssetManifest.json": "2f2f99140f43cd103db6ab9f2db18334",
"canvaskit/chromium/canvaskit.wasm": "c054c2c892172308ca5a0bd1d7a7754b",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.js.symbols": "f7c5e5502d577306fb6d530b1864ff86",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/canvaskit.wasm": "a37f2b0af4995714de856e21e882325c",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/skwasm.wasm": "1c93738510f202d9ff44d36a4760126b",
"canvaskit/canvaskit.js.symbols": "27361387bc24144b46a745f1afe92b50",
"canvaskit/skwasm.js.symbols": "9fe690d47b904d72c7d020bd303adf16",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter_bootstrap.js": "ab318db3d691b79f6243713892ef9eb8",
"version.json": "10762b792afdbfa78995ce94f467ea69",
"main.dart.js": "8970ba3b3aa51d40f5e711e81cb664cf"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
