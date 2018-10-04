var SnapShot = require('./index'),
    path = require('path'),
    fs = require('fs')


var taskPathName = path.join(__dirname, "./taskList.json")
var taskDataString = fs.readFileSync(taskPathName, "utf-8")
var tasks = JSON.parse(taskDataString)
var failedTasks = []

async function startSnapshotTask () {
  for (let index = 0; index < tasks.length; index++) {
    if (index == 0) {
      console.log('Come on')
    }
    let result = await SnapShot(tasks[index])
    if (result == 'fail') {
      failedTasks.push(tasks[index])
    }
    console.log('第' + (index+1) + '张截图：' + result)
    if (index == tasks.length-1) {
      console.log('Well done')
      console.log('失败的任务：' + failedTasks)
    }
  }
}

startSnapshotTask()
