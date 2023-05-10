interface 基础分页数据 {
  perpage?: number
  page?: number
}

interface 会话列表请求参数 extends 基础分页数据 {
  平台id?: string
  withMsg?: boolean
}

interface 查询会话数量请求参数 {
  平台id?: string
  时段?: [number, number]
}

interface 新建会话参数 {
  平台id: string
  是测试: boolean // always true if from backend web-app
}

interface 选择意图参数 {
  消息: 消息
  意图集: string[]
  相关信息集: string[]
  模型配置?: any
}

interface 业务事件参数 {
  类型: string // 待下单、下单、支付
  用户id: string
}
