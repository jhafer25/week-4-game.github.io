$('document').ready(function(){
     var isHero = false;
     var currentHealth;
     var gameSetup = {
          possibleAttackers: [
               {
                    name: "Iron Man",
                    img: "./assets/images/ironman.png",
                    id: 'hero001',
                    currentAttacker: false,
                    currentVillan: false,
                    healthPoints: 150,
                    attackPower: 10,
                    attackPowerInc: Math.floor(Math.random()*100),
                    counterAttackPower: 12,
                    description:  `Iron Man wears a sophisticated suit a body armor containing various offensive weaponry.`
               },
                    {
                    name: "Hulk",
                    img: "./assets/images/hulk.png",
                    healthPoints: 156,
                    id: 'hero002',
                    currentAttacker: false,
                    currentVillan: false,
                    attackPower: 9,
                    attackPowerInc: Math.floor(Math.random()*100),
                    counterAttackPower: 9,
                    description: `The Hulk possesses the capacity for nearly limitless physical strength.`
               },
               {
                    name: "Loki",
                    img: "./assets/images/loki.png",
                    healthPoints: 159,
                    id: 'villan001',
                    currentAttacker: false,
                    currentVillan: false,
                    attackPower: 8,
                    attackPowerInc: Math.floor(Math.random()*100),
                    counterAttackPower: 12,
                    description: `Loki is superhumanly strong, immune to all diseases, and resistant to conventional injury.`
               },
               {
                    name: "Thanos",
                    img: "./assets/images/thanos.png",
                    healthPoints: 1904,
                    id: 'villan002',
                    currentAttacker: false,
                    currentVillan: false,
                    attackPower: 3,
                    attackPowerInc: Math.floor(Math.random()*100),
                    counterAttackPower: 16,
                    description: `Thanos is a mutant whose massive, heavy-bided body was born with the capacity to synthesize cosmic energy.  `
               }
          ],
          goodGuy: function(hero, heroId){
               var heroInfo = $('<div>')

               for(var i=0; i<gameSetup.possibleAttackers.length; i++){
                    if(gameSetup.possibleAttackers[i].id === heroId){
                         gameSetup.possibleAttackers[i].currentAttacker = true;
                         currentHealth = (gameSetup.possibleAttackers[i].healthPoints/gameSetup.possibleAttackers[i].healthPoints) * 100;
                         console.log(currentHealth);
                         heroInfo.html(`
                              <h4>Hero description</h4>
                              <ul class"list-group">
                                   <li class="list-group-item d-flex justify-content-between align-items-center">
                                        Name: ${gameSetup.possibleAttackers[i].name}
                                   </li>
                                   <li class="list-group-item d-flex justify-content-between align-items-center">
                                        Health Points: ${gameSetup.possibleAttackers[i].healthPoints}
                                   </li>
                                   <li class="list-group-item d-flex justify-content-between align-items-center">
                                        Attack Power: ${gameSetup.possibleAttackers[i].attackPower}
                                   </li>
                                   <li class="list-group-item d-flex justify-content-between align-items-center">
                                        Counter Attack Power: ${gameSetup.possibleAttackers[i].counterAttackPower}
                                   </li>
                              </ul>
                              <div class="progress">
                                   <div class="progress-bar" role="progressbar" style="width: ${currentHealth}%" aria-valuenow="${currentHealth}" aria-valuemin="0" aria-valuemax="100"></div>
                              </div>
                         `);
                    }    
               }
               $('.availableAttacker').html('Select Villan');
               $('.availableAttacker').addClass('availableVillan');
               $('.availableVillan').removeClass('availableAttacker');
               $('.availableVillan').unbind('availableAttacker');
               var attacker = $('<div>');
               attacker.append(hero);
               $('#goodGuy').html(attacker);
               $('#goodGuy').append(heroInfo);
          },
          badGuy: function(villan, villanId){
               var villanInfo = $('<div>');
               var opponentImg = $('<div>');
               console.log(villanId);
               for(var i=0; i<gameSetup.possibleAttackers.length; i++){
                    if(gameSetup.possibleAttackers[i].id === villanId){
                         gameSetup.possibleAttackers[i].currentVillan = true;
                         opponentImg.append(`<img src="${gameSetup.possibleAttackers[i].img}"`);
                         villanInfo.html(`
                              <h4>Hero description</h4>
                              <ul class"list-group">
                                   <li class="list-group-item d-flex justify-content-between align-items-center">
                                        Name: ${gameSetup.possibleAttackers[i].name}
                                   </li>
                                   <li class="list-group-item d-flex justify-content-between align-items-center">
                                        Health Points: ${gameSetup.possibleAttackers[i].healthPoints}
                                   </li>
                                   <li class="list-group-item d-flex justify-content-between align-items-center">
                                        Attack Power: ${gameSetup.possibleAttackers[i].attackPower}
                                   </li>
                                   <li class="list-group-item d-flex justify-content-between align-items-center">
                                        Counter Attack Power: ${gameSetup.possibleAttackers[i].counterAttackPower}
                                   </li>
                              </ul>
                              <div class="progress">
                                   <div class="progress-bar" role="progressbar" style="width: ${currentHealth}%" aria-valuenow="${currentHealth}" aria-valuemin="0" aria-valuemax="100"></div>
                              </div>
                         `);

                    }
               }
               $('#badGuy').html(opponentImg);
               $('#badGuy').html(villanInfo);
          },
          startGame: function(){
               for(var i=0; i<gameSetup.possibleAttackers.length; i++){
                    console.log(gameSetup.possibleAttackers[i]);
                    var possibleAttacker = $('<div>');
                    possibleAttacker.addClass('col-xs-12 col-sm-3 col-md-3 col-lg-3');
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
               }
               
          }  
          // attackVillan: function{
          //      attackPower += attackPowerInc;
          //      villanDamage += attackPower;
          //      healthPoints -= 
          // }
     }
     
     gameSetup.startGame();

     $('.availableAttacker').click(function(){
          gameSetup.goodGuy($(this).parents('div.hovereffect')[0].firstElementChild, $('input#attackerInfo').val(), this);

          $(this).parents('div.hovereffect').empty();
          $('.selectionTitle').empty();
          $('#selectionTitle').html('Select Your Bad Guy!');
     });
     $('.availableVillan').click(function(){
          gameSetup.badGuy($(this).parents('div.hovereffect')[0].firstElementChild, $('input#attackerInfo').val());
          $(this).parents('div.hovereffect').empty();
     });

     
     $('#restartGame').click(function(){
          $('div#availableAttackers').empty();
          $('div#goodGuy').empty();
          $('div#badGuys').empty();
          gameSetup.startGame()
     });


})