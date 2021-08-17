import request from '@/utils/request'

export function demoInterface(query){
    return request({
        url: '/device/special_gain_device_detail',
        method: 'get',
        params: query
    })
}