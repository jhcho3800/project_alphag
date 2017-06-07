var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/keyboard', (req, res) => {
 const menu = {  
   type: 'buttons',
   buttons: ["가천인", "수험생", "일반인"]
   
  res.set({   
    'content-type': 'application/json'
  }).send(JSON.stringify(menu));        
        console.log(menu);
});

app.post('/message', (req, res) => {
    console.log("/message");
    const _obj = {
    user_key: req.body.user_key,
    type: req.body.type,
    content: req.body.content    
};    
console.log(_obj);

    let message = {
    "message": {
    "text" : "학번을 등록해주세요! 예)201700000"
    },
    "keyboard": {
      "type": "buttons",
      "buttons" : [
      "menu1",
      "menu2",
      "menu3"
]        
      }   
      };
    res.setHeader('Content-Type', 'text/json');
    res.json(message);
});
    app.post('/friend', function(req, res) {
    const user_key = req.body.user_key; 
    console.log(`${user_key}님이 채팅방에 참가했습니다.`);
    
    res.set({ 
    'content-type': 'application/json'
    }).send(JSON.stringify({ success: true }));
});
app.delete('/friend/:user_key', function(req, res) {
   const user_key = req.body.user_key;
   console.log(`${user_key}님이 채팅방을 차단했습니다.`);
   
    res.set({
          'content-type': 'application/json'
    }).send(JSON.stringify({ success: true }));
});

app.delete('/chat_room/:user_key', function(req, res) {
    const user_key = req.body.user_key;
    console.log(`${user_key}님이 채팅방에서 나갔습니다.`);
    
    res.set({
    'content-type': 'application/json'
    }).send(JSON.stringify({ success: true }));
  });
  
const server = app.listen(8000, function() {
console.log('Server in running');
});
