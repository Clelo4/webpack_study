<template>
  <div id="layout-footer">
    <header>
      <router-link
        to='/login'
        class="router-link-a"
      >登录</router-link>
      <span>/</span>
      <router-link
        to='/signup'
        class="router-link-a"
      >注册</router-link>
    </header>
    <main style="">
      <router-link
        to='/home'
        class="router-link-a"
      >关于我们</router-link>
      <router-link
        to='/home'
        class="router-link-a"
      >联系我们</router-link>
      <router-link
        to='/signup'
        class="router-link-a"
      >成为作者</router-link>
      <router-link
        to=''
        class="router-link-a"
      >用户协议</router-link>
      <!-- <div class="phone">联系邮箱：<span>xxxx@e-mail.com</span></div>
      <div class="address">地址：<address style="display: inline-block;">广东省广州市番禺区大学城
        </address>
      </div> -->

    </main>
    <Divider
      class="common-divider"
      style="background-color: #797979 !important"
    />
    <footer style="margin-top: 10px;">
      <span>Copyright © 2020 科普平台</span>
    </footer>
  </div>
</template>
<script>

export default {
  name: 'layoutFooter',
  props: {},
  data: function () {
    return {
    };
  },
  components: {
  },
  computed: {
  },
  created: function () {
  },
  methods: {
  }
};
</script>

<style scoped lang="stylus">
#layout-footer {
  font-style: normal;
  font-weight: 400;
  font-size: 1.4rem;
  line-height: 2.1rem;
  background-color: #202020;
  max-width: 100vw;
  min-width: 100vw;
  width: 100vw;
  max-height: 20rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  padding: 2rem 2rem 1rem 2rem;
  color: rgb(121, 121, 121);

  & > header {
    text-align: center;

    .router-link-a {
      color: rgb(121, 121, 121);
      line-height: 2rem;
      padding: 5px;
    }
  }

  & > main {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    margin: 10px auto;
    text-align: left;

    .router-link-a {
      color: rgb(121, 121, 121);
      line-height: 2rem;
      padding: 10px;
    }
  }
}
</style>
