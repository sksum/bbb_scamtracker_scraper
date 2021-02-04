const fetch = require('node-fetch');
var fs = require('fs');

let totalCollected = 0;
let usa_details = []
const dateToday = "May 01, 2018"

function delay(delayInms) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(2);
      }, delayInms);
    });
  }

/**
 * PKID : string
 * returns : dictionary details
 */
let getScamDetails = async (PKID) => {
    let a = await fetch("https://www.bbb.org/scamtracker/AJAXScamDetails?getdetails=43231b83-c001-4c95-87d3-f0008b7d2482", { "headers": { "accept": "*/*", "accept-language": "en-IN,en-GB;q=0.9,en-US;q=0.8,en;q=0.7", "cache-control": "no-cache", "content-type": "application/x-www-form-urlencoded; charset=UTF-8", "pragma": "no-cache", "sec-ch-ua": "\"Google Chrome\";v=\"87\", \" Not;A Brand\";v=\"99\", \"Chromium\";v=\"87\"", "sec-ch-ua-mobile": "?0", "sec-fetch-dest": "empty", "sec-fetch-mode": "cors", "sec-fetch-site": "same-origin", "x-requested-with": "XMLHttpRequest", "cookie": "at_check=true; AMCVS_CB586B8557EA40917F000101%40AdobeOrg=1; _ga=GA1.2.403527892.1612267414; _gid=GA1.2.1378200061.1612267414; s_cc=true; iabbb_findyourbbb_location=; iabbb_user_culture=en-us; iabbb_user_location=Cordelia%20CA%20USA; iabbb_user_postalcode=94534; iabbb_user_bbb=1116; iabbb_find_location=Cordelia%20CA%20USA; __auc=4ff6bec217762a63f5a460e405d; iabbb_ccpa=true; iabbb_user_culture=en-us; iabbb_user_location=Cordelia%20CA%20USA; iabbb_user_bbb=1116; iabbb_find_location=Cordelia%20CA%20USA; iabbb_user_postalcode=94534; AMCV_CB586B8557EA40917F000101%40AdobeOrg=359503849%7CMCIDTS%7C18661%7CMCMID%7C44627203934302402881550364939090686902%7CMCAAMLH-1612947676%7C12%7CMCAAMB-1612947676%7CRKhpRz8krg2tLO6pguXWp5olkAcUniQYPHaMWWgdJ3xzPWQmdj0y%7CMCOPTOUT-1612350077s%7CNONE%7CMCAID%7C2FAE54D90515D4D7-400007B5BE43DDEC%7CvVersion%7C5.0.1; s_ppvl=BBB%2520Scam%2520Tracker%25u2120%2520%257C%2520Find%2520and%2520Report%2520a%2520Scam%2520%257C%2520Better%2520Business%2520Bureau%2C100%2C100%2C1889%2C721%2C669%2C1366%2C768%2C1%2CL; mbox=PC#51cfecd6286549998016033f778c0542.31_0#1675589147|session#69cbf15eeb7b4937a557f6bcb4eb2755#1612344733; gpv_PageUrl=https%3A%2F%2Fwww.bbb.org%2Fscamtracker; s_sq=cbbbproduction%3D%2526c.%2526a.%2526activitymap.%2526page%253DBBB%252520Scam%252520Tracker%2525E2%252584%2525A0%252520%25257C%252520Find%252520and%252520Report%252520a%252520Scam%252520%25257C%252520Better%252520Business%252520Bureau%2526link%253DBack%252520to%252520List%2526region%253Ddetails%2526pageIDType%253D1%2526.activitymap%2526.a%2526.c%2526pid%253DBBB%252520Scam%252520Tracker%2525E2%252584%2525A0%252520%25257C%252520Find%252520and%252520Report%252520a%252520Scam%252520%25257C%252520Better%252520Business%252520Bureau%2526pidt%253D1%2526oid%253Dhttps%25253A%25252F%25252Fwww.bbb.org%25252Fscamtracker%252523%2526ot%253DA; s_ppv=BBB%2520Scam%2520Tracker%25u2120%2520%257C%2520Find%2520and%2520Report%2520a%2520Scam%2520%257C%2520Better%2520Business%2520Bureau%2C100%2C97%2C1958%2C1169%2C1008%2C1920%2C1080%2C1%2CL; s_vis_repeat=1612345403089-Repeat; _gat=1; _gat_local=1" }, "referrer": "https://www.bbb.org/scamtracker", "referrerPolicy": "strict-origin-when-cross-origin", "body": `PKID=${PKID}`, "method": "POST", "mode": "cors" })
    // await delay(100);
    let d = await a.json();
    return d;
}

/**
 * DateEnd: string
 * returns json;
 */
let get500scams = async (DateEnd) => {
    let d = await fetch("https://www.bbb.org/scamtracker/AJAXSearchScam?search=8725a8db-1f49-4625-b86b-cdbc39e9eedb", {
        "headers": {
          "accept": "*/*",
          "accept-language": "en-IN,en-GB;q=0.9,en-US;q=0.8,en;q=0.7",
          "cache-control": "no-cache",
          "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
          "pragma": "no-cache",
          "sec-ch-ua": "\"Google Chrome\";v=\"87\", \" Not;A Brand\";v=\"99\", \"Chromium\";v=\"87\"",
          "sec-ch-ua-mobile": "?0",
          "sec-fetch-dest": "empty",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "same-origin",
          "x-requested-with": "XMLHttpRequest",
          "cookie": "at_check=true; AMCVS_CB586B8557EA40917F000101%40AdobeOrg=1; _ga=GA1.2.403527892.1612267414; _gid=GA1.2.1378200061.1612267414; s_cc=true; iabbb_findyourbbb_location=; iabbb_user_culture=en-us; iabbb_user_location=Cordelia%20CA%20USA; iabbb_user_postalcode=94534; iabbb_user_bbb=1116; iabbb_find_location=Cordelia%20CA%20USA; __auc=4ff6bec217762a63f5a460e405d; iabbb_ccpa=true; iabbb_user_culture=en-us; iabbb_user_location=Cordelia%20CA%20USA; iabbb_user_bbb=1116; iabbb_find_location=Cordelia%20CA%20USA; iabbb_user_postalcode=94534; s_sq=%5B%5BB%5D%5D; AMCV_CB586B8557EA40917F000101%40AdobeOrg=359503849%7CMCIDTS%7C18663%7CMCMID%7C44627203934302402881550364939090686902%7CMCAAMLH-1613020643%7C12%7CMCAAMB-1613020643%7CRKhpRz8krg2tLO6pguXWp5olkAcUniQYPHaMWWgdJ3xzPWQmdj0y%7CMCOPTOUT-1612423043s%7CNONE%7CMCAID%7C2FAE54D90515D4D7-400007B5BE43DDEC%7CvVersion%7C5.0.1; mbox=PC#51cfecd6286549998016033f778c0542.31_0#1675663849|session#69bfe5d571e241d3a8e3a30efcc850ce#1612420908; s_ppvl=BBB%2520Scam%2520Tracker%25u2120%2520%257C%2520Find%2520and%2520Report%2520a%2520Scam%2520%257C%2520Better%2520Business%2520Bureau%2C88%2C88%2C1539%2C932%2C963%2C1366%2C768%2C1%2CP; gpv_PageUrl=https%3A%2F%2Fwww.bbb.org%2Fscamtracker; _gat=1; _gat_local=1; s_ppv=BBB%2520Scam%2520Tracker%25u2120%2520%257C%2520Find%2520and%2520Report%2520a%2520Scam%2520%257C%2520Better%2520Business%2520Bureau%2C88%2C88%2C1517%2C730%2C669%2C1366%2C768%2C1%2CL; s_vis_repeat=1612421235167-Repeat"
        },
        "referrer": "https://www.bbb.org/scamtracker",
        "referrerPolicy": "strict-origin-when-cross-origin",
        "body": `scamsearch.ChosenScamTypes=8&scamsearch.Keywords=&scamsearch.ScamTypes=8&scamsearch.ScamTypeURLs=&scamsearch.Country=USA&scamsearch.State=&scamsearch.DateStart=Feb+13%2C+2015&scamsearch.DateEnd=${DateEnd}`,
        "method": "POST",
        "mode": "cors"
      });
      let q = d.json()
      return q;
}

/**
 *  
 */
let getAllAvailableScams = async () => {
    let latest;
    let len = 501;
    let lastDate = dateToday;
    let iter = 0
    while (len >= 500 && iter<10) {
        latest = await get500scams(lastDate);
        let latest_array = latest["PS"];
        len = latest_array.length;
        console.log(len, iter++)
        for (let x in latest_array) {
            let pkid = latest_array[x]['ssi'];
            let details = await getScamDetails(pkid);
            console.log(iter, x);
            latest_array[x] = Object.assign({}, latest_array[x], details);
        }

        usa_details = [...usa_details, ...latest_array];
        
        lastDate = latest_array[len-1]['c']
        console.log(`Added another ${len} scams since ${lastDate}`);
    }
    var dictstring = JSON.stringify(usa_details);
    fs.writeFile("usa_with_details_2.json", dictstring, (e,res) => {if(e)console.error("e",e)});
}

getAllAvailableScams()