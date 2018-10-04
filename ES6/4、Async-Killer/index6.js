var fs = require("fs"),
    path = require("path"),
    request = require("request")

var moviePath = path.join(__dirname,'movies'),
    exts = ['.mkv', '.avi', '.mp4', '.rm', '.rmvb', '.wmv']

//读取电影文件
var readMovieFiles = function () {
  return new Promise(function (resolve, reject) {
      fs.readdir( moviePath, function (err, files) {
          resolve(files.filter((value) => exts.includes( path.parse(value).ext)))
      })
  })
}


//获取电影对应的海报

var fetchPoster = function (movieName) {
  let url =  `https://api.douban.com/v2/movie/search?q=${encodeURI(movieName)}`;
  return new Promise( function (resolve, reject){
    request({url: url, json: true}, function (error, response, body) {
      if(error) {
        return reject(error)
      }
      resolve(body.subjects[0].images.large)
        
    })
  })
}

//保存海报
var savePoster = function (movieName, url) {
  request.get(url).pipe(fs.createWriteStream(path.join(moviePath, movieName + '.jpg')))
}

var start = async function () {
  let files = await readMovieFiles()
  for (var file of files) {
    let name = path.parse(file).name
    console.log(`正在获取 【${name}】的海报`)
    savePoster(name,await fetchPoster(name))
  }
  console.log('=== 获取海报完成 ===');
}

start()

