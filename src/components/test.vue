<template>
  <div class="test box flex flex-direction-column">

    <div class="header flex-shrink-0 flex">
      <Menu mode="horizontal" :theme="theme" active-name="1" class="flex-">
        <Menu-item name="1">
          <Icon type="ios-paper"></Icon>
          内容管理
        </Menu-item>
        <Menu-item name="2">
          <Icon type="ios-people"></Icon>
          用户管理
        </Menu-item>
        <Submenu name="3">
          <template slot="title">
            <!--<Icon type="stats-bars"></Icon>-->
            统计............
          </template>
          <Menu-group title="使用">
            <Menu-item name="3-1">新增和启动</Menu-item>
            <Menu-item name="3-2">活跃分析</Menu-item>
            <Menu-item name="3-3">时段分析</Menu-item>
          </Menu-group>
          <Menu-group title="留存">
            <Menu-item name="3-4">用户留存</Menu-item>
            <Menu-item name="3-5">流失用户</Menu-item>
          </Menu-group>
        </Submenu>
        <Menu-item name="4">
          <Icon type="settings"></Icon>
          综合设置
        </Menu-item>
      </Menu>
    </div>

    <!--<div class="banner flex">-->
    <!--&lt;!&ndash;<img src="../assets/img/banner1.jpg" alt="" class="flex-grow-1 flex-shrink-0">&ndash;&gt;-->
    <!--&lt;!&ndash;<span><i class="fa fa-user" style="float:left"></i></span>&ndash;&gt;-->
    <!--</div>-->

    <div class="content flex-shrink-0 flex-grow-1">
      <Button>Default</Button>
      <Button type="primary">Primary</Button>
      <Button type="ghost">Ghost</Button>
      <Button type="dashed">Dashed</Button>
      <Button type="text">Text</Button>
      <br><br>
      <Button type="info">信息按钮</Button>
      <Button type="success">成功按钮</Button>
      <Button type="warning">警告按钮</Button>
      <Button type="error">错误按钮</Button>
    </div>

  </div>
</template>

<script>
  export default {
    name: 'test',
    data () {
      return {
        theme: 'light',
      }
    },
    methods: {
      onUser: function () {
        console.log('user!');
      },
      fade: function () {
        this.$notify.open({
          type: 'success',
          title: `回调状态${status}`,
        });
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .test {
  }

  .header {
    flex-basis: 8%;
    /*height: 20%;*/
    border: 1px solid blue;
  }

  .ivu-select-dropdown {
    margin: 0 !important;
  }

  .ivu-menu-submenu:hover {
    border: 0 !important;
  }

  button {
    font-size: 14px;
  }

  button:hover {
    background-color: rgb(245,245,245);
  }

  .banner {
    flex-basis: 60%;
    /*background-color: rgb(123,217,243);*/
    /*height: 20%;*/
    /*border-bottom: 1px solid red;*/
  }

  .tabs .tab-content {
    margin: 0;
  }

  .content {
    /*border: 1px solid red;*/
  }

  /*.content {*/
  /*width: 80%;*/
  /*!*flex-basis: 80%;*!*/
  /*border: 1px solid red;*/
  /*}*/
</style>
