<script>
  export default {
    data () {
      var cc = Math.round(Math.random() * 10);

      return {
        Index: {
          bgimg: 'bg' + cc,
          siteInfo: {
            sitename: '去吃啥？'
          }
        }
      }

    },
    methods: {
      goBack: function(e) {
        history.go(-1);
      }

    }
  }
</script>
<template>
  <div id="home">
    <header class="header mui-bar mui-bar-nav">
      <h1 id="title" class="mui-title">{{Index.siteInfo.sitename}}</h1>
    </header>
    <div class="mui-content index-page" v-bind:class="Index.bgimg">
      <div class="button-box">

        <router-link to="/list"><button class="mui-btn go-button">马上选出吃什么！</button></router-link>
        <br>
        <span>选择困难症患者福音</span>
      </div>
    </div>
  </div>
</template>
