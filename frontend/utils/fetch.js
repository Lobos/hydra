import Refetch from 'refetch'

export const fetch = Refetch.create({
  promise: (f) => f.then((res, xhr) => {
    if (res.success) {
      return res.model
    } else {
      throw new Error(res.msg || '服务端获取失败')
    }
  })
})