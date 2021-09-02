'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "dea1af5cc0e3225b296b7492a18dc430",
"assets/assets/fonts/Roboto-MediumItalic.ttf": "cf23e1bb619029496260760b72aebd30",
"assets/assets/fonts/Roboto-Regular.ttf": "11eabca2251325cfc5589c9c6fb57b46",
"assets/assets/images/icon/disappointed.png": "a186b9dae1fc9771bfc7c706f360d966",
"assets/assets/images/icon/Facebook_white.svg": "41799e76f2063c7a43760beced53225c",
"assets/assets/images/icon/google.png": "dcc1c44c26cff0ec35fcb5286ca17cef",
"assets/assets/images/icon/love.png": "dabea62ba80828442b61330d9c0f03d6",
"assets/assets/images/icon/Mail_white.svg": "dd0d51e83c2451ef4fb5a67f3948743f",
"assets/assets/images/icon/normal.png": "bf47cb691b8d487ee55d0f2269b9151e",
"assets/assets/images/icon/pin.png": "a56d6664ddcaaaf3fc725152ae9773cb",
"assets/assets/images/icon/Viber_white.svg": "3d83f7c1dc9b43ae7f128dac0586a78a",
"assets/assets/images/instruction/drawer.png": "cafbdc387e71cbf4b845ea0546cc2bd3",
"assets/assets/images/instruction/floor.png": "9efb993203a2514ee597ac7d459c6faf",
"assets/assets/images/instruction/locate.png": "fb2a823a160284c59a160b3d8ee447e0",
"assets/assets/images/instruction/location.png": "06db510ca28ebb8114f40657166fa312",
"assets/assets/images/instruction/locationInformation.png": "5b54ccedb52f39b1ebee25a78be3feb4",
"assets/assets/images/instruction/panorama.png": "d101fef85f44ec94aabebc60e7558c4f",
"assets/assets/images/instruction/searchBar.png": "3dcd5ea6ff916e6adbcd7c1470e23db1",
"assets/assets/images/instruction/searchBarPointer.png": "c1639a79eb79b447d02a2a9a9a87a86d",
"assets/assets/images/instruction/smartSearch.png": "636c899fdd256b7544780da6663a6a3b",
"assets/assets/images/intro/intro1.png": "6518b9237c905adb66350176c1880a5c",
"assets/assets/images/intro/intro2.png": "d218eec868242758c6800f75591a036b",
"assets/assets/images/intro/intro3.png": "712c0e4262d379422173502388b30ac5",
"assets/assets/images/intro/intro4.png": "ca74ecd40da6818986801c115db92509",
"assets/assets/images/logo/DSC.png": "8f3b852b3423c99e922f1dcacbb01200",
"assets/assets/images/logo/DSC_full.png": "0d666b76324ae0e88557863896758d7c",
"assets/assets/images/logo/DSC_pure_white.gif": "0bf552f2d9b7fd58ececa04a1c73684a",
"assets/assets/images/logo/tinyGif.gif": "c36670fcd2521ca26a374fe68523d851",
"assets/assets/images/logo/uniGO.svg": "a44aea40ae7703abee182f33b941f5c0",
"assets/assets/offlineMap/16/52455/29801.png": "1a5375ee82b42ee9b4279703961e3af4",
"assets/assets/offlineMap/16/52455/29802.png": "53c147a3d8e6ee499e51f92c46069347",
"assets/assets/offlineMap/16/52455/29803.png": "01db3ad4db4f9d602a9dc27596affd31",
"assets/assets/offlineMap/16/52456/29801.png": "715503caaecfa75df79929781e304f69",
"assets/assets/offlineMap/16/52456/29802.png": "c3f813a169a04bdae653123ce8ecc27f",
"assets/assets/offlineMap/16/52456/29803.png": "175475d8e16b00e16c51df999acdb3d9",
"assets/assets/offlineMap/16/52457/29801.png": "4a55cc63ddde1d875a038f7782f79081",
"assets/assets/offlineMap/16/52457/29802.png": "b46f491b42b29e2275ade06179242bd6",
"assets/assets/offlineMap/16/52457/29803.png": "278ad1bdffa8bfc72b964c129a4f93b2",
"assets/assets/offlineMap/17/104911/59602.png": "0a70e87615202568bc7e6654a4867185",
"assets/assets/offlineMap/17/104911/59603.png": "e1a81f66d6e26c303a709e843f5252cb",
"assets/assets/offlineMap/17/104911/59604.png": "3f829e60e65dac0263c30b10e00a1f44",
"assets/assets/offlineMap/17/104911/59605.png": "cc722cfb0e673eae3f7bd2f5b7a815b7",
"assets/assets/offlineMap/17/104911/59606.png": "eae136de4b79470da9501116cebb1520",
"assets/assets/offlineMap/17/104912/59602.png": "1e29a87eb554ed93a1eea3b933e4fe8d",
"assets/assets/offlineMap/17/104912/59603.png": "39bc912e967fdd6b493e41268f4cd531",
"assets/assets/offlineMap/17/104912/59604.png": "6d82c7119416d2c5eb6121e814c4a600",
"assets/assets/offlineMap/17/104912/59605.png": "2134e9bfed4428ddd17e3d3a13e639e1",
"assets/assets/offlineMap/17/104912/59606.png": "2a9b2ceb358ef855d646ce865dac23bf",
"assets/assets/offlineMap/17/104913/59602.png": "7179c9f407af4cfbc20430a1f0282748",
"assets/assets/offlineMap/17/104913/59603.png": "c6e695d4aea5d045208b596c2613a7d7",
"assets/assets/offlineMap/17/104913/59604.png": "7679c33373f8bf8a05b7bdd1ad206cd8",
"assets/assets/offlineMap/17/104913/59605.png": "219593c555f36c219a6ba73529ead68d",
"assets/assets/offlineMap/17/104913/59606.png": "d56ad18efc9b0215ba46973b383709f1",
"assets/assets/offlineMap/17/104914/59602.png": "5a04ac668ff7dc52ea5f8f9dd7012c1e",
"assets/assets/offlineMap/17/104914/59603.png": "aece217dc172be64e5654174e622e757",
"assets/assets/offlineMap/17/104914/59604.png": "39c561f5d4fdd05a9de2a00f69370dc2",
"assets/assets/offlineMap/17/104914/59605.png": "9455baf3782ce5d8123f341ecedd2747",
"assets/assets/offlineMap/17/104914/59606.png": "f75b1529c0f160ef7fc6b299cd79d3d0",
"assets/assets/offlineMap/18/209822/119205.png": "905bd1c983f39b1a0d148175716a3a14",
"assets/assets/offlineMap/18/209822/119206.png": "b3f2c223873b086d0d493920460465bf",
"assets/assets/offlineMap/18/209822/119207.png": "d9138cd09254210d993175d177b8e77c",
"assets/assets/offlineMap/18/209822/119208.png": "dd833cdd418fdba20db38baa20b88ef0",
"assets/assets/offlineMap/18/209822/119209.png": "64158037b0d2b9092a45049329e826ff",
"assets/assets/offlineMap/18/209822/119210.png": "ea14ab644c8264501fe08156cb513197",
"assets/assets/offlineMap/18/209822/119211.png": "c8a988c480533b4d54544bb759ac84d0",
"assets/assets/offlineMap/18/209822/119212.png": "e399705b9c9210d94c08385660938ae4",
"assets/assets/offlineMap/18/209823/119205.png": "6a92b7a538ec5cef2f1cdfc1282e49d9",
"assets/assets/offlineMap/18/209823/119206.png": "29526398c7c252898495588e56adf065",
"assets/assets/offlineMap/18/209823/119207.png": "457af6e7e5883f7d41f4854d80765fd7",
"assets/assets/offlineMap/18/209823/119208.png": "c25151c92a5022b23ff17f3b2170517b",
"assets/assets/offlineMap/18/209823/119209.png": "85219c3bad0b1a71c89476535f5dff6f",
"assets/assets/offlineMap/18/209823/119210.png": "ac9634027da9fe7465a904744875ec1f",
"assets/assets/offlineMap/18/209823/119211.png": "ad12fb8575d9dea8da6d0b032c1e9cf3",
"assets/assets/offlineMap/18/209823/119212.png": "49463cfa1b8f8d96d8c5c4ab8818b20a",
"assets/assets/offlineMap/18/209824/119205.png": "21f29585cb7be5d183f84f2ed90e4f4e",
"assets/assets/offlineMap/18/209824/119206.png": "befe0de666ee33be7266bfc0972500a4",
"assets/assets/offlineMap/18/209824/119207.png": "e768da28c0912b6ae46124e082faffb2",
"assets/assets/offlineMap/18/209824/119208.png": "84bb45fd33fcf002c14ce888e3761478",
"assets/assets/offlineMap/18/209824/119209.png": "861991d46abd5b426734a25852d41f8c",
"assets/assets/offlineMap/18/209824/119210.png": "012367afbb2219d9a5f79a3ebcd6bd7a",
"assets/assets/offlineMap/18/209824/119211.png": "9782d6f035bffa93e901d92c625ab80e",
"assets/assets/offlineMap/18/209824/119212.png": "84d1e4c37aa3bc84bee97dfe8ca9326c",
"assets/assets/offlineMap/18/209825/119205.png": "7921c08a7665302d5a5aceaf9e148cb9",
"assets/assets/offlineMap/18/209825/119206.png": "69df3f0f470ed869deb1b7a5799e6175",
"assets/assets/offlineMap/18/209825/119207.png": "3d358726c211f5702b07db1203bef8f2",
"assets/assets/offlineMap/18/209825/119208.png": "21666814272aedfd2b3bf2387564dc88",
"assets/assets/offlineMap/18/209825/119209.png": "0245c6dd21c45b7b80a06fb9e1b28c3d",
"assets/assets/offlineMap/18/209825/119210.png": "2b0e01b686e045ce93cc319abfc249fc",
"assets/assets/offlineMap/18/209825/119211.png": "e2aec1df9f273ad85b449c9433cc4375",
"assets/assets/offlineMap/18/209825/119212.png": "23e855adfc1c78f39c005485a08b2975",
"assets/assets/offlineMap/18/209826/119205.png": "ff380d1d2333bc3234580d8b9fae1f73",
"assets/assets/offlineMap/18/209826/119206.png": "1904d66149b57d35e82b29b94820256f",
"assets/assets/offlineMap/18/209826/119207.png": "ac29a487171b00ed550547d6a0320f0f",
"assets/assets/offlineMap/18/209826/119208.png": "1dd410caae9fafc56c9e9b00230b6c2b",
"assets/assets/offlineMap/18/209826/119209.png": "5ac9fb7cdbb246b2650c57a73d044835",
"assets/assets/offlineMap/18/209826/119210.png": "50fa72a5a31f36ee790465562111d4da",
"assets/assets/offlineMap/18/209826/119211.png": "a2e5da73c4a998eb8d0642b57a192c67",
"assets/assets/offlineMap/18/209826/119212.png": "5532efe5a315b3387bdda518020cda2a",
"assets/assets/offlineMap/18/209827/119205.png": "12d21535769b236ba3fd82ab56ddf53c",
"assets/assets/offlineMap/18/209827/119206.png": "a4c7b014f9bbd01835a23a86119adfda",
"assets/assets/offlineMap/18/209827/119207.png": "1cfef069b18724e4a275c577d9d9b44c",
"assets/assets/offlineMap/18/209827/119208.png": "344045a4534262c7eecff8c3bd1bb712",
"assets/assets/offlineMap/18/209827/119209.png": "9776cb6a919a6a1cfa5f14a79dbdd37e",
"assets/assets/offlineMap/18/209827/119210.png": "b85851a20aeab86a272689ec6dbf8a8f",
"assets/assets/offlineMap/18/209827/119211.png": "0418a0380f9e0e180096b746cf6612ee",
"assets/assets/offlineMap/18/209827/119212.png": "90b7cc43434de7a2fe7a10fb457842a1",
"assets/assets/offlineMap/18/209828/119205.png": "19a93eba43fb9817a67cd8797c4a9284",
"assets/assets/offlineMap/18/209828/119206.png": "7d5f70ffadde7e3684787df214660029",
"assets/assets/offlineMap/18/209828/119207.png": "baac5351e46c223cc757d8baa9d14bbb",
"assets/assets/offlineMap/18/209828/119208.png": "62f8ec5afcfebb8400efc70ccf2adc63",
"assets/assets/offlineMap/18/209828/119209.png": "e7654e963f8f16b7465366e07d515a67",
"assets/assets/offlineMap/18/209828/119210.png": "20319c1ed63d14d41eab44b6a655a309",
"assets/assets/offlineMap/18/209828/119211.png": "5ac1dab118b78373dc14e76f400017ad",
"assets/assets/offlineMap/18/209828/119212.png": "438cf53b14c6250c623cc6940b6125eb",
"assets/assets/offlineMap/18/209829/119205.png": "dc7f55f74e49771ab317480095b4ecc4",
"assets/assets/offlineMap/18/209829/119206.png": "092771b6a03f29c8e605ea1dfb70941b",
"assets/assets/offlineMap/18/209829/119207.png": "4ac2d400d6b7879a3a8ebddc4dca3a77",
"assets/assets/offlineMap/18/209829/119208.png": "95ead7287b8577d80cbd77a8acc3712f",
"assets/assets/offlineMap/18/209829/119209.png": "81916beb9c59c6f3cdf6b2caeffa2eb7",
"assets/assets/offlineMap/18/209829/119210.png": "5dd98da0cf47237db8e4ccac5c56809b",
"assets/assets/offlineMap/18/209829/119211.png": "25e1e7f7e95fa6264efcd4d59b1b984f",
"assets/assets/offlineMap/18/209829/119212.png": "523e2eb9731792b72e93c730e891f22f",
"assets/assets/offlineMap/19/419645/238416.png": "fc280a459ce331a77102c0fa4533a493",
"assets/assets/offlineMap/19/419645/238417.png": "c8276eb5e32e2d3bc6b6e990d6266722",
"assets/assets/offlineMap/19/419645/238418.png": "70200e2fc978631e8a6e7acf96104c1d",
"assets/assets/offlineMap/19/419645/238419.png": "8fc1800f569a5c45c8bce9f8988dd5f8",
"assets/assets/offlineMap/19/419645/238420.png": "9b2376e0fd968c332ffb2e08394d2f39",
"assets/assets/offlineMap/19/419646/238416.png": "7151b05828dba765b5ed789d40e9ceb1",
"assets/assets/offlineMap/19/419646/238417.png": "b80b39665c7bf0580e0e45e9bcec1f94",
"assets/assets/offlineMap/19/419646/238418.png": "123e47cb548bb9aec5af4fb50755555b",
"assets/assets/offlineMap/19/419646/238419.png": "4ea0f87ac4bcaefa7df3656bef550117",
"assets/assets/offlineMap/19/419646/238420.png": "1048f4b0dce04a793e37eee916d2e12b",
"assets/assets/offlineMap/19/419647/238416.png": "88b07c3613a8232ec96bcbcd54c40a9d",
"assets/assets/offlineMap/19/419647/238417.png": "6e90c19416529d6e0007c1d89c67b782",
"assets/assets/offlineMap/19/419647/238418.png": "fdd08fba9244eb869a0081ba9c05946a",
"assets/assets/offlineMap/19/419647/238419.png": "3b700460843994dcf042c0addf5832b6",
"assets/assets/offlineMap/19/419647/238420.png": "1364aaa42de66bb40b94595ee7c2c1d7",
"assets/assets/offlineMap/19/419648/238416.png": "6c381ace811537891aaa132cb5a8c87a",
"assets/assets/offlineMap/19/419648/238417.png": "835a174f5d1533bc1741743bfbaacbd2",
"assets/assets/offlineMap/19/419648/238418.png": "14f421ce1e3ec0b107cf7dc3ba45ef52",
"assets/assets/offlineMap/19/419648/238419.png": "8b67c6fab8b29797f28b8e69d5126b8f",
"assets/assets/offlineMap/19/419648/238420.png": "088fce2b85bafcd0a908c15b9ae9d733",
"assets/assets/offlineMap/19/419649/238416.png": "5c177125aebe6ca8dac297e17ddacbd0",
"assets/assets/offlineMap/19/419649/238417.png": "ed7ecae4850daf72a644fb4eb4d89859",
"assets/assets/offlineMap/19/419649/238418.png": "397dab77d20562488c8b96c307938e46",
"assets/assets/offlineMap/19/419649/238419.png": "99bf4ae6abb317af2a3bbf7db119de6d",
"assets/assets/offlineMap/19/419649/238420.png": "874e823e47e4e1399a8c1a4c28bc3044",
"assets/assets/offlineMap/19/419650/238416.png": "91394ff12b827b444b388f6d120b8355",
"assets/assets/offlineMap/19/419650/238417.png": "c8276eb5e32e2d3bc6b6e990d6266722",
"assets/assets/offlineMap/19/419650/238418.png": "845ae3c1976f8a0aa3189a88826e021e",
"assets/assets/offlineMap/19/419650/238419.png": "4383be0f8026b72f4858d4222bfacdea",
"assets/assets/offlineMap/19/419650/238420.png": "0b6ad7f6e93f3e0ef47327663a5914e5",
"assets/assets/offlineMap/19/419651/238416.png": "0b4debeca2e2431239371c6b4b579669",
"assets/assets/offlineMap/19/419651/238417.png": "0d22c57e912e6c1c02687f6d7bc41d57",
"assets/assets/offlineMap/19/419651/238418.png": "992619e62b162f836cca59f01ed4f670",
"assets/assets/offlineMap/19/419651/238419.png": "055da63ab6ff62de4f771fd8e3c643b9",
"assets/assets/offlineMap/19/419651/238420.png": "f0816882faa9292221b18a847a406499",
"assets/assets/offlineMap/19/419652/238416.png": "c8276eb5e32e2d3bc6b6e990d6266722",
"assets/assets/offlineMap/19/419652/238417.png": "f46a8f2e58ef9f82cb2bd82d77ff9a08",
"assets/assets/offlineMap/19/419652/238418.png": "10598d0a1b6e8fec918f505564b897b9",
"assets/assets/offlineMap/19/419652/238419.png": "9b275beec59f860b6d2528fa13d371c9",
"assets/assets/offlineMap/19/419652/238420.png": "ce6c6468d14d563a653dcfa56bbe6381",
"assets/assets/offlineMap/19/419653/238416.png": "bb046421fe3a94c0080da2780e1620d7",
"assets/assets/offlineMap/19/419653/238417.png": "a0545e26ef0c0b301cf4de92ec701ac5",
"assets/assets/offlineMap/19/419653/238418.png": "a02e7b7ef92a81d9591f55f4b837bc26",
"assets/assets/offlineMap/19/419653/238419.png": "883c6a9e64a6eacba6792187bd05780a",
"assets/assets/offlineMap/19/419653/238420.png": "97b286dd0e881acf2238b6983b784d1b",
"assets/assets/offlineMap/19/419654/238416.png": "1e53273e94dbe2e42a90614538a55849",
"assets/assets/offlineMap/19/419654/238417.png": "bfa3c8dad3db101519fe1f6f8393ec99",
"assets/assets/offlineMap/19/419654/238418.png": "47374ee7f267cda129405bb7f9f01ed1",
"assets/assets/offlineMap/19/419654/238419.png": "e00d6b3fb7dd8ee1cae25384ac65890f",
"assets/assets/offlineMap/19/419654/238420.png": "e502b7c00cc84f8e6e44a51dbd19d4f1",
"assets/assets/offlineMap/19/419655/238416.png": "21d9a5145f2dc37ed2308180b53e4bf0",
"assets/assets/offlineMap/19/419655/238417.png": "6505b6d70663f34faf85b56c8c67d32d",
"assets/assets/offlineMap/19/419655/238418.png": "1f3daff0d2f1592f2c6bc78dbe0971b6",
"assets/assets/offlineMap/19/419655/238419.png": "d6c5810df88f60e5f1e0c90948eb56d0",
"assets/assets/offlineMap/19/419655/238420.png": "00a083a879541b4685211c2562b44da8",
"assets/assets/offlineMap/19/419656/238416.png": "c8276eb5e32e2d3bc6b6e990d6266722",
"assets/assets/offlineMap/19/419656/238417.png": "c8276eb5e32e2d3bc6b6e990d6266722",
"assets/assets/offlineMap/19/419656/238418.png": "63253f076b647076de2b94c13979b796",
"assets/assets/offlineMap/19/419656/238419.png": "c24206f43cdbbc62d76cc6b96fd6f962",
"assets/assets/offlineMap/19/419656/238420.png": "40bf3880343352ee146e8f4f39ad846f",
"assets/FontManifest.json": "4da83692800f0c5f0139195d0766cc6a",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "7620796290368d5ec271cdcaf6a55f97",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "fd60546396bc25a17fcb60cbf12ecdc4",
"/": "fd60546396bc25a17fcb60cbf12ecdc4",
"main.dart.js": "ac1e1018f0dc5dde058945cea21853b8",
"manifest.json": "bcbb860ee4455dec3ab5b4ae0a92edbb",
"version.json": "ad9932f3075cb32b8d4ed740e4b13ace"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
