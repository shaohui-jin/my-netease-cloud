<template>
  <el-dialog
      top="30vh"
      center
      :append-to-body="true"
      :modal="false"
      :title="title"
      v-model="dialogVisible"
      width="25%">
    <section style="position: relative;">
      <nav @click="change" style="position: absolute; left: 0;top: -55px;">
        <el-link type="danger">{{is ? '扫码登录' :'账号登录'}}</el-link>
      </nav>
      <div v-if="is">
        <el-form
            label-width="60px"
            label-position="left"
            :model="formLabelAlign">
          <el-form-item label="手机号">
            <el-input v-model="formLabelAlign.phone"></el-input>
          </el-form-item>
          <el-form-item label="密码">
            <el-input type="password" v-model="formLabelAlign.password"></el-input>
          </el-form-item>
        </el-form>
        <div style="text-align: center;" @click="login">
          <el-button type="primary">登陆</el-button>
        </div>
      </div>
      <!--      扫码登录-->
      <div v-else style="display: flex;justify-content: center;">
        <el-image @click="loadingImg" :src="image" style="width: 250px; height: 250px;">
          <template #error>
            <div class="image-slot"
                 style="width: 100%;height: 100%;display: flex;align-items: center; background: #f1ecec;">
              <el-skeleton :animated="true">
                <template #template>
                  <el-skeleton-item variant="image" style="width: 250px; height: 250px;"/>
                </template>
              </el-skeleton>
            </div>
          </template>
        </el-image>
      </div>
    </section>

  </el-dialog>
</template>

<script setup>
  import {reactive, ref} from 'vue'
  import {useStore} from "vuex";
  import eventBus from '@/utlis/eventbus.js'
  import {ElMessage} from 'element-plus'
  import {getKey, createLogin, checkLogin, getInfo} from '@/network/login.js'

  const store = useStore()

  let title = ref('登录')
  let image = ref('')
  let is = ref(true)
  let timer
  const change = () => {
    is.value = !is.value
    if (!is.value) {
      getLoginImg()
    }
  }
  //加载
  const loadingImg = getLoginImg

  async function getLoginImg() {
    let res = await getKey()
    let key = res.data.data.unikey
    let result = await createLogin(key)
    image.value = `https://api.pwmqr.com/qrcode/create/?url=${result.data.data.qrurl}`
    timer = setInterval(() => {
      checkLogin(key).then(res => {
        title.value = res.data.message
        if (res.data.code === 803) {
          dialogVisible.value = false
          clearInterval(timer)
          ElMessage.success({
            message: '登陆成功',
            type: 'success',
          })
          getInfo().then(res => {
            store.commit('setUser', res.data.profile)
          })
        } else if (res.data.code === 800) {
          clearInterval(timer)
          image.value = ''
        } else if (res.data.code === 802) {
          image.value = res.data.avatarUrl
        }
      })
    }, 3000)
  }


  let dialogVisible = ref(false)

  eventBus.on('login', () => {
    clearInterval(timer)
    dialogVisible.value = true
  })

  let formLabelAlign = reactive({
    phone: '',
    password: ''
  })
  const login = () => {
    dialogVisible.value = false
    clearInterval(timer)
    store.dispatch('login', formLabelAlign).then(() => {
      store.dispatch('getUserNumber')
      eventBus.emit('login1')
    })
  }
  defineExpose({
    dialogVisible
  })
</script>

<style scoped lang="less">
  .el-button--primary {
    width: 50%;
  }
</style>