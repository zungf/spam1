var ServerID = "498234093146734604"; //?? ?? ???????


var ChannelID = "498234093591592963";// ?? ?? ?????

/*
                                    
 //  //  //  //  //  //  //  //  //  //  //  // 
              
__     __   \ /  | 
 |     /   /   |    |  //   \   \
 |    |     |  | (  <> )    |   (  <> )  |
 ||     ||   /|  /_/||
                                /
                    ..
    __      | _/||/  |  
/    \  /   /  \ /  | |  \   /  /
\     |  | /\  // // | |  ||  |   \ 
 _  /||      > | |||| /  >
        /             /     /               / 
     .
  /     \ ||    __ 
 /  \ /  |  |/    /     \
/    Y    \  |   |  \  /|  | /
|  /||  /  >__|
        /        /     /
*/



const Discord = require('discord.js');



const client = new Discord.Client();



client.on('warn', console.warn);


client.on('error', console.error);


client.on('ready', () => console.log('ProBot Credits Miner Discord.js Script','\n','By BlackSpirit','\n','ProBot credits miner is ready!'));































client.on('disconnect', () => console.log('PROBOT credits miner had disconnected!'));































client.on('reconnecting', () => console.log('PROBOT credits miner is reconnecting...'));











































function timerFunc() {















    client.on('message', msg => {















        client.guilds.get(ServerID).channels.get(ChannelID).send(Math.random().toString(36).substring(7))















































    });















}































var timer = setTimeout(timerFunc, 1000);



client.login(process.env.BOT_TOKEN);
