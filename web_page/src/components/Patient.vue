<template>
  <section class="content">
        <section class="content_text">
          <section class="content_left patient_left">
              <div class="content_left_top">
                  <div class="title" @click="open()"><n3-icon type="sort-down icon" :class="{icon_active:isOpen}"></n3-icon>快捷搜索</div>
                  <div :class="[!isOpen ? 'show' : '','list']">
                      <ul>
                          <li @click="setNew">最新病人</li>
                          <li @click="setSingle">3星病人</li>
                      </ul>
                  </div>
              </div>
              <div class="content_left_text">
                 <header>过虑患者:</header>
                  <dl class="item_list">
                      <dd>
                          <fieldset>
                              <legend class="tertiary-title">年龄 <font>[{{model.age[0]}}岁] 至 [{{model.age[1]}}岁]</font></legend>
                              <n3-slider v-model="model.age" @change="change" :range="true" :min="0" :max="100" :step="5" width="95%"></n3-slider>
                          </fieldset>
                      </dd>
                      <dd>
                          <fieldset>
                              <legend class="tertiary-title">性别</legend>
                              <n3-radio-group v-model="model.sex" type="primary" @change="change">
                                <n3-radio-btn label="0">不限</n3-radio-btn>
                                <n3-radio-btn label="1">男</n3-radio-btn>
                                <n3-radio-btn label="2">女</n3-radio-btn>
                              </n3-radio-group>
                          </fieldset>
                      </dd>
                      <dd>
                          <fieldset>
                              <legend class="tertiary-title">症状</legend>
                              <n3-typeahead 
                                async
                                v-model="model.padient"
                                placeholder="请输入查询条件"
                                @change="getResult"
                                :items="items"
                                :add-format="getValue"
                                width="100%"
                                class="typeahead">
                              </n3-typeahead>
                          </fieldset>
                      </dd>
                      <dd>
                          <fieldset>
                              <legend class="tertiary-title">星级</legend>
                              <n3-radio-group v-model="model.single" type="primary" @change="change">
                                <n3-radio-btn label="0">所有</n3-radio-btn>
                                <n3-radio-btn label="1"><n3-icon type="star"></n3-icon></n3-radio-btn>
                                <n3-radio-btn label="2"><n3-icon type="star"></n3-icon><n3-icon type="star"></n3-icon></n3-radio-btn>
                                <n3-radio-btn label="3"><n3-icon type="star"></n3-icon><n3-icon type="star"></n3-icon><n3-icon type="star"></n3-icon></n3-radio-btn>
                              </n3-radio-group>
                          </fieldset>
                      </dd>
                       <dd>
                          <fieldset>
                              <legend class="tertiary-title">与我的距离 <font></font></legend>
                          </fieldset>
                      </dd>
                      <dd>
                          <fieldset>
                              <legend class="tertiary-title"><a href="" class="mark_a">注册或者登录</a> 查找你附近的人</legend>
                          </fieldset>
                      </dd>
                  </dl>
              </div>
          </section>
          <section class="content_right patient_right">
            <header><h3>搜索病友</h3></header>
            <div class="content_right_box">
                <header>
                    580,254名成员决定与 <span class="sign">中医联助乐网</span> 的其他成员分享他们的个人资料。
                    <div class="header-line"> 
                       <span v-if="model.age[0] > 0 || model.age[1] < 100">{{model.age[0]}}岁 至 {{model.age[1]}}岁<n3-icon type="times" title="删除" @click.native="delClick(ageDel)"></n3-icon></span>
                       <span v-if="model.sex!=='0'">{{model.sex == '1' ? '先生' : '女士'}}<n3-icon type="times" title="删除" @click.native="delClick(sexDel)"></n3-icon></span>
                       <span v-if="model.padient!==''">{{model.padient}}<n3-icon type="times" title="删除" @click.native="delClick(padientDel)"></n3-icon></span>
                       <span v-if="model.single!=='0'">{{model.single}}星病人<n3-icon type="times" title="删除" @click.native="delClick(singleDel)"></n3-icon></span>
                    </div>
                    <div class="header-line"> 
                        排序方式
                        <div class="page">
                            <n3-page :total="pagination.total" v-model="pagination.current"></n3-page>
                        </div>
                    </div>
                    <div class="header-line">
                         <n3-radio-group v-model="model.lastNew" type="primary" @change="change">
                            <n3-radio-btn label="1">最后更新</n3-radio-btn>
                            <n3-radio-btn label="2">最新病人</n3-radio-btn>
                        </n3-radio-group>
                    </div>
                </header>
                <div class="content_table">
                    <table class="tables">
                        <tr><th style="width:40%;">用户</th><th style="width:60%;">病症</th></tr>
                        <tr v-for="item in source" :key="item.id">
                            <td>
                                <div class="hear_portrait">
                                    <img :src="item.headPortrait" >
                                </div>
                                <div class="user">
                                     <span><router-link :to="'/homepage/'+item.id" class="sign">{{item.name}}</router-link></span>
                                     <span class="text text_1"><n3-icon type="mars" title="先生" class="male" v-if="item.sex == '1'"></n3-icon><n3-icon type="venus" class="female" title="女士" v-else></n3-icon></span></br>
                                     <span class="text text_1"><n3-icon :type="item.star >=1? 'star':'star-o'" class="star"></n3-icon><n3-icon :type="item.star >=2? 'star':'star-o'" class="star"></n3-icon><n3-icon :type="item.star >=3? 'star':'star-o'" class="star"></n3-icon></span><span class="text text_1 nobold">{{item.age}}岁</span>
                                </div>
                               
                            </td>
                            <td class="content_td">
                                <router-link v-for="subset in item.symptom" :key="subset.sid" class="table_a"  :to="'/patient/'+subset.sid">{{subset.name}}</router-link></br>
                                <span class="text_1">兴趣爱好:{{item.last_time}}</span></br>
                                <span class="text">更新于:{{item.last_time}}</span>
                            </td>
                            </tr>
                    </table>
                </div>
                <footer>
                    <div class="page_f">
                        <n3-page :total="pagination.total" v-model="pagination.current" @change="pagechange" ></n3-page>
                    </div>
                </footer>
            </div>
          </section>
      </section>
  </section>
</template>
<script>
export default {
  name: "patient",
  data() {
    return {
      isOpen: true,
      model: {
        age: [0, 100],
        sex: "0",
        lastNew: "1",
        symptom: "",
        single: "0",
        padient: ""
      },
      source: [
        {
          id: 1,
          name: "落花浅忆",
          headPortrait: "../../static/img/head.jpg",
          sex: "0",
          last_time: "2018-01-30",
          age: "20",
          star:2,
          symptom: [
            { sid: 1, name: "脑膜炎" },
            { sid: 2, name: "智障" },
            { sid: 3, name: "智障" },
            { sid: 4, name: "智障" }
          ]
        },
        {
          id: 2,
          name: "落花浅忆",
          headPortrait: "../../static/img/head.jpg",
          sex: "1",
          last_time: "2018-01-30",
          age: "20",
          disease: "脑膜炎",
          star:1,
          symptom: [
            { sid: 1, name: "脑膜炎" },
            { sid: 2, name: "智障" },
            { sid: 3, name: "智障" },
            { sid: 4, name: "智障" }
          ]
        },
        {
          id: 3,
          name: "落花浅忆",
          headPortrait: "../../static/img/head.jpg",
          sex: "1",
          last_time: "2018-01-30",
          age: "20",
          disease: "脑膜炎",
          star:3,
          symptom: [
            { sid: 1, name: "脑膜炎" },
            { sid: 2, name: "智障" },
            { sid: 3, name: "智障" },
            { sid: 4, name: "智障" }
          ]
        },
        {
          id: 4,
          name: "落花浅忆",
          headPortrait: "../../static/img/head.jpg",
          sex: "1",
          last_time: "2018-01-30",
          age: "20",
          disease: "脑膜炎",
          star:2,
          symptom: [
            { sid: 1, name: "脑膜炎" },
            { sid: 2, name: "智障" },
            { sid: 3, name: "智障" },
            { sid: 4, name: "智障" }
          ]
        },
        {
          id: 5,
          name: "落花浅忆",
          headPortrait: "../../static/img/head.jpg",
          sex: "1",
          last_time: "2018-01-30",
          age: "20",
          disease: "脑膜炎",
          star:3,
          symptom: [
            { sid: 1, name: "脑膜炎" },
            { sid: 2, name: "智障" },
            { sid: 3, name: "智障" },
            { sid: 4, name: "智障" }
          ]
        }
      ],
      items: [],
      loading: false,
      pagination: {
        current: 1,
        total: 100
      },
      searchChanged: false
    };
  },
  methods: {
    reload() {
      if (this.searchChanged) {
        //控制查询时的翻页
        this.pagination.current = 1;
        this.searchChanged = false;
      }
      let params = Object.assign({}, this.model, {
        page: this.pagination.current
      });
      this.loading = true;
      this.$http
        .post("#", {
          params
        })
        .then(data => {
          (this.source = data.result.data || []);
            (this.pagination.total = data.result.total || 0);
          this.loading = false;
        })
        .catch(error => {
          this.loading = false;
          this.n3Alert({
            content: error || "加载失败，请刷新试试~",
            type: "danger",
            placement: "top-right",
            duration: 2000,
            width: "240px" // 内容不确定，建议设置width
          });
        });
    },
    open() {
      this.isOpen = !this.isOpen;
    },
    change(val) {
      this.searchChanged = true;
      this.reload();
    },
    getResult(val) {
      // this.$http.post('#',{
      //     value:val
      // })
      // .then(data => {
      //     this.items=data.items
      // })
      // .catch(error=>{
      //     this.n3Alert({
      //         content:error || '数据查询出错',
      //         type:'danger',
      //         placement:'bottom-left',
      //         duration:5000,
      //         width:'240px'
      //     })
      // })
    },
    pagechange(page) {
      console.log(page)
      this.reload()
    },
    getValue() {

    },
    setNew() {
      this.model.lastNew ="2"
    },
    setSingle() {
      this.model.single = "3"
    },
    delClick(func) {
      func()
    },
    ageDel() {
      this.model.age = ["0", "100"]
    },
    sexDel() {
      this.model.sex = "0"
    },
    singleDel() {
      this.model.single = "0"
    },
    padientDel() {
      this.model.padient = ""
    }
  }
};
</script>