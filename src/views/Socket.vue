<!--
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-07-21 10:30:22
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-07-27 19:53:16
 * @FilePath: \Vue第三十天 Vue高级  Vue  vue-blog live2d webSocket\司文超--vue---第二十九天\vue-blog\src\views\Socket.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="blog-socketroom">
    <div class='blog-socket'
         v-if="!isShow">
      <div class='blog-socket-list'>
        <div class='blog-socket-item'
             v-for="chat in chatList"
             :key="chat.id"
             :class="chat.dis">
          <span v-if="chat.nikname"
                class="blog-chat--nikname">{{chat.nikname}}</span>
          <span v-if="chat.time"
                class="blog-chat--time">{{chat.time}}</span>
          <span v-if="chat.msg"
                class="blog-chat--msg">{{chat.msg}}</span>
        </div>
      </div>
      <div class='blog-socket-send'>
        <el-input class='blog-socket--input'
                  v-model="msg"
                  clearable></el-input>
        <el-button type="primary"
                   @click="sendMsg"
                   class="blog-socket--send">发送</el-button>
      </div>
    </div>
    <el-dialog title="请输入昵称"
               :visible="isShow"
               width="30%"
               :before-close="handleClose">
      <el-input placeholder="请输入昵称"
                v-model="nikname"
                clearable>
      </el-input>
      <span slot="footer"
            class="blog-dialog-footer">
        <!-- <el-button @click="dialogVisible = false">取 消</el-button> -->
        <el-button type="primary"
                   @click="loginSocket">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { io } from "socket.io-client";
import formatDate from '@/util/formDate.js'
let idx = 0
export default {
  name: 'VueBlogLive2dWebSocketSocket',
  data () {
    return {
      ws: null,
      msg: "",
      uid: "",
      isShow: true,
      nikname: '',
      chatList: [],
    };
  },
  created () {
    this.isShow = true
    if (this.$ws) {
      this.ws = this.$ws
      this.getNikname()
      this.ws.emit('enterChat', { nikname: this.nikname, uid: this.uid })
    } else {
      this.ws = io('ws://127.0.0.1:8000', { transports: ["websocket"] })
    }
    this.ws.on('connect', () => {
      console.log('连接已经建立')
    })
    this.ws.on('logged', (nikname) => {
      this.serveLogin({ nikname, isLogin: true })
    })
    this.ws.on('log out', (nikname) => {
      this.serveLogin({ nikname, isLogin: false })
    })
    this.ws.on('chat', (data) => {
      this.resChat(data)
    })
  },
  mounted () {
  },
  beforeDestroy () {
    this.ws.emit('leaveChat')
  },


  methods: {
    sendMsg () {
      let msg = this.msg
      this.addChat({ msg, nikname: this.nikname, isMe: true })
      this.ws.emit('send', msg)
      this.msg = ""
    },
    getNikname () {
      this.nikname = this.$store.getters.userInfo?.nikname
      this.uid = this.$store.getters.userInfo?._id
      this.isShow = false
    },
    addChat ({ type = "message", msg = "", nikname = "", time = formatDate(), isMe = false }) {
      let dis = 'left'
      if (type == 'action') {
        dis = 'center'
      }
      if (isMe) {
        dis = 'right'
      }
      this.chatList.push({
        type, msg, nikname, time, isMe, dis, id: ++idx
      })
    },
    resChat ({ nikname = "", time = formatDate(), msg = "" }) {
      this.addChat({
        nikname, time, msg
      })
    },
    serveLogin ({ nikname, isLogin }) {
      let msg = `${nikname} ${isLogin ? '进入' : '离开'}聊天室`
      this.addChat({
        type: 'action',
        msg
      })
    },
    loginSocket () {
      if (!this.nikname) {
        this.$notify.warning({
          title: '警告',
          message: "请输入昵称"
        })
        return
      }
      this.ws.emit('enterChat', { nikname: this.nikname })
      this.isShow = false
    },
    handleClose () {
      this.$router.push('/index')
    }
  },
};
</script>

<style lang="stylus">
.blog-socketroom {
  width: 920px;
}

.blog-socket {
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 740px;
  min-height: 66vh;
  margin: 0 auto;
  padding-top: 8px;
  box-shadow: 0 0 4px 4px rgba(124, 113, 113, 0.5) inset;
}

.blog-socket-item {
  display: flex;
  flex-direction: row;
  line-height: 24px;
  padding: 8px;

  &.center {
    justify-content: center;
  }

  &.left {
    justify-content: flex-start;
  }

  &.right {
    flex-direction: row-reverse;
  }
}

.blog-socket-send {
  box-sizing: border-box;
  bottom: 0;
  display: flex;
  width: 100%;
  height: 60px;
  padding: 10px;
  overflow: hidden;
  background-color: #ccc;

  & .blog-socket--input input {
    width: 100%;
  }
}

.blog-chat--time {
  margin: 0 6px;
  line-height: 24px;
  font-size: 12px;
  color: #aaa;
}

.blog-chat--nikname {
  line-height: 24px;
  font-size: 14px;
  color: skyblue;
}

.blog-socket-send .blog-socket--send {
  height: 40px;
}

.blog-chat--msg {
  display: block;
}
</style>