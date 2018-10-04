const puppeteer = require('puppeteer'),
      fs = require('fs'),
      path = require('path'),
      request = require('request')

function mkdirsSync(dirname) {
  if (fs.existsSync(dirname)) {
    return true
  } else {
    if (mkdirsSync(path.dirname(dirname))) {
      fs.mkdirSync(dirname)
      return true
    }
  }
}

var snapShotFolerPath = path.join(__dirname, '../snspshot/')
mkdirsSync(snapShotFolerPath)

 function snapShot (taskInfo) {
  return new Promise(function (resolve, reject) {

    (async function(){
      // 启动Chromium
      const browser = await puppeteer.launch({ignoreHTTPSErrors: true, headless:true, args: ['--no-sandbox']})
      // 打开新页面
      const page = await browser.newPage()
      // 设置页面分辨率
      await page.setViewport({width: 1920, height: 1080})

      // 访问
      await page.goto(taskInfo.websiteUrl, {waitUntil: 'domcontentloaded'}).catch(err => console.log(err))
      await page.waitFor(1000)

      try {
        // 截图
        await page.screenshot({path: snapShotFolerPath + taskInfo.imageName, fullPage:true}).catch(err => {
          console.log('截图失败: ' + err)
        });
        await page.waitFor(6000)
      } catch (e) {
        console.log('failed ' + e)
      } finally {
        await browser.close()

        fs.stat(snapShotFolerPath + taskInfo.imageName, function(err,stats){
          if (err) {
            reject('fail')
          } else {                                                                                                  
            if (stats.isFile()) {
              resolve('success')
            }
          }
        })
      }

    })()
  })
}

module.exports = snapShot