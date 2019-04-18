var videoArr = []
$('.video-item').each(function(){
  videoArr.push($(this).attr('data-video'))
})
console.log(videoArr)
var videoIndex = 0
// 首页视频播放器
var videoObject = {
  next:'toNext',
  container: '#video', //容器的ID或className
  variable: 'player',//播放函数名称
  poster:'../material/poster.jpg',//封面图片
  mobileCkControls:true,//是否在移动端（包括ios）环境中显示控制栏
  mobileAutoFull:false,//在移动端播放后是否按系统设置的全屏播放
  video: videoArr[videoIndex]
  
};
var player = new ckplayer(videoObject);
// 下一个
function toNext(){
  if(videoIndex<videoArr.length-1){
    videoIndex ++
    if(videoIndex===videoArr.length-1){ // 最后一个
      player.newVideo({
        front:'toLast',
        autoplay:true,
        mobileCkControls:true,//是否在移动端（包括ios）环境中显示控制栏
        video:videoArr[videoIndex]
      }); 
    }else{
      player.newVideo({
        front:'toLast',
        next:'toNext',
        autoplay:true,
        mobileCkControls:true,//是否在移动端（包括ios）环境中显示控制栏
        video:videoArr[videoIndex]
      }); 
    } 
  }else{
    alert('没有下一集了')
  }
}
// 上一个
function toLast(){
  if(videoIndex>=1){
    videoIndex -- 
    if(videoIndex===0){ // 第一个
      player.newVideo({
        next:'toNext',
        autoplay:true,
        mobileCkControls:true,//是否在移动端（包括ios）环境中显示控制栏
        video:videoArr[videoIndex]
      }); 
    }else{
      player.newVideo({
        front:'toLast',
        next:'toNext',
        autoplay:true,
        mobileCkControls:true,//是否在移动端（包括ios）环境中显示控制栏
        video:videoArr[videoIndex]
      });
    }
  }
}

