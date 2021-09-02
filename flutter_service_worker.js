'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "2af1e1efc0e9140018e48bbb0affdd9e",
".git/config": "64fb6d640e50a0192f29b47a91d486e2",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/index": "f65d2a9404cb9df6dff84510f440bbf8",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "5e9c3042285b83b425e7c3aae23a88aa",
".git/logs/refs/heads/master": "5e9c3042285b83b425e7c3aae23a88aa",
".git/logs/refs/remotes/origin/master": "1bb78ba53df3e1ecc40a2e5c3c831737",
".git/objects/01/65a9a32b2d22947aef7e06682a913d6db57a90": "a9096a849ec2e64dddd74f5a5ca455f5",
".git/objects/01/b47294d14b5758f0a399104de12ec6185a70f7": "2d9f863f27ad80a5a04d06f84f440654",
".git/objects/02/e48d4d0afffdb389613b196b6f37a7a2774845": "8e34a162e71290f981bedcf8feccf392",
".git/objects/03/e095cbf2c0c1c1a9d14f41d7b66f977e51c39b": "7623d33780d09b27a54065a6803fad1d",
".git/objects/06/4166b17daf7a225c0462f7a0279a45573b0a68": "af7730f3bf5e1c677069062b4451421f",
".git/objects/06/ac0eea72001aa967a52ab9f306995580019467": "a84e7136986046755a888071ae23caf0",
".git/objects/06/be86573ed63aabcd74316bfa5a3c0a7d8d3341": "2f39602855314dc8afdcaa1547c243b0",
".git/objects/07/48f38b8f513546d8a43f328fcabff69de9540b": "f16ee15016dec05d7d0e3290bea1dace",
".git/objects/07/72cbb8c328828883a6fc17dc75446ce4514f73": "6a7b67f456fff42bbb56530e17d9a547",
".git/objects/08/a03e7bae7d016a85b9466dd402f61a619c8f7a": "0b7950c15c8e121c75af664d48fc41f6",
".git/objects/0b/3634db8a736b8366f29167c54e3b8651bbe332": "ac9b0c22632a3ef350935c5cfe02960e",
".git/objects/0e/6b21616db1966d324d3e901f3db559a16455a1": "b3cbf6501abd5dcf25f4140e25bf6626",
".git/objects/0f/0810d19e98bdbf7cbc4bc74d48c8c7460648e7": "088b7611aca80a56b6e0b07d46416f20",
".git/objects/12/feb36e5fa2e7aca793bad062ff3e8b4e3c3498": "c97f3f7c70db81431e022e5acc0e1ad5",
".git/objects/19/51a920eba0eba54ae5e54d030b51f894b3192d": "710bf076d75425d5c9453ca6710663fd",
".git/objects/19/d273c7fdd7eb6215c780355d3a1751faaa10f6": "703cff4ad2e383f53a25f6e0c8493cc6",
".git/objects/1b/300b0d86371fe635c08037342cdd2b8d4444c7": "d66bf8b3e2eadf827740bceba8c032b7",
".git/objects/1b/a593052f3d4d213e0498f32777819ba0e6ec41": "21e87d632fe9c77055a4f055d0a4454a",
".git/objects/1c/d5a94a2cb1ca241e6250745f4d3f8e25646da0": "d6b0526cecc5261982d0335536252e5e",
".git/objects/1e/426890ac5e036ae2628fc48860a081cc5169f6": "024d68e979251d18a69bd84cf25fc0a2",
".git/objects/1f/d35bae2047152a1e045b65b168b14cb02024f0": "991e1dd19ad60b6b4f5fbb0d19c3e2b7",
".git/objects/1f/f68db8dbc7a27a45e755d115c4cac7615e5543": "e57c7b2023d2422a84b667ee217afd3c",
".git/objects/1f/ff5dec95896fb25e0afb2937c9e78c18177a56": "f97584469327bbec223348e100d1ba15",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/21/26c8c8f471310572377fc50b8ad5218c6e3d83": "4b50c69dbc21c98186651ea1d4304f76",
".git/objects/22/251ab6e89c059f564ce6aeb905182e4969f27e": "a4f7305ab4f6872ed8950ceaf6af56d3",
".git/objects/22/c704e22fc8d28595cde01e76746ef786a1b8ac": "df83f5761c869728b7212ab0beea8bb2",
".git/objects/24/350c3e269f22e483404ef1844fdcc700194412": "207754f018720e9a18c6fd9cb6da3519",
".git/objects/26/491268a3c848e2e49a4c85770e175f2aa5a054": "58f84d7a4508d65b90e6f9ffce90c281",
".git/objects/27/8a8b25f209ba034d020933fb7ec1504106d53a": "6ade99013da3ef78e8d607255a45fd3d",
".git/objects/2b/28973abd1c14d8a12ffa086b7c8f0a7ef7b1d5": "4c3e7dac99c5a84e4c704a6e0cc1eb72",
".git/objects/2b/6392ffe8712b9c5450733320cd220d6c0f4bce": "8c5765aae9760c295ac45acfb0e04a63",
".git/objects/2b/6b8cf067fa4b3eca30ce95af1997c5838cc689": "d46e334f7c8454d0cbdf9803cd50c311",
".git/objects/2b/f21999b45b6cc7e56e82a009afd06141c00a1a": "6d391b448af1eba0ce92a7cbe7af3504",
".git/objects/2c/51a1bf6d57cc9fa0c773f66cd84b0626647e66": "108520869d569735c209f41ae1c4476d",
".git/objects/2f/d66a786637a3567ae5699bce1d833edc799dc8": "b6e84b9c82b492e2c4cc947830f5e28e",
".git/objects/30/3c1c9234b4e9d1f20784c0f6b590e94c4a6991": "74f6ec6ae86e71a48c956ec9e8c9cfc8",
".git/objects/32/3e7cc3bf1919359f8312a19471895e76c39355": "ea3e94d821c7af6fa810705c50d49537",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/33/ca420eff38508d44f7e2e3f968cd57c70e9d6a": "f30ab4d50e45e2fb356cee8730b97a00",
".git/objects/34/10563f552dcd68173e925b0a6fdb07cf344e63": "10e3df601267a702cd8b68de387a75a7",
".git/objects/34/4f8e5dec5b30ca26ffcd3aeafe1b704692c6b5": "2bf87aef3f28f44a49c829040f5d3ea1",
".git/objects/34/c37d085c581751e9ebb0670cbffbe29a6a1522": "698471a53e9033835e32734089cb8f1f",
".git/objects/35/abd699e1b53e52d7f152b41698cfd2193f81ad": "50b1f795c0a4eb9a985cf1557056348a",
".git/objects/36/049fd1f0a583853b273211e486853ae8f38a74": "411fae8e667f37700b22dc924639bc13",
".git/objects/36/13716d3083e8a47dfa3c13db327dc3f8346348": "4f42b74993a3c3d770359dffd169fa13",
".git/objects/38/b9bf3077e53a5d2e595b60fe769356f67b72dc": "a8785f840a2d743446d8e1dfe6485e7a",
".git/objects/38/eb0d156b9bf11bae6113cbeb6649d777e3e868": "68249020f3325ac21ac2c1605946d45a",
".git/objects/39/7196c4f0315af3c3625b54fa5b9dbfd6f22725": "151acfc9d958d72a4ea84a93417dc48a",
".git/objects/39/e169b8617bd529c257feb8285e208dbefc22d5": "3530cc3ba65b070d5207dfad7cc922b4",
".git/objects/3a/15db30a7ff04e1c9ea0605842f05a3b4bc37ca": "21bb3ac2a56b8d954bedb58032886626",
".git/objects/3a/a76e7785910001618f8622d120d51b17cbfeb1": "2c0cac750614d7d3fec2db49554f70fd",
".git/objects/3b/119ff78a6c8340164f0da263959db07678562c": "6164387fa47fdb1a0988d7dc19cc7c99",
".git/objects/3d/13bc9a6ee58d84237d5508e087e1a50b89e9f1": "6cecacddc948eef183feed9aa91c9130",
".git/objects/3d/f821559d9d3a7944ee9445a041cf7d2fc2fe85": "05979f03c3b04ee002eda37754a96e46",
".git/objects/3e/aa7e6002c5ecb1388d149ff3a22b9cd9e03608": "36fb75fede4431565cb0d379e6904065",
".git/objects/3f/8ac3081170e2e3fc15395dc8682b91d70ca869": "272a70239c66e475b2d51bb112536a10",
".git/objects/41/899243314d02dfc12ac2a8c21ed10e8c524902": "ebbfd089cdd5dc77040d2c7a7bf458e9",
".git/objects/41/ca38c9d75c2a210bcecb9f18d720725635c5ac": "d7cb8667b9444376b5c824b65cc840ee",
".git/objects/42/b13ee27509ff16360b7f8ab8a868e89d8eb1aa": "ac4cfb8f8ae1e0c22db888a965a1700a",
".git/objects/43/1cfc77684dc68e9996092be20a576c3a33bcaf": "f439eb7fc39ce1ed2104c717425e3667",
".git/objects/44/4f69ea12833a73a05d324c1a8c9daca434069b": "ca23d0b0af7ac8060851fb7d4efc1c5e",
".git/objects/44/6305e211ce2a242c60791eb93ea7ca4b3da3b1": "3b9aece0d460975524c1dd5a06d08e0c",
".git/objects/45/795d7885d823c464d9c107c8570b53f6b93cb1": "14c42e6a376f583a6afaf7b2ba7a7301",
".git/objects/46/798c34db818329e981b1630f1af2f57aaafa32": "5f03866adf03ce3a539f95e95bbfed4c",
".git/objects/46/f15ba73aa4dd749ac1edc8fe3d5788bb502281": "a93629c13acf1edb6adc98f23cde2002",
".git/objects/47/f21b807206b1e282cf4b052ce7b8c9c98b3cb2": "e8f550f7f4eac5de9fd46e12ad6b3fa4",
".git/objects/49/720bc13aa9f3d28696c8608b9c4ad051aa264c": "43540ab7a3ae2d41c7157f529728927a",
".git/objects/4a/ef62c6e418c5478f2e7dd23aca00c94ebb8728": "0ce6d6160da4fb43b8442b283a41470b",
".git/objects/4b/9a19093ce19a3c83d57bd384dd85b4cdf8df22": "48591573e32dbae8a8ce00dad54c91d0",
".git/objects/4b/cae23cafcf973e95aaed4a75bb39e0ef303263": "6496dffd75d6bf8ce601950f97cfb9b5",
".git/objects/4c/3389753fa97c9da6d7ee3b247d2507afaf692b": "08214142607f23862f1aa144141fc0eb",
".git/objects/4c/4a699307a85f37bd3994945f16304f5ad2181e": "e70af48c7d907130bd63f9cbff84b584",
".git/objects/4c/4be3c5bc94830815605c385485b036d277ef12": "5b368617ef81e86445e686bfaa30fc01",
".git/objects/4f/2ed9035c684b19ed118c92da6262e4b700e206": "c1b94f19745a3f15b33bd544824821da",
".git/objects/4f/fec082e991e80d403a704d3b754cc1f848f6bb": "bb035eca186d271d3b7633d475909ffd",
".git/objects/50/670ffd12e87b4526248d0caece0820016274a7": "744a90b83a97008e2a62db8e68e659e3",
".git/objects/50/d6696a7e0c74e0c67d508ceae31fe6f1a020ff": "62dabf8aa32de1dbb9fc14e83b25a448",
".git/objects/52/21c8b764982929b322e045ffbbfcd8e3a6d376": "50fbd7f9c37e545252733cc0b3f9e23e",
".git/objects/52/608ce04e53a2d2bb7e0476b18542cff06d3bcc": "ca5cec5125a62b7c680ff141f6445853",
".git/objects/53/79bb153e8da5e0a7138c6b9404d95e20318866": "d73da1452c8bb782192bb65e85cad1e4",
".git/objects/55/a21dd6d8024520640ca90c7e7df106e8d18a64": "8e081d31a7bd2a02c72eb4e354195a25",
".git/objects/55/edc056288c000c5e1b5e7de65061611bcedb46": "40d073ed96f6ceb190ab83dad965f27d",
".git/objects/56/175e2b6bf0bd6b6903b14db19d29c722416e9e": "b8cc9a33e6b432a0c6d3ff799db56a51",
".git/objects/56/d2d7cb4878508726d27f716ced53ba4b4dc522": "0bcc847803111e2a89f6119776f62713",
".git/objects/57/6b60be45269ee486b2dbe02f3a84b03b541091": "d4dfe9d5e8b6cdb1640ba325c1d7c047",
".git/objects/57/a35dddafb5e6bb137306c0d3fbaf7cf82cbba7": "52cfed74f6d0b1d9c730668b69ccfb38",
".git/objects/5b/a3feb47556cf39afbfef63a51e02e307d71238": "abd3bceff43141fab92939fde529089d",
".git/objects/5d/5d90aca255b89f3a663d11f8b0046c4105af32": "56e3177bc83b9acd5a5db2d768f0e5af",
".git/objects/5d/c6a2dc6c38c1b1ee54b0ad5072c6e29968ed24": "ce6d2eeb4535e5950986c78ab3686dd5",
".git/objects/5f/2517d07ee822375ef2692644ff19ef928d50bc": "9889c5153fb32c6b7d306726136d73de",
".git/objects/5f/cbaf9c29f5bd250f050794f5969e6b065b4a58": "4452b908e5a65cdbb149872ea01aa349",
".git/objects/5f/cfed7ce3dd8a25d1cf6c03feec93604676e972": "35f9d071caf5f491fe1838fb4d6099b4",
".git/objects/60/daa9980b696592cadeac0e66fc818f92fcad57": "c5a03bfebc3a4dddd6038dc74556ee56",
".git/objects/61/1fd6de6bfb2f238d91f6908221c6097549350b": "3521e85df377b462f79ef0683b653cc0",
".git/objects/62/bd9a40e2ff542653def97ee3e8abeef98cb7b5": "70ea642b3fcebae5fa936a12d7213366",
".git/objects/64/6f866e2185cb4755eb7bedcc51bc968c0b89b8": "367bbc69642b2d0f4015ca7d1a628ac4",
".git/objects/65/229d762ad74574baf57e0b3b53970fde274dfb": "c1601e4473c57dbeb991ae4133cb5d89",
".git/objects/65/7d728282aef102c49152111de2cbd397deedad": "0e99b6e6ac949bbede3b7d1d769c3f2e",
".git/objects/66/87569eca58f83f20e07eb4765d53b4fc050b3d": "e3a5e1e77723078ed43e1fe676dd172d",
".git/objects/67/0f65e341b556e1a4c58507897312c1b0f1ee6a": "affa8920e2ee83e0d916cd19237371ac",
".git/objects/67/47807aca7d20cb4549f723a37576f8387e2bd8": "b6a3c144ed570e76cb237d71c9699d0c",
".git/objects/67/a16df50c869893bf9eb60a5ee1acfff523aa16": "fb791a4c3c400be34f1befd3769f189f",
".git/objects/68/0dc239b601208e1c289570547a02dd7c248a4c": "7a00874c39bd3f71ad3fb8e4110119d2",
".git/objects/6a/832be034cc1135d6fecf43f0144a729327c27b": "a8a387c0d264531a747701a192645fcf",
".git/objects/6a/a556ee97630f6b6807ddf0fc5c0d9d6e040577": "93b4e9284951c4a9f53f73b1d4bd3697",
".git/objects/6b/d888c39d6ada44a2425d42deb6dcf02cd2cd3c": "64969bcd36643bdbb9a4d0baa2534113",
".git/objects/6c/2e71c16c99676c2b29c4df6c11cdedde6db9c3": "3c9970fbce1ef4b4ffad07a828c21522",
".git/objects/6d/aa2ec212fe8a0bef3493dee9ca762186ccc8be": "20def9efa8fa809829a290bf2007fb0c",
".git/objects/6e/e9cb034e53b92c7459156f8940c140781b8c82": "d8d6f6516131953674d8aef39cb553d8",
".git/objects/6f/497ead2e0a4b3f7df188fdab748e3f5a189443": "27aa90fbd85ccb796b5df0091f98a5a1",
".git/objects/6f/50f9b03e1bbe14802124fe92840c82ca18b137": "d0870e144b6df9d0e0df4ccc1bbb0a91",
".git/objects/6f/ae260c0a9b97a2d81efe88e635f27252f617a7": "05a717f5343bac419a950228a96a344b",
".git/objects/72/10870684c475d18c9dc4242a058c9738e42105": "912430a807e539c0f73d9c8a1d9ebcd1",
".git/objects/73/c92e2ef4663821fcffafbbb4aef63e063b746b": "9dd5c082f365579a41f6d623e115bf8c",
".git/objects/77/bd8681e7cf6109c4d815a93449f57d37e1bc66": "a025c6185c9735e4596a538c36e90a76",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/79/c10ea293ff0b49eeed23e8bdac6dd9192aabcb": "ed7fb0a5cca8e01477430915643bb38a",
".git/objects/7b/2a417159382c7d471a9ad510f7b7cd4c0130ed": "1d7d13536a8a150211e11e842f383a21",
".git/objects/7c/37a12daa546a2c82c572b358e5e0262870519b": "01b195814c56e4a6fcf6834b5ffb3ad3",
".git/objects/7c/85ba4d58ecaac3228ac3d5101482f59dc9ecc6": "2e2bd6c19e04a3ffecea91d6a6579b04",
".git/objects/7c/a455137584ecf71973d8847145f5141b9cd2bd": "768b3cf405224fc16b8e65ab85f33086",
".git/objects/7d/8082a4ec9b5157bc45d98fa92b31de13ddf8ff": "ff09035cec6052e261197772c12fac54",
".git/objects/81/1afcd2c952073c41c00e330f8114dfc5667afa": "69bf8b1d34f6a1308909bcb471a945c5",
".git/objects/81/23fdb08a4679332c2eedd494921ce32cea05ee": "89fb70edea38a9c72e21555676d5e469",
".git/objects/81/2a3703c0e30d78a86297fee1acb359917b7a62": "b052328df50f98eb3ce299c7f55214fe",
".git/objects/82/3eb2432d000990209f7cffb87c8d1b63fa2862": "1ec9acdd8cd7a528f3b5ae07b3971834",
".git/objects/83/7f790ab7d22df2b48ff2b9c033350e0521b17f": "07aefea834c2cd2fbe2fcdbbb72607c6",
".git/objects/86/8b56291059d645efb9bfa8dad5815ce5fbdaf6": "eb4684ca786852f81d2e1d3834427e02",
".git/objects/87/3c320c25c8c7bcde009168b197c753dbeada87": "581a33c9aed73a14f8989a4b4e5fe004",
".git/objects/87/4e4b102878b66ac65172068ace637ade08bcbd": "8d869761d62e3e2e9e9f2683fc2a7ac3",
".git/objects/87/e1a1c637f4339ab3ff7743d5fd5e1e8373c61a": "66c8f4969d77c86818518b54943dd1fa",
".git/objects/88/1c3b481e612679be9770e91e88192eaa24cdda": "ecfad900d40432ca037232a5ddb58e53",
".git/objects/88/82b36c6c16ba3825a4b937564c3f69e8bf1a5a": "5b7c929d1b9fb10b00d280c8d73f2fa7",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/7761dd28a1ea5eb03ddaad327419417cf64531": "008de6fd427c6a92cc400d16c109d804",
".git/objects/8a/3ebc76172f4184862830623962ddcfa85b5222": "756639da713127001cd4e172744f26f9",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/bffda7968c0986bbf897085bc5f91c2820b503": "7b717e7662df274f12b118b817e8b41c",
".git/objects/8b/817351f287e13d48b080e09c505c550702015f": "3d8b769cc433968a9fef9d0519b477a9",
".git/objects/8c/8588862c97a2d12dcad226734d12a97e6765a0": "3f46a20bba3f7022d6f58cc7d0224204",
".git/objects/8c/d491ab365d9d37c4fef6d03e69d1a6ef3b8e49": "584ad8faa7c1dc0d1469c5b6c21e2e09",
".git/objects/8d/1eb8a8329b6ac7f56eff341bd87f8032629c82": "2149ec911b21a2a5f4cea593ba665ac9",
".git/objects/8d/6c91530560147fef20a836860afd69095be399": "647f5e9d70b15ae032ad7b32d7c77284",
".git/objects/8e/dfe719483a9df105c740aa4b45806f3f910daa": "81e1251ad4e27c8bcb986a7d4a0d9c82",
".git/objects/90/b960bfa48ec143c0c544044acf73a9f484e0fa": "c4f847c69934f24ed3faf73050f3c302",
".git/objects/91/08589d5e61ea1601ea379cdea85267ed75bea8": "dd8e93b77091d59d3b7e6137dd6e4b5f",
".git/objects/91/b1536db9d75e47f91ea84f0925cc94f9cc4ac2": "078c0bf526f87a7ad42a2681c6f2c0dc",
".git/objects/92/6112c16f47ae1f1da97fdaf51ce4a5f8c9ffad": "773f39ee6186d15e865ef6912eb38bfb",
".git/objects/94/9975717185b3fc7b4d98205d9d104c8b682bef": "e23f4dee2b232bb2d9816ad4dc1d96eb",
".git/objects/94/c105939da5a057989d43c57bb943e12075258e": "a20e7ae554b11856a5522e5e6a07b39e",
".git/objects/95/37e7fcaa1947b71838c83bed6e93c5e28b1781": "f545b0fc12cb47925d655d82414036b7",
".git/objects/9a/26032e1c24284a4eca3d9552d367fd3439cf9f": "3233c34427677ef5188e322382007356",
".git/objects/9a/35d72c77238da0f6c85aab2b79faa6b18335e8": "f7649345d82c3586f893b0dc6c725286",
".git/objects/9e/19e4902d97b23981be0f9c5d0a5980f3ecc234": "bb635d601e1c90c7236b34cec674e4b8",
".git/objects/9e/a74d0e293e910cb1bc61bcb0b2d5cc0add8999": "873f6be4e8e10d0f09f304774d9bd5ea",
".git/objects/9e/aad98014ae972eac4972131bc9d36c562b8cf8": "1fe2dd0e251deaad8330b86dbb6697d0",
".git/objects/9e/e1a97735e7198673859035e5b596e18e709e48": "9ac4dd3add7ea225fd7bb93d84ee5454",
".git/objects/9f/a92eb36695f8893ad0865ac9fde1525c2cf054": "41ae1eca5cf32378af523d392232d120",
".git/objects/9f/ebc1ac198ce82d77ccefbb1187d39f6349de9b": "42d598d6a53ecbb02d241a939470e19e",
".git/objects/a0/5ee14f4639f9cebe4f99588eb8477aae8e55c8": "66256e4898149d54e27314e39119cf78",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a1/ed2ba8754c2e6fc28ab37b5a5b33035778e9a3": "722723d1ac1c9a8eb69177b37f2dc550",
".git/objects/a2/e6de38935e4c9a02099325c3498cff7b6ad18a": "0e3b7b4f76d46692f8c37e9cd8504043",
".git/objects/a3/357e93bbe8bdc696f7a27f4ac11b342627ed06": "39b2d59627392f91a575519000b409f8",
".git/objects/a4/c8260bfff028d370e995d0459b28fada1637e2": "c18b24e7b4616b9085d76af0186953fb",
".git/objects/a8/0922c742e756ca3dbc95fdd876b2ae46f5572b": "1ee4c7a0db7ab75809c2c19e7019f6e8",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/a9/9953edebeac6dc4d42d2668704dd9e646f2233": "7edf44c3d90897d852972f4c1d774c9e",
".git/objects/aa/cf76d957c3eb713022b12624991d37b5951d61": "52fd218a4c490ccefc03523de2a63ebe",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ac/c8d347230329ab9666f17f6c63fe1fd891e61d": "5ee60f3a6eddbdd63e01f53c75046920",
".git/objects/af/fd6b4b13578bca7ce96bc1d09339e05860213a": "d8a28ee149b371d3d0670764145d0d85",
".git/objects/b5/2ea598712f45c7b796d243644791f1661077cd": "076a8f6e455af3d45e30768650ff6e64",
".git/objects/b5/38e7c9ed0aa81d1deab6ceb61a9685b79708a2": "3937764dffc68eb7f9c3778d8550c3df",
".git/objects/b5/5c32a62c49c931417179ecd76d97ef11632595": "f829c09a98d07ea0cf476823fffab742",
".git/objects/b6/2a3ed54a7fe6f8394a57ea5d07f68d18d17e1a": "bdadaec3d44fe3112466f26021f1d8a7",
".git/objects/b6/82cf2234f704da3d37ed40401164933ffd76b9": "385c8ad2e1341dfe3852f282a87791a6",
".git/objects/b6/8baf25bd9562037a8ac64b23fdc56b7f94b7b9": "78d899cce3c569594ec16a263d4fcc16",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/8fd5b6fe37419b65a4b1451f3a652c77142534": "2d828587607acdc6d62acef3e88e78ca",
".git/objects/b9/4db1f1d56d987a743e0d17d24ec7468731e061": "8389bf2b80dc6d5224c6ea4317df80cf",
".git/objects/bc/cf6ec230fb6655fc98516c413226009dee1b1e": "b8d4e653e23c3d1000579f1399181b29",
".git/objects/bd/a631503569166481024b7eb49761932da3591d": "92ccf7d5c51717e996ccfadbc50d1da7",
".git/objects/bd/c4c0e19f832e21651cbe6392de154649303cae": "8c0c458c5d17321f0e128f36dcd00528",
".git/objects/be/93efb0477985b991c4199c7ff25ed71a398316": "80103227188f67088265b30dcf29527c",
".git/objects/be/b9fe4ba29bc7bafd55d433fb7b244229d74407": "81189d299d53eb77e9ae900abcdc0a76",
".git/objects/c0/e5a1e08f94e535f711d967db8a07ff20685600": "e33165710572272d0f6cd20affdf61f8",
".git/objects/c1/713b3ff32c9155363a2e98dbf3d5eeec9720f1": "4f287e7f258932f9c661e550dca39c90",
".git/objects/c2/abd03969ef48900aab723b96924a093b5fac59": "b01605d3e2396a3a23c850da7809184b",
".git/objects/c3/701da7db22d5606958684ac52d849c34ba8984": "39943cd146bf55a2d1756eda14d9cce7",
".git/objects/c3/731cf9cc67ba4545002c587a2c3e14561209af": "b6bd1d386cbc073d698af15a10fb89dc",
".git/objects/c4/518fcd56f03036b643aba1e7d3f275f8b03827": "796177b0512413c2665c26f8d360b933",
".git/objects/c5/91ca5b2a836f768ef8c299505a66b8f7d9e127": "c7c5e48af56067496b55a50cb3b7494d",
".git/objects/c6/02fdde0d4c0866bdb9e39d331c0a7018404e82": "6696a2941d85d0235b52cedcc8b7ff7d",
".git/objects/cc/0fa53d7afeccdd6bee84c6a82db037989225f7": "412acd87269082735f8ca5d3d3d14006",
".git/objects/cc/4a5f6106d74d4e422030f22ad7b46723aab537": "90eaf9c1a4a5170b9f0fda075136bf6f",
".git/objects/cd/47c5ccef4da26e24f0164f727150cbb4f0340f": "0f1bb3fd35cc1e0f0f003aa31f0ce2a7",
".git/objects/cd/e55a581d413ed6cde17a81f0a09b67c8cb04b9": "e23cbee3c55f8d649a9be94bcb3997ea",
".git/objects/ce/eb3d7c3f9f8b34b5f6ce77a42d145395369345": "0de937833b2867d91fb62583dd2543be",
".git/objects/d0/748575c91d3d6e271dbb6976467030ac65cd26": "3f12f196364814ddf6a641035b956b18",
".git/objects/d0/99a578f75ac468a3b2958495d6c6e82ced5fd0": "1e0287ad31789af0631265e5d6360ebb",
".git/objects/d2/532c2ebca94b25f8beb603f4093ed2b0709499": "a54f0b251108de66cbd4bb1a0da5e05e",
".git/objects/d3/2183267e5f93362ad7a886335b040681c94d65": "3988796ef3e04b40e30ffd64cecc840e",
".git/objects/d3/7328a0a92aecee9d404b9fcb94b9e6d4b524cf": "a92270c5d0730bf408ede2f4eeef00a8",
".git/objects/d4/1e70be8399dee125ee2b93490beb140bbf5897": "ea1daccb30011338d2dac9b2b6a169f3",
".git/objects/d4/80c0ca58bf8ed2033b9583882a5cea841ebb1a": "e104c66fe5e781e5c844d527a8578664",
".git/objects/d4/d98982dacdfc2efe9dba4d86166c6f76dad40f": "4a0fcee1b0f772fd6c384700058a2097",
".git/objects/d7/c882803dc0d30dcf4f7eb079bedec089bb2681": "d7debbded1464e52ef5f170783a579a9",
".git/objects/d9/05742334a1c58522fb0e031a56e98c3762b4c1": "ae7c89ccd31afcc97b4790f008de7536",
".git/objects/d9/0708302fb259063272a1c20bd0e6ae249a3bb9": "fcdaaab68cadf41910c3a8f963c42f9a",
".git/objects/dc/0d8dcd09d310337ba6da9ec14768045bb52483": "4b4a69675298a6ba14784fb9daab3941",
".git/objects/dc/fe008eceed21fcc80a354048b8ba699374286c": "b23e1c299b9a4ba323eb5a5025f15b40",
".git/objects/dd/aafdbf0e5088fc6e3c9695dd47170931f4419a": "a6552e70330fea85c3f8ef4103a85696",
".git/objects/dd/e7a5b170b7e709b2ae86841ad404acc6f547eb": "71aa2ece584f1ce49e2d087c03c2fc67",
".git/objects/de/85aceaf1e1956b0f0edab5aaedc8b8704cb5c0": "6effd874669291182381056d9ddb25a9",
".git/objects/e0/2ed914c3e9c33976eb0b9fcc0627e1a04b5d1e": "b2c230330ab9d8f2ff69acf6bee658f6",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e6/4da9ceb16e7cc99d91cf218f0aadd9e7c175e0": "e27279cf57b12ba3b973c28c69adb6c0",
".git/objects/e7/42478a9c487a1e7191d7af22d8a5c073a58e64": "60cf703abf488205c4c18ee07c187e15",
".git/objects/e8/4a6367bd97b08768aa1a1d9f253bdcb8c67623": "8795a4103ff2d95c2d1802411447c147",
".git/objects/e8/fb38687e605f889b0447f1ea0c161afbf20d20": "67c597f4633d0ddc3872902ae0f7d3d5",
".git/objects/eb/9d5201e5eba6f2a919527cd0ea6c404e929ecc": "d18a4ff865d4d5fc2120f64fe09f9ac9",
".git/objects/f1/b88b3ef519a494d1f4eaf52de5827d1a081514": "e0f97edc2e7162a7579aaa65b0244c93",
".git/objects/f3/1ea76047f1a7b5e46e145f9d06fedf1d4ef1dd": "a33741096dfdec224a4a16fad32b274c",
".git/objects/f5/8891ca3ba14f02a0b23f8f6faafcb743926bf5": "ede5caf76d0c5814968421aa3f9c74e6",
".git/objects/f5/bb992d638e3e4e58e5907c7d9909ce6edf1c37": "fd734dd00630ea461dec52b4f7791d3e",
".git/objects/f5/c8deae18afa23f360830863909441a351fd42b": "1253bcabdc90d4d540aa30d411bb52b9",
".git/objects/f6/518cea1ac377ef1ec04ac664110533b7bc55ef": "5193609897ad5eb7c4e1788f8a4d5692",
".git/objects/f7/58b68bef54a0ab3087a6f7d67bbfaca2feaf67": "faa97d504827d539cd3b8663a2905318",
".git/objects/f7/90b03e256a2922b94cd76dfbf15855bd833546": "0e2f250aa3f95e9a2ce66c539e34f74e",
".git/objects/f7/b9ad479acbac8771080351e0c483b2aa58bc84": "0185ae519565a5c6c996a3e724d1f353",
".git/objects/f9/9031a482e5ed5ab8376d3409e9ac1713f4a4ef": "671f9d8c275b6e1637ce7625f8816f9d",
".git/objects/fc/c9ee95e73115258a5751fc6fde6bbb2035a349": "c448cf40b11e8caa281727f26cd7c921",
".git/objects/fc/d20236ef89994bc5880d1dd053cabcd1779ae8": "2859a806155dd6beaa2f3948407b2cd8",
".git/objects/fd/7f5b7cab0746aee2a0f96ab448ac996696a918": "42bbf61008c8cbad2390dbeaa672c5d1",
".git/objects/fe/099c63c5a2fb064c95224267c1f8d295f5efa2": "72684e889c508e2188907fd1de4da709",
".git/objects/fe/3e873cdb38e2fd0dace7d426ca1edbf266a078": "a1e4fe29caa5dd31534d968151436b61",
".git/objects/fe/942edc6074d867e2d3885b519d5dc4d0f738e6": "8ab0b7c379d3c09a200c1c7d3304be29",
".git/objects/ff/440884f18bf626027f39dbfd2792eea09a587a": "baf73692cf4c6ddb7ba384de08e3329f",
".git/objects/ff/55cde41be4d6aaad4c2a85179cbe3e3d58d337": "af696f8730ed2ea4f1f22de175dc5574",
".git/refs/heads/master": "282008465cbcf91843ceaa9b3e5ac004",
".git/refs/remotes/origin/master": "282008465cbcf91843ceaa9b3e5ac004",
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
"assets/NOTICES": "52c4ea24deb25d422e03771ba6bd61b6",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "8eeadae9d2cdbc96c29cf33142b8d18e",
"/": "8eeadae9d2cdbc96c29cf33142b8d18e",
"main.dart.js": "bb1bc4242f6702cfc685c2c05c10470d",
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
