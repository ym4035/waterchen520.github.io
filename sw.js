const workboxVersion="6.1.5";importScripts("https://storage.googleapis.com/workbox-cdn/releases/6.1.5/workbox-sw.js"),workbox.core.setCacheNameDetails({prefix:"Violet`Blog"}),self.skipWaiting(),workbox.core.clientsClaim(),workbox.precaching.precacheAndRoute([{revision:"8cab2e6c246dfd0c57b08e8108082af5",url:"./404.html"},{revision:"5f69a77e3aad3997bd93271299cada57",url:"./about/index.html"},{revision:"3e29bd91888dc6811259b0ab33d895fd",url:"./archives/2021/03/index.html"},{revision:"44b50bd8f61d0e6e001b647a7880f30e",url:"./archives/2021/04/index.html"},{revision:"10295f064fc288aa48f0e3951a4af4a1",url:"./archives/2021/05/index.html"},{revision:"a5621f8d41362d3b1ffc0900669b9395",url:"./archives/2021/05/page/2/index.html"},{revision:"1df4ff1a5bb7fab0da57df4c4c3b4557",url:"./archives/2021/index.html"},{revision:"0dc25150d1e6b495a5def1ed07009e4d",url:"./archives/2021/page/2/index.html"},{revision:"92b8eacfd9cfcf9a241799c8591c4f6d",url:"./archives/2021/page/3/index.html"},{revision:"59e2f1ac072519ee3794181ca6d9d197",url:"./archives/index.html"},{revision:"0481c7428a0e6e56b199e4f66d1015e7",url:"./archives/page/2/index.html"},{revision:"4880df70568b4c0f65f99416a76f31a6",url:"./archives/page/3/index.html"},{revision:"12fc160800285847a53d4592b2357737",url:"./assets/fonts/UnidreamLED.ttf"},{revision:"fe45755478a7746bf22b5440bfc12622",url:"./atom.xml"},{revision:"770e04e0b469aa91a6998f366d964157",url:"./baidusitemap.xml"},{revision:"b83f3e5378f9b154b1707489bb18a23b",url:"./bangumis/index.html"},{revision:"a9b7515fb038ceb17879911374319d15",url:"./comments/index.html"},{revision:"4047f7bf45e5d0b702870762a1faabd4",url:"./css/badge.css"},{revision:"42428c4cac048bf06a86f738d6e64f61",url:"./css/custom.css"},{revision:"3f135819b95843fe8cd5982785c2a841",url:"./css/index.css"},{revision:"d41d8cd98f00b204e9800998ecf8427e",url:"./css/var.css"},{revision:"8692ce53a8a996c4e92bf62f7dc6dac8",url:"./fcircle/index.html"},{revision:"e276a0bae4e4c4723473d8a82ea92ee2",url:"./hpptalk/index.html"},{revision:"bf847db3825a004514b5a0653b6bbbbd",url:"./index.html"},{revision:"5a106508562bc0f2c7e86766089c627b",url:"./js/custom.js"},{revision:"98394be1776831a30cf048ec9b613522",url:"./js/fcircle.js"},{revision:"bab3575fd25fb146747a6cefe1973d83",url:"./js/floatpanel.js"},{revision:"5641b1a6b817df7d81f465c27ed538d9",url:"./js/main.js"},{revision:"533d980c0d50a0d0d7fe34c41a3e2100",url:"./js/search/algolia.js"},{revision:"acb62dcdf7e90930da3f6bf07349fc21",url:"./js/search/local-search.js"},{revision:"dcf69c07e6595a5fce5121731baf2525",url:"./js/swiper_init.js"},{revision:"598b813df1bf7d9cbf88ae5ce7b01723",url:"./js/time.js"},{revision:"b3810513e04b13b2d18c6b779c883f85",url:"./js/tw_cn.js"},{revision:"4cfc631de0e5f6ff12b2833cac848f27",url:"./js/utils.js"},{revision:"736a7e83bf0505c025830e48388f575b",url:"./link/index.html"},{revision:"d4bd85d7e617c8545a1ee1619f5191fa",url:"./live2dw/assets/koharu.model.json"},{revision:"cde36abfc1348fe5434f99fc708f0c3c",url:"./live2dw/assets/koharu.physics.json"},{revision:"32973883fcac0a9ae6cc79c0ea25fda2",url:"./live2dw/lib/L2Dwidget.0.min.js"},{revision:"094cbace49a39548bed64abff5988b05",url:"./live2dw/lib/L2Dwidget.min.js"},{revision:"3c9cbeff6d9d519616a66a92af0a591c",url:"./manifest.json"},{revision:"90b613a55bde46e8c5b456beb6ad4cf6",url:"./music/index.html"},{revision:"991e163adbf366fa1e2dbdcc58d2e230",url:"./page/2/index.html"},{revision:"838d470f05f57fdf844b5b617cae6806",url:"./page/3/index.html"},{revision:"9c305398116eb0969cc7975c1163d38a",url:"./posts/2e19.html"},{revision:"c18f5ac082123d428d8a51050acad288",url:"./posts/3444.html"},{revision:"f5488d5e9d5440a98849507e8928dbf4",url:"./posts/3539.html"},{revision:"b990b8f7b0c169037d9f14743f6e0fde",url:"./posts/5018.html"},{revision:"ce57f255f4743ea8af729f55510cfb3e",url:"./posts/5471.html"},{revision:"0022de9c3e7e2cbd37eb7832b2a23012",url:"./posts/728a.html"},{revision:"02932d25418df1898c4adf2a0a9dfebf",url:"./posts/7d58.html"},{revision:"d347734e36cae93b223b63e7b4b455cf",url:"./posts/7e87.html"},{revision:"2099e15cc97b13eb85a34c94ceb7a5c6",url:"./posts/83bd.html"},{revision:"5b5be64db79a155d15e9a4ae59361862",url:"./posts/92a6.html"},{revision:"550ee090f06014853985362b5c7b1cbe",url:"./posts/92d9f86f.html"},{revision:"8181b5761d3c61f0487819312bc9a728",url:"./posts/9520.html"},{revision:"7c603ff152290c1b74a2c6571e078a9d",url:"./posts/9ffb.html"},{revision:"946d3436bfb027b465f651dab8de894d",url:"./posts/a2cf14b7.html"},{revision:"ad7f235eef9f6e7572a87b5e4bf40dbb",url:"./posts/ace5.html"},{revision:"fee7a9e50bad22e5f11f50105fb6fc99",url:"./posts/b19a.html"},{revision:"e556b2cba0f4187cb8b42744847f608f",url:"./posts/b8cf1317.html"},{revision:"5a3af5bde64d0af530a74bb5a253e990",url:"./posts/ce6a.html"},{revision:"6b9df222501f48cee40ad43341db4108",url:"./posts/d760.html"},{revision:"741ea09633cfdb25022b19c7a5102062",url:"./posts/ddae.html"},{revision:"55f6af8b14d93e24489ac227e949d911",url:"./posts/e173abca.html"},{revision:"df915e99f0211d8209ef3f042ea1c136",url:"./posts/e6da.html"},{revision:"35b9381df0ba0eb9aba523daab596429",url:"./posts/eadb39c4.html"},{revision:"f4f74bcf40e23f8c23670dd4e2e13aaa",url:"./posts/esde.html"},{revision:"8fa02051ab0681c7df6c7066c1519cbf",url:"./posts/fe37.html"},{revision:"52d86d9497c4765828d59cac2d405ce7",url:"./posts/pogf.html"},{revision:"b15d65ec8215fb45371d9bed9b99a919",url:"./search.xml"},{revision:"cf343554bfef28ceec3b080581cabb99",url:"./sitemap.xml"},{revision:"d4daecd3550256c38fe16e4b7a8590fc",url:"./special/index.html"},{revision:"ed23ddc9a2360b43368fe14b9cd6ea9e",url:"./tags/壁纸/index.html"},{revision:"ec3d94f5a3ba5f305dd3db6a4f9963a3",url:"./tags/生活/index.html"},{revision:"75665661e16087254b5cdff19bfa46d8",url:"./tags/外挂标签/index.html"},{revision:"ec06000719c0695aa66277a2d2519506",url:"./tags/Element/index.html"},{revision:"0893ead49a490b8b547b430c580592d8",url:"./tags/Hexo/index.html"},{revision:"7764919752aa33de65c9b8a699770579",url:"./tags/HTML/index.html"},{revision:"138af6ad9013cf409b70b3e732c43b08",url:"./tags/index.html"},{revision:"0dc4b6fe6760d20ed28b766a7b22793a",url:"./tags/JS/index.html"},{revision:"4670c3b70f6240e2dc0a51050bc726cd",url:"./tags/Mybatis/index.html"},{revision:"ffa8b6b0876796ea1a0761cc40593838",url:"./tags/Vue/index.html"}],{directoryIndex:null}),workbox.googleAnalytics.initialize();