# 批量截图任务

> 作为一个全栈工程师，不只是做好自己的本职工作（iOS），而是需要解决项目中的技术问题。这次就是解决自动截图的问题
> 早期公司的数据工程师利用 phantomjs 来截图，后期不断发现截图效率低，加之开发者团队不再维护，因此决定将截图这部分跟你剥离开来，以后方便开发维护。我就承担了这个工作

## puppeteer 

`Puppeteer is a Node library which provides a high-level API to control Chrome or Chromium over the DevTools Protocol. Puppeteer runs headless by default, but can be configured to run full (non-headless) Chrome or Chromium.`


## 安装问题

一开始按照往常的套路（`npm install --save puppeteer`） 好几次都卡住了，后期查找资料发现切换到国内的镜像就可以顺利下载

```power-shell
 PUPPETEER_DOWNLOAD_HOST=https://storage.googleapis.com.cnpmjs.org npm i --save puppeteer
```


## 

#### Installation

* To use Puppeteer in your project, run:
  ```
  PUPPETEER_DOWNLOAD_HOST=https://storage.googleapis.com.cnpmjs.org npm i --save puppeteer
  ```

* Install some basic packages

  ```
  npm install 
  ```

#### Usage

```
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
```

