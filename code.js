

var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["4fbd977a-b669-4814-981a-f202e8d17668","5a549bab-0575-4835-a551-177ae1feccc7","bcf354f0-b6bc-46b2-9a44-587fd3507fd5","b5d302d2-aa04-4e23-9a14-bc7ccd220c35","04def83b-e746-437b-a963-9f85b20f346e","cd9c6061-5567-438c-a89c-102f9ab0c4ad","e3b3ab24-87fe-411a-bbae-38e5f8e01085","34cb157a-20f7-45ca-9601-56d4e7a8913f","44da5db8-1921-479b-9bc8-17acd3d1d921","8680c927-d3de-4037-9773-ca0dcd58c151","c19b898c-f8ff-4932-9e89-0b617e0d434a","a228ba63-0380-49ce-9185-1310ae7a5c1b","bc532790-e626-4506-bfd0-cb21a4b5f6be","b6cb4369-738b-4b60-aeee-667735c3a255","eda79e8c-fdbe-454e-980c-bf3aec3e88b3","5c25cdb9-986a-4a4c-965d-94f05b42fec8","bab7f18a-9e9d-44bc-844f-3b413a2d85e7","cae85c9d-c5f0-4743-a111-1fb86695b94b","15d7a7d2-01f8-4518-bfc8-54375baf42f8","e77db335-4a99-422b-9a98-a8b0b6844d4e","8637dab3-4463-4ac7-aa70-03351da08ef2","b33528c7-662a-4845-835a-252b587439f1","97165280-0634-47dd-8467-b42825e5f4eb","1314b89f-fd8c-4cf6-ae7a-5ffeb0399d6d","cfcd86cf-59eb-4f22-8de9-104e42ed6a13","a38a44c5-c7ad-4c0c-b188-7355f269c5e6","75b6303b-400d-4baa-bc03-dfea9bb6bd44","ba90b503-ffc4-4dec-ae3f-f317671f1e54","3186d003-26ee-45c8-8490-a559cd408186","ac4d3507-ded9-4e1e-90fe-33ce3966b34d","575d173e-fab5-463c-b7f7-ca8359da9228","c440b5cf-0780-472c-84ca-b2334c6fb219","3c52dd0b-e3e3-4194-bc3b-a977a1a1969c","7aafeb3a-aa72-4217-82a1-08220d703c25","c0a3df6c-57bf-48b3-80ae-a9e71951f016"],"propsByKey":{"4fbd977a-b669-4814-981a-f202e8d17668":{"name":"Laser","sourceUrl":null,"frameSize":{"x":335,"y":70},"frameCount":1,"looping":true,"frameDelay":12,"version":"7y0waLNivTTXcQTBTHRfMtucG.lbddEK","loadedFromSource":true,"saved":true,"sourceSize":{"x":335,"y":70},"rootRelativePath":"assets/4fbd977a-b669-4814-981a-f202e8d17668.png"},"5a549bab-0575-4835-a551-177ae1feccc7":{"name":"Asteroid","sourceUrl":null,"frameSize":{"x":211,"y":203},"frameCount":1,"looping":true,"frameDelay":12,"version":"ydYPTggoXbrf9LLu_xNkx84erQS3yUZE","loadedFromSource":true,"saved":true,"sourceSize":{"x":211,"y":203},"rootRelativePath":"assets/5a549bab-0575-4835-a551-177ae1feccc7.png"},"bcf354f0-b6bc-46b2-9a44-587fd3507fd5":{"name":"Asteroid(Hit)","sourceUrl":null,"frameSize":{"x":207,"y":199},"frameCount":1,"looping":true,"frameDelay":12,"version":"Q_57vOx1tFolicTFHYKaH_2NosgMy6_v","loadedFromSource":true,"saved":true,"sourceSize":{"x":207,"y":199},"rootRelativePath":"assets/bcf354f0-b6bc-46b2-9a44-587fd3507fd5.png"},"b5d302d2-aa04-4e23-9a14-bc7ccd220c35":{"name":"Player","sourceUrl":null,"frameSize":{"x":168,"y":206},"frameCount":1,"looping":true,"frameDelay":12,"version":"x.7w5VqkM4HhbBcRvoYEOomUFPWKtlK3","loadedFromSource":true,"saved":true,"sourceSize":{"x":168,"y":206},"rootRelativePath":"assets/b5d302d2-aa04-4e23-9a14-bc7ccd220c35.png"},"04def83b-e746-437b-a963-9f85b20f346e":{"name":"boss2","sourceUrl":"assets/v3/animations/u1z9pOjK-wqsk7djOmoaCEtfXQE5_gsxCV3ITy7upxs/04def83b-e746-437b-a963-9f85b20f346e.png","frameSize":{"x":200,"y":192},"frameCount":1,"looping":true,"frameDelay":4,"version":"18dAUF1IsHl8C90r0OqF0UHZ.5oitvVk","loadedFromSource":true,"saved":true,"sourceSize":{"x":200,"y":192},"rootRelativePath":"assets/v3/animations/u1z9pOjK-wqsk7djOmoaCEtfXQE5_gsxCV3ITy7upxs/04def83b-e746-437b-a963-9f85b20f346e.png"},"cd9c6061-5567-438c-a89c-102f9ab0c4ad":{"name":"boss2(hit)","sourceUrl":null,"frameSize":{"x":200,"y":192},"frameCount":1,"looping":true,"frameDelay":12,"version":"9OoUF8b2U2xw.4Nme_06jHcbdndWVv0W","loadedFromSource":true,"saved":true,"sourceSize":{"x":200,"y":192},"rootRelativePath":"assets/cd9c6061-5567-438c-a89c-102f9ab0c4ad.png"},"e3b3ab24-87fe-411a-bbae-38e5f8e01085":{"name":"boss1","sourceUrl":null,"frameSize":{"x":396,"y":170},"frameCount":1,"looping":true,"frameDelay":12,"version":"CFEYDSja.PriVd_S6u31CAAqwxuw2bj0","loadedFromSource":true,"saved":true,"sourceSize":{"x":396,"y":170},"rootRelativePath":"assets/e3b3ab24-87fe-411a-bbae-38e5f8e01085.png"},"34cb157a-20f7-45ca-9601-56d4e7a8913f":{"name":"boss1(hit)","sourceUrl":null,"frameSize":{"x":396,"y":170},"frameCount":1,"looping":true,"frameDelay":12,"version":"LGU8O5biNEvEz3SEFLAKjdia3M4ifk3j","loadedFromSource":true,"saved":true,"sourceSize":{"x":396,"y":170},"rootRelativePath":"assets/34cb157a-20f7-45ca-9601-56d4e7a8913f.png"},"44da5db8-1921-479b-9bc8-17acd3d1d921":{"name":"boss warning","sourceUrl":null,"frameSize":{"x":600,"y":128},"frameCount":1,"looping":true,"frameDelay":12,"version":"ViHwtYJGG7M73JD7hcBRuhxcN.KF2YU3","loadedFromSource":true,"saved":true,"sourceSize":{"x":600,"y":128},"rootRelativePath":"assets/44da5db8-1921-479b-9bc8-17acd3d1d921.png"},"8680c927-d3de-4037-9773-ca0dcd58c151":{"name":"game over","sourceUrl":null,"frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":12,"version":"NeZmWqQ3.5evJCIFx3l8b8e3k3aa1D55","loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/8680c927-d3de-4037-9773-ca0dcd58c151.png"},"c19b898c-f8ff-4932-9e89-0b617e0d434a":{"name":"start.png_1","sourceUrl":null,"frameSize":{"x":343,"y":147},"frameCount":2,"looping":true,"frameDelay":12,"version":"lTv8YoeJYFOsge9N.5aypw6KwARGw9rn","loadedFromSource":true,"saved":true,"sourceSize":{"x":343,"y":294},"rootRelativePath":"assets/c19b898c-f8ff-4932-9e89-0b617e0d434a.png"},"a228ba63-0380-49ce-9185-1310ae7a5c1b":{"name":"space_shooter","sourceUrl":null,"frameSize":{"x":293,"y":93},"frameCount":1,"looping":true,"frameDelay":12,"version":"fK7qicICHJR3PCEhIUH4vZRlLVjtDgJv","loadedFromSource":true,"saved":true,"sourceSize":{"x":293,"y":93},"rootRelativePath":"assets/a228ba63-0380-49ce-9185-1310ae7a5c1b.png"},"bc532790-e626-4506-bfd0-cb21a4b5f6be":{"name":"boom","sourceUrl":null,"frameSize":{"x":215,"y":181},"frameCount":1,"looping":true,"frameDelay":12,"version":"h4jgDNXQoqDzSW07nJCMY9H2CETQJodK","loadedFromSource":true,"saved":true,"sourceSize":{"x":215,"y":181},"rootRelativePath":"assets/bc532790-e626-4506-bfd0-cb21a4b5f6be.png"},"b6cb4369-738b-4b60-aeee-667735c3a255":{"name":"dev","sourceUrl":null,"frameSize":{"x":217,"y":193},"frameCount":1,"looping":true,"frameDelay":12,"version":"fR3OKw8LeoJfLvaDBrwsMCqK66F8xrI0","loadedFromSource":true,"saved":true,"sourceSize":{"x":217,"y":193},"rootRelativePath":"assets/b6cb4369-738b-4b60-aeee-667735c3a255.png"},"eda79e8c-fdbe-454e-980c-bf3aec3e88b3":{"name":"laser2","sourceUrl":null,"frameSize":{"x":42,"y":154},"frameCount":1,"looping":true,"frameDelay":12,"version":"Ac6_yj.47WOHT450nYosVpbwUKv5169v","loadedFromSource":true,"saved":true,"sourceSize":{"x":42,"y":154},"rootRelativePath":"assets/eda79e8c-fdbe-454e-980c-bf3aec3e88b3.png"},"5c25cdb9-986a-4a4c-965d-94f05b42fec8":{"name":"laser3","sourceUrl":null,"frameSize":{"x":64,"y":176},"frameCount":1,"looping":true,"frameDelay":12,"version":"xKZwuQuIHyNKbc0.Rlk61B6yudJPWdP1","loadedFromSource":true,"saved":true,"sourceSize":{"x":64,"y":176},"rootRelativePath":"assets/5c25cdb9-986a-4a4c-965d-94f05b42fec8.png"},"bab7f18a-9e9d-44bc-844f-3b413a2d85e7":{"name":"win.jpg_1","sourceUrl":null,"frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":12,"version":"RqLfDaGuRvS_KcDwpOqNZgy2JyhhceqC","loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/bab7f18a-9e9d-44bc-844f-3b413a2d85e7.png"},"cae85c9d-c5f0-4743-a111-1fb86695b94b":{"name":"enemy1","sourceUrl":"assets/api/v1/animation-library/gamelab/gcZWNcMX5xnMb9.sFAr7M7ntYsq_g.yA/category_retro/retroship_12.png","frameSize":{"x":392,"y":392},"frameCount":1,"looping":true,"frameDelay":2,"version":"gcZWNcMX5xnMb9.sFAr7M7ntYsq_g.yA","categories":["retro"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":392,"y":392},"rootRelativePath":"assets/api/v1/animation-library/gamelab/gcZWNcMX5xnMb9.sFAr7M7ntYsq_g.yA/category_retro/retroship_12.png"},"15d7a7d2-01f8-4518-bfc8-54375baf42f8":{"name":"enemy1(hit)","sourceUrl":null,"frameSize":{"x":392,"y":392},"frameCount":1,"looping":true,"frameDelay":12,"version":"ExNGqM4G8Pdnt0muoY8UIg8UIJY0FQQa","categories":["retro"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":392,"y":392},"rootRelativePath":"assets/15d7a7d2-01f8-4518-bfc8-54375baf42f8.png"},"e77db335-4a99-422b-9a98-a8b0b6844d4e":{"name":"boss3","sourceUrl":null,"frameSize":{"x":639,"y":352},"frameCount":1,"looping":true,"frameDelay":12,"version":"bTOtoyVPbj_wG5hD.jIyMOGiL3fogaBT","loadedFromSource":true,"saved":true,"sourceSize":{"x":639,"y":352},"rootRelativePath":"assets/e77db335-4a99-422b-9a98-a8b0b6844d4e.png"},"8637dab3-4463-4ac7-aa70-03351da08ef2":{"name":"boss3(hit)","sourceUrl":null,"frameSize":{"x":639,"y":352},"frameCount":1,"looping":true,"frameDelay":12,"version":"zTF_Fwi.R3K17XFmFGJl3z6QFTBjx7sd","loadedFromSource":true,"saved":true,"sourceSize":{"x":639,"y":352},"rootRelativePath":"assets/8637dab3-4463-4ac7-aa70-03351da08ef2.png"},"b33528c7-662a-4845-835a-252b587439f1":{"name":"intro","sourceUrl":null,"frameSize":{"x":375,"y":376},"frameCount":1,"looping":true,"frameDelay":12,"version":"1BO2e8zmPlW5x47InpAJH7.tpB7Wt_0S","loadedFromSource":true,"saved":true,"sourceSize":{"x":375,"y":376},"rootRelativePath":"assets/b33528c7-662a-4845-835a-252b587439f1.png"},"97165280-0634-47dd-8467-b42825e5f4eb":{"name":"arrow","sourceUrl":null,"frameSize":{"x":314,"y":372},"frameCount":1,"looping":true,"frameDelay":12,"version":"VNQM6A5hoZvIA86gCK2wj1_N8StTnOGI","loadedFromSource":true,"saved":true,"sourceSize":{"x":314,"y":372},"rootRelativePath":"assets/97165280-0634-47dd-8467-b42825e5f4eb.png"},"1314b89f-fd8c-4cf6-ae7a-5ffeb0399d6d":{"name":"arrow(select)","sourceUrl":null,"frameSize":{"x":317,"y":376},"frameCount":2,"looping":true,"frameDelay":10,"version":"hNps7L_xGavExCFasNrIG3KREFK__f6k","loadedFromSource":true,"saved":true,"sourceSize":{"x":634,"y":376},"rootRelativePath":"assets/1314b89f-fd8c-4cf6-ae7a-5ffeb0399d6d.png"},"cfcd86cf-59eb-4f22-8de9-104e42ed6a13":{"name":"controls","sourceUrl":"assets/v3/animations/u1z9pOjK-wqsk7djOmoaCEtfXQE5_gsxCV3ITy7upxs/cfcd86cf-59eb-4f22-8de9-104e42ed6a13.png","frameSize":{"x":1060,"y":300},"frameCount":1,"looping":true,"frameDelay":4,"version":"KuZy2eniHQcjHrpTmx5HwXuE0hBqzChT","loadedFromSource":true,"saved":true,"sourceSize":{"x":1060,"y":300},"rootRelativePath":"assets/v3/animations/u1z9pOjK-wqsk7djOmoaCEtfXQE5_gsxCV3ITy7upxs/cfcd86cf-59eb-4f22-8de9-104e42ed6a13.png"},"a38a44c5-c7ad-4c0c-b188-7355f269c5e6":{"name":"enemy3","sourceUrl":null,"frameSize":{"x":123,"y":119},"frameCount":1,"looping":true,"frameDelay":12,"version":"zoWqHfRyzNX45apog_2H0R1evpDMpHZc","loadedFromSource":true,"saved":true,"sourceSize":{"x":123,"y":119},"rootRelativePath":"assets/a38a44c5-c7ad-4c0c-b188-7355f269c5e6.png"},"75b6303b-400d-4baa-bc03-dfea9bb6bd44":{"name":"enemy3(hit)","sourceUrl":null,"frameSize":{"x":120,"y":116},"frameCount":1,"looping":true,"frameDelay":12,"version":"_67VajezZphoUC_1vcVnkMH_HvOTEhXc","loadedFromSource":true,"saved":true,"sourceSize":{"x":120,"y":116},"rootRelativePath":"assets/75b6303b-400d-4baa-bc03-dfea9bb6bd44.png"},"ba90b503-ffc4-4dec-ae3f-f317671f1e54":{"name":"enemy4","sourceUrl":null,"frameSize":{"x":86,"y":102},"frameCount":1,"looping":true,"frameDelay":12,"version":"CM6df6VmixZGxHOwjTA1LftgZNFdhsT9","loadedFromSource":true,"saved":true,"sourceSize":{"x":86,"y":102},"rootRelativePath":"assets/ba90b503-ffc4-4dec-ae3f-f317671f1e54.png"},"3186d003-26ee-45c8-8490-a559cd408186":{"name":"enemy4(hit)","sourceUrl":null,"frameSize":{"x":86,"y":102},"frameCount":1,"looping":true,"frameDelay":12,"version":"pGUtdOfiVuoSDDIvuu7OqNNf4z5Mgnbj","loadedFromSource":true,"saved":true,"sourceSize":{"x":86,"y":102},"rootRelativePath":"assets/3186d003-26ee-45c8-8490-a559cd408186.png"},"ac4d3507-ded9-4e1e-90fe-33ce3966b34d":{"name":"aim1","sourceUrl":null,"frameSize":{"x":5,"y":400},"frameCount":1,"looping":true,"frameDelay":12,"version":"3.wJbUW3E.piIjB_sxZ6y0Jo01TSIVoV","loadedFromSource":true,"saved":true,"sourceSize":{"x":5,"y":400},"rootRelativePath":"assets/ac4d3507-ded9-4e1e-90fe-33ce3966b34d.png"},"575d173e-fab5-463c-b7f7-ca8359da9228":{"name":"cheat","sourceUrl":null,"frameSize":{"x":437,"y":153},"frameCount":1,"looping":true,"frameDelay":12,"version":"TnmLV.jM0yfGnGPVWpGRJoDLFq4v_ld5","loadedFromSource":true,"saved":true,"sourceSize":{"x":437,"y":153},"rootRelativePath":"assets/575d173e-fab5-463c-b7f7-ca8359da9228.png"},"c440b5cf-0780-472c-84ca-b2334c6fb219":{"name":"matt","sourceUrl":null,"frameSize":{"x":249,"y":368},"frameCount":1,"looping":true,"frameDelay":12,"version":"A5ErZumV560XYd3ioxx3fE_uUyopdJUN","loadedFromSource":true,"saved":true,"sourceSize":{"x":249,"y":368},"rootRelativePath":"assets/c440b5cf-0780-472c-84ca-b2334c6fb219.png"},"3c52dd0b-e3e3-4194-bc3b-a977a1a1969c":{"name":"matt(p1)","sourceUrl":null,"frameSize":{"x":249,"y":410},"frameCount":1,"looping":true,"frameDelay":12,"version":"C17BCrMigFK_7O3bsjocwFaymEwf6Hsm","loadedFromSource":true,"saved":true,"sourceSize":{"x":249,"y":410},"rootRelativePath":"assets/3c52dd0b-e3e3-4194-bc3b-a977a1a1969c.png"},"7aafeb3a-aa72-4217-82a1-08220d703c25":{"name":"rick","sourceUrl":null,"frameSize":{"x":91,"y":140},"frameCount":1,"looping":true,"frameDelay":12,"version":"A_.g8DfqaporcOqjhlslIRdlYPVUHYe6","loadedFromSource":true,"saved":true,"sourceSize":{"x":91,"y":140},"rootRelativePath":"assets/7aafeb3a-aa72-4217-82a1-08220d703c25.png"},"c0a3df6c-57bf-48b3-80ae-a9e71951f016":{"name":"mic","sourceUrl":null,"frameSize":{"x":55,"y":163},"frameCount":1,"looping":true,"frameDelay":12,"version":"oHFRpRIv6y38yYdeOW.3oNyMdM_XnBjn","loadedFromSource":true,"saved":true,"sourceSize":{"x":55,"y":163},"rootRelativePath":"assets/c0a3df6c-57bf-48b3-80ae-a9e71951f016.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

//Created by ZYH


var cheat = false;
var chance = randomNumber(1,100);
//screen
var screenNum = 1;
//score
var score = 0;
var score2 = 500; //100
var score3 = 500; //210
//other
var jacked = 500;
var textX = 10;
var warnS = 10;
//boss;
var bossNum = 1;
var boss1Hp = 150; // 155
var boss2Hp = 125; // 255
var boss2Y = 5;
var boss2X = 0;
var boss2S = 0;
var boss3Hp = 500; //505
var boss3S = 0;
//enemy
var enemyHp = 5;
var enemyHp2 = 5;
var enemyHp3 = 7;
var enemyHp4 = 7;
//enemy boss
var enemyb1 = 1;
var enemyb2 = 1;
var enemyb3 = 1;
var enemyb4 = 1;
//text
var textXboss = 500;
var textXboss2 = 500; 
var textXboss3 = 500; //10
var textXboss4 = 500; //110
var textXboss5 = 500; //10
var textXboss6 = 500; //145
//song
var song = 6;
createEdgeSprites();
//time
var time = createSprite(1000,0,1,1);
var aim = createSprite(200,200,11,400);
aim.setAnimation("aim1");
aim.visible = false;
//ship
var player = createSprite(200,375);
player.setAnimation("Player");
player.scale = 0.2;
player.visible = false;
//start
var title = createSprite(200,100);
title.setAnimation("space_shooter");

var start = createSprite(200,280);
start.setAnimation("start.png_1");
start.scale = 0.5;

var controls = createSprite(200,350);
controls.setAnimation("controls");
controls.scale = 0.1;

var intro = createSprite(200,200);
intro.setAnimation("intro");
intro.visible = false;

var dev = createSprite(350,30);
dev.setAnimation("dev");
dev.scale = 0.2;
dev.visible = false; 

var arrow = createSprite(350,350);
arrow.setAnimation("arrow");
arrow.scale = 0.15;
arrow.visible = false;

var change = createSprite(50,50);
change.setAnimation("matt");
change.scale = 0.1;
change.visible = false;

var change2 = createSprite(50,150);
change2.setAnimation("rick");
change2.scale = 0.3;
change2.visible = false;
//laser
var laserCount = 0;
var laser1 = createSprite(500,450);
laser1.setAnimation("Laser");
laser1.scale = 0.07;
laser1.rotation = 270;

var laser2 = createSprite(500,200);
laser2.setAnimation("Laser");
laser2.scale = 0.07;
laser2.rotation = 270;

var laser3 = createSprite(500,200);
laser3.setAnimation("Laser");
laser3.scale = 0.07;
laser3.rotation = 270;

var laser4 = createSprite(500,200);
laser4.setAnimation("Laser");
laser4.scale = 0.07;
laser4.rotation = 270;

var laser5 = createSprite(500,200);
laser5.setAnimation("Laser");
laser5.scale = 0.07;
laser5.rotation = 270;

var laser6 = createSprite(500,200);
laser6.setAnimation("Laser");
laser6.scale = 0.07;
laser6.rotation = 270;

var laser7 = createSprite(500,200);
laser7.setAnimation("Laser");
laser7.scale = 0.07;
laser7.rotation = 270;

var laser8 = createSprite(500,200);
laser8.setAnimation("Laser");
laser8.scale = 0.07;
laser8.rotation = 270;

var laser9 = createSprite(500,200);
laser9.setAnimation("Laser");
laser9.scale = 0.07;
laser9.rotation = 270;

var laser10 = createSprite(500,200);
laser10.setAnimation("Laser");
laser10.scale = 0.07;
laser10.rotation = 270;

//asteroid
var astHp = 8;
var astHp2 = 8;
var asteroid = createSprite(randomNumber(50,350),-100);
asteroid.setAnimation("Asteroid");
asteroid.scale = 0.3;

var asteroid2 = createSprite(randomNumber(50,350),-400);
asteroid2.setAnimation("Asteroid");
asteroid2.scale = 0.3;

//enemy
var enemy = createSprite(100,500);
enemy.setAnimation("enemy1");
enemy.scale = 0.1;

var enemy2 = createSprite(300,500);
enemy2.setAnimation("enemy1");
enemy2.scale = 0.1;

var enemy3 = createSprite(150,500);
enemy3.setAnimation("enemy3");
enemy3.scale = 0.7;

var enemy4 = createSprite(250,500);
enemy4.setAnimation("enemy4");
enemy4.scale = 0.8;
//other
var warn = createSprite(540, 200);
warn.setAnimation("boss warning");
warn.scale = 0.4;

var bossLaser = createSprite(200,-100);
bossLaser.setAnimation("laser2");
bossLaser.scale = 0.3;
bossLaser.visible = false;

var bossLaser3 = createSprite(200,-100);
bossLaser3.setAnimation("laser2");
bossLaser3.scale = 0.3;
bossLaser3.visible = false;

var bossLaser2 = createSprite(200,-100);
bossLaser2.setAnimation("laser3");
bossLaser2.scale = 0.4;
bossLaser2.visible = false;

var boss1 = createSprite(200,-100);
boss1.setAnimation("boss1");
boss1.visible = false;


var boss2 = createSprite(600,-100);
boss2.setAnimation("boss2");
boss2.visible = false;

var boss3 = createSprite(600,-200);
boss3.setAnimation("boss3");
boss3.scale = 0.7;
boss3.visible = false;

var cheat1 = createSprite(350,50);
cheat1.setAnimation("cheat");
cheat1.scale = 0.2;
cheat1.visible = false;

var win = createSprite(200,200);
win.setAnimation("win.jpg_1");
win.visible = false;

var over = createSprite(200,200);
over.setAnimation("game over");
over.visible = false;

laser1.velocityY = -15;
laser2.velocityY = -15;
laser3.velocityY = -15;
laser4.velocityY = -15;
laser5.velocityY = -15; 
laser6.velocityY = -15;
laser7.velocityY = -15;
laser8.velocityY = -15;
laser9.velocityY = -15;
laser10.velocityY = -15;

function draw() {
  rick();
  matt();

  boss2.velocityY = boss2Y;
  boss2.velocityX = boss2X;
  if(cheat == true && mouseIsOver(cheat1) && mousePressedOver(cheat1) && mouseWentDown("leftButton")){
      cheat = false;
      cheat1.visible = false;
  }
  else if(cheat == false && mouseIsOver(cheat1) && mousePressedOver(cheat1) && cheat1.visible == false && mouseWentDown("leftButton")){
      cheat = true;
      cheat1.visible = true;
  }
  //start screen
  if(screenNum == 1){
    background("black");
    control();
    start.visible = true;
    textX = -100;
    textXboss = -300;
    textXboss2 = -300;
    if(mouseIsOver(start) && mouseWentDown("leftButton")){
      screenNum = 2;
      start.visible = false;
      if(chance == 1){
        song = 8;
      }
      else{
        song = 1;
      }
    }
    if(mouseIsOver(controls) && mouseWentDown("leftButton")){
      screenNum = 100;
    }
  }
    if(screenNum == 100){
    intro.visible = true;
    arrow.visible = true;
    dev.visible = true;
    change.visible = true;
    change2.visible = true;
    arrow.setAnimation("arrow");
    if(mouseIsOver(arrow)){
      arrow.setAnimation("arrow(select)");
    }
    if(mouseIsOver(arrow) && mouseWentDown("leftButton")){
      screenNum = 1;
      intro.visible = false;
      arrow.visible = false;
      change.visible = false;
      change2.visible = false;
    }
    if(mouseIsOver(dev)){
      if(keyWentDown("space")){
        dev.y = -100;
        cheat = true;
      }
    }
    if(mouseIsOver(change) && mouseWentDown("leftButton")){
      chance = 64;
      change.visible = false;
      change2.visible = true;
    }
    if(mouseIsOver(change2) && mouseWentDown("leftButton")){
      chance = 1;
      change.visible = true;
      change2.visible = false;
    }
  }
  //gameplay
  if(screenNum == 2){
    dev.visible = false;
    if(cheat == true){
      cheat1.visible = true; 
    }
    control();
    shootLaser();
    controls.visible = false;
    textX = 10;
    player.visible = true;
    title.visible = false;
    asteroid.y = asteroid.y + 3;
    asteroid.rotation = asteroid.rotation - 1;
    asteroid2.y = asteroid2.y + 3;
    asteroid2.rotation = asteroid2.rotation - 1;
    if(astHp < 0){
      asteroid.x = randomNumber(50,350);
      asteroid.y = -100;
      astHp = 8;
      score = score + 100;
    }
    if(asteroid.y > 450){
      asteroid.x = randomNumber(50,350);
      asteroid.y = -100;
      astHp = 8;
    }
    if(astHp2 < 0){
      asteroid2.x = randomNumber(50,350);
      asteroid2.y = -400;
      astHp2 = 8;
      score = score + 100;
    }
    if(asteroid2.y > 450){
      asteroid2.x = randomNumber(50,350);
      asteroid2.y = -300;
      astHp2 = 8;
    }
    //screen change
    if(score == 1000){
      asteroid.y = -1000;
      asteroid2.y = -1000;
      asteroid.y = asteroid.y - 0;
      asteroid2.y = asteroid2.y - 0;
      warn.visible = false;
      warn.x = warn.x - warnS;
      if(warn.x < -100){
        warnS = 0;
        warn.x = 550;
      }
      if(warn.x === 550){
        screenNum = 3;
        if(chance == 8){
          song = 8;
        }
        else{
          song = 2;
        }
      }
    }
    asteroidHit();
    asteroid2Hit();
    //game over
    if(cheat == false){
      if(asteroid.isTouching(player) || asteroid2.isTouching(player)){
        screenNum = 10;
        song = 4;
     }
    }
  }
  
  if(screenNum == 3){
    shootLaser();
    control();
    textXboss = 100;
    textXboss2 = 10;
    boss1.visible = true;
    if(bossNum == 1){
    boss1.x = 200;
    boss1.y = -100;
    bossNum = 0;
    }
    boss1.y = boss1.y + 5;
    if(boss1.y >= 20){
      bossLaser.visible = true;
      boss1.y = 20;
      bossLaser.y = bossLaser.y + 15;
    }
    if(bossLaser.y >= 450){
      bossLaser.x = player.x;
      bossLaser.y = -100;
    }
    boss1Hit();
    if(boss1Hp <= 0){
      time.y = time.y + 0.5;
      setTimeout(function(){
        boss1.setAnimation("boom");
      }, 1000);
      setTimeout(function(){
        boss1.x = -1000;
        boss1.y = -1000;
      },1500);
      if(time.y === 1.5){
        if(chance == 1){
          song = 8;
        }
        else{
          song = 1;
        }
        screenNum = 4;
      }
      if(time.y === 1){
        score = score + 500;
      }
        bossLaser.y = -100;
        textXboss = -300;
        textXboss2 = -300;
        enemy.y = -100;
        enemy2.y = -300;
        boss1Hp = 0;
    }
    //end game
    if(cheat == false){
      if(bossLaser.isTouching(player)){
        screenNum = 10;
        song = 4;
      }
    }
  }
  //stage 2
  if(screenNum == 4){
    shootLaser();
    control();
    player.visible = true;
    enemy.y = enemy.y + 3;
    enemy2.y = enemy2.y + 3;
    if(enemy.y >= 500){
      enemy.x = randomNumber(25,375);
      enemy.y = -100;
      enemyHp = 5;
    }
    if(enemy2.y >= 500){
      enemy2.x = randomNumber(25,375);
      enemy2.y = -300;
      enemyHp2 = 5;
    }
    enemy1Hit();
    enemy2Hit();
    enemy.collide(enemy2);
    if(enemyHp <= 0){
      enemy.x = randomNumber(25,375);
      enemy.y = -100;
      score = score + 100;
      enemyHp = 5;
    }
    if(enemyHp2 <= 0){
      enemy2.x = randomNumber(25,375);
      enemy2.y = -300;
      score = score + 100;
      enemyHp2 = 5;
    }
    if(cheat == false){
      if(enemy.isTouching(player) || enemy2.isTouching(player)){
        screenNum = 10;
        song = 4;
      }
    }
    if(score >= 2000){
      
      warn.x = warn.x - warnS;
      if(warn.x < -100){
        warnS = 0;
        warn.x = 550;
      }
      if(warn.x === 550){
        screenNum = 5;
        bossLaser2.x = 600;
        if(chance == 1){
          song = 8;
        }
        else{
          song = 3;
        }
        
        bossNum = 2;
     }
    }
    
  }
  if(screenNum == 5){
    shootLaser();
    control();
    enemy.y = -100;
    enemy2.y = -100;
    bossLaser2.visible = true;
    if(bossNum == 2){
      boss2.x = 200;
      boss2.y = -100;
      boss2.visible = true;
      bossNum = 0;
      time.y = 0;
      textXboss3 = 10;
      textXboss4 = 110;
      boss2S = 2;
      bossLaser2.y = 0;
    }
    if(boss2.y >= 40){
      aim.visible = true;
      bossLaser2.y = bossLaser2.y + 8;
      boss2.y = 40;
      boss2Y = 0;
      boss2.x = boss2.x + boss2S;
      bossLaser2.x = boss2.x;
      aim.x = boss2.x;
    }
    
    if(boss2.isTouching(rightEdge)){
      boss2S = -2;
    }
    else if(boss2.isTouching(leftEdge)){
      boss2S = 2;
    }
      
    if(bossLaser2.y >= 450){
      bossLaser2.y = 0;
      bossLaser2.x = boss2.x;
    }
    if(cheat == false){
      if(bossLaser2.isTouching(player)){
        screenNum = 10;
        song = 4;
      }
    }
    boss2Hit();
    if(boss2Hp <= 0){
      boss2.setAnimation("boom");
      setTimeout(function(){
        screenNum = 6;
      },500);
      aim.visible = false;
      bossLaser2.y = -200;
      bossLaser2.x = -100;
      textXboss3 = -300;
      textXboss4 = -300;
    }
  }
  if(screenNum == 6){
    shootLaser();
    control();
    if(time.y === 0){
      if(chance == 1){
        song = 8;
      }
      else{
        song = 7;
      }
      time.y = time.y + 1;
      enemy3.y = -100;
      enemy4.y = -250;
      score = score + 500;
    }
    boss2.visible = false;
    if(time.y === 1){
      enemy3.y = enemy3.y + 3;
      enemy4.y = enemy4.y + 3;
    }
    enemy3.collide(enemy4);
    if(enemyHp3 <= 0){
      enemyHp3 = 7;
      enemy3.y = -100;
      enemy3.x = random(50,350);
      score = score + 100;
    }
    if(enemy3.y >= 450){
      enemyHp3 = 7;
      enemy3.y = -150;
      enemy3.x = random(50,350);
    }
    if(enemyHp4 <= 0){
      enemyHp4 = 7;
      enemy4.y = -250;
      enemy4.x = random(50,350);
      score = score + 100;
    }
    if(enemy4.y >= 450){
      enemyHp4 = 7;
      enemy4.y = -250;
      enemy4.x = random(50,350);
    }
    if(cheat == false){
      if(enemy3.isTouching(player) || enemy4.isTouching(player)){
        screenNum = 10;
        song = 4;
      }
    }
    if(score == 3000){
      screenNum = 7;
      enemy3.y = -300;
      enemy4.y = -300;
      bossNum = 3;
    }
    //enemy 3
    enemy3Hit();
    //enemy 4
    enemy4Hit();
  }
  if(screenNum == 7){
    shootLaser();
    boss3.y = boss3.y + 5;
    if(bossNum == 3){
      boss3.x = 200;
      if(chance == 1){
        song = 8;
      }
      else{
        song = 5;
      }
      boss3.y = -200;
      boss3.visible = true;
      textXboss5 = 10;
      textXboss6 = 145;
      boss3S = 2;
      bossLaser2.y = -100;
      enemy.y = -100;
      enemy2.y = -400;
      enemy3.y = -700;
      enemy4.y = -1100;
      boss3.visible = true;
      bossNum = 0;
      bossLaser3.y = -100;
    }
    if(boss3.y >= 30){
      boss3.y = 30;
      bossLaser2.visible = true;
      bossLaser2.y = bossLaser2.y + 20;
      enemy.y = enemy.y + 5;
      enemy2.y = enemy2.y + 5;
      enemy3.y = enemy3.y + 5;
      enemy4.y = enemy4.y + 5;
    }
    if(boss3Hp <= 400 && boss3Hp >= 300){
      boss3Control();
    }
    else if(boss3Hp <= 100 && boss3Hp >= 0){
      boss3Control();
    }
    else{
      jacked = 500;
    }
    if(boss3Hp <= 0){
      screenNum = 69;
    }
    //laser
    if(bossLaser2.y >= 450){
      bossLaser2.x = player.x;
      bossLaser2.y = -100;
    }

    //death
    if(cheat == false){
      if(bossLaser.isTouching(player) || bossLaser2.isTouching(player) || bossLaser3.isTouching(player)){
        song = 4;
        screenNum = 10;
      }
      if(enemy.isTouching(player) || enemy2.isTouching(player) || enemy3.isTouching(player) || enemy4.isTouching(player)){
        song = 4;
        screenNum = 10;
      }
    }
    if(enemyHp <= 0){
      enemy.y = -100;
      enemy.x = random(50,350);
      enemyHp = 1;
      score = score + 50;
    }
    if(enemyHp2 <= 0){
      enemy2.y = -400;
      enemy2.x = random(50,350);
      enemyHp2 = 1;
      score = score + 50;
    }
    if(enemyHp3 <= 0){
      enemy3.y = -700;
      enemy3.x = random(50,350);
      enemyHp3 = 1;
      score = score + 50;
    }
    if(enemyHp4 <= 0){
      enemy4.y = -1100;
      enemy4.x = random(50,350);
      enemyHp4 = 1;
      score = score + 50;
    }
    //enemy
    if(enemy.y >= 450){
      enemyHp = 2;
      enemy.y = -100;
      enemy.x = random(50,350);
    }
    if(enemy2.y >= 450){
      enemyHp2 = 2;
      enemy2.y = -400;
      enemy2.x = random(50,350);
    }
    if(enemy3.y >= 450){
      enemyHp3 = 2;
      enemy3.y = -700;
      enemy3.x = random(50,350);
    }
    if(enemy4.y >= 450){
      enemyHp4 = 2;
      enemy4.y = -1100;
      enemy4.x = random(50,350);
    }
    //control
    boss3Control();
    //collide
    enemy.collide(enemy2);
    enemy.collide(enemy3);
    enemy.collide(enemy4);
    enemy2.collide(enemy3);
    enemy2.collide(enemy4);
    enemy3.collide(enemy4);
    //wall
    enemy.collide(leftEdge);
    enemy.collide(rightEdge);
    enemy2.collide(leftEdge);
    enemy2.collide(rightEdge);
    enemy3.collide(leftEdge);
    enemy3.collide(rightEdge);
    enemy4.collide(leftEdge);
    enemy4.collide(rightEdge);
    //enemy
    if(enemy.isTouching(enemy2)){
      enemy.x = enemy2.x + 50;
    }
    if(enemy2.isTouching(enemy3)){
      enemy2.x = enemy3.x - 50;
    }
    if(enemy4.isTouching(enemy3)){
      enemy4.x = enemy3.x + 100;
    }
    //laser
    boss3Hit();
    enemy1Hit();
    enemy2Hit();
    enemy3Hit();
    enemy4Hit();
  }
  if(screenNum == 69){
      song = 69;
      textX = 500;
      score2 = 100;
      score3 = 210;
      textXboss5 = -200;
      textXboss6 = -200;
      screenNum = 70;
    win.visible = true;
    
  }
  if(screenNum == 10){
    setTimeout(function(){
      player.visible = false;
      player.x = 800;
    }, 60);
    over.visible = true;
    textX = -100;
    textXboss = -300;
    textXboss2 = -300;
    textXboss3 = -300;
    textXboss4 = -300;
    textXboss5 = -300;
    textXboss6 = -300;
  }
 laserH();
  //collision 
  
  background("black");
  player.collide(edges);
  asteroid.collide(asteroid2);
  asteroid2.collide(asteroid);
  drawSprites();
  fill("white");
  textSize(20);
  strokeWeight(10);
  text(score, textX,30);
  //boss1
  text("Boss Hp:", textXboss2,370);
  text(boss1Hp, textXboss,370);
  //boss2
  text("Boss 2 Hp:", textXboss3, 370);
  text(boss2Hp, textXboss4, 370);
  //boss3
  text("The Tempest:", textXboss5,370);
  text(boss3Hp,textXboss6,370);
  //jacked
  text("Jacked Controls", jacked, 200);
  //end score
  text("Your Score:", score2, 300);
  text(score,score3, 300);
  //song
    if(song == 1){
      stopSound("assets/--MDK---Press-Start--FREE-DOWNLOAD---.mp3");
      stopSound("assets/Boss-1.mp3");
      stopSound("assets/Terraria-Music---Boss-2.mp3");
      playSound("assets/Tiger-Tracks.mp3", true);
      song = 0;
    }
    if(song == 2){
      stopSound("assets/Terraria-Music---Boss-2.mp3");
      stopSound("assets/Tiger-Tracks.mp3");
      playSound("assets/Boss-1.mp3", true);
      song = 0;
    }
    if(song == 3){
      stopSound("assets/Tiger-Tracks.mp3");
      playSound("assets/Terraria-Music---Boss-2.mp3", true);
      song = 0;
    }
    if(song == 4){
      stopSound("Rick_Astley_-_Never_Gonna_Give_You_(getmp3.pro).mp3");
      stopSound("assets/Boss-1.mp3");
      stopSound("assets/Terraria-Music---Boss-2.mp3");
      stopSound("assets/Tiger-Tracks.mp3");
      stopSound("F-777_-_Deadlocked_(getmp3.pro).mp3");
      playSound("assets/Undertale-Game-Over-Theme.mp3", true);
      song = 0;
    }
    if(song == 5){
      stopSound("assets/Boss-1.mp3");
      stopSound("assets/Terraria-Music---Boss-2.mp3");
      stopSound("assets/Tiger-Tracks.mp3");
      stopSound("Waterflame_-_Blast_Processing_(getmp3.pro).mp3");
      playSound("F-777_-_Deadlocked_(getmp3.pro).mp3");
      song = 0;
    }
    if(song == 6){
      stopSound("assets/Boss-1.mp3");
      stopSound("assets/Terraria-Music---Boss-2.mp3");
      stopSound("assets/Tiger-Tracks.mp3");
      playSound("assets/--MDK---Press-Start--FREE-DOWNLOAD---.mp3", true);
      song = 0;
    }
    if(song == 7){
      stopSound("assets/Boss-1.mp3");
      stopSound("assets/Terraria-Music---Boss-2.mp3");
      stopSound("assets/Tiger-Tracks.mp3");
      stopSound("assets/Terraria-Music---Boss-2.mp3");
      playSound("Waterflame_-_Blast_Processing_(getmp3.pro).mp3",true);
      song = 0;
    }
    if(song == 8){
      stopSound("assets/--MDK---Press-Start--FREE-DOWNLOAD---.mp3");
      stopSound("assets/Boss-1.mp3");
      stopSound("F-777_-_Deadlocked_(getmp3.pro).mp3");
      stopSound("assets/Tiger-Tracks.mp3");
      stopSound("assets/Terraria-Music---Boss-2.mp3");
      playSound("Rick_Astley_-_Never_Gonna_Give_You_(getmp3.pro).mp3");
      song = 0;
    }
    if(song == 69){
      stopSound("assets/Boss-1.mp3");
      stopSound("assets/Terraria-Music---Boss-2.mp3");
      stopSound("assets/Tiger-Tracks.mp3");
      stopSound("F-777_-_Deadlocked_(getmp3.pro).mp3");
      playSound("assets/Kirby's-Victory-Theme.mp3");
      song = 0;
    }
  }
  function asteroidHit(){
    //laser damage
  if(laser1.isTouching(asteroid)){
    astHp = astHp - 1;
    laser1.x = -100;
    asteroid.setAnimation("Asteroid(Hit)");
    setTimeout(function(){
      asteroid.setAnimation("Asteroid");
      }, 50);
    if(cheat == true){
      astHp = astHp - 99;
    }
  }
  if(laser2.isTouching(asteroid)){
    astHp = astHp - 1;
    laser2.x = -100;
    asteroid.setAnimation("Asteroid(Hit)");
    setTimeout(function(){
      asteroid.setAnimation("Asteroid");
      }, 50);
      if(cheat == true){
      astHp = astHp - 99;
    }
  }
  if(laser3.isTouching(asteroid)){
    astHp = astHp - 1;
    laser3.x = -100;
    asteroid.setAnimation("Asteroid(Hit)");
    setTimeout(function(){
      asteroid.setAnimation("Asteroid");
      }, 50);
      if(cheat == true){
      astHp = astHp - 99;
    }
  }
  if(laser4.isTouching(asteroid)){
    astHp = astHp - 1;
    laser4.x = -100;
    asteroid.setAnimation("Asteroid(Hit)");
    setTimeout(function(){
      asteroid.setAnimation("Asteroid");
      }, 50);
    if(cheat == true){
      astHp = astHp - 99;
    }
  }
  if(laser5.isTouching(asteroid)){
    astHp = astHp - 1;
    laser5.x = -100;
    asteroid.setAnimation("Asteroid(Hit)");
    setTimeout(function(){
      asteroid.setAnimation("Asteroid");
      }, 50);
    if(cheat == true){
      astHp = astHp - 99;
    }
  }
  if(laser6.isTouching(asteroid)){
    astHp = astHp - 1;
    laser6.x = -100;
    asteroid.setAnimation("Asteroid(Hit)");
    setTimeout(function(){
      asteroid.setAnimation("Asteroid");
      }, 50);
    if(cheat == true){
      astHp = astHp - 99;
    }
  }
  if(laser7.isTouching(asteroid)){
    astHp = astHp - 1;
    laser7.x = -100;
    asteroid.setAnimation("Asteroid(Hit)");
    setTimeout(function(){
      asteroid.setAnimation("Asteroid");
      }, 50);
    if(cheat == true){
      astHp = astHp - 99;
    }
  }
  if(laser8.isTouching(asteroid)){
    astHp = astHp - 1;
    laser8.x = -100;
    asteroid.setAnimation("Asteroid(Hit)");
    setTimeout(function(){
      asteroid.setAnimation("Asteroid");
      }, 50);
    if(cheat == true){
      astHp = astHp - 99;
    }
  }
  if(laser9.isTouching(asteroid)){
    astHp = astHp - 1;
    laser9.x = -100;
    asteroid.setAnimation("Asteroid(Hit)");
    setTimeout(function(){
      asteroid.setAnimation("Asteroid");
      }, 50);
    if(cheat == true){
      astHp = astHp - 99;
    }
  }
  if(laser10.isTouching(asteroid)){
    astHp = astHp - 1;
    laser10.x = -100;
    asteroid.setAnimation("Asteroid(Hit)");
    setTimeout(function(){
      asteroid.setAnimation("Asteroid");
      }, 50);
    if(cheat == true){
      astHp = astHp - 99;
    }
  }
  }
  function asteroid2Hit(){
    //laser damage asteroid 2
  if(laser1.isTouching(asteroid2)){
    astHp2 = astHp2 - 1;
    laser1.x = -100;
    asteroid2.setAnimation("Asteroid(Hit)");
    setTimeout(function(){
      asteroid2.setAnimation("Asteroid");
      }, 50);
    if(cheat == true){
      astHp2 = astHp2 - 99;
    }
  }
  if(laser2.isTouching(asteroid2)){
    astHp2 = astHp2 - 1;
    laser2.x = -100;
    asteroid2.setAnimation("Asteroid(Hit)");
    setTimeout(function(){
      asteroid2.setAnimation("Asteroid");
      }, 50);
    if(cheat == true){
      astHp2 = astHp2 - 99;
    }
  }
  if(laser3.isTouching(asteroid2)){
    astHp2 = astHp2 - 1;
    laser3.x = -100;
    asteroid2.setAnimation("Asteroid(Hit)");
    setTimeout(function(){
      asteroid2.setAnimation("Asteroid");
      }, 50);
    if(cheat == true){
      astHp2 = astHp2 - 99;
    }
  }
  if(laser4.isTouching(asteroid2)){
    astHp2 = astHp2 - 1;
    laser4.x = -100;
    asteroid2.setAnimation("Asteroid(Hit)");
    setTimeout(function(){
      asteroid2.setAnimation("Asteroid");
      }, 50);
    if(cheat == true){
      astHp2 = astHp2 - 99;
    }
  }
  if(laser5.isTouching(asteroid2)){
    astHp2 = astHp2 - 1;
    laser5.x = -100;
    asteroid2.setAnimation("Asteroid(Hit)");
    setTimeout(function(){
      asteroid2.setAnimation("Asteroid");
      }, 50);
    if(cheat == true){
      astHp2 = astHp2 - 99;
    }
  }
  if(laser6.isTouching(asteroid2)){
    astHp2 = astHp2 - 1;
    laser6.x = -100;
    asteroid2.setAnimation("Asteroid(Hit)");
    setTimeout(function(){
      asteroid2.setAnimation("Asteroid");
      }, 50);
    if(cheat == true){
      astHp2 = astHp2 - 99;
    }
  }
  if(laser7.isTouching(asteroid2)){
    astHp2 = astHp2 - 1;
    laser7.x = -100;
    asteroid2.setAnimation("Asteroid(Hit)");
    setTimeout(function(){
      asteroid2.setAnimation("Asteroid");
      }, 50);
    if(cheat == true){
      astHp2 = astHp2 - 99;
    }
  }
  if(laser8.isTouching(asteroid2)){
    astHp2 = astHp2 - 1;
    laser8.x = -100;
    asteroid2.setAnimation("Asteroid(Hit)");
    setTimeout(function(){
      asteroid2.setAnimation("Asteroid");
      }, 50);
    if(cheat == true){
      astHp2 = astHp2 - 99;
    }
  }
  if(laser9.isTouching(asteroid2)){
    astHp2 = astHp2 - 1;
    laser9.x = -100;
    asteroid2.setAnimation("Asteroid(Hit)");
    setTimeout(function(){
      asteroid2.setAnimation("Asteroid");
      }, 50);
    if(cheat == true){
      astHp2 = astHp2 - 99;
    }
  }
  if(laser10.isTouching(asteroid2)){
    astHp2 = astHp2 - 1;
    laser10.x = -100;
    asteroid2.setAnimation("Asteroid(Hit)");
    setTimeout(function(){
      asteroid2.setAnimation("Asteroid");
      }, 50);
    if(cheat == true){
      astHp2 = astHp2 - 99;
    }
  }
  }
  function boss1Hit(){
    //damage
    if(laser1.isTouching(boss1)){
    boss1Hp = boss1Hp - 1;
    laser1.x = -100;
    boss1.setAnimation("boss1(hit)");
    setTimeout(function(){
      boss1.setAnimation("boss1");
      }, 50);
    if(cheat == true){
      boss1Hp = boss1Hp - 100;
    }
  }
    if(laser2.isTouching(boss1)){
      boss1Hp = boss1Hp - 1;
      laser2.x = -100;
      boss1.setAnimation("boss1(hit)");
      setTimeout(function(){
        boss1.setAnimation("boss1");
        }, 50);
      if(cheat == true){
       boss1Hp = boss1Hp - 100;
      }
    }
    if(laser3.isTouching(boss1)){
      boss1Hp = boss1Hp - 1;
      laser3.x = -100;
      boss1.setAnimation("boss1(hit)");
      setTimeout(function(){
        boss1.setAnimation("boss1");
        }, 50);
      if(cheat == true){
        boss1Hp = boss1Hp - 100;
      }
    }
    if(laser4.isTouching(boss1)){
      boss1Hp = boss1Hp - 1;
      laser4.x = -100;
      boss1.setAnimation("boss1(hit)");
      setTimeout(function(){
        boss1.setAnimation("boss1");
        }, 50);
      if(cheat == true){
        boss1Hp = boss1Hp - 100;
      }
    }
    if(laser5.isTouching(boss1)){
      boss1Hp = boss1Hp - 1;
      laser5.x = -100;
      boss1.setAnimation("boss1(hit)");
      setTimeout(function(){
        boss1.setAnimation("boss1");
        }, 50);
      if(cheat == true){
       boss1Hp = boss1Hp - 100;
      }
    }
    if(laser6.isTouching(boss1)){
      boss1Hp = boss1Hp - 1;
      laser6.x = -100;
      boss1.setAnimation("boss1(hit)");
      setTimeout(function(){
        boss1.setAnimation("boss1");
        }, 50);
      if(cheat == true){
       boss1Hp = boss1Hp - 100;
      }
    }
    if(laser7.isTouching(boss1)){
      boss1Hp = boss1Hp - 1;
      laser7.x = -100;
      boss1.setAnimation("boss1(hit)");
      setTimeout(function(){
        boss1.setAnimation("boss1");
        }, 50);
      if(cheat == true){
       boss1Hp = boss1Hp - 100;
      }
    }
    if(laser8.isTouching(boss1)){
      boss1Hp = boss1Hp - 1;
      laser8.x = -100;
      boss1.setAnimation("boss1(hit)");
      setTimeout(function(){
        boss1.setAnimation("boss1");
        }, 50);
      if(cheat == true){
       boss1Hp = boss1Hp - 100;
      }
    }
    if(laser9.isTouching(boss1)){
      boss1Hp = boss1Hp - 1;
      laser9.x = -100;
      boss1.setAnimation("boss1(hit)");
      setTimeout(function(){
        boss1.setAnimation("boss1");
        }, 50);
      if(cheat == true){
       boss1Hp = boss1Hp - 100;
      }
    }
    if(laser10.isTouching(boss1)){
      boss1Hp = boss1Hp - 1;
      laser10.x = -100;
      boss1.setAnimation("boss1(hit)");
      setTimeout(function(){
        boss1.setAnimation("boss1");
        }, 50);
      if(cheat == true){
       boss1Hp = boss1Hp - 100;
      }
    }
  }
  function enemy1Hit(){
    //enemy 1
    if(laser1.isTouching(enemy)){
    enemyHp = enemyHp - 1;
    enemyb1 = enemyb1 - 1;
    laser1.x = -100;
    enemy.setAnimation("enemy1(hit)");
    setTimeout(function(){
      enemy.setAnimation("enemy1");
      }, 50);
      if(cheat == true){
       enemyHp = enemyHp - 100;
      }
    }
    if(laser2.isTouching(enemy)){
      enemyHp = enemyHp - 1;
      enemyb1 = enemyb1 - 1;
      laser2.x = -100;
      enemy.setAnimation("enemy1(hit)");
      setTimeout(function(){
        enemy.setAnimation("enemy1");
        }, 50);
      if(cheat == true){
       enemyHp = enemyHp - 100;
      }
    }
    if(laser3.isTouching(enemy)){
    enemyHp = enemyHp - 1;
    enemyb1 = enemyb1 - 1;
    laser3.x = -100;
    enemy.setAnimation("enemy1(hit)");
    setTimeout(function(){
      enemy.setAnimation("enemy1");
      }, 50);
      if(cheat == true){
       enemyHp = enemyHp - 100;
      }
    }
    if(laser4.isTouching(enemy)){
    enemyHp = enemyHp - 1;
    enemyb1 = enemyb1 - 1;
    laser4.x = -100;
    enemy.setAnimation("enemy1(hit)");
    setTimeout(function(){
      enemy.setAnimation("enemy1");
      }, 50);
    if(cheat == true){
       enemyHp = enemyHp - 100;
      }
    }
    if(laser5.isTouching(enemy)){
      enemyHp = enemyHp - 1;
      enemyb1 = enemyb1 - 1;
      laser5.x = -100;
      enemy.setAnimation("enemy1(hit)");
      setTimeout(function(){
        enemy.setAnimation("enemy1");
      }, 50);
      if(cheat == true){
       enemyHp = enemyHp - 100;
      }
    }
    if(laser6.isTouching(enemy)){
      enemyHp = enemyHp - 1;
      enemyb1 = enemyb1 - 1;
      laser6.x = -100;
      enemy.setAnimation("enemy1(hit)");
      setTimeout(function(){
        enemy.setAnimation("enemy1");
        }, 50);
      if(cheat == true){
       enemyHp = enemyHp - 100;
      }
    }
    if(laser7.isTouching(enemy)){
      enemyHp = enemyHp - 1;
      enemyb1 = enemyb1 - 1;
      laser7.x = -100;
      enemy.setAnimation("enemy1(hit)");
      setTimeout(function(){
        enemy.setAnimation("enemy1");
        }, 50);
      if(cheat == true){
       enemyHp = enemyHp - 100;
      }
    }
    if(laser8.isTouching(enemy)){
      enemyHp = enemyHp - 1;
      enemyb1 = enemyb1 - 1;
      laser8.x = -100;
      enemy.setAnimation("enemy1(hit)");
      setTimeout(function(){
        enemy.setAnimation("enemy1");
        }, 50);
      if(cheat == true){
       enemyHp = enemyHp - 100;
      }
    }
    if(laser9.isTouching(enemy)){
      enemyHp = enemyHp - 1;
      enemyb1 = enemyb1 - 1;
      laser9.x = -100;
      enemy.setAnimation("enemy1(hit)");
      setTimeout(function(){
        enemy.setAnimation("enemy1");
        }, 50);
      if(cheat == true){
       enemyHp = enemyHp - 100;
      }
    }
    if(laser10.isTouching(enemy)){
      enemyHp = enemyHp - 1;
      enemyb1 = enemyb1 - 1;
      laser10.x = -100;
      enemy.setAnimation("enemy1(hit)");
      setTimeout(function(){
        enemy.setAnimation("enemy1");
        }, 50);
      if(cheat == true){
       enemyHp = enemyHp - 100;
      }
    }
  }
  function enemy2Hit(){
     //enemy2
    if(laser1.isTouching(enemy2)){
    enemyHp2 = enemyHp2 - 1;
    enemyb2 = enemyb2 - 1;
    laser1.x = -100;
    enemy2.setAnimation("enemy1(hit)");
    setTimeout(function(){
      enemy2.setAnimation("enemy1");
      }, 50);
    if(cheat == true){
       enemyHp2 = enemyHp2 - 100;
      }
    }
    if(laser2.isTouching(enemy2)){
    enemyHp2 = enemyHp2 - 1;
    laser2.x = -100;
    enemy2.setAnimation("enemy1(hit)");
    setTimeout(function(){
      enemy2.setAnimation("enemy1");
      }, 50);
    if(cheat == true){
       enemyHp2 = enemyHp2 - 100;
      }
    }
    if(laser3.isTouching(enemy2)){
    enemyHp2 = enemyHp2 - 1;
    enemyb2 = enemyb2 - 1;
    laser3.x = -100;
    enemy2.setAnimation("enemy1(hit)");
    setTimeout(function(){
      enemy2.setAnimation("enemy1");
      }, 50);
    if(cheat == true){
       enemyHp2 = enemyHp2 - 100;
      }
    }
    if(laser4.isTouching(enemy2)){
    enemyHp2 = enemyHp2 - 1;
    enemyb2 = enemyb2 - 1;
    laser4.x = -100;
    enemy2.setAnimation("enemy1(hit)");
    setTimeout(function(){
      enemy2.setAnimation("enemy1");
      }, 50);
    if(cheat == true){
       enemyHp2 = enemyHp2 - 100;
      }
    }
    if(laser5.isTouching(enemy2)){
    enemyHp2 = enemyHp2 - 1;
    enemyb2 = enemyb2 - 1;
    laser5.x = -100;
    enemy2.setAnimation("enemy1(hit)");
    setTimeout(function(){
      enemy2.setAnimation("enemy1");
      }, 50);
    if(cheat == true){
       enemyHp2 = enemyHp2 - 100;
      }
    }
    if(laser6.isTouching(enemy2)){
    enemyHp2 = enemyHp2 - 1;
    enemyb2 = enemyb2 - 1;
    laser6.x = -100;
    enemy2.setAnimation("enemy1(hit)");
    setTimeout(function(){
      enemy2.setAnimation("enemy1");
      }, 50);
    if(cheat == true){
       enemyHp2 = enemyHp2 - 100;
      }
    }
    if(laser7.isTouching(enemy2)){
    enemyHp2 = enemyHp2 - 1;
    enemyb2 = enemyb2 - 1;
    laser7.x = -100;
    enemy2.setAnimation("enemy1(hit)");
    setTimeout(function(){
      enemy2.setAnimation("enemy1");
      }, 50);
    if(cheat == true){
       enemyHp2 = enemyHp2 - 100;
      }
    }
    if(laser8.isTouching(enemy2)){
    enemyHp2 = enemyHp2 - 1;
    enemyb2 = enemyb2 - 1;
    laser8.x = -100;
    enemy2.setAnimation("enemy1(hit)");
    setTimeout(function(){
      enemy2.setAnimation("enemy1");
      }, 50);
    if(cheat == true){
       enemyHp2 = enemyHp2 - 100;
      }
    }
    if(laser9.isTouching(enemy2)){
    enemyHp2 = enemyHp2 - 1;
    enemyb2 = enemyb2 - 1;
    laser9.x = -100;
    enemy2.setAnimation("enemy1(hit)");
    setTimeout(function(){
      enemy2.setAnimation("enemy1");
      }, 50);
    if(cheat == true){
       enemyHp2 = enemyHp2 - 100;
      }
    }
    if(laser10.isTouching(enemy2)){
    enemyHp2 = enemyHp2 - 1;
    enemyb2 = enemyb2 - 1;
    laser10.x = -100;
    enemy2.setAnimation("enemy1(hit)");
    setTimeout(function(){
      enemy2.setAnimation("enemy1");
      }, 50);
    if(cheat == true){
       enemyHp2 = enemyHp2 - 100;
      }
    }
  }
  function boss2Hit(){
    //damage
    if(laser1.isTouching(boss2)){
      boss2Hp = boss2Hp - 1;
      laser1.x = -100;
      boss2.setAnimation("boss2(hit)");
      setTimeout(function(){
      boss2.setAnimation("boss2");
      }, 50);
      if(cheat == true){
       boss2Hp = boss2Hp - 100;
      }
  }
    if(laser2.isTouching(boss2)){
      boss2Hp = boss2Hp - 1;
      laser2.x = -100;
      boss2.setAnimation("boss2(hit)");
      setTimeout(function(){
        boss2.setAnimation("boss2");
        }, 50);
      if(cheat == true){
       boss2Hp = boss2Hp - 100;
      }
    }
    if(laser3.isTouching(boss2)){
      boss2Hp = boss2Hp - 1;
      laser3.x = -100;
      boss2.setAnimation("boss2(hit)");
      setTimeout(function(){
        boss2.setAnimation("boss2");
        }, 50);
      if(cheat == true){
       boss2Hp = boss2Hp - 100;
      }
    }
    if(laser4.isTouching(boss2)){
      boss2Hp = boss2Hp - 1;
      laser4.x = -100;
      boss2.setAnimation("boss2(hit)");
      setTimeout(function(){
        boss2.setAnimation("boss2");
        }, 50);
      if(cheat == true){
       boss2Hp = boss2Hp - 100;
      }
    }
    if(laser5.isTouching(boss2)){
      boss2Hp = boss2Hp - 1;
      laser5.x = -100;
      boss2.setAnimation("boss2(hit)");
      setTimeout(function(){
        boss2.setAnimation("boss2");
        }, 50);
      if(cheat == true){
       boss2Hp = boss2Hp - 100;
      }
    }
    if(laser6.isTouching(boss2)){
      boss2Hp = boss2Hp - 1;
      laser6.x = -100;
      boss2.setAnimation("boss2(hit)");
      setTimeout(function(){
        boss1.setAnimation("boss2");
        }, 50);
      if(cheat == true){
       boss2Hp = boss2Hp - 100;
      }
    }
    if(laser7.isTouching(boss2)){
      boss2Hp = boss2Hp - 1;
      laser7.x = -100;
      boss2.setAnimation("boss2(hit)");
      setTimeout(function(){
        boss2.setAnimation("boss2");
        }, 50);
      if(cheat == true){
       boss2Hp = boss2Hp - 100;
      }
    }
    if(laser8.isTouching(boss2)){
      boss2Hp = boss2Hp - 1;
      laser8.x = -100;
      boss2.setAnimation("boss2(hit)");
      setTimeout(function(){
        boss2.setAnimation("boss2");
        }, 50);
      if(cheat == true){
       boss2Hp = boss2Hp - 100;
      }
    }
    if(laser9.isTouching(boss2)){
      boss2Hp = boss2Hp - 1;
      laser9.x = -100;
      boss2.setAnimation("boss2(hit)");
      setTimeout(function(){
        boss2.setAnimation("boss2");
        }, 50);
      if(cheat == true){
       boss2Hp = boss2Hp - 100;
      }
    }
    if(laser10.isTouching(boss2)){
      boss2Hp = boss2Hp - 1;
      laser10.x = -100;
      boss2.setAnimation("boss2(hit)");
      setTimeout(function(){
        boss2.setAnimation("boss2");
        }, 50);
      if(cheat == true){
       boss2Hp = boss2Hp - 100;
      }
    }
  }
  function enemy3Hit(){
    if(laser1.isTouching(enemy3)){
      enemyHp3 = enemyHp3 - 1;
      enemyb3 = enemyb3 - 1;
      laser1.x = -100;
      enemy3.setAnimation("enemy3(hit)");
      setTimeout(function(){
      enemy3.setAnimation("enemy3");
      }, 50);
    if(cheat == true){
       enemyHp3 = enemyHp3 - 100;
      }
    }
    if(laser2.isTouching(enemy3)){
      enemyHp3 = enemyHp3 - 1;
      enemyb3 = enemyb3 - 1;
      laser2.x = -100;
      enemy3.setAnimation("enemy3(hit)");
      setTimeout(function(){
        enemy3.setAnimation("enemy3");
        }, 50);
      if(cheat == true){
       enemyHp3 = enemyHp3 - 100;
      }
    }
    if(laser3.isTouching(enemy3)){
      enemyHp3 = enemyHp3 - 1;
      enemyb3 = enemyb3 - 1;
      laser3.x = -100;
      enemy3.setAnimation("enemy3(hit)");
      setTimeout(function(){
        enemy3.setAnimation("enemy3");
        }, 50);
      if(cheat == true){
       enemyHp3 = enemyHp3 - 100;
      }
    }
    if(laser4.isTouching(enemy3)){
      enemyHp3 = enemyHp3 - 1;
      enemyb3 = enemyb3 - 1;
      laser4.x = -100;
      enemy3.setAnimation("enemy3(hit)");
      setTimeout(function(){
        enemy3.setAnimation("enemy3");
        }, 50);
      if(cheat == true){
       enemyHp3 = enemyHp3 - 100;
      }
    }
    if(laser5.isTouching(enemy3)){
      enemyHp3 = enemyHp3 - 1;
      enemyb3 = enemyb3 - 1;
      laser5.x = -100;
      enemy3.setAnimation("enemy3(hit)");
      setTimeout(function(){
        enemy3.setAnimation("enemy3");
        }, 50);
      if(cheat == true){
       enemyHp3 = enemyHp3 - 100;
      }
    }
    if(laser6.isTouching(enemy3)){
      enemyHp3 = enemyHp3 - 1;
      enemyb3 = enemyb3 - 1;
      laser6.x = -100;
      enemy3.setAnimation("enemy3(hit)");
      setTimeout(function(){
        enemy3.setAnimation("enemy3");
        }, 50);
      if(cheat == true){
       enemyHp3 = enemyHp3 - 100;
      }
    }
    if(laser7.isTouching(enemy3)){
      enemyHp3 = enemyHp3 - 1;
      enemyb3 = enemyb3 - 1;
      laser7.x = -100;
      enemy3.setAnimation("enemy3(hit)");
      setTimeout(function(){
        enemy3.setAnimation("enemy3");
        }, 50);
      if(cheat == true){
       enemyHp3 = enemyHp3 - 100;
      }
    }
    if(laser8.isTouching(enemy3)){
      enemyHp3 = enemyHp3 - 1;
      enemyb3 = enemyb3 - 1;
      laser8.x = -100;
      enemy3.setAnimation("enemy3(hit)");
      setTimeout(function(){
        enemy3.setAnimation("enemy3");
        }, 50);
      if(cheat == true){
       enemyHp3 = enemyHp3 - 100;
      }
    }
    if(laser9.isTouching(enemy3)){
      enemyHp3 = enemyHp3 - 1;
      enemyb3 = enemyb3 - 1;
      laser9.x = -100;
      enemy3.setAnimation("enemy3(hit)");
      setTimeout(function(){
        enemy3.setAnimation("enemy3");
        }, 50);
      if(cheat == true){
       enemyHp3 = enemyHp3 - 100;
      }
    }
    if(laser10.isTouching(enemy3)){
      enemyHp3 = enemyHp3 - 1;
      enemyb3 = enemyb3 - 1;
      laser10.x = -100;
      enemy3.setAnimation("enemy3(hit)");
      setTimeout(function(){
        enemy3.setAnimation("enemy3");
        }, 50);
      if(cheat == true){
       enemyHp3 = enemyHp3 - 100;
      }
    }
  }
  function enemy4Hit(){
        if(laser1.isTouching(enemy4)){
      enemyHp4 = enemyHp4 - 1;
      enemyb4 = enemyb4 - 1;
      laser1.x = -100;
      enemy4.setAnimation("enemy4(hit)");
      setTimeout(function(){
      enemy4.setAnimation("enemy4");
      }, 50);
      if(cheat == true){
       enemyHp4 = enemyHp4 - 100;
      }
  }
    if(laser2.isTouching(enemy4)){
      enemyHp4 = enemyHp4 - 1;
      enemyb4 = enemyb4 - 1;
      laser2.x = -100;
      enemy4.setAnimation("enemy4(hit)");
      setTimeout(function(){
        enemy4.setAnimation("enemy4");
        }, 50);
      if(cheat == true){
       enemyHp4 = enemyHp4 - 100;
      }
    }
    if(laser3.isTouching(enemy4)){
      enemyHp4 = enemyHp4 - 1;
      enemyb4 = enemyb4 - 1;
      laser3.x = -100;
      enemy4.setAnimation("enemy4(hit)");
      setTimeout(function(){
        enemy4.setAnimation("enemy4");
        }, 50);
      if(cheat == true){
       enemyHp4 = enemyHp4 - 100;
      }
    }
    if(laser4.isTouching(enemy4)){
      enemyHp4 = enemyHp4 - 1;
      enemyb4 = enemyb4 - 1;
      laser4.x = -100;
      enemy4.setAnimation("enemy4(hit)");
      setTimeout(function(){
        enemy4.setAnimation("enemy4");
        }, 50);
      if(cheat == true){
       enemyHp4 = enemyHp4 - 100;
      }
    }
    if(laser5.isTouching(enemy4)){
      enemyHp4 = enemyHp4 - 1;
      enemyb4 = enemyb4 - 1;
      laser5.x = -100;
      enemy4.setAnimation("enemy4(hit)");
      setTimeout(function(){
        enemy4.setAnimation("enemy4");
        }, 50);
      if(cheat == true){
       enemyHp4 = enemyHp4 - 100;
      }
    }
    if(laser6.isTouching(enemy4)){
      enemyHp4 = enemyHp4 - 1;
      enemyb4 = enemyb4 - 1;
      laser6.x = -100;
      enemy4.setAnimation("enemy4(hit)");
      setTimeout(function(){
        enemy4.setAnimation("enemy4");
        }, 50);
      if(cheat == true){
       enemyHp4 = enemyHp4 - 100;
      }
    }
    if(laser7.isTouching(enemy4)){
      enemyHp4 = enemyHp4 - 1;
      enemyb4 = enemyb4 - 1;
      laser7.x = -100;
      enemy4.setAnimation("enemy4(hit)");
      setTimeout(function(){
        enemy4.setAnimation("enemy4");
        }, 50);
      if(cheat == true){
       enemyHp4 = enemyHp4 - 100;
      }
    }
    if(laser8.isTouching(enemy4)){
      enemyHp4 = enemyHp4 - 1;
      enemyb4 = enemyb4 - 1;
      laser8.x = -100;
      enemy4.setAnimation("enemy4(hit)");
      setTimeout(function(){
        enemy4.setAnimation("enemy4");
        }, 50);
      if(cheat == true){
       enemyHp4 = enemyHp4 - 100;
      }
    }
    if(laser9.isTouching(enemy4)){
      enemyHp4 = enemyHp4 - 1;
      enemyb4 = enemyb4 - 1;
      laser9.x = -100;
      enemy4.setAnimation("enemy4(hit)");
      setTimeout(function(){
        enemy4.setAnimation("enemy4");
        }, 50);
      if(cheat == true){
       enemyHp4 = enemyHp4 - 100;
      }
    }
    if(laser10.isTouching(enemy4)){
      enemyHp4 = enemyHp4 - 1;
      enemyb4 = enemyb4 - 1;
      laser10.x = -100;
      enemy4.setAnimation("enemy4(hit)");
      setTimeout(function(){
        enemy4.setAnimation("enemy4");
        }, 50);
      if(cheat == true){
       enemyHp4 = enemyHp4 - 100;
      }
    }
  }
  function boss3Hit(){
    if(laser1.isTouching(boss3)){
      boss3Hp = boss3Hp - randomNumber(1,10);
      laser1.x = -100;
      boss3.setAnimation("boss3(hit)");
      setTimeout(function(){
      boss3.setAnimation("boss3");
      }, 50);
      if(cheat == true){
       boss3Hp = boss3Hp - 100;
      }
  }
    if(laser2.isTouching(boss3)){
      boss3Hp = boss3Hp - randomNumber(1,10);
      laser2.x = -100;
      boss3.setAnimation("boss3(hit)");
      setTimeout(function(){
      boss3.setAnimation("boss3");
      }, 50);
      if(cheat == true){
       boss3Hp = boss3Hp - 100;
      }
    }
    if(laser3.isTouching(boss3)){
      boss3Hp = boss3Hp - randomNumber(1,10);
      laser3.x = -100;
      boss3.setAnimation("boss3(hit)");
      setTimeout(function(){
        boss3.setAnimation("boss3");
        }, 50);
      if(cheat == true){
       boss3Hp = boss3Hp - 100;
      }
    }
    if(laser4.isTouching(boss3)){
      boss3Hp = boss3Hp - randomNumber(1,10);
      laser4.x = -100;
      boss3.setAnimation("boss3(hit)");
      setTimeout(function(){
      boss3.setAnimation("boss3");
      }, 50);
      if(cheat == true){
       boss3Hp = boss3Hp - 100;
      }
    }
    if(laser5.isTouching(boss3)){
      boss3Hp = boss3Hp - randomNumber(1,10);
      laser5.x = -100;
      boss3.setAnimation("boss3(hit)");
      setTimeout(function(){
        boss3.setAnimation("boss3");
        }, 50);
      if(cheat == true){
       boss3Hp = boss3Hp - 100;
      }
    }
    if(laser6.isTouching(boss3)){
      boss3Hp = boss3Hp - randomNumber(1,10);
      laser6.x = -100;
      boss3.setAnimation("boss3(hit)");
      setTimeout(function(){
      boss3.setAnimation("boss3");
      }, 50);
      if(cheat == true){
       boss3Hp = boss3Hp - 100;
      }
    }
    if(laser7.isTouching(boss3)){
      boss3Hp = boss3Hp - randomNumber(1,10);
      laser7.x = -100;
      boss3.setAnimation("boss3(hit)");
      setTimeout(function(){
        boss3.setAnimation("boss3");
        }, 50);
      if(cheat == true){
       boss3Hp = boss3Hp - 100;
      }
    }
    if(laser8.isTouching(boss3)){
      boss3Hp = boss3Hp - randomNumber(1,10);
      laser8.x = -100;
      boss3.setAnimation("boss3(hit)");
      setTimeout(function(){
      boss3.setAnimation("boss3");
      }, 50);
      if(cheat == true){
       boss3Hp = boss3Hp - 100;
      }
    }
    if(laser9.isTouching(boss3)){
        boss3Hp = boss3Hp - randomNumber(1,10);
        laser9.x = -100;
        boss3.setAnimation("boss3(hit)");
        setTimeout(function(){
          boss3.setAnimation("boss3");
          }, 50);
      if(cheat == true){
       boss3Hp = boss3Hp - 100;
      }
    }
    if(laser10.isTouching(boss3)){
        boss3Hp = boss3Hp - randomNumber(1,10);
        laser10.x = -100;
        boss3.setAnimation("boss3(hit)");
        setTimeout(function(){
        boss3.setAnimation("boss3");
        }, 50);
      if(cheat == true){
       boss3Hp = boss3Hp - 100;
      }
    }
  }
  function control(){
    if(keyDown("a") || keyDown("left")){
      player.x = player.x - 9;
    }
    else if(keyDown("d") || keyDown("right")){
      player.x= player.x + 9;
    }
  }
  function boss3Control(){
    if(jacked == true){
        jacked = jacked - 10;
      if(keyDown("a") || keyDown("left")){
        player.x = player.x + 9;
      }
      else if(keyDown("d") || keyDown("right")){
        player.x= player.x - 9;
      }
    }
    else{
      if(keyDown("a") || keyDown("left")){
        player.x = player.x - 9;
     }
     else if(keyDown("d") || keyDown("right")){
        player.x= player.x + 9;
      }
    }
  }
  function laserH(){
     //laser height control
  if(laser1.isTouching(topEdge)){
    laser1.x = -2000;
  }
  if(laser2.isTouching(topEdge)){
    laser2.x = -2000;
  }
  if(laser3.isTouching(topEdge)){
    laser3.x = -2000;
  }
  if(laser4.isTouching(topEdge)){
    laser4.x = -2000;
  }
  if(laser5.isTouching(topEdge)){
    laser5.x = -2000;
  }
  if(laser6.isTouching(topEdge)){
    laser6.x = -2000;
  }
  if(laser7.isTouching(topEdge)){
    laser7.x = -2000;
  }
  if(laser8.isTouching(topEdge)){
    laser8.x = -2000;
  }
  if(laser9.isTouching(topEdge)){
    laser9.x = -2000;
  }
  if(laser10.isTouching(topEdge)){
    laser10.x = -2000;
  }
  }
  function shootLaser(){
    if (keyWentDown("space")){
      laserCount = laserCount + 1;
      if (laserCount === 1) {
        setTimeout(function(){
          laser1.y = player.y;
          laser1.x = player.x;
        }, 50); 
        if(chance == 1){
          playSound("rick_astley_says_goodbye_(getmp3.pro).mp3");
        }
        else if(chance == 64){
          playSound("Matt_From_Wii_Sports_All_Sound_Eff_(getmp3.pro).mp3");
        }
        else{
          playSound("assets/category_projectile/retro_game_weapon_-laser_shot_single.mp3");
        }
      }
      if (laserCount == 2) {
        setTimeout(function(){
          laser2.y = player.y;
          laser2.x = player.x;
        }, 50);
        if(chance == 1){
          playSound("rick_astley_says_goodbye_(getmp3.pro).mp3");
        }
        else if(chance == 64){
          playSound("Matt_From_Wii_Sports_All_Sound_Eff_(getmp3.pro).mp3");
        }
        else{
          playSound("assets/category_projectile/retro_game_weapon_-laser_shot_single.mp3");
        }
      }
      if (laserCount == 3) {
        setTimeout(function(){
          laser3.y = player.y;
          laser3.x = player.x;
        }, 50);
        if(chance == 1){
          playSound("rick_astley_says_goodbye_(getmp3.pro).mp3");
        }
        else if(chance == 64){
          playSound("Matt_From_Wii_Sports_All_Sound_Eff_(getmp3.pro).mp3");
        }
        else{
          playSound("assets/category_projectile/retro_game_weapon_-laser_shot_single.mp3");
        }
      }
      if (laserCount == 4) {
        setTimeout(function(){
          laser4.y = player.y;
          laser4.x = player.x;
        }, 50);
        if(chance == 1){
          playSound("rick_astley_says_goodbye_(getmp3.pro).mp3");
        }
        else if(chance == 64){
          playSound("Matt_From_Wii_Sports_All_Sound_Eff_(getmp3.pro).mp3");
        }
        else{
          playSound("assets/category_projectile/retro_game_weapon_-laser_shot_single.mp3");
        }
      }
      if (laserCount === 5) {
        setTimeout(function(){
          laser5.y = player.y;
          laser5.x = player.x;
        }, 50);
        if(chance == 1){
          playSound("rick_astley_says_goodbye_(getmp3.pro).mp3");
        }
        else if(chance == 64){
          playSound("Matt_From_Wii_Sports_All_Sound_Eff_(getmp3.pro).mp3");
        }
        else{
          playSound("assets/category_projectile/retro_game_weapon_-laser_shot_single.mp3");
        }
      }
      if (laserCount === 6) {
        setTimeout(function(){
          laser6.y = player.y;
          laser6.x = player.x;
        }, 50);
        if(chance == 1){
          playSound("rick_astley_says_goodbye_(getmp3.pro).mp3");
        }
        else if(chance == 64){
          playSound("Matt_From_Wii_Sports_All_Sound_Eff_(getmp3.pro).mp3");
        }
        else{
          playSound("assets/category_projectile/retro_game_weapon_-laser_shot_single.mp3");
        }
      }
      if (laserCount === 7) {
        setTimeout(function(){
          laser7.y = player.y;
          laser7.x = player.x;
        }, 50);
        if(chance == 1){
          playSound("rick_astley_says_goodbye_(getmp3.pro).mp3");
        }
        else if(chance == 64){
          playSound("Matt_From_Wii_Sports_All_Sound_Eff_(getmp3.pro).mp3");
        }
        else{
          playSound("assets/category_projectile/retro_game_weapon_-laser_shot_single.mp3");
        }
      }
      if (laserCount === 8) {
        setTimeout(function(){
          laser8.y = player.y;
          laser8.x = player.x;
        }, 50);
        if(chance == 1){
          playSound("rick_astley_says_goodbye_(getmp3.pro).mp3");
        }
        else if(chance == 64){
          playSound("Matt_From_Wii_Sports_All_Sound_Eff_(getmp3.pro).mp3");
        }
        else{
          playSound("assets/category_projectile/retro_game_weapon_-laser_shot_single.mp3");
        }
      }
      if (laserCount === 9) {
        setTimeout(function(){
          laser9.y = player.y;
          laser9.x = player.x;
        }, 50);
        if(chance == 1){
          playSound("rick_astley_says_goodbye_(getmp3.pro).mp3");
        }
        else if(chance == 64){
          playSound("Matt_From_Wii_Sports_All_Sound_Eff_(getmp3.pro).mp3");
        }
        else{
          playSound("assets/category_projectile/retro_game_weapon_-laser_shot_single.mp3");
        }
      }
      if (laserCount === 10) {
        setTimeout(function(){
          laser10.y = player.y;
          laser10.x = player.x;
        }, 50);
        laserCount = 0;
        if(chance == 1){
          playSound("rick_astley_says_goodbye_(getmp3.pro).mp3");
        }
        else if(chance == 64){
          playSound("Matt_From_Wii_Sports_All_Sound_Eff_(getmp3.pro).mp3");
        }
        else{
          playSound("assets/category_projectile/retro_game_weapon_-laser_shot_single.mp3");
        }
      }
      if(keyWentUp("space")){
        stopSound("assets/category_projectile/retro_game_weapon_-laser_shot_single.mp3");
        stopSound("Matt_From_Wii_Sports_All_Sound_Eff_(getmp3.pro).mp3");
        stopSound("rick_astley_says_goodbye_(getmp3.pro).mp3");
      }
    }
  }
  function matt(){
    if(chance == 64){
      player.setAnimation("matt(p1)");
      //scale
      laser1.scale = 0.2;
      laser2.scale = 0.2;
      laser3.scale = 0.2;
      laser4.scale = 0.2;
      laser5.scale = 0.2;
      laser6.scale = 0.2;
      laser7.scale = 0.2;
      laser8.scale = 0.2;
      laser9.scale = 0.2;
      laser10.scale = 0.2;
      //rotate
      laser1.rotation = 0;
      laser2.rotation = 0;
      laser3.rotation = 0;
      laser4.rotation = 0;
      laser5.rotation = 0;
      laser6.rotation = 0;
      laser7.rotation = 0;
      laser8.rotation = 0;
      laser9.rotation = 0;
      laser10.rotation = 0;
      //animation
      laser1.setAnimation("matt");
      laser2.setAnimation("matt");
      laser3.setAnimation("matt");
      laser4.setAnimation("matt");
      laser5.setAnimation("matt");
      laser6.setAnimation("matt");
      laser7.setAnimation("matt");
      laser8.setAnimation("matt");
      laser9.setAnimation("matt");
      laser10.setAnimation("matt");
    }
  }
  function rick(){
    if(chance == 9 || chance == 1 || chance == 66){
      chance = 1;
      player.setAnimation("mic");
      //scale
      laser1.scale = 0.4;
      laser2.scale = 0.4;
      laser3.scale = 0.4;
      laser4.scale = 0.4;
      laser5.scale = 0.4;
      laser6.scale = 0.4;
      laser7.scale = 0.4;
      laser8.scale = 0.4;
      laser9.scale = 0.4;
      laser10.scale = 0.4;
      //rotate
      laser1.rotation = 0;
      laser2.rotation = 0;
      laser3.rotation = 0;
      laser4.rotation = 0;
      laser5.rotation = 0;
      laser6.rotation = 0;
      laser7.rotation = 0;
      laser8.rotation = 0;
      laser9.rotation = 0;
      laser10.rotation = 0;
      //animation
      laser1.setAnimation("rick");
      laser2.setAnimation("rick");
      laser3.setAnimation("rick");
      laser4.setAnimation("rick");
      laser5.setAnimation("rick");
      laser6.setAnimation("rick");
      laser7.setAnimation("rick");
      laser8.setAnimation("rick");
      laser9.setAnimation("rick");
      laser10.setAnimation("rick");
    }
  }

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
