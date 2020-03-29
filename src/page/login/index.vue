<template>
  <div class="login">
    <div class="bg-img" />
    <div class="bg-img-mask" />
    <header class="header" />
    <main class="main">
      <h1
        style="color: #ffffff; font-size: 1.8rem; margin-bottom: 2rem; text-align: left;"
        @click="goTo('/')"
      >
        <Icon type="ios-arrow-back" />
        返回首页
      </h1>
      <Form
        :model="formItem"
        class="form"
        style="font-weight: bold; color: black !important;"
      >
        <FormItem class="form-item">
          <Input
            v-model="formItem.user_id"
            placeholder="手机号/邮件地址"
            size="large"
          /></Input>
        </FormItem>
        <FormItem class="form-item">
          <Input
            v-model="formItem.password"
            placeholder="密码"
            type="password"
            password
            size="large"
          /></Input>
        </FormItem>
        <FormItem class="form-item">
          <div class="flex">
            <a style="color: rgb(212, 212, 212);">忘记密码？</a>
            <div>
              <Button
                type="warning"
                style="margin-right: 10px;"
                to="/signup"
              >
                注册
              </Button>
              <Button
                type="primary"
                @click="login"
              >
                登录
              </Button>
            </div>
          </div>
        </FormItem>
      </Form>
    </main>
  </div>
</template>

<script>
export default {
  name: '',
  components: {
  },
  props: {
  },
  data: function () {
    return {
      formItem: {
        user_id: '',
        password: ''
      }
    };
  },
  watch: {
  },
  created () {
  },
  methods: {
    goTo (path) {
      this.$router.push({ 'path': path });
    },
    login () {
      let that = this;
      this.$store.dispatch('user/login', this.formItem).then((res) => {
        if (res && res.success) {
          this.$Message.success('登录成功');
          this.$router.push({ path: '/' });
        }
      });
    }
  }
};
</script>

<style scoped lang="stylus">
.login {
  .bg-img {
    background-image: url('/static/img/login-bg.jpg');
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-size: cover;
    height: 100vh;
    width: 100vw;
    overflow: hidden;
    position: fixed;
    left: 0;
    right: 0;
    z-index: -10;
  }

  .bg-img:after {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    background: inherit;
    filter: blur(2px);
    z-index: -9;
  }

  .bg-img-mask {
    background-color: rgba(0, 52, 88, 0.175);
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-size: cover;
    height: 100vh;
    width: 100vw;
    overflow: hidden;
    position: fixed;
    left: 0;
    right: 0;
    z-index: -8;
  }
}

.main {
  position: fixed;
  left: 50%;
  top: 40%;
  transform: translate(-50%, -50%);
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
  padding: 50px 40px 50px 40px;

  .form {
    width: 100%;

    .form-item {
      width: 100%;
    }

    .flex {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      flex-wrap: nowrap;
    }
  }
}
</style>
