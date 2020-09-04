import service from './request.js'
import store from "store";
/**
 * 获取一个机械详细信息
 */
export function Mechanicl(mid) {
  return service.request({
    method: "get",
    url: "/system/webapi/mechanicl/" + mid,
  })
}
/**
 * 获取一个机械详细信息
 */
export function RecommendMec() {
  return service.request({
    method: "get",
    url: "/system/webapi/adv/recommendMec",
  })
}