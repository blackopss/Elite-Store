const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');


const moment = require('moment');
       

var jimp = require('jimp')


const invites = {};

client.on('ready', () => {
   console.log(`----------------`);
        console.log(`---------------`);
      console.log(`ON ${client.guilds.size} Servers `);
    console.log(`---------------`);
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setActivity(`Elite Store`, {type: "PLAYING"});
});







client.on('guildMemberAdd', (member,inviter )=> {
     const welcomer =  member.guild.channels.find('name', 'chat');
    if(!welcomer) return;
      if(welcomer) {
         moment.locale('ar-ly');
         var h = member.user;
        let heroo = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setThumbnail(h.avatarURL)
        .setAuthor(h.username,h.avatarURL)
        .addField(': تاريخ دخولك الدسكورد',`${moment(member.user.createdAt).format('D/M/YYYY h:mm a')} **\n** \`${moment(member.user.createdAt).fromNow()}\``,true)            
      
         .setFooter(`${h.tag}`,"https://images-ext-2.discordapp.net/external/JpyzxW2wMRG2874gSTdNTpC_q9AHl8x8V4SMmtRtlVk/https/orcid.org/sites/default/files/files/ID_symbol_B-W_128x128.gif")
     welcomer.send({embed:heroo});          
         
    
var Canvas = require('canvas')
var jimp = require('jimp')

const w = ['./Data/w1.png'];

         let Image = Canvas.Image,
            canvas = new Canvas(400, 200),
            ctx = canvas.getContext('2d');
        fs.readFile(`${w[Math.floor(Math.random() * w.length)]}`, function (err, Background) {
            if (err) return console.log(err);
            let BG = Canvas.Image;
            let ground = new Image;
            ground.src = Background;
            ctx.drawImage(ground, 0, 0, 400, 200);
             const wait = require('util').promisify(setTimeout);
client.on('ready', () => {
  wait(1000);
             client.guilds.forEach(g => {
    g.fetchInvites().then(guildInvites => {
      invites[g.id] = guildInvites;
    });
  });
                    });
                       member.guild.fetchInvites().then(guildInvites => {
                      const ei = invites[member.guild.id]; //دغوات
                      const invite = guildInvites.find(i => ei.get(i.code).uses < i.uses); //
                      const inviter = client.users.get(invite.inviter.id);//



               
               let url = member.user.displayAvatarURL.endsWith(".webp") ? member.user.displayAvatarURL.slice(100) + ".png" : member.user.displayAvatarURL;
             
                jimp.read(url, (err, ava) => {
                    if (err) return console.log(err);
                    ava.getBuffer(jimp.MIME_PNG, (err, buf) => {
                        if (err) return console.log(err);
                        
                       
                        ctx.font = "bold 12px Arial";
                        ctx.fontSize = '20px';
                        ctx.fillStyle = "#f1f1f1";
                        ctx.textAlign = "center";
                        ctx.fillText(`by : ${inviter.username} `, 315, 170);
                        
                        ctx.font = "bold 12px Arial";
                        ctx.fontSize = '20px';
                        ctx.fillStyle = "#f1f1f1";
                        ctx.textAlign = "center";
                        ctx.fillText(member.user.username, 200, 150);
                        
                        ctx.font = "bold 12px Arial";
                        ctx.fontSize = '20px';
                        ctx.fillStyle = "#f1f1f1";
                        ctx.textAlign = "center";
                        ctx.fillText(`welcome to ${member.guild.name}`, 300, 130);
                        //zebi
                const Avatar = Canvas.Image;
                              let ava = new Avatar;
                              ava.src = buf;
                              ctx.beginPath();
                              ctx.arc(77, 101, 62, 0, Math.PI*2);
                              ctx.stroke();
                                 ctx.clip();
                                 ctx.drawImage(ava, 13, 38, 128, 126);  
                          
                           
                
                             
welcomer.sendFile(canvas.toBuffer())
  console.log('1')
  console.log('2')
 console.log('3')
     welcomer.send(`**joined by :** <@${inviter.id}> `);
    





      
      
                    }  )  
      
                    

})
      });                    
 })

}

});
const wait = require('util').promisify(setTimeout);
client.on('ready', () => {
  wait(1000);
  client.guilds.forEach(g => {
    g.fetchInvites().then(guildInvites => {
      invites[g.id] = guildInvites;
    });
  });
});
client.on('guildMemberAdd', member => {
  member.guild.fetchInvites().then(guildInvites => {
    const ei = invites[member.guild.id];
    const invite = guildInvites.find(i => ei.get(i.code).uses < i.uses);
    const inviter = client.users.get(invite.inviter.id);
  
  });
});




client.on('message', async message =>{
  var prefix = "#";
  if(message.content.startsWith(prefix + 'فكك')) {
if (message.author.omar) return;
if (fkkRecently.has(message.author.id)) {
  message.delete();
  let timeoute = new Discord.RichEmbed()
.setColor("#C2C2C2")
.setTitle("إنتظر 10 ثواني");
  message.channel.send(timeoute).then(msg => {msg.delete(3000)});
} else {
let names = ['ويكيبيديا','عبدالله','سيباويه','طائر اللقلاق','كثر شطه',
'القس','القسطنطينية','الديموقراطية','الرفادة','الاباخس','الاثير','اثيوبيا','السعودية','الكويت','البحرين','الامارات','عمان',
'الناطس','سيناء','الاردن','همالايا','شهريار','شهرزاد','الشاهنشاه','الخنساء','الفررزدق','الجلجال','الاكتم',
'الوخواخ','الجاحظ','الشمطاء','اليمامة','كارتيه','كوستاريكا','الاعسر','الاوقص','الاخفش','الاشيم','القاريط',
'المتحفنش','متعقرط','شعافيل','القرانيط','الجرشى','كليجة','لاتينية','استاتيكا','استراتيجية','اكسسوار','ايدرولوجيا','اسكيمو',
'ابستيمولوجيا','امبريالي','إلكتروني','اصطبل','اسرائيليات','معايا زميل']
let a = names[Math.floor(Math.random() * names.length)]
let atime = Date.now()
let curChar2;
let ans =''
let last='';
let curback = ['./img/fkk/fkk1.jpg','./img/fkk/fkk2.jpg','./img/fkk/fkk3.jpg','./img/fkk/fkk4.jpg','./img/fkk/fkk5.jpg','./img/fkk/fkk6.jpg','./img/fkk/fkk7.jpg'];
let Image = Canvas.Image,
canvas = new Canvas(1000, 171),
ctx = canvas.getContext('2d');
ctx.patternQuality = 'bilinear';
ctx.filter = 'bilinear';
ctx.antialias = 'subpixel';
ctx.shadowColor = 'rgba(0, 0, 0, 0.4)';
ctx.shadowOffsetY = 2;
ctx.shadowBlur = 2;
fs.readFile(`${curback[Math.floor(Math.random() * curback.length)]}`,async function (err, Background) {
if (err) return console.log(err);
let ground = new Image;
ground.src = Background;
await ctx.drawImage(ground, 0, 0, 1000, 171);


                    ctx.font = '72px Arial';
                    ctx.fontSize = '72px';
                    ctx.fillStyle = "#000000";
                    ctx.textAlign = "center";
                    ctx.fillText(a, 500, 86);
message.channel.send(`**: فكك الكلام الموجود بالصورة التالية في اقل من **__10 ثواني__`)
message.channel.send({files: [canvas.toBuffer()]})
  .then(function(){
      setTimeout(function(){
    message.channel.send(`**إنتهى الوقت**`);
}, 10000);
           const collector = new Discord.MessageCollector(message.channel, m => m.guild.member, { time: 10000 })
    
  collector.on('collect', message => {

         let ans = message.content;
      
    let myArray2 = [];

    for(let i= 0; i < a.length ; i++){
         
curChar2= a.charAt(i);
myArray2[i] = curChar2;    
      }
      for(let i= 0; i < a.length ; i++){
        if(a.charAt(i) === ' ') continue; 
last = last +myArray2[i] +' '

}

   
      console.log(ans)
    console.log(last)
    
    if (ans = ans + ' ' === last) {
      let btime=Date.now()
      
     message.channel.send(`__${prettyMs((btime - atime), {verbose: true})}__ **إجابة صحيحة وفي وقت قياسي ${message.author} ألف مبروك**`)
     con.query(`SELECT * FROM score WHERE UserID = '${message.author.id}'`, (err, rows) =>{
      if (err) throw err;
      let curpoints = rows[0].Points;
  
     let sql;
    sql = `UPDATE score SET Points = ${curpoints + 1} WHERE UserID = '${message.author.id}'`;
    con.query(sql)
       })
     collector.stop();
    }
      else{
       last = '' 

      }

    })
})
})
}
fkkRecently.add(message.author.id);
    setTimeout(() => {
      fkkRecently.delete(message.author.id);
    }, 10000);
      
  
}

});




client.on('message', message => {

    if (message.content.startsWith("رابط")) {        
  message.channel.createInvite({
        thing: true,
        maxUses: 100,
        maxAge: 86400
    }).then(invite =>  
      message.author.sendMessage(invite.url)
    )
    const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setDescription(" ✅ تم ارسال الرابط على الخاص ")
      message.channel.sendEmbed(embed).then(message => {message.delete(10000)})
              const Embed11 = new Discord.RichEmbed()
        .setColor("RANDOM")
                .setAuthor(message.guild.name, message.guild.iconURL)
        .setDescription(`
---------------------
 😚  - هذا الرابط صالح ل 100 مستخدم فقط
---------------------
 😃 - هذا الرابط صالح لمده 24 ساعه فقط
---------------------`)
      message.author.sendEmbed(Embed11)
    }
 
});














client.login(process.env.BOT_TOKEN);






