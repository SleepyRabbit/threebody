<template>
  <div class="home flex flex-direction-column">
    <div class="header flex-shrink-0 flex">

      <dropdown trigger="hover">
        <a class="button is-white" style='height: 100%;width:120px;'>
          <span>Drop</span>
          <span class="icon is-small">
            <i class="fa fa-angle-down"></i>
          </span>
        </a>
        <div slot="content">
          <menus style="width: 150px;">
            <menu-item icon="user" :click="onUser"><span>会员管理</span></menu-item>
            <menu-item icon="ticket" to="/test">工单管理</menu-item>
            <menu-item icon="lock">修改密码</menu-item>
            <div class="divider"></div>
            <menu-item icon="">退出</menu-item>
          </menus>
        </div>
      </dropdown>

      <dropdown trigger="hover">
        <a class="button is-white" style='height: 100%;width:120px;'>
          <span>Drop</span>
          <span class="icon is-small">
            <i class="fa fa-flag"></i>
          </span>
        </a>
      </dropdown>


    </div>

    <div class="banner">

    </div>

  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
    }
  },
  methods: {
      onUser: function () {
        console.log('user!');
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home {
  width: 100%;
  height: 100%;
}

.header {
  flex-basis: 8%;
  /*height: 20%;*/
  border: 1px solid blue;
}

.banner {
  flex-basis: 10%;
  /*height: 20%;*/
  border-bottom: 1px solid red;
}

.content {
  border: 1px solid red;
}

/*.content {*/
  /*width: 80%;*/
  /*!*flex-basis: 80%;*!*/
  /*border: 1px solid red;*/
/*}*/
</style>
