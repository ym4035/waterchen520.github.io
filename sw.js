const workboxVersion="6.1.5";importScripts("https://storage.googleapis.com/workbox-cdn/releases/6.1.5/workbox-sw.js"),workbox.core.setCacheNameDetails({prefix:"Violet`Blog"}),self.skipWaiting(),workbox.core.clientsClaim(),workbox.precaching.precacheAndRoute([{revision:"8f53651158aa839c71007fefdae75925",url:"./404.html"},{revision:"36ad91fdfaede2ee913b92c5e4f290a7",url:"./about/index.html"},{revision:"4fcf9577dae53435798b8cb0e920db7f",url:"./archives/2021/03/index.html"},{revision:"01ad8acab9f5850300ad57a08df6be1a",url:"./archives/2021/04/index.html"},{revision:"78f7499fea8a5a83fc4cbfbbd2136d2d",url:"./archives/2021/05/index.html"},{revision:"05be4f7ea4217a4fcaf6fd62f23864c8",url:"./archives/2021/05/page/2/index.html"},{revision:"db2e01e3715ba9b74f3af078cebbc034",url:"./archives/2021/index.html"},{revision:"b2b2010c199236e56a844d61d6686d2a",url:"./archives/2021/page/2/index.html"},{revision:"4458a91fdad4543b77024e1daeeb0004",url:"./archives/2021/page/3/index.html"},{revision:"e7173aaba1a9be4b96a366cbc4957edb",url:"./archives/index.html"},{revision:"9738bb3d65c39570dc7d7a595784bd82",url:"./archives/page/2/index.html"},{revision:"ac8b2091165ece05dd2e61791d68184f",url:"./archives/page/3/index.html"},{revision:"12fc160800285847a53d4592b2357737",url:"./assets/fonts/UnidreamLED.ttf"},{revision:"63f2bc3fbb60e924a5b5d7f5d5819f0c",url:"./atom.xml"},{revision:"68550bae0ccf3b5a070f31f0821d049a",url:"./baidusitemap.xml"},{revision:"556049c7a826522c8e2cec74c07cd5ed",url:"./bangumis/index.html"},{revision:"9d2fb60bd3f6a83afd477439dc17d11e",url:"./comments/index.html"},{revision:"4047f7bf45e5d0b702870762a1faabd4",url:"./css/badge.css"},{revision:"42428c4cac048bf06a86f738d6e64f61",url:"./css/custom.css"},{revision:"3f135819b95843fe8cd5982785c2a841",url:"./css/index.css"},{revision:"d41d8cd98f00b204e9800998ecf8427e",url:"./css/var.css"},{revision:"69b847ad620da89eddd9410cb5f75a93",url:"./fcircle/index.html"},{revision:"008354ae8180b2db71785fdb9e1608e5",url:"./hpptalk/index.html"},{revision:"ef833f6c021b368198805ef53b3147d1",url:"./index.html"},{revision:"5a106508562bc0f2c7e86766089c627b",url:"./js/custom.js"},{revision:"98394be1776831a30cf048ec9b613522",url:"./js/fcircle.js"},{revision:"bab3575fd25fb146747a6cefe1973d83",url:"./js/floatpanel.js"},{revision:"5641b1a6b817df7d81f465c27ed538d9",url:"./js/main.js"},{revision:"533d980c0d50a0d0d7fe34c41a3e2100",url:"./js/search/algolia.js"},{revision:"acb62dcdf7e90930da3f6bf07349fc21",url:"./js/search/local-search.js"},{revision:"dcf69c07e6595a5fce5121731baf2525",url:"./js/swiper_init.js"},{revision:"598b813df1bf7d9cbf88ae5ce7b01723",url:"./js/time.js"},{revision:"b3810513e04b13b2d18c6b779c883f85",url:"./js/tw_cn.js"},{revision:"4cfc631de0e5f6ff12b2833cac848f27",url:"./js/utils.js"},{revision:"4f8ed277015981129fdd8133d524dc47",url:"./link/index.html"},{revision:"d4bd85d7e617c8545a1ee1619f5191fa",url:"./live2dw/assets/koharu.model.json"},{revision:"cde36abfc1348fe5434f99fc708f0c3c",url:"./live2dw/assets/koharu.physics.json"},{revision:"32973883fcac0a9ae6cc79c0ea25fda2",url:"./live2dw/lib/L2Dwidget.0.min.js"},{revision:"094cbace49a39548bed64abff5988b05",url:"./live2dw/lib/L2Dwidget.min.js"},{revision:"3c9cbeff6d9d519616a66a92af0a591c",url:"./manifest.json"},{revision:"73c949c27a81edbee22b4ee1aa1db9ed",url:"./music/index.html"},{revision:"66ae735235d111fef4ac07c6f4a7c71d",url:"./page/2/index.html"},{revision:"d51cc24017f937f65c2d7181023ee8f7",url:"./page/3/index.html"},{revision:"342079487afee4b62c77dd24794ef0f2",url:"./posts/1714.html"},{revision:"1f9a1bbc3a33feb046ba2646d8ca9524",url:"./posts/2e19.html"},{revision:"13add4e14090dc8a41ad70fd5b8d6ae0",url:"./posts/3444.html"},{revision:"565a1bca74edd48a6ea9f0d3b68dc137",url:"./posts/3539.html"},{revision:"f94c72342217f6b8d1840bd1ea6ed08f",url:"./posts/5018.html"},{revision:"7e422943832ff6cf9363dc7af749b77b",url:"./posts/5471.html"},{revision:"dac0e6e970341615b8a9b56df52825db",url:"./posts/728a.html"},{revision:"4b24c6256bb5c41fdfa730c42858145e",url:"./posts/7d58.html"},{revision:"d5b23196220917e612b606eb592974a0",url:"./posts/7e87.html"},{revision:"cc63f73cca33d39641a00e3079cc67d2",url:"./posts/83bd.html"},{revision:"119b0830fbaedb5184ababbac737ae2c",url:"./posts/92a6.html"},{revision:"7ccc55215e969e3f7ebdd48c188bb1f3",url:"./posts/92d9f86f.html"},{revision:"7fe95bbce0793cc4f92a3d5a7214050a",url:"./posts/9520.html"},{revision:"a3484d85522805034f4a97d91a77c5c6",url:"./posts/9ffb.html"},{revision:"5851ba279da837acabd32f84df2a3509",url:"./posts/a2cf14b7.html"},{revision:"5ae5ca9bc37e3d27eb69bca5dc03a71f",url:"./posts/ace5.html"},{revision:"5ce70b79ecde3449413efed8f7d49c51",url:"./posts/b19a.html"},{revision:"bb04d6ec88404570ca9d898838cf16a8",url:"./posts/b8cf1317.html"},{revision:"055fff5fdadf3401efdd4f203d02a8e6",url:"./posts/c341.html"},{revision:"4345ab32465cce5a5c1f834cfd668fa3",url:"./posts/ce6a.html"},{revision:"bb06015fc4e9d3a2481ca855d5a120fb",url:"./posts/d760.html"},{revision:"a3063666620caa35ae537b2793fc0808",url:"./posts/ddae.html"},{revision:"e6d6f3bc4b2867bbe101d1311ccefd67",url:"./posts/e173abca.html"},{revision:"30c6eb001c3f090c1a3f2d349a590621",url:"./posts/e46d.html"},{revision:"ba0eb7d8271ea815a9c9f95218d311f2",url:"./posts/e6da.html"},{revision:"0a42e84eccc99f977fcb9c5803bea465",url:"./posts/eadb39c4.html"},{revision:"f08f1d73cb4a395a81b7389f90bcb7c0",url:"./posts/esde.html"},{revision:"05d907d1a675650e526fc30c71420cf5",url:"./posts/fe37.html"},{revision:"1716436301722c8259f1dc5b1f9dc959",url:"./posts/pogf.html"},{revision:"ee1e8ae0abd7f7fd347f2bbae8ce1c56",url:"./search.xml"},{revision:"1809cb6c765c27785c0b38cf2009bb3c",url:"./sitemap.xml"},{revision:"7fc497fe453c6b7e91f550bdc0776224",url:"./special/index.html"},{revision:"0ddfb2158711f0c1c4d78a0e816ab58c",url:"./tags/壁纸/index.html"},{revision:"06aa8e2d71fd572b7459de81894a1f4f",url:"./tags/生活/index.html"},{revision:"24760dc261aec860b44c68560674d832",url:"./tags/外挂标签/index.html"},{revision:"43dfeba16d408b55d2e7b0c54bbf3b7b",url:"./tags/Element/index.html"},{revision:"b6a8d8af7e257d8ddfc6cb8cc1ee416d",url:"./tags/Hexo/index.html"},{revision:"f42ca4bd7bb737481c04ee728f19cdb4",url:"./tags/HTML/index.html"},{revision:"88e274e935572f7caf3b3baa4224bafe",url:"./tags/index.html"},{revision:"fe14063d4f5a10038da76491f180783e",url:"./tags/JS/index.html"},{revision:"5b33ceeef93a5c2d87028adc3f746085",url:"./tags/Mybatis/index.html"},{revision:"8fa97dd6369393160db3de63116df2c1",url:"./tags/Spring/index.html"},{revision:"635e67306f623437c1ddd8b8e0f47029",url:"./tags/Vue/index.html"}],{directoryIndex:null}),workbox.googleAnalytics.initialize();