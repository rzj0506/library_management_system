<template>
  <div :class="{ 'content-box': true }">
    <div class="content">
      <div class="card-info">
        <el-row :gutter="12">
          <el-col :span="6">
            <el-card shadow="always">
              <div class="icons">
                <i class="el-icon-notebook-2"></i>
              </div>
              <div class="info">
                <div class="num">{{ borrowToday }}</div>
                <div>今日借出数</div>
              </div>
            </el-card>
          </el-col>
          <el-col :span="6">
            <el-card shadow="always">
              <div class="icons">
                <i class="el-icon-notebook-2"></i>
              </div>
              <div class="info">
                <div class="num">{{ borrowThisMonth }}</div>
                <div>本月借出数</div>
              </div>
            </el-card>
          </el-col>
          <el-col :span="6">
            <el-card shadow="always">
              <div class="icons">
                <i class="el-icon-notebook-2"></i>
              </div>
              <div class="info">
                <div class="num">{{ borrowThisYear }}</div>
                <div>年度借出数</div>
              </div>
            </el-card>
          </el-col>
        </el-row>
        <el-row :gutter="12">
          <el-col :span="6">
            <el-card shadow="always">
              <div class="icons">
                <i class="el-icon-collection"></i>
              </div>
              <div class="info">
                <div class="num">{{ backToday }}</div>
                <div>今日归还数</div>
              </div>
            </el-card>
          </el-col>
          <el-col :span="6">
            <el-card shadow="always">
              <div class="icons">
                <i class="el-icon-collection"></i>
              </div>
              <div class="info">
                <div class="num">{{ backThisMonth }}</div>
                <div>本月归还数</div>
              </div>
            </el-card>
          </el-col>
          <el-col :span="6">
            <el-card shadow="always">
              <div class="icons">
                <i class="el-icon-collection"></i>
              </div>
              <div class="info">
                <div class="num">{{ backThisYear }}</div>
                <div>年度归还数</div>
              </div>
            </el-card>
          </el-col>
        </el-row>
      </div>
      <!-- 公告显示 -->
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>最新公告</span>
        </div>
        <div class="new">{{ getNewNotice.noticeContent }}</div>
      </el-card>
    </div>
  </div>
</template>

<script>
import {
  borrowToday,
  backToday,
  borrowThisMonth,
  backThisMonth,
  borrowThisYear,
  backThisYear,
  getNewNotice,
} from "../../network/history";
export default {
  name: "Home",
  data() {
    return {
      borrowToday: 0,
      backToday: 0,
      borrowThisMonth: 0,
      backThisMonth: 0,
      borrowThisYear: 0,
      backThisYear: 0,
      getNewNotice: {
        noticeContent: "",
      },
    };
  },
  created() {
    borrowToday().then((res) => {
      this.borrowToday = res;
    });
    backToday().then((res) => {
      this.backToday = res;
    });
    borrowThisMonth().then((res) => {
      this.borrowThisMonth = res;
    });
    backThisMonth().then((res) => {
      this.backThisMonth = res;
    });
    borrowThisYear().then((res) => {
      this.borrowThisYear = res;
    });
    backThisYear().then((res) => {
      this.backThisYear = res;
    });
    getNewNotice().then((res) => {
      this.getNewNotice.noticeContent = res.noticeContent;
    });
  },
};
</script>

<style scoped>
.container {
  margin: 0;
  padding: 0;
  height: 100%;
  background: #f0f0f0;
}
.container .content-box {
  position: absolute;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 5px 10px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-transition: left 0.3s ease-in-out;
  transition: left 0.3s ease-in-out;
}

.content-box .content {
  height: 100%;
  padding: 10px 30px;
}
.content-box .content .icons {
  height: 80px;
  width: 80px;
  color: #fff;
  display: inline-block;
  line-height: 80px;
  font-size: 40px;
  text-align: center;
  background: #2d8cf0;
}
.content-box .content .info {
  width: 60%;
  color: #666;
  text-align: center;
  display: inline-block;
}

.content-box .content .info .num {
  font-size: 30px;
  font-weight: 700;
  color: #2d8cf0;
}
.content-box .content .box-card {
  margin: 0 7% 0 6%;
  height: 200px;
}
.content-box .content .box-card .new {
  margin: 15px 30px;
}
</style>