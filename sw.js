const workboxVersion="6.1.5";importScripts("https://storage.googleapis.com/workbox-cdn/releases/6.1.5/workbox-sw.js"),workbox.core.setCacheNameDetails({prefix:"Violet`Blog"}),self.skipWaiting(),workbox.core.clientsClaim(),workbox.precaching.precacheAndRoute([{revision:"61ccd5fea42124001bb24cfac45454c5",url:"./404.html"},{revision:"e302cee0d37c36a90f5f99c5e308e18b",url:"./about/index.html"},{revision:"25d3546d420540ac666122dd0b2361b1",url:"./archives/2021/03/index.html"},{revision:"fdfb9736f82d2898fdc7dcaff8494ad2",url:"./archives/2021/04/index.html"},{revision:"9bce526695431d86ef9222102ef3d9c5",url:"./archives/2021/05/index.html"},{revision:"9cb4c2f1df4dc5456a7df959eefc8d55",url:"./archives/2021/05/page/2/index.html"},{revision:"ba1a3dccc2f667b7d7440f4cba917229",url:"./archives/2021/index.html"},{revision:"1852f86f28e6a70238683bfee2132e92",url:"./archives/2021/page/2/index.html"},{revision:"75b429f083d3a6c336d5f99e11556977",url:"./archives/2021/page/3/index.html"},{revision:"6cf5322118cb9af00675a53e26557581",url:"./archives/2021/page/4/index.html"},{revision:"e3849c4b9410f6381e6b29bcc1583130",url:"./archives/index.html"},{revision:"024ab418f572cd592b7cbd0c7ab8f04a",url:"./archives/page/2/index.html"},{revision:"9b680520fdc1edf8613f72be6f5def1a",url:"./archives/page/3/index.html"},{revision:"c2d05e82334bc7c8df90106d6a8d3edd",url:"./archives/page/4/index.html"},{revision:"12fc160800285847a53d4592b2357737",url:"./assets/fonts/UnidreamLED.ttf"},{revision:"2d9ee24b4751ada6c7cb95eb50cc6664",url:"./atom.xml"},{revision:"e12b0d1f915a8375edd39415aabae372",url:"./baidusitemap.xml"},{revision:"58290b251ed846b35c540cfeab9e9696",url:"./bangumis/index.html"},{revision:"2293075588046f8b66b05e3ec8714b5a",url:"./comments/index.html"},{revision:"4047f7bf45e5d0b702870762a1faabd4",url:"./css/badge.css"},{revision:"42428c4cac048bf06a86f738d6e64f61",url:"./css/custom.css"},{revision:"3f135819b95843fe8cd5982785c2a841",url:"./css/index.css"},{revision:"d41d8cd98f00b204e9800998ecf8427e",url:"./css/var.css"},{revision:"c8b11d4ed151285d682368b3bf92002e",url:"./fcircle/index.html"},{revision:"54c860c350e29bbfde76e8ec745b0ccc",url:"./hpptalk/index.html"},{revision:"247c623fea64add19b8cdf9de9251378",url:"./index.html"},{revision:"5a106508562bc0f2c7e86766089c627b",url:"./js/custom.js"},{revision:"98394be1776831a30cf048ec9b613522",url:"./js/fcircle.js"},{revision:"bab3575fd25fb146747a6cefe1973d83",url:"./js/floatpanel.js"},{revision:"5641b1a6b817df7d81f465c27ed538d9",url:"./js/main.js"},{revision:"f365d804e133b378ad3a2a37402b0b83",url:"./js/randombg.js"},{revision:"533d980c0d50a0d0d7fe34c41a3e2100",url:"./js/search/algolia.js"},{revision:"acb62dcdf7e90930da3f6bf07349fc21",url:"./js/search/local-search.js"},{revision:"dcf69c07e6595a5fce5121731baf2525",url:"./js/swiper_init.js"},{revision:"598b813df1bf7d9cbf88ae5ce7b01723",url:"./js/time.js"},{revision:"b3810513e04b13b2d18c6b779c883f85",url:"./js/tw_cn.js"},{revision:"4cfc631de0e5f6ff12b2833cac848f27",url:"./js/utils.js"},{revision:"a1c90af7aa40110fc6d9fd072c9b4a5e",url:"./link/index.html"},{revision:"d4bd85d7e617c8545a1ee1619f5191fa",url:"./live2dw/assets/koharu.model.json"},{revision:"cde36abfc1348fe5434f99fc708f0c3c",url:"./live2dw/assets/koharu.physics.json"},{revision:"32973883fcac0a9ae6cc79c0ea25fda2",url:"./live2dw/lib/L2Dwidget.0.min.js"},{revision:"094cbace49a39548bed64abff5988b05",url:"./live2dw/lib/L2Dwidget.min.js"},{revision:"3c9cbeff6d9d519616a66a92af0a591c",url:"./manifest.json"},{revision:"e431404ef09150b21ec54a8861dad2be",url:"./music/index.html"},{revision:"8e888031724df5341bf4a4476dbc239b",url:"./page/2/index.html"},{revision:"1594769fcf00624439db81edf40236b5",url:"./page/3/index.html"},{revision:"e75c11419fa5fcf1edf2db5a84e78ac6",url:"./page/4/index.html"},{revision:"9600a1921b6aad8d8449d124b439009e",url:"./posts/1714.html"},{revision:"0fc589efe2ab0b92fc62ea4a37b146e2",url:"./posts/2e19.html"},{revision:"dbf26a48ef707b9f42f25eb9a2d112da",url:"./posts/3444.html"},{revision:"42840e70d39450c31c52238a21e3f18b",url:"./posts/3539.html"},{revision:"acfa05a868db2a2d7088151f8f77d392",url:"./posts/5018.html"},{revision:"1c07f1f88afb8fc20855426d86874189",url:"./posts/5471.html"},{revision:"66029bbd882b4039d94818aa8b37c975",url:"./posts/728a.html"},{revision:"efe139d4b4b27f845519293bab9dbdb3",url:"./posts/7d58.html"},{revision:"0d24af7c9e5f5878bd06fb7cdfc49cee",url:"./posts/7e87.html"},{revision:"10647959d8da9c737870a4dc5c90a400",url:"./posts/83bd.html"},{revision:"462fad09ffdf4080996bdd887afd87a9",url:"./posts/92a6.html"},{revision:"f36c26d94eca241f1e73bb921dc4b941",url:"./posts/92d9f86f.html"},{revision:"3d8180f39ffbbd377ace68e2bd9e2342",url:"./posts/9520.html"},{revision:"49fd68ad2d00a3b4b807f26db051b2d8",url:"./posts/9ffb.html"},{revision:"95a101fc3560fcf696f6328c2352d967",url:"./posts/a2cf14b7.html"},{revision:"1841e2fa9be772fc46aa81827cd0f079",url:"./posts/aba4.html"},{revision:"355f401903dde9ac7aee2c0e0be1f683",url:"./posts/ace5.html"},{revision:"30ee590c372bed4d64d28b8e70cf28c0",url:"./posts/b19a.html"},{revision:"21fa58b073c5465d45977171cca342a8",url:"./posts/b8cf1317.html"},{revision:"fe480a43e8a2265a2f3497673465ffab",url:"./posts/c341.html"},{revision:"8952c5cbdba5ebe110a5c4c2389e5bbb",url:"./posts/ce6a.html"},{revision:"4ba4155976e7f7d43fe11e81d350c1a9",url:"./posts/d760.html"},{revision:"e4c7f0fac1a8ed23bfa77e6b3c50e483",url:"./posts/ddae.html"},{revision:"3ecac603a6fa972c8766eb09af3d2ae3",url:"./posts/e173abca.html"},{revision:"68a7be70835db1281e3c80b4369108ad",url:"./posts/e46d.html"},{revision:"794b16c819d0e03dcf397dc535be2107",url:"./posts/e6da.html"},{revision:"e6ea5ba877a2bc300a843fe966a7dd35",url:"./posts/eadb39c4.html"},{revision:"4f6392d7644408665069d90056d4c69b",url:"./posts/esde.html"},{revision:"2c177646b4df20a696be2dea71940be1",url:"./posts/f931.html"},{revision:"73cc3758e0b301a1a94b14b553338402",url:"./posts/fe37.html"},{revision:"f561b5cad3565acd94be1372ee9d8de4",url:"./posts/pogf.html"},{revision:"a7170f0dc3e6c7a0b6c334b553cce07d",url:"./search.xml"},{revision:"e7951208128e4935a866871be30afde2",url:"./sitemap.xml"},{revision:"6dbdb9ddeb89f616f8f2c266261c2e84",url:"./special/index.html"},{revision:"e3b20e853c7ce22efc09c52963e510d5",url:"./tags/壁纸/index.html"},{revision:"348e4dbee4db67f6a6058124a2f8f16f",url:"./tags/生活/index.html"},{revision:"2db9415ad25f8235e0bcbf0151f37860",url:"./tags/外挂标签/index.html"},{revision:"e89e8e014f3006cfe0500e03e01ad16b",url:"./tags/Element/index.html"},{revision:"f2aa154c21442e1bf3b610af69aac3fb",url:"./tags/Hexo/index.html"},{revision:"6ff73dc9e9c17d5aa18e556699ff1f76",url:"./tags/HTML/index.html"},{revision:"4cab8f0204983b83ed21320cf8a6977c",url:"./tags/index.html"},{revision:"4870100d52342a6ae9203b7f6046d3bd",url:"./tags/JS/index.html"},{revision:"60c00f3fb2584cf4af1fe06722827560",url:"./tags/Mybatis/index.html"},{revision:"4140bc8186abe7afd1532d64054186a0",url:"./tags/Spring/index.html"},{revision:"924a95f55d0f0ed93bb62f4c59a8fde4",url:"./tags/SpringMVC/index.html"},{revision:"c974b4f08da534347548dac1cebd0e57",url:"./tags/Vue/index.html"}],{directoryIndex:null}),workbox.googleAnalytics.initialize();