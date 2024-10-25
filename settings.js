const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    
SESSION_ID: process.env.SESSION_ID === undefined ? 'VAJIRA-MD=fV9VVJzY#OTwAHVRUVScRv5UovWndIZSNLfS26n85LwopmiKPMGE' : process.env.SESSION_ID,
OWNER_NUMBER: process.env.OWNER_NUMBER === undefined ? '263714500434' : process.env.OWNER_NUMBER,   
ONLY_GROUP: process.env.ONLY_GROUP === undefined ? 'true' : process.env.ONLY_GROUP,
ONLY_ME: process.env.ONLY_ME === undefined ? 'false' : process.env.ONLY_ME,
AUTO_STATUS_READ:  process.env.AUTO_STATUS_READ  || false  ,    
PREFIX: process.env.PREFIX || '.' ,
FOOTER: process.env.FOOTER=== undefined ? '‌👨‍💻 ᴠᴀᴊɪʀᴀ ᴍᴅ ʙʏ ᴛᴄ ᴛᴇᴀᴍ 👨‍💻': process.env.FOOTER,
POSTGRESQL_URL: process.env.POSTGRESQL_URL === undefined ? 'postgres://vajiratech_user:oSIFl2xmSojMZ0rkzdd0g0W6msuVTpNN@dpg-cpd7fjv109ks73e5gtig-a.frankfurt-postgres.render.com/vajiratech' : process.env.POSTGRESQL_URL,
MAX_SIZE: 500, 
ALIVE:  process.env.ALIVE  || '𝔥𝔢𝔩𝔩𝔩𝔬 𝔪 𝔰𝔱𝔦𝔩𝔩 𝔞𝔩𝔦𝔳𝔢 .....𝔴𝔠𝔨𝔶𝔶'  ,    
OWNER_REACT:  process.env.OWNER_REACT  || true  ,
ADMIN_EVENT:  process.env.ADMIN_EVENT  || true  ,   
AUTO_BLOCK:  process.env.AUTO_BLOCK  || false  ,        
AUTO_VOICE:  process.env.AUTO_VOICE  || false  ,
AUTO_STICKER: process.env.AUTO_STICKER || false  ,    
ANTI_BAD: process.env.ANTI_BAD || false  ,
AUTO_REACT:  process.env.AUTO_REACT  || false  ,    
AUTO_TYPING:  process.env.AUTO_TYPING  || false  ,
AUTO_RECORDING:  process.env.AUTO_RECORDING  || false  ,
AUTO_READ:  process.env.AUTO_READ  || false  ,
READ_CMD_ONLY:  process.env.READ_CMD_ONLY  || true  ,
AUTO_BIO:  process.env.AUTO_BIO  || false  ,       
ALWAYS_ONLINE:  process.env.ALWAYS_ONLINE  || false  ,
WORK_TYPE: process.env.WORK_TYPE || 'public' ,
ANTI_LINK: process.env.ANTI_LINK || true  ,
ANTI_BOT: process.env.ANTI_BOT || false  ,
ANTI_CALL: process.env.ANTI_CALL || false  ,
AI_CHATBOT: process.env.AI_CHATBOT || false  ,
AI_IMAGE: process.env.AI_IMAGE || false  ,
MATHS_AI: process.env.MATHS_AI || false  ,    
WELCOME: process.env.WELCOME || false  ,    
LOGO: process.env.LOGO || `https://telegra.ph/file/cce13b56a460afc9f4139.jpg` ,
COMMAND_TYPE: process.env.COMMAND_TYPE || 'button' ,    
ANTI_DELETE : process.env.ANTI_DELETE || true ,
DELETEMSGSENDTO : process.env.DELETEMSGSENDTO === undefined ? '263714500434' : process.env.DELETEMSGSENDTO        
    
};
