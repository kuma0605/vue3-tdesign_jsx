<template>
  <div class="relative w-full h-full login-screen adjust-full ">
    <div class="absolute pt-8 w-full flex flex-col items-center text-3xl font-bold animate__animated animate__heartBeat">
      巡检系统
    </div>
    <div class="flex w-full h-full">
      <div class="flex-1"></div>
      <div class="flex-1 flex items-center justify-center">
        <div class="bg-white bg-opacity-50 rounded-lg px-7 py-14 w-96">
          <div class="flex items-center justify-between mb-10">
            <div class="h-px w-28 bg-gray-300"></div>
            <div class="mx-4 text-2xl">登录</div>
            <div class="h-px w-28 bg-gray-300"></div>
          </div>
          <div>
            <div v-if="msg" class="mb-4">
              <t-alert theme="error">{{ msg }}</t-alert>
            </div>
            <t-input class="mb-4" v-model="username" placeholder="请输入用户名" @enter="login" @focus="clearMsg">
              <template #prefix-icon>
                <user-icon />
              </template>
            </t-input>
            <t-input class="mb-4" type="password" placeholder="请输入密码">
              <template #prefix-icon>
                <lock-on-icon />
              </template>
            </t-input>

            <t-button class="w-full" @click="login">登录</t-button>
          </div>
        </div>
      </div>
    </div>
    <div class="absolute w-full text-[0.875rem] bottom-[3.25rem] left-0 flex justify-center text-footer">
      <div class="mr-[5.125rem]">主办单位：江苏瀚天智能科技股份有限公司</div>
      <div>技术支持：江苏瀚天智能科技股份有限公司</div>
    </div>
  </div>
</template>
<script >
import qs from 'qs';
let imgpre = import.meta.env.VITE_IMG_PRE;
import { LockOnIcon } from 'tdesign-icons-vue-next';
import { UserIcon } from 'tdesign-icons-vue-next';
export default {
  components: {
    LockOnIcon,
    UserIcon
  },
  data() {
    return {
      username: "",
      password: "",
      captcha: "",
      msg: "",
      src: imgpre + 'captcha.jpg'
    };
  },
  
  methods: {
    async login() {
      try {
        const data = {
          username: this.username,
          password: this.password,
          captcha: this.captcha
        };
        const options = {
          method: 'POST',
          headers: { 'content-type': 'application/x-www-form-urlencoded' },
          data: qs.stringify(data),
          url: "/sys/login",
        };
        let res = await this.$axios(options);

        console.log(res)
        if (res.data.code == 0) {
          //登录成功
          localStorage.setItem("username", this.username);
          await this.getMenuList();
          this.$router.replace("/nav");
        } else {
          this.msg = res.data.msg;
        }
      } catch (error) {

      }

    },
    refreshCode: function () {
      this.src = imgpre + "captcha.jpg?t=" + $.now();
    },
    async getMenuList() {
      let res = await this.$axios.get("/sys/menu/nav?_" + $.now());
      if (res.data.code == 0) {
        let menuList = res.data.menuList;
        let permsMap = {};
        menuList.forEach(menu => {
          menu.list.forEach((item) => {
            let path = item.url.replace("modules", "").replace(".html", "").replace(/^\//, "");
            permsMap[path] = item.perms;
          })
        });
        localStorage.setItem("permsMap", JSON.stringify(permsMap))
      }
    },
    clearMsg() {
      this.msg = ""
    }
  },
};
</script>
  
<style></style>
  