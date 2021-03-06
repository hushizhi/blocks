import store from './store/'
export default {
    status: {
        vuex: { //vuex.store
            state: {
                allData: 'allActivityStatusData'
            }
        },
        extend: {

        },
        data: {
            props: {
                getAllData() {
                    let res = {
                        "errno": 0,
                        "errmsg": "",
                        "data": {
                            0:"全部",
                            1:"新建",
                            2:"上线",
                            3:"下线",
                            4:"用户生成中",
                            5:"工作中",
                            6:"已完成",
                            7:"已过期"
                        }
                    }
                    let result = [];
                    if(res.errno === 0) {
                        for(var item in res.data) {
                            result.push({
                                value: item,
                                label: res.data[item]
                            });
                        }
                    }
                    store.commit('getActivityStatusData', result)
                }
            }
        }
    }
}
