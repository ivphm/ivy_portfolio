'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "c0a60408baa0362f3a51b5e5e0fb65a9",
"version.json": "10762b792afdbfa78995ce94f467ea69",
"index.html": "8fb0f697faa09bc2e32620bf4bf252f0",
"/": "8fb0f697faa09bc2e32620bf4bf252f0",
"main.dart.js": "dfd54952499430dfe666f65d6e58a66a",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "5e19fc50abd8e9ffca95b1143df394b6",
".git/config": "0a7607dc870cc4c2824fb01c65d67e8c",
".git/objects/92/6baacde391604f8387ff01bf6a300377495a43": "86c389f7ad68b0b3cdfaa3e7d32d92e0",
".git/objects/9b/d3accc7e6a1485f4b1ddfbeeaae04e67e121d8": "784f8e1966649133f308f05f2d98214f",
".git/objects/04/e49e596e479102caab2709ef9be3a1984ed177": "babb87c6469ef777dca5b9778798c8bb",
".git/objects/58/87703587ae01cb35287ab07aadf40ad8104c8b": "67f5f1454c94862a5c5c9f07e2224a3b",
".git/objects/58/31840272dc1c691085a1cda9eff0467b035365": "adfbc6c173c4e9b037c82eb43ea9b9d0",
".git/objects/94/19f9203ba5cb777ab7619ef21a4531130d61a2": "5cd051dc04c16084df2308f5560902aa",
".git/objects/94/098315f2e67f12ca54510467d2af412197a9e9": "5852db516f7de94cc9d97f9a0ceda90b",
".git/objects/0e/41e5cdb0a8fcd4823ceff6b0e49ac3317c217f": "e06c2cfdc13aaba34717d483c62c6b7e",
".git/objects/60/e9d2266beb6d7dfac79f3cbfcc2c5b41019b0d": "9667ea3c06628248daeff8a79eb66495",
".git/objects/34/3222ed96d74e9073f5e32c459798cdde98e559": "23469ed81046b403a1700b0690eecd02",
".git/objects/5a/64cc350cd80589cd244e871c48fd766985fb62": "20a5f7a565becb634af2e30e10cdb691",
".git/objects/5f/4377d4fcb12874ef4bac2c0071cadd8f61396a": "5b57da60ba7c5adbbb748cd9c3b9b1a4",
".git/objects/9d/dd6dd15a199be3cd5de7860cfd62ce3e00786a": "d323d5b5ace602c5693de0f2da0c2c7a",
".git/objects/02/2fe0324232a32efc0fbc24494ef66610ffce83": "2965e21640c0a5852acabe576b305dbc",
".git/objects/02/45df7f869a2619363a46365bb9f64e90d2403b": "aee4e4d29041bea8f9af0ff108896e11",
".git/objects/a4/dbb6477d21db6d3bf7549b01a9eac9631b758a": "60fc3e8d4f50976d5b1ac544da06664d",
".git/objects/bb/de90a8ef9085089983e4b47b7cd0bca1726578": "3744341556e983dd1d7e7c687c37a2b5",
".git/objects/be/7ddacb01c359159d3e979b6067ad586cc24262": "990cbae7a0b6a8440ff916d7f68449d3",
".git/objects/df/32f92cbe20c7a00bfb31c83971b6697821e7ee": "be277ad7023dc5dde32d602ff4cf0627",
".git/objects/b4/500d697aed39ec4fa7bca9ac20944d2cdce528": "0fcabfbb43fa7df54687830ce462c97b",
".git/objects/a2/d095a4fa63a105ebc1dd749e46cb3317d77e32": "3c270ccd9f149e45d833790f2c72f9e8",
".git/objects/d1/f5b36796016f2100106e4b4b674f3998d6ed3e": "4fceba845478395bccab89e81cca0c03",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/ab/a5536f099fdd1c9de1c73fcc03cf2164bed6ad": "9cedc3ab5696edd4272f2648a9665036",
".git/objects/e5/7fec144445a51b71fad4f1c4d07c343b3c7d8d": "0e29928a99f4a3df88effdedfa3d85c0",
".git/objects/f4/12d63b19be5ff4b1c3a816ba5436ad0c6d9337": "4b62710f8a23bcaa8d8bbf4fc2e1e382",
".git/objects/f3/73f574d90fce29030f11840e650d7d58a45d16": "6556c6093c4d3f796178a7687c5fe722",
".git/objects/f3/4aa6830276864527235d21fdb93cec8dbca00e": "28c211b0d5760cfb43ad0634118a77b0",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c9/4e7e6b493e65049d3989de335de10bc2583844": "53bed3a98cebecec55cda4d3470a31f0",
".git/objects/c9/8a97552e2310d49ee217990a686ccffac3cda1": "a9d81263cc9c139a55909dd7d4aa65e6",
".git/objects/fc/670d19e6e092a6aaa54a55eee38b010849b592": "db30ba7b07ab1aaa8d98491333de54a7",
".git/objects/fd/7c5613499d9933a865e656351653d42b0e4895": "b024f929a716fad3601357cef57cb916",
".git/objects/fd/ddfbd4f81919072c28b6ad80e2efd9a37238f7": "26949ab0b60963a83eb413d26db16cf2",
".git/objects/fd/d98f724b089e06b60dcbe72cba9e4c30d8746e": "07a31f924964ce351ad161efe48676d9",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f5/3b2cdd403a7909def2c474d5a29294f34e3f48": "7acf6c6480fbc78aaff3304189163d38",
".git/objects/ca/9b5141914b1bb74fbb754ac1f90473c7bcb689": "546bcb85955869ab3f131ff0da8d063a",
".git/objects/ca/8023595a17efa15d4d0097638b72b1a2b0ae78": "283c40f541fcb7690cf164d28156d805",
".git/objects/e4/b075e4561e88a75d041400806acec790c20fc9": "a2bbcefdefb44923ee4878307cb44327",
".git/objects/e4/c6c2665ea30b0250e4184f0df5c2a2e33901fa": "ca303f9b688463e6eeaeb614825a1241",
".git/objects/ed/8821bb36ac89a2ea86450ea9482058174b8f52": "e395bcc9bc0451c2d4a09095d9536a5f",
".git/objects/42/1ed73c25aaaada164fefd36353828766ac99b3": "d792ee6361d11e347792776552a971ba",
".git/objects/45/659101d1390cfefbb05e19a4bf96f41abfb13c": "90568117ff08bfe0a2616cca7580cc47",
".git/objects/1f/8c17586a506adb50a6bc88d8cdb570ea4f5896": "e03f0b5429eef0ff89ee8cc718d39c6c",
".git/objects/73/d1b6472b63dcffee34b7bd86577721c0a4ef3e": "ca300198ece4193db5382a31b57e2c26",
".git/objects/87/3f32dcc6ea27968954edaf4228eb5dbdbca382": "656d03f8a71e02a77da706e6c734b017",
".git/objects/87/ff1b1ba60bb3303a657809e8df996acb0953d0": "44f0de3925f1400e42f6427c64daba49",
".git/objects/80/2808e02c585b62161097031e5900fbae111434": "b06a02ed1f315f5f4239875cb4bc19c9",
".git/objects/1a/d95373a05d1097cf30d3e3ef50ad764a36997c": "2d5f5f0afc89d0df0c7bd58108d3de37",
".git/objects/8f/864d498f4ced38345b1149249cc0f17c713e37": "773904bc9a89a27bb88c6b21e85c83b5",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/10/73f9a502d9a0be47653e425857fe8b82c10adf": "2bf30edf40392badac26d851a52aa741",
".git/objects/10/b42200a6b45b6c33347dc8a1d99b4f365dcedc": "45b17cb573955c3ae9405a95042c0aaa",
".git/objects/4c/2a9c1ec9d416b998633afd0b78a47f025ead31": "c1afe4c7250dfa9b7b4ef4f441d0f7f0",
".git/objects/26/b335900aca6d208665275b15adbe062bbeab0b": "81d674ab15a36b79de69459aff88c8a3",
".git/objects/26/9cc8b2b21ff2551439c534172135b3a8cb6929": "b3ad9b580c724d6169d9f70d750e63cb",
".git/objects/21/ea154229b464625f236a7f13a865b3177d8bdf": "5985d515d4ab1719df36c2a77085f8e3",
".git/objects/21/4215a03b2343798e31d9cbcc9d8029380a11ad": "b0486f433d29368a047e2605d1a4d154",
".git/objects/2f/5cc8a5666866cabe32f29ca881cb0d62bf49bd": "efc2c4346f61190dfbaa3b3cf7556de8",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/9f/7edf38666604809465b043dfae53d195bb8ace": "4f2c26d758c9a8ca4d4253d5a4ee38c4",
".git/objects/07/27c962309731fb9e91199a45b3abe3d15cb309": "389aed91ca05760e3153ddf25a3255b2",
".git/objects/00/595095d72d54ce6abe579a6c6f5e915b4e7af0": "605bd173688ce2a5261497ef668928fa",
".git/objects/9a/54a12e07518d774d1aec7f8994c2ac75cc147f": "62e5b19dc0e38064163a0f5de7638115",
".git/objects/5c/002ffe1eeb587179dc627fdd0dccc61ed952ba": "b36e430d0414ec010584c9ee9e73e4af",
".git/objects/91/3f11ebb4b62cd7645965fa81beb306b094cafa": "208d66e145b2f8e530f5a7dd4104719a",
".git/objects/3a/8abed7e8a627e305c0b1b9c5f57b92bc325fde": "f570ecc469eb6bba9f8b12486b96b211",
".git/objects/3a/76324075c4c66ddc264116569e9522feb1a628": "4e87f30c42e680e6d3b017b52c1738de",
".git/objects/54/615c313f40af7b5e1e333c3deaa478d79dda82": "8ceea9721f665fe90b287616ece8af90",
".git/objects/53/c1c793f5522ee4e986cd2f80f4c57aaaf4c8af": "6fab8a477da7c5c6c1e73dfb55cefb9f",
".git/objects/5e/bf37944a56f2b5e479e3858392c6e9030da2da": "d874f5ce1eb6512c7b77ebd17b676f00",
".git/objects/37/38c598e8f71308955a3ca57c7499e4e54aa019": "a7442d2c8c0dc3e3079ef24420dd40d2",
".git/objects/08/95d53592ae503b8a17e48c37460157819d93a3": "6449c7f58a3e053ec917f4c94cc24adb",
".git/objects/01/7ad8e5a3cc9fcab08545ba43fc73e716fcc38a": "54d02cb33c7bf784ab318215f1ff57b1",
".git/objects/39/fdc3ebe41700d5a4507e6a180b182d558892d1": "33b4371569455143c191de689b298426",
".git/objects/99/82ac5bd3e9b3889535dc8eefc404895784d090": "b9ca86cc561ccf0209265b957c7e02f5",
".git/objects/55/d3559ae4699cd880971c9ba82a7827af3b4939": "40b3c2e34e1ed0f2a5052ade28ad7818",
".git/objects/64/97fa8d793e0ddffaaf99fa932ca6045b2d1f21": "456010138647a599cc5688246d2c013a",
".git/objects/64/9dab097348cff440040208cb0ec88246522016": "51fb973441f8ac836e5f6ad91f4e13eb",
".git/objects/90/872d69d3da0454c3588673ac4c99b5f4019f7e": "9547be76995928672b3df71c9b367122",
".git/objects/90/303fe372f9a1418e8b427196182a6a21ecda2e": "9b368c3d814ea9248f345b5b6411bf0e",
".git/objects/bf/f8c3854ca7902ab3b98e9dd3913d5509f1c3b7": "8f88d930af8d1cf3535482fcd570e157",
".git/objects/d3/851e07f7d4499695e5bff9eacc8ac3659669d9": "e3180c6ad91330c60d71ce6c57baa4b6",
".git/objects/d3/1d134bcc096bf4ffa399417fe9e575743fbe2c": "665504e5217575053e8b12faf94e695d",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/a7/6ec072e16ce507e9dca85ad52882638c7cfeb2": "67a4351e917228539b96970aac882996",
".git/objects/dd/994367ed41789ac30a09ae4e5911374e9c3512": "96ee0ec503c476281385a1da7e2489bb",
".git/objects/dc/11fdb45a686de35a7f8c24f3ac5f134761b8a9": "761c08dfe3c67fe7f31a98f6e2be3c9c",
".git/objects/a9/e2f5b8016e345a57d10900eccd4dd091346b0c": "a0c4be1eeafc5a58b5671c05b4a2bd10",
".git/objects/af/3b9f27252081d1e11cab9ef07b5b10c3596934": "2b942a2c5865f13af4798c3a01d89b1d",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/db/f862a2a7ceb77bf5da66c8ed05dc8869858508": "920aef0891878046fbd91ea9b9103ec3",
".git/objects/a8/2b61f7ab8ea81cb1793261653c6ce58a9d3895": "ce456384f262ae66eac9e464b5297f8d",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/6a5236065a6c0fb7193cb2bb2f538b2d7b4788": "4227e5e94459652d40710ef438055fe5",
".git/objects/ea/3f860d29e92404f1d69ca3ca2008a5cddc4dd4": "bca881a9d1bed8509469f1a0663af449",
".git/objects/e1/7ccb1c34e1455bf615294dc0509afa05983386": "74294090e31c4b5f6ab96a70dd123c91",
".git/objects/cc/0cc7d0b8cbf8877354351ef412d23ea5dccc6b": "0181a573218bb86bca596849e7729425",
".git/objects/e6/56d82907213bb3a697c6fc6017b77b7c3377f8": "b0703e3ddbae13f996526d1a176f8365",
".git/objects/f9/b45fad5f1d8f90cceeef9f4dfe155a60cdb6a6": "d6737bea4906080e62cb37adebe87092",
".git/objects/e8/324837c55d2d070c2125f110679924a053e3d1": "3f167eec1a7d5a32349051bbb2175da2",
".git/objects/e8/9b33412946989fd93080dd82e3173c42ec556e": "4ae28b8b724c43c8e6851b70923aa183",
".git/objects/fa/89a9bcf2afb7c2142ed6df6c7e79b11d26ff9b": "8b3f5a50bd71cfea9e20968c0bbbc903",
".git/objects/ff/089aad1234072cb7f1b82bc046cc1981825dc1": "3602ba1197db9bcc7d93194466f0b0dd",
".git/objects/f1/542cb03a64d665f6ad91c9374383a268932a47": "90f6439c1b6cdb941bb65fd7dccfd5a7",
".git/objects/e7/0e7d3799e7d775b2ec9a0db6cdaf9eba5d10f7": "cb01734ca9cc8ec45006a736f3b0b294",
".git/objects/cb/f09152aec269478a5268989f1ed73d819d9f57": "180c173d518979c030976241223e4bbf",
".git/objects/ce/881f53374c0f1ea1a93bec1b2b6f331bffe1ed": "ea2cd21240af5372158ccc79d02a05b8",
".git/objects/ce/e3c5bb4ad9ca1b7e02e3391cc1cbba998308b7": "8e23cc0d8eea61c17a30b19ec3ccb417",
".git/objects/46/3a9a1ec12ff84d14667fb4d6bbe3fda4c1326d": "696d06207ea7cda26c12b6e69a567610",
".git/objects/46/30295310e6231a9d2401ecac08edad9dc90a36": "e01b1326a9e9d5f1069e718693556748",
".git/objects/41/41cc2301e80030151915cf85f3309bbc3911bb": "a0a06d6a7224d1d1b01a8f27ec7bb6f6",
".git/objects/1b/be39a96a24454a44b3c4ea2e8528951a46ab86": "b95e22d52726ee4660d045c60a56b890",
".git/objects/77/b8cc4ed813d8dc30caf771711744cdab84e431": "120759421e5ee5ec6b94308c4c21f763",
".git/objects/48/37533a8ffb636e111644446b8b5254d152a146": "54ab11d80a5332cf91fd2999264849ea",
".git/objects/70/a234a3df0f8c93b4c4742536b997bf04980585": "d95736cd43d2676a49e58b0ee61c1fb9",
".git/objects/70/c6b49bd10a6291e3925fe216dab66357d48b46": "4d89c4cb8f274c670537d1d25b00d885",
".git/objects/70/fb165fb5ad9d9fe9206c7b23d1de2f812a4ef5": "8c3f1e30346c45d4b4ac0061faf79f76",
".git/objects/23/47002e43278b82a2f489a6b2c7b99bff47c721": "a944a56b79a0674188ccc84ff970a8e8",
".git/objects/12/4ef6446f77a030be122fbc76380e68f800783b": "c13c6e1fc304eefbabd4aa4bf08c2136",
".git/objects/76/a3f4dac8a673e5d987d40c0d958f45a452fe77": "ac88e3edecb8fd632ef3209f3b3eefec",
".git/objects/82/39316eeb505ac95eeeacdd793beaeaa86da925": "b49f4ebdfe14b6e3bc0e72d1b27d3325",
".git/objects/82/4956bab7faa36433635685eba6b5e0950f5c3c": "c79b9f1a7068920325744262daf3ef78",
".git/objects/82/09f77036655d8ecf486cdd18a05782e2e620e2": "9b6cad28330df1623ec7051c0aaa1b13",
".git/objects/78/28fa44253a2b449c8025ec67dc7917a84845b3": "4c5cb33b36f56fcd373341ec16fa889e",
".git/objects/8b/342c527b76566ba31b1a1f81e303e2f015c963": "0f874e7375b9e9572c058c58bd76708e",
".git/objects/8b/f93bf23d11944053a779f4e47cee68ffe4153c": "17bad4f01d14d14e6645bef485d78896",
".git/objects/8e/d415e38751f81fae8c0082312e56b0cece0d22": "62992821a749fb43b086ff3f49f2bd10",
".git/HEAD": "5ab7a4355e4c959b0c5c008f202f51ec",
".git/info/exclude": "0aebccfd5866bfc3e7c8f625230c22f7",
".git/logs/HEAD": "693bd314f44ade06f11506319c7e3ccd",
".git/logs/refs/heads/gh-pages": "693bd314f44ade06f11506319c7e3ccd",
".git/logs/refs/remotes/origin/gh-pages": "52d65bc3bd725d2de5f6d95ced83e8be",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "01b1688f97f94776baae85d77b06048b",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/refs/heads/gh-pages": "935fb619eadfad268e302d53f59cdac2",
".git/refs/remotes/origin/gh-pages": "935fb619eadfad268e302d53f59cdac2",
".git/index": "fead20fd84fb8e6479a04dffc41d8054",
".git/COMMIT_EDITMSG": "c38871de139fc75c8b7605eadb1956e3",
"assets/AssetManifest.json": "0ad57b5f266f2859b640e2fbb16f4234",
"assets/NOTICES": "2e6be545633f34f30b1eb218deb59ea4",
"assets/FontManifest.json": "f5d8fdb28f1d820f0b96beb4505e2799",
"assets/AssetManifest.bin.json": "f8ec6656aa59915af20c5e480fcd8441",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "a2eb084b706ab40c90610942d98886ec",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "3ca5dc7621921b901d513cc1ce23788c",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "a6fb3caddf07684faeafee6849f03a9a",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "599bd4cc3420a221ead6890b25e68625",
"assets/fonts/MaterialIcons-Regular.otf": "d93530889a223d3d4a3d964a52ad20d4",
"assets/assets/images/eyevpham.png": "e74401c5100f18ccfc8bc80f0fa4cdb9",
"assets/assets/images/project5.png": "f3b80c62acdc75b8ad4557b8042eca80",
"assets/assets/images/orientalposter.png": "52fd3779e1db93e4f8c66261f470d7fe",
"assets/assets/images/oriental2.png": "f2de68645ff4094b25be5c582809e189",
"assets/assets/images/project4.png": "ee42ca787cca2e1a25e7aaf323f415f7",
"assets/assets/images/project6.png": "4de21816b2af9ad70f7a28d7c5540ad8",
"assets/assets/images/raiaposter.png": "965ac3434a49fdef31e528ea83c20bb5",
"assets/assets/images/raia.png": "34ff4fff194e366f0865df1381b8ea8b",
"assets/assets/images/oriental1.png": "012149f8381dad5cf7a56bd5c6a5aae1",
"assets/assets/images/project7.png": "9c27f9910534960f1d07564e12f53f80",
"assets/assets/images/project3.png": "37ee55a4f5ad1b467f5710b08d3a0def",
"assets/assets/images/projectsheader.png": "a05998c5ac8f6db4706ef5a99122b5f8",
"assets/assets/images/fcsutd8.png": "643b4bb8fe75bb2af6c434b2dd45b97e",
"assets/assets/images/fcsutd9.png": "0587bdaf2c9e632665cc44104152147f",
"assets/assets/images/project2.png": "e67adbd03b7432a356874f84494c0d08",
"assets/assets/images/project1.png": "aa8ec84c5701d958c7ea1c5996ce1e99",
"assets/assets/images/etfc5.jpg": "0192e509cd263e0359e0d45f69fe7f1c",
"assets/assets/images/etfc4.jpg": "649d89420723f6ea21e20eb1b1cdfed3",
"assets/assets/images/etfc6.jpg": "31987fed1c325f8b2476d009ffb0ff0c",
"assets/assets/images/etfc14.jpg": "e968db6bce90bca7dd0a4dc837e9cc61",
"assets/assets/images/ex8.png": "5cb09ab889b2836954c6a0a7f7664ce9",
"assets/assets/images/full_logo.png": "51bae6409166978db3667b3df4bf3c87",
"assets/assets/images/ex9.png": "25ae0b6eeeb657bee04509d387e249b8",
"assets/assets/images/etfc7.jpg": "342193798df37d563cd12cb4443064e9",
"assets/assets/images/etfc3.jpg": "e37a827ca350f903b177c73035c9ce8d",
"assets/assets/images/home.png": "06ec2aa14fe1f46fcb316696ebe06373",
"assets/assets/images/etfc11.jpg": "056a91bb6cb84fdbe553d38f992c3610",
"assets/assets/images/etfc10.jpg": "f11d7b51e4212e91bed9d4e982a79c4f",
"assets/assets/images/etfc2.jpg": "723c1cc10aeec5e602acfd0d7fe452ad",
"assets/assets/images/etfc12.jpg": "b95e4d48120cffe96de8c32318859a85",
"assets/assets/images/etfc13.jpg": "68fb246e8376f72deea056c70d400b85",
"assets/assets/images/raiaapp.png": "2b5d84a01010079f8aaa6fe4f5c8c710",
"assets/assets/images/resume.png": "7d306018f0d1d5897754e345cae8c8ff",
"assets/assets/images/etfc1.jpg": "028fafc459585b70b19c16a7a3de06ec",
"assets/assets/images/aigen4.png": "7c797cc0003ba1e035fa13bccc44b3f3",
"assets/assets/images/ex2.png": "66c67d427a81aa9df33f36b72a523a04",
"assets/assets/images/fcsutd10.png": "110a2537f86758a7383465b68a143005",
"assets/assets/images/ex3.png": "359c751738307eb4d5cfd58a7bcdaa6b",
"assets/assets/images/aigen5.png": "0140227d3dba7725501c08c9eb013ab7",
"assets/assets/images/project10.png": "4b98b1d59ab75deeaeea6e3e06acafa3",
"assets/assets/images/ex1.png": "7699bdd0a299cb6931ad3d4ed29eefaf",
"assets/assets/images/aigen6.png": "62738472a78d4404e6d291229177ed70",
"assets/assets/images/project11.png": "006178c08735cb0eb95bd50d8de80a42",
"assets/assets/images/logo.png": "04ec09430adfa8bfd49faeda3272a6ca",
"assets/assets/images/aigen2.png": "adcb633a9a47a9b741e43fc04b3a8132",
"assets/assets/images/ex4.png": "7579de0c4cb7e4e5082859a41af57907",
"assets/assets/images/ex5.png": "3dbeed194422b340e0286b51e7e04a21",
"assets/assets/images/aigen3.png": "36586d76cb6069cc69b7bfb312fb0d2b",
"assets/assets/images/research1.jpg": "d4b21177b27b065fc503bf9b1c8b63aa",
"assets/assets/images/aboutmeheader.png": "a9fb41a0698e9123ea6a43fca6060efb",
"assets/assets/images/etfc9.jpg": "3699c816d2ba12c577eed7d4538c6244",
"assets/assets/images/profile.jpg": "1b126413d120d465661852125224d779",
"assets/assets/images/research3.jpg": "4e222855df3fc626f366dcd4cc8797cf",
"assets/assets/images/aigen1.png": "a7d61f3b3d840efa8d1c9764e3c329d0",
"assets/assets/images/ex7.png": "077bd3e11fc0d7891886ad39a1ab65e7",
"assets/assets/images/ex6.png": "124d0e57bb3ecb8396c518aac7897cab",
"assets/assets/images/research2.jpg": "7b9c859d30db168df8cd2e0d71c2b251",
"assets/assets/images/experienceheader.png": "f8d3468de7e951f79cb22680e80444c6",
"assets/assets/images/etfc8.jpg": "9163d54efe3390249eaa5d3d5032ab8e",
"assets/assets/images/fcsutd7.png": "f54d9611fa9de33ef80176ae56ed68c8",
"assets/assets/images/fcsutd6.png": "a3620e19734173bf90f0fea2a3a2024e",
"assets/assets/images/taichi5.png": "78a5f87969ad156a251db7873600371d",
"assets/assets/images/fcsutd4.png": "279aa03adc1aa1bfcb36a5c9bac10e53",
"assets/assets/images/fcsutd5.png": "bdd388ed42848e0c3d67296c3f158055",
"assets/assets/images/taichi4.png": "61cf036406d3bb393f30b9f6186e6850",
"assets/assets/images/raiaheader.png": "2baea6ed75dc567bced0fcb8a61de2e1",
"assets/assets/images/logo.svg": "7d622beaa1ba8dce0c35415194384cae",
"assets/assets/images/camera.png": "a0252cd4ae543f28ea69e2ec29fb918d",
"assets/assets/images/raiarender1.png": "5e4e10db9922f092dd734bd26fe1fcf7",
"assets/assets/images/fcsutd1.png": "600b20b0216547ed2ba70daa91f41f16",
"assets/assets/images/taichi1.png": "4361c4fe3ad0d6b55f1bd177b7695250",
"assets/assets/images/project9.png": "cbd3e1ca2e55905bd1aa9ccb7fde007e",
"assets/assets/images/taichi3.png": "9e658543ff2726bc95ce3d87a74260ba",
"assets/assets/images/raiarender2.png": "dd5d3f6c344b147ee48a298736b9a6a2",
"assets/assets/images/fcsutd2.png": "dc1ceec0ef01764ebc0be1d98799cfc9",
"assets/assets/images/fcsutd3.png": "7575fd550ca8451a8f8816d3e6fb6ef8",
"assets/assets/images/raiarender3.png": "9b2986b29cd3a789f994312695d38942",
"assets/assets/images/taichi2.png": "fd62e058520548dec88bf7eeda78c097",
"assets/assets/images/project8.png": "3db1281e4aa4aa93f46a67589dd6e2a8",
"assets/assets/fonts/glacial-indifference/GlacialIndifference-Regular.otf": "008080d5594fd00507fc8a2c93443d39",
"assets/assets/fonts/glacial-indifference/GlacialIndifference-Bold.otf": "070a9269082474ecd06b6d64ebd0fa2f",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "9fe690d47b904d72c7d020bd303adf16",
"canvaskit/canvaskit.js.symbols": "27361387bc24144b46a745f1afe92b50",
"canvaskit/skwasm.wasm": "1c93738510f202d9ff44d36a4760126b",
"canvaskit/chromium/canvaskit.js.symbols": "f7c5e5502d577306fb6d530b1864ff86",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.wasm": "c054c2c892172308ca5a0bd1d7a7754b",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.wasm": "a37f2b0af4995714de856e21e882325c"};
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
