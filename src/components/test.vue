<template>
  <div class="test box">
    <Timeline>
      <Timeline-item>
        <p class="time">1976年</p>
        <p class="content">Apple I 问世</p>
      </Timeline-item>
      <Timeline-item>
        <p class="time">1984年</p>
        <p class="content">发布 Macintosh</p>
      </Timeline-item>
      <Timeline-item>
        <p class="time">2007年</p>
        <p class="content">发布 iPhone</p>
      </Timeline-item>
      <Timeline-item>
        <p class="time">2010年</p>
        <p class="content">发布 iPad</p>
      </Timeline-item>
      <Timeline-item>
        <p class="time">2011年10月5日</p>
        <p class="content">史蒂夫·乔布斯去世</p>
      </Timeline-item>
    </Timeline>
  </div>
</template>

<script>
  export default {
    name: 'test',
    data () {
      return {
      }
    },
    methods: {
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .test {
    padding: 10px;
  }

  .time{
    font-size: 14px;
    font-weight: bold;
  }
  .content{
    padding-left: 5px;
  }
</style>
