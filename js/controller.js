var textArr = [
	[0.4 , "in the Garden"],[5.0, " "],[6.2, " "],[7.1, "歌: yuiko"],[11.9, " "],[13.0, "作詞: yuiko"],
	[17.0, " "],[18.2, "作編曲：Meis Clauson"],[20.1, " "],[21.4, " "],[23.2, "Created by: Alpha"],
	[26.2, "当たり前の景色も"],
	[28.6, "たった少し角度変える"],
	[31.7, "だけ"],
	[32.4, "そんな簡単な事も気付かずにいた僕らは"],
	[37.6, "きっと"],
	[38.9, "手にした小さな花の使い方すらわからないけど"],
	[44.1, "けど"],
	[45.2, "それでもこの世界は回り続けて見守"],
	[50.3, "る"],
	[51.2, "よ"],
	[51.8, "こんな僕らだって 飛び立てる"],
	[57.1, " "],
	[57.4, "声は枯れてなくなっても"],
	[60.2, "生きる道を見つけたら"],
	[63.4, "高く広がった空も"],
	[66.7, "今なら進めるだろう"],
	[70.2, " "],
	[70.4, "ここから見送る背中"],
	[73.1, "強く憧れてた人"],
	[76.2, "僕のココロ焼き付いた"],
	[79.5, "今度は自分の番だ"],
	[83.3, "飛ぼう"],
	[87.4, " "],[89.4, " "],[91.4, " "],[93.4, " "],[94.9, " "],
	[96.5, "本当に寂しいなら"],
	[99.4, "手を伸ばし願えばいい"],
	[102.7,"だけ"],
	[103.3, "膝を抱えて泣いて 諦めを選んだのは"],
	[109.0, "自分"],
	[109.8, "生きてくことはけしてたやすいことじゃないはず"],
	[115.1, "でも"],
	[115.9, "僕は何度も何度も その夢を 追い求めていた"],
	[122.5, "こんな僕らだって 愛せるだろう"],
	[128.1, " "],
	[128.5, "どんな暗い闇にでも"],
	[130.9, "続く道はあるだろう"],
	[134.2, "先を歩く人達が"],
	[137.6, "落とした花が導く"],
	[141.0, " "],
	[141.2, "長い人の道のりは"],
	[143.9, "楽しいことばかりじゃない"],
	[147.0, "それでもまだ諦めず"],
	[150.3, "僕らは息をしている"],
	[154.0, "ここで"],
	[157.6, " "],[159.0, " "],[161.0, " "],[163.0, " "],[165.0, " "],
	[166.5, "僕ら生まれた時から"],
	[169.5, "泣き続けてきたはずだ"],
	[172.9, "それでもまだ少しだけ"],
	[176.0, "心が何故かざわめく"],
	[179.2, " "],
	[179.6, "本当に見つけたいなら"],
	[182.4, "捕らわれたままじゃなくて"],
	[185.6, "世界が僕らを呼んで"],
	[188.7, "動き出したあの空へ"],
	[192.6, "飛ぼう"],
	[196.9, " "],[198.0, " "],[200.0, " "],[202.0, " "],[204.0, " "],
	[206.0, "【in the Garden】"],[212.7, "2014/10/26発売 Primary 11th album\"From GardeN\"より"],
	[217.5, "イラスト：tica85 bookstores"],[220.0, "Author: Alpha"],[225.0, "2017/4/5"],[230.0,"CSS3 + jQuery"],
	[235.0, " "],
];

var testImg = new Image();
testImg.onerror = function(){
	alert("Can not connect to Youtube, \nPlease check your Internet connection and try again");
};

testImg.src = "http://youtube.com/favicon.ico";
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
var player;

function onYouTubeIframeAPIReady() {
	player = new YT.Player('bgm_player', {
	height: '0',
	width: '0',
	videoId: '5Cof9rP7TEQ',
	events: {
		'onReady': onPlayerReady,
		'onStateChange': onPlayerStateChange
		}
	});
}

function onPlayerReady(event) {
	event.target.playVideo();
}

var onPlayerStateChange = (function() {
	var inprogress = false
	var refreshScreen
	return function(event) {
	if (event.data == YT.PlayerState.PLAYING && !inprogress) {
		inprogress = true;
		var line = 0;
		refreshScreen = setInterval(function(){
			if(player.getCurrentTime().toFixed(2) >= textArr[line][0]){
				clearUp();
				display(textArr[line][1], (textArr[line+1][0] - textArr[line][0] + 1) * 1000);
				line++;
			}
		}, 50);
	} else if (event.data == YT.PlayerState.ENDED) {
		$('html').css('background-image', 'url(img/intheGarden.jpg)');
		clearInterval(refreshScreen);
		clearUp();
	}
}
})()

function display(txt, duration){
	$.ShowMessage({
		texts: [{text:txt}],
		backgrounds: [{color:getRandomColor()}],
		textchangeat: duration
	});
}

function clearUp(){
	$.CloseMessage();
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
