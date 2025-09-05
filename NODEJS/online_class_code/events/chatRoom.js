const EventEmitter = require('events');

class ChatRoom extends EventEmitter {
    constructor(name) {
        super();
        this.name = name;
    }

    join(userName) {
        console.log(`${userName} welcome to chat room, ${this.name}`);
        this.emit('message', userName);
    }
}

module.exports = ChatRoom;