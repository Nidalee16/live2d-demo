type timestamp = number

interface 平台 {
  名称: string
  id: string
  图标: string
  连接状态?: boolean
  工作状态?: boolean
  连接数?: number
}

interface 用户 {
  名称: string
  用户名: string
  密码?: string
  余额: number
  激活外挂集: 平台[]
}

interface 顾客 {
  _id: string
  名称: string
  平台: string // 千牛，微信，店小微。不同平台的头像、名称不一定一样
  头像: string
  角色: string // 顾客，客服
}

interface 消息 {
  内容: string
  发送者id: string
  接收者id: string
  会话id: string
  时间: timestamp
  意图集?: string[] // 当前消息的意图，后台使用
  相关信息集?: string[] // 当前消息的相关信息，后台使用
}

interface 会话 {
  _id: string
  平台id: string
  消息集: 消息[]
  意图集?: string[] // 当前消息的意图，后台使用
  相关信息集?: string[] // 当前消息的相关信息，后台使用
  需要新增意图?: boolean // backend使用，是否可以提交意图
  需要确认回复?: boolean // backend使用，是否可以确认回复
  待确认回复?: 消息 // backend使用
  待确认回复内容?: string // backend使用，因为待确认回复可能为空但是组件不能为空
}
