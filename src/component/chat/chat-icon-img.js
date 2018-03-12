/**
 * Created by Mrzou on 2018/3/8.
 * chat.js  用img图片做emoji表情版本
 */
import React from 'react'
import {connect} from 'react-redux'
import {List,InputItem,NavBar,Toast,Icon,Grid} from 'antd-mobile'
import io from 'socket.io-client'
import {getMsgList,sendMsg,recvMsg,readMsg} from '../../redux/chat.redux'
import {isEmptyObject,getChatId} from '../../util'

const socket = io('ws://localhost:9093')

@connect(
   state=>state,
   {getMsgList, sendMsg, recvMsg, readMsg}
)
class Chat extends React.Component {
   constructor(props) {
      super(props)
      this.state = {
         text: '',
         showEmoji: false,
         emoji: this.emojiArray()
         //msg: []
      }
   }

   componentDidMount() {
      const chat = this.props.chat
      if (!chat.chatmsg.length && isEmptyObject(chat.users)) {
         this.props.getMsgList()
         this.props.recvMsg()
      }

      const to = this.props.match.params.user

      this.props.readMsg(to)
      //this.fixCarousel()
      //socket.on('recvmsg', function (data) {
      //   console.log(data)
      //   this.setState({
      //      msg: [...this.state.msg, data.text]
      //   })
      //}.bind(this))
   }

   componentWillUnmount() {
      const to = this.props.match.params.user
      this.props.readMsg(to)
   }

   fixCarousel() {
      setTimeout(()=> {
         window.dispatchEvent(new Event('resize'))
      }, 20)
   }

   handleSubmit() {
      //socket.emit('sendmsg', {text: this.state.text})
      const from = this.props.user._id
      const to = this.props.match.params.user
      const msg = this.state.text;
      msg ? this.props.sendMsg({from, to, msg}) : Toast.info('请输入内容!!', 1)
      this.setState({
         text: '',
         showEmoji: false
      })
      //console.log(this)
   }

   emojiArray() {
      let arr = []
      for (let i = 1; arr.push(i++), i < 847;);
      return arr
   }

   render() {
      console.log(this.state)
      //const emoji = '👸 🎉 🎂 💣 🐷 😁 😂 🐰 😢 🌄 🐤 😭 😱 😠 😈 💀 👻 👽 👦 🎥 👧 👮 👠 🌂 👼 🎓 👌 👍 👏 👙 💍 💄 🐨 🌼 🌾 🍀'.split(' ')
      //   .filter(v=>v).map(v=>({text: v}));

      //emoji img图标名称数组
      const emoji = this.state.emoji.map(v=>({
         text: v,
         icon: require(`../img/emoji/${v}.png`)
      }))

      const userid = this.props.match.params.user
      const Item = List.Item
      const users = this.props.chat.users
      if (!users[userid]) return null;

      const chatid = getChatId(userid, this.props.user._id)
      const chatmsgs = this.props.chat.chatmsg.filter(v=> {
         return v.chatid == chatid
      })

      return (
         <div id="chat-page">
            <NavBar mode="dark"
                    icon={<Icon type="left" />}
                    onLeftClick={()=>this.props.history.goBack()}>
               {users[userid].name}
            </NavBar>
            {chatmsgs.map(v=> {
               const avatar = require(`../img/${users[v.from].avatar}.png`)
               return v.from == userid
                  ? (<List key={v._id}><Item thumb={avatar}>{
                  v.content.split('$').map(y=> {
                     if (~y.indexOf('@#%')) {
                        y = y.substr(3)
                        return <img src={require(`../img/emoji/${y}.png`)} alt=""/>
                     }

                     return y
                  })
               }</Item></List>)
                  : (
                  <List key={v._id}><Item extra={<img src={avatar} />} className="chat-me">{
                     v.content.split('$').map(y=> {
                        if (~y.indexOf('@#%')) {
                           y = y.substr(3)
                           return <img src={require(`../img/emoji/${y}.png`)} alt=""/>
                        }
                        return y
                     })
                  }</Item></List>)
            })}
            <div className="stick-footer">
               <List>
                  <InputItem
                     placeholder="请输入" value={this.state.text}
                     onChange={v=>{this.setState({text:v})}}
                     extra={
                        <div>
                           <span onClick={()=>{
                              this.setState({showEmoji:!this.state.showEmoji})
                              this.fixCarousel()
                           }} style={{marginRight:15}}>😁</span>

                           <span onClick={()=>this.handleSubmit()}>发送</span>
                        </div>
                     }
                  />
               </List>

               {this.state.showEmoji ?
                  <Grid
                     data={emoji}
                     columnNum={9}
                     carouselMaxRow={3}
                     isCarousel={true}
                     onClick={el=>{
                         console.log(el)
                         this.setState({
                           text: this.state.text + '$@#%'+el.text+'$'
                         })
                       }}
                  /> : null}

            </div>
         </div>
      )
   }
}

export default Chat