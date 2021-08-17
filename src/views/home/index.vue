<template>
    <div>
        <van-nav-bar title="app框架" right-text="更多" left-arrow ></van-nav-bar>
        <div>aaaaaaa</div>
        <van-button @click="interfacetest">测试接口</van-button>
    </div>
</template>
<script>
import {demoInterface} from '../../api/demo'
export default {
    mounted(){
       
    },
    methods:{
        interfacetest(){
            demoInterface({str_devices_no: 'MZ200001'}).then(res => {
            console.log('res=====',res)
          })
        }
    }
}
</script>
<style lang="sass">

</style>
