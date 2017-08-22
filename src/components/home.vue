<template>
  <div class="home box flex flex-direction-column">

    <div class="header flex-shrink-0 flex">
      <Dropdown class="flex">
        <Button type="text" style="height: 100%">hover 触发ssss
          <Icon type="stats-bars"></Icon></Button>
        <Dropdown-menu slot="list" >
          <Dropdown-item>驴打滚</Dropdown-item>
          <Dropdown-item>炸酱面</Dropdown-item>
          <Dropdown-item>豆汁儿</Dropdown-item>
          <Dropdown-item>冰糖葫芦</Dropdown-item>
          <Dropdown-item>北京烤鸭</Dropdown-item>
        </Dropdown-menu>
      </Dropdown>

      <Dropdown class="flex">
        <Button type="text" style="height: 100%;">hover 触发ssss
          <Icon type="arrow-down-b"></Icon></Button>
        <Dropdown-menu slot="list" style="width: 150px;">
          <Dropdown-item>驴打滚</Dropdown-item>
          <Dropdown-item>炸酱面</Dropdown-item>
          <Dropdown-item>豆汁儿</Dropdown-item>
          <Dropdown-item>冰糖葫芦</Dropdown-item>
          <Dropdown-item>北京烤鸭</Dropdown-item>
        </Dropdown-menu>
      </Dropdown>

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
  name: 'home',
  data () {
    return {
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
.home {
}

.header {
  flex-basis: 8%;
  /*height: 20%;*/
  /*border: 1px solid blue;*/
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

<style>
  .ivu-select-dropdown {
    margin: 0px !important;
  }
</style>
