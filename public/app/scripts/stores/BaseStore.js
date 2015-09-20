'use strict'

import { EventEmitter } from 'events'
import AppDispatcher from '../dispatchers/AppDispatchers'

class BaseStore extends EventEmitter{

  constructor(){
    super()
  }

  subscribe(actionSubscribe){
    this._dispathToken = AppDispatcher.register(actionSubscribe())
  }

  get dispatchToken(){
    return this._dispathToken
  }

  emitChange(){
    this.emit("CHANGE")
  }

  addChangeListener(cb){
    this.on("CHANGE", cb)
  }

  removeChangeListener(cb){
    this.removeListener('CHANGE', cb)
  }
}

export default BaseStore
