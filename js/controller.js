var textArr = [
	[0 , "in the Garden"],[5, " "],[6, "歌: yuiko"],[11, " "],[12, "作詞: yuiko"],
	[17, " "],[18, "作編曲：Meis Clauson"],[23, " "],[24, "Created by: Alpha"],
	[26, "当たり前の景色も"],
	[28, "たった少し角度変える"],
	[31, "だけ"],
	[32, "そんな簡単な事も気付かずにいた僕らは"],
	[38, "きっと"],
	[39, "手にした小さな花の使い方すらわからないけど"],
	[44, "けど"],
	[45, "それでもこの世界は回り続けて見守るよ"],
	[51, "こんな僕らだって 飛び立てる"],
	[57, "声は枯れてなくなっても"],
	[60, "生きる道を見つけたら"],
	[64, "高く広がった空も"],
	[67, "今なら進めるだろう"],
	[70, "ここから見送る背中"],
	[73, "強く憧れてた人"],
	[76, "僕のココロ焼き付いた"],
	[80, "今度は自分の番だ 飛ぼう"],
	[87, " "],[89, " "],[91, " "],[93, " "],[95, " "],
	[97, "本当に寂しいなら"],
	[99, "手を伸ばし願えばいいだけ"],
	[103, "膝を抱えて泣いて 諦めを選んだのは 自分"],
	[109, "生きてくことはけしてたやすいことじゃないはず"],
	[115, "でも"],
	[116, "僕は何度も何度も その夢を 追い求めていた"],
	[122, "こんな僕らだって 愛せるだろう"],
	[128, "どんな暗い闇にでも"],
	[131, "続く道はあるだろう"],
	[134, "先を歩く人達が"],
	[137, "落とした花が導く"],
	[140, " "],
	[141, "長い人の道のりは"],
	[144, "楽しいことばかりじゃない"],
	[147, "それでもまだ諦めず"],
	[150, "僕らは息をしている ここで"],
	[157, " "],[159, " "],[161, " "],[163, " "],[165, " "],
	[167, "僕ら生まれた時から"],
	[169, "泣き続けてきたはずだ"],
	[173, "それでもまだ少しだけ"],
	[176, "心が何故かざわめく"],
	[179, "本当に見つけたいなら"],
	[182, "捕らわれたままじゃなくて"],
	[186, "世界が僕らを呼んで"],
	[188, "動き出したあの空へ 飛ぼう"],
	[196, " "],[198, " "],[200, " "],[202, " "],[204, " "],
	[206, "【in the Garden】"],[214, "2014/10/26発売 Primary 11th album\"From GardeN\"より"],
	[222, "イラスト：tica85 bookstores"],[230, "Edited by: Alpha"],
	[235, " "],
];

var image = new Image();
image.onerror = function(){
	alert("Can not connect to Youtube, \nPlease check your Internet connection and try again");
};
image.src = "http://youtube.com/favicon.ico";

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
	playerVars: { 'autoplay': 1, 'controls': 0 },
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
			if(parseInt(player.getCurrentTime()) == textArr[line][0]){
				clearUp();
				display(textArr[line][1], (textArr[line+1][0] - textArr[line][0] + 1) * 1000);
				line++;
			}
		}, 500);
	} else if (event.data == YT.PlayerState.ENDED) {
		var bg = document.querySelector(".full")
		bg.style.background='url(img/intheGarden.jpg)';
		clearInterval(refreshScreen);
		clearAll();
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

function clearAll(){
	$.ClearAllMessage();
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}