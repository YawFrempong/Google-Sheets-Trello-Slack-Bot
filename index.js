const SlackBot = require('slackbots');
const GoogleSpreadsheet = require('google-spreadsheet')
const { promisify } = require('util')
const creds = require('./client_secret.json')
var fs = require('fs')
var Trello = require("trello")
var trello = new Trello("TRELLO DEVELOPER API KEY","TRELLO OAUTH TOKEN")
var author;
var dataSet = []
var titles = []
var names = []
var list_ids = []
var card_links = []
var name_on_cards = []
var sheets = ['GOOGLE SHEETS URL CODE #1',
              'GOOGLE SHEETS URL CODE #2',
              'ADD AS MANY GOOGLE SPREADSHEETS AS YOU WANT']
var stage_1 = false
var stage_a = false
var stage_b = false

const bot = new SlackBot({
    token: 'SLACK BOT USER OAUTH ACCESS TOKEN',
    name: 'SLACK BOT NAME'
});

bot.on('error', (err) => console.log(err));

//Message Handler
bot.on('message', (data) => {
    if (data.type !== 'message') {
       return;
    }
    author = getUserById(data.user)
    if(typeof author === "undefined"){

    }
    else{
        handleMessage(data.text, author.name)
    }

});

//Respond to Message
function handleMessage(message, uid) {
    
    if(message.includes('!sheets')) {
		stage_1 = true
		getTitles(uid)
    }
    else if(testForInt_1(message) && stage_1){
        stage_1 = false
        let i = Number(message)
        accessSpreadsheet(uid, i);
    }
	
	if(message.includes('!trello')) {
		stage_a = true
		stage_b = false
		getNames(uid)
    }
    else if(testForInt_2(message) && stage_a){
        stage_a = false
        stage_b = true
        let i = Number(message)
        accessTrello_1(uid, i);
    }
    else if(testForInt_3(message) && stage_b){
        stage_a = false
        stage_b = false
        let i = Number(message)
        prompt_3(uid, i);
    }
}
function testForInt_1(message){
    if(isNaN(message) == false){
        let temp = Number(message)
        if(Number.isInteger(temp)){
            if((temp >= 0) && (temp < titles.length))
            {
                return true
            }
            return false
        }
        return false
    }
    return false
}
function testForInt_2(message){
    if(isNaN(message) == false){
        let temp = Number(message)
        if(Number.isInteger(temp)){
            if((temp >= 0) && (temp < names.length))
            {
                return true
            }
            return false
        }
        return false
    }
    return false
}
function testForInt_3(message){
    if(isNaN(message) == false){
        let temp = Number(message)
        if(Number.isInteger(temp)){
            if((temp >= 0) && (temp < name_on_cards.length))
            {
                return true
            }
            return false
        }
        return false
    }
    return false
}
function getUserById(id) {
    return bot.users.filter(function (user) {
        return user.id == id;
    })[0];
}

function phase_1(uid) {
    let prompt = ""
    for(i = 0; i < titles.length; i++)
    {
        prompt += "[" + i + "]" + titles[i] + "\n";
    }
    const params = {
        icon_emoji: ':nodejs:'
    }
    bot.postMessageToUser(
        uid, 
        prompt,
        params
    );
}
function phase_2(uid) {
    const params = {
        icon_emoji: ':nodejs:'
    }
    var prompt = ""
    for (i = 0; i < dataSet.length; i++) {
        prompt += "[" + i + "]" + dataSet[i] + "\n";
    }
    bot.postMessageToUser(
        uid, 
        prompt, 
        params
    )
}
function prompt_1(uid) {
    let prompt = ""
    for(i = 0; i < names.length; i++)
    {
        prompt += "[" + i + "]" + names[i] + "\n";
    }
    const params = {
        icon_emoji: ':nodejs:'
    }
    bot.postMessageToUser(
        uid, 
        prompt,
        params
    );
}
function prompt_2(uid) {
    let prompt = ""
    for(i = 0; i < name_on_cards.length; i++)
    {
        prompt += "[" + i + "]" + name_on_cards[i] + "\n";
    }
    const params = {
        icon_emoji: ':nodejs:'
    }
    bot.postMessageToUser(
        uid, 
        prompt,
        params
    );
}
function prompt_3(uid,i) {
    let prompt = card_links[i]
    const params = {
        icon_emoji: ':nodejs:'
    }
    bot.postMessageToUser(
        uid, 
        prompt,
        params
    );
}
async function getTitles(uid) {
    titles = []
    var text = ""
    for(i = 0; i < sheets.length; i++)
    {
        const doc = new GoogleSpreadsheet(sheets[i]);
        await promisify(doc.useServiceAccountAuth)(creds);
        const info = await promisify(doc.getInfo)();
        text = info.title
        titles.push(text)
    }
    phase_1(uid);
}
async function getNames(uid){
    names = []
    list_ids = []
    const result = await trello.getListsOnBoard('TRELLO BOARD URL LINK')
    const objStr = JSON.stringify(result, null, 2)
    var parsed_data = JSON.parse(objStr)
    for(i = 0; i < parsed_data.length; i++) {
        list_ids.push(parsed_data[i].id)
        names.push(parsed_data[i].name)
    }
    prompt_1(uid)
}

async function accessSpreadsheet(uid, i) {
    const doc = new GoogleSpreadsheet(sheets[i]);
    await promisify(doc.useServiceAccountAuth)(creds);
    const info = await promisify(doc.getInfo)();
    const sheet = info.worksheets[0];
    dataSet = []

    const rows = await promisify(sheet.getRows)({
    })
    flag = true
    rows.forEach(row => {
            //WRITE YOUR OWN LOGIC TO PARSE ROW DATA. YOU CAN GET THE VALUE OF EVERY COLUMN PER CELL BASED ON COLUMN NAME. 
            //EXAMPLE:
            //cell = {topic: row.topic, keywords: row.keywords, data: row.data, intern: row.intern, status: row.status}
            dataSet.push(row)
    })
    phase_2(uid)
}
async function accessTrello_1(uid, i) {
    card_links = []
    name_on_cards = []
    const result = await trello.getCardsOnListWithExtraParams(list_ids[i])
    const objStr = JSON.stringify(result, null, 2)
    var parsed_data = JSON.parse(objStr)
    for(i = 0; i < parsed_data.length; i++)
    {
        card_links[i] = parsed_data[i].shortUrl
        name_on_cards[i] = parsed_data[i].name
    }
    prompt_2(uid)
}
