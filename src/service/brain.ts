import API from '@/api'
class Brain服务适配器 {
  private static 实例: Brain服务适配器
  public static 获取Brain服务(): Brain服务适配器 {
    if (!Brain服务适配器.实例) {
      Brain服务适配器.实例 = new Brain服务适配器()
    }
    return Brain服务适配器.实例
  }

  public async 获取提示语(params: any): Promise<any> {
    try {
      const response = await API.获取提示语(params)
      return response.data._id
    } catch (err) {
      return await Promise.reject(err)
    }
  }

  public async 获取对话回复(data: any) {
    try {
      return await API.获取对话回复(data)
    } catch (err) {
      return await Promise.reject(err)
    }
  }
}

export default Brain服务适配器
