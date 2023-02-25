const TwitterApi = require('twitter-api-v2').default;
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');
const serviceAccount = require('./tweetbot11-0baad0dea349.json');

initializeApp({
    credential: cert(serviceAccount)
});


(async function () {

try{

const client = new TwitterApi({
    clientId: "N2xROUQ0RE5GSmtqa0dXdmFSV2s6MTpjaQ",
    clientSecret: "uX7Qc4LQfVXHEVSsCOXoinwIO9kk8gRCgsSoq2Fsl5S5Q-Okcm"
});
const db = getFirestore().doc('tokens/demo');
    const { refreshToken } = (await db.get()).data();
    const {
        client: refreshedClient,
        accessToken,
        refreshToken: newRefreshToken,
    } = await client.refreshOAuth2Token(refreshToken);


    refreshedClient.v2.tweet({text:"Hello"})
}
catch(e){
console.log(e)
}




})()
