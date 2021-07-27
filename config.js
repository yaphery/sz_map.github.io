const CONFIG = {
    // 服务端地址

    // SERVERURL: 'http://10.0.12.112:8080/platform/',
    // SERVERURL: 'http://172.16.2.2/platform/',
    // SERVERURL: 'http://10.0.12.251:8011/platform/',
    SERVERURL: 'http://58.211.183.162:7703/platform/',
    // SERVERURL: 'http://172.16.2.215:8083/platform/',
    // SERVERURL: 'http://172.16.2.215:8087/platform/',
    // SERVERURL: 'http://10.0.12.156:8080/jiyue_pudong/',

    // 区域中心点,不同的项目请设置不同的区域中心点
    CENTER: [120.63513093153597, 31.26569091015668],
    // 最大外围的范围
    BOUNDS: [115.4091879728694, 28.7761671108916, 126.79321776536449, 34.56790697514131],
    // 地图默认配置参数，地图初始化参数，不同的地方请设置不同的参数
    MAPCONFIG: {
        compass: false,
        bearing: 0,
        center: [120.63221268812777, 30.886956693269354],
        pitch: 0,
        zoom: 12,
        minZoom: 9,
        // maxZoom: 18,
        attribution: '',
        centerCross: false,
        fog: false
    }

};
