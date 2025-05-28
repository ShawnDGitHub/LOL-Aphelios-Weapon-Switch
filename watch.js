// 目标者类
class Subject {
    constructor () {
      this.observers = []  // 观察者列表
    }
    // 添加
    add (observer) {
      this.observers.push(observer)
    }
    // 删除
    remove (observer) {
      let idx = this.observers.findIndex(item => item === observer)
      idx > -1 && this.observers.splice(idx, 1)
    }
    // 通知
    notify () {
      for (let observer of this.observers) {
        observer.update();
      }
    }
  }
// 观察者类
class Observer {
    constructor(it) {
      this.it = it
      this.tagName = it.tagName
    }
    // 目标对象更新时触发的回调
    update () {
      console.log(`目标者通知我更新了，我是：${this.tagName}`)
    }
}