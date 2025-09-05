const ChatRoom = require('./chatRoom');

const studyRoom = new ChatRoom('Study Group');

studyRoom.on('message', (userName) => {
    console.log(`Hey, I am ${userName} from message event.`);
});
// kioky hmny dosri file me eventemitter ko exdent Kiya he or exdent krty hen to os class ki sari chizen bhi a jati he eventemitter ki class ka method he on
studyRoom.join("Taha");