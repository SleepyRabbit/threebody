<template>
  <div class="test box">
  </div>
</template>

<script>
  export default {
    name: 'test',
    data () {
      return {
        value1: 0,
      }
    },
    methods: {
      onUser: function () {
        console.log('user!');
      },
      fade: function () {
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

  .demo-carousel {
    /*width: 100%;*/
    /*height: 100%;*/
    flex-grow: 1;
    flex-shrink: 0;
    /*display: -webkit-box;      !* OLD - iOS 6-, Safari 3.1-6 *!*/
    /*display: -moz-box;         !* OLD - Firefox 19- (buggy but mostly works) *!*/
    /*display: -ms-flexbox;      !* TWEENER - IE 10 *!*/
    /*display: -webkit-flex;     !* NEW - Chrome *!*/
    display: flex;             /* NEW, Spec - Opera 12.1, Firefox 20+ */
  }

  .demo-carousel img {
    width: 100%;
    flex-grow: 1;
    flex-shrink: 0;
    align-self: center;
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
