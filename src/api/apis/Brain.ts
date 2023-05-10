import request from '../interceptor'
import { AxiosPromise } from 'axios'
import Hosts from '@/api/hosts'

const host = `${Hosts.GPT域名}/brain`

const 获取提示语 = (params: any): AxiosPromise => request({ url: `${host}/prompts`, method: 'get', params })

// const 流式对话 = (data: 业务事件参数): AxiosPromise => request({ url: `${host}/v1/chat/stream`, method: 'post', data })

const 获取对话回复 = (data: any): AxiosPromise => request({ url: `${host}/v1/chat/completetion`, method: 'post', data })


export default {
  获取提示语,
  // 流式对话,
  获取对话回复
}
