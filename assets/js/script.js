$('document').ready(function(){
     var currentHero;
     var currentVillan;
     var currentHeroHealth;
     var currentVillanHealth;
     var currentHeroHealthBar;
     var currentVillanHealthBar;
     var totalDeaths = 0;
     var villansKilled = 0;
     var currentHeroAttackPower;
     var availableAttackers = 0;
     var gameSetup = {
          possibleAttackers: [
               {
                    name: "Iron Man",
                    img: "./assets/images/ironman.png",
                    attackImg: "./assets/images/ironmanAttack.png",
                    defendImg: "./assets/images/ironmanDefend.png",
                    id: 'hero001',
                    healthPoints: 150,
                    attackPower: 7,
                    counterAttackPower: 10,
                    description:  `Iron Man wears a sophisticated suit a body armor containing various offensive weaponry.`
               },
                    {
                    name: "Hulk",
                    img: "./assets/images/hulk.png",
                    attackImg: "./assets/images/hulkAttack.png",
                    defendImg: "./assets/images/hulkDefend.png",
                    healthPoints: 156,
                    id: 'hero002',
                    attackPower: 9,
                    counterAttackPower: 9,
                    description: `The Hulk possesses the capacity for nearly limitless physical strength.`
               },
               {
                    name: "Loki",
                    img: "./assets/images/loki.png",
                    attackImg: "./assets/images/lokiAttack.png",
                    defendImg: "./assets/images/lokiDefend.png",
                    healthPoints: 159,
                    id: 'villan001',
                    attackPower: 8,
                    counterAttackPower: 12,
                    description: `Loki is superhumanly strong, immune to all diseases, and resistant to conventional injury.`
               },
               {
                    name: "Thanos",
                    img: "./assets/images/thanos.png",
                    attackImg: "./assets/images/thanosAttack.png",
                    defendImg: "./assets/images/thanosDefend.png",
                    healthPoints: 190,
                    id: 'villan002',
                    attackPower: 3,
                    counterAttackPower: 16,
                    description: `Thanos is a mutant whose massive, heavy-bided body was born with the capacity to synthesize cosmic energy.  `
               }
          ],
          goodGuy: function(heroId){
               var heroInfo = $('<div>');

               for(var i=0; i<gameSetup.possibleAttackers.length; i++){
                    if(gameSetup.possibleAttackers[i].id === heroId){
                         currentHero = gameSetup.possibleAttackers[i];
                         currentHeroHealth = gameSetup.possibleAttackers[i].healthPoints;
                         currentHeroHealthBar = (gameSetup.possibleAttackers[i].healthPoints/gameSetup.possibleAttackers[i].healthPoints) * 100;
                         currentHeroAttackPower = gameSetup.possibleAttackers[i].attackPower;
                         $('#goodGuy').html(`<img class="img-responsive img-rounded center-block" src="${gameSetup.possibleAttackers[i].attackImg}" alt="${gameSetup.possibleAttackers[i].name}">`);
                         heroInfo.html(`
                              <h4>Hero description</h4>
                              <ul class"list-group">
                                   <li class="list-group-item d-flex justify-content-between align-items-center">
                                        Name: ${gameSetup.possibleAttackers[i].name}
                                   </li>
                                   <li class="list-group-item d-flex justify-content-between align-items-center" id="heroHealth">
                                        Health: ${gameSetup.possibleAttackers[i].healthPoints}
                                   </li>
                                   <li class="list-group-item d-flex justify-content-between align-items-center" id="attackPower">
                                        Attack Power: ${gameSetup.possibleAttackers[i].attackPower}
                                   </li>
                              </ul>
                              <div class="progress" id="heroHealthBar">
                                   <div class="progress-bar" role="progressbar" style="width: ${currentHeroHealthBar}%" aria-valuenow="${currentHeroHealthBar}" aria-valuemin="0" aria-valuemax="100"></div>
                              </div>
                         `);
                    }    
               }
               $('.availableAttacker').html('Select Villan');
               $('#goodGuy').append(heroInfo);
          },
          badGuy: function(villanId){
               var villanInfo = $('<div>');
               // var opponentImg;
               console.log(villanId);
               for(var i=0; i<gameSetup.possibleAttackers.length; i++){
                    if(gameSetup.possibleAttackers[i].id === villanId){
                         currentVillan = gameSetup.possibleAttackers[i];
                         currentVillanHealth = gameSetup.possibleAttackers[i].healthPoints;
                         currentVillanHealthBar = (gameSetup.possibleAttackers[i].healthPoints/gameSetup.possibleAttackers[i].healthPoints) * 100;
                         $('#badGuy').html(`<img class="img-responsive img-rounded center-block" src="${gameSetup.possibleAttackers[i].defendImg}" alt="${gameSetup.possibleAttackers[i].name}">`);
                         villanInfo.html(`
                              <h4>Villan description</h4>
                              <ul class"list-group">
                                   <li class="list-group-item d-flex justify-content-between align-items-center">
                                        Name: ${gameSetup.possibleAttackers[i].name}
                                   </li>
                                   <li class="list-group-item d-flex justify-content-between align-items-center" id="villanHealth">
                                        Health: ${gameSetup.possibleAttackers[i].healthPoints}
                                   </li>
                                   <li class="list-group-item d-flex justify-content-between align-items-center">
                                        Counter Attack Power: ${gameSetup.possibleAttackers[i].counterAttackPower}
                                   </li>
                              </ul>
                              <div class="progress" id="villanHealthBar">
                                   <div class="progress-bar" role="progressbar" style="width: ${currentVillanHealthBar}%" aria-valuenow="${currentVillanHealthBar}" aria-valuemin="0" aria-valuemax="100"></div>
                              </div>
                         `);
                         $('#badGuy').append(villanInfo);
                    }
               }
               $('#attack').prop('disabled',false);
               $('#attack').removeClass('disabled');
;               console.log(currentVillan);
          },
          launchAttack: function(){
               currentVillanHealth -= currentHeroAttackPower;
               currentHeroHealth -= currentVillan.counterAttackPower;
               currentVillanHealthBar = (currentVillanHealth/currentVillan.healthPoints)*100;
               currentHeroHealthBar = (currentHeroHealth/currentHero.healthPoints)*100
               
               $('#villanHealthBar').html(`
                    <div class="progress id="villanHealth">
                         <div class="progress-bar" role="progressbar" style="width: ${currentVillanHealthBar}%" aria-valuenow="${currentVillanHealthBar}" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
               `);
               $('#heroHealthBar').html(`
                    <div class="progress" id="heroHealth">
                         <div class="progress-bar" role="progressbar" style="width: ${currentHeroHealthBar}%" aria-valuenow="${currentHeroHealthBar}" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
               `);
               $('#heroHealth').html(`
                    Health: ${currentHeroHealth}
               `);
               $('#villanHealth').html(`
                    Health: ${currentVillanHealth}
               `);
               currentHeroAttackPower += currentHero.attackPower;
               $('#attackPower').html(`
                    Attack Power: ${currentHeroAttackPower}
               `);
               if(currentVillanHealth <= 0 && currentHeroHealth <= 0){
                    $('#attack').prop('disabled',true);
                    $('#attack').addClass('disabled');
                    $('#badGuy').html(`
                         <h3 class="text-center">It's a tie... You have defeated ${currentVillan.name}. Better luck next time!</h3>
                    `);
                    $('#goodGuy').html(`
                         <h3 class="text-center">It's a tie... You have been  killed by ${currentVillan.name}. Better luck next time!</h3>
                    `);
               }
               else if(currentVillanHealth <= 0){
                    $('#attack').prop('disabled',true);
                    $('#attack').addClass('disabled');
                    $('#badGuy').html(`
                         <h3 class="text-center">You have defeated ${currentVillan.name}. Take down another bad guy!</h3>
                    `);
                    villansKilled++;
                    $('#villansKilled').html(villansKilled);
               }
               else if(currentHeroHealth <= 0){
                    $('#attack').prop('disabled',true);
                    $('#attack').addClass('disabled');
                    $('#goodGuy').html(`
                         <h3 class="text-center">You have been killed by ${currentVillan.name}. Better luck next time!</h3>
                    `);
                    totalDeaths++;
                    $('#totalDeaths').html(totalDeaths);
               }
          },
          startGame: function(){
               availableAttackers = gameSetup.possibleAttackers.length;
               for(var i=0; i<gameSetup.possibleAttackers.length; i++){
                    console.log(gameSetup.possibleAttackers[i]);
                    var possibleAttacker = $('<div>');
                    possibleAttacker.addClass('col-xs-12 col-sm-6 col-md-3 col-lg-3');
                    possibleAttacker.append(`
                         <div class="hovereffect" id="${gameSetup.possibleAttackers[i].id}">
                              <img class="img-responsive img-rounded center-block" src="${gameSetup.possibleAttackers[i].img}" alt="${gameSetup.possibleAttackers[i].name}">
                              <div class="overlay">
                                   <h2>${gameSetup.possibleAttackers[i].name}</h2>
                                   <p>${gameSetup.possibleAttackers[i].description}</p>
                                   <input type="hidden" id="attackerInfo" value="${gameSetup.possibleAttackers[i].id}">
                                   <button class="btn btn-primary availableAttacker">Select Attacker</button>
                              </div>
                         </div>   
                    `);
                    $('div#availableAttackers').append(possibleAttacker);
                    $(`div#${gameSetup.possibleAttackers[i].id}`).append(`
                         <ul class"list-group">
                              <li class="list-group-item d-flex justify-content-between align-items-center">
                                   Name: ${gameSetup.possibleAttackers[i].name}
                              </li>
                              <li class="list-group-item d-flex justify-content-between align-items-center" id="potentialVillanHealth">
                                   Health: ${gameSetup.possibleAttackers[i].healthPoints}
                              </li>
                              <li class="list-group-item d-flex justify-content-between align-items-center">
                                   Attack Power: ${gameSetup.possibleAttackers[i].attackPower}
                              </li>
                         </ul>
                    `);
               }
               $('.availableAttacker').click(function(){
                    if(availableAttackers === gameSetup.possibleAttackers.length){
                         gameSetup.goodGuy($(this).siblings()[2].value);
                    }
                    else{
                         gameSetup.badGuy($(this).siblings()[2].value);
                    }
                    $(this).parents('div.hovereffect').empty();
                    $('#selectionTitle').html('Select Your Bad Guy!');
                    availableAttackers--;
               });
               $('#attack').unbind('click').bind('click', function (e) {
                    gameSetup.launchAttack();
               });
          } 
     }
     
     gameSetup.startGame();

     $('#restartGame').click(function(){
          $('div#availableAttackers').empty();
          $('div#goodGuy').empty();
          $('div#badGuy').empty();
          $('#attack').prop('disabled',true);
          $('#attack').addClass('disabled');
          $('#selectionTitle').html('Select Your Good Guy!');
          currentVillanHealth = 0;
          currentHeroHealth = 0;
          currentVillanHealthBar = 0;
          currentHeroHealthBar = 0;
          gameSetup.startGame()
     });
})