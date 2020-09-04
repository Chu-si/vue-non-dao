import service from './request.js'
import store from "store";
/**
 * 获取个人提问记录
 */
export function getQuestions(id) {
  return service.request({
    method: "get",
    url: "/system/webapi/issue/list",
    params: {
      mid: id
    }
  })
}

/**
 * 保存提问信息
 */
export function setQuestions(type, searchValue, content) {
  return service.request({
    method: "post",
    url: "/system/webapi/issue/saveIssue",
    params: {
      type,
      searchValue,
      content,
    }
  })
}