$('document').ready(function(){
     var gameSetup = {
          possibleAttackers: [
               {
                    name: "Iron Man",
                    img: "./assets/images/ironman.png",
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
                    attackPower: 9,
                    attackPowerInc: Math.floor(Math.random()*100),
                    counterAttackPower: 9,
                    description: `The Hulk possesses the capacity for nearly limitless physical strength.`
               },
               {
                    name: "Loki",
                    img: "./assets/images/loki.png",
                    healthPoints: 159,
                    attackPower: 8,
                    attackPowerInc: Math.floor(Math.random()*100),
                    counterAttackPower: 12,
                    description: `Loki is superhumanly strong, immune to all diseases, and resistant to conventional injury.`
               },
               {
                    name: "Thanos",
                    img: "./assets/images/thanos.png",
                    healthPoints: 190,
                    attackPower: 3,
                    attackPowerInc: Math.floor(Math.random()*100),
                    counterAttackPower: 16,
                    description: `Thanos is a mutant whose massive, heavy-bided body was born with the capacity to synthesize cosmic energy.  `
               }
          ],
          goodGuy: function(hero){
               var attacker = $('<div>');
               attacker.append(hero);
               $('#goodGuy').html(attacker);
          },
          startGame: function(){
              
               for(var i=0; i<gameSetup.possibleAttackers.length; i++){
                    var heroImg = $('<div>');
                    heroImg.addClass('col-xs-12 col-sm-3 col-md-3 col-lg-3');
                    heroImg.append(`
                         <div class="hovereffect">
                              <img class="img-responsive img-rounded center-block" src="${gameSetup.possibleAttackers[i].img}" alt="${gameSetup.possibleAttackers[i].name}">
                              <div class="overlay">
                                   <h2>${gameSetup.possibleAttackers[i].name}</h2>
                                   <p>${gameSetup.possibleAttackers[i].description}</p>
                                   <button class="btn btn-primary selectAttacker">Select Attacker</button>
                              </div>
                         </div>
                                   
                    `);
                     $('div#availableAttackers').append(heroImg);
               }
               $('.selectAttacker').click(function(){
                    gameSetup.goodGuy($(this).parents('div.hovereffect')[0].firstElementChild);
                    $(this).parents('div.hovereffect').empty();
                    $('.selectAttacker').html('Select Villan');
               });
          }  
          // attackVillan: function{
          //      attackPower += attackPowerInc;
          //      villanDamage += attackPower;
          //      healthPoints -= 
          // }
     }
     
     gameSetup.startGame()

     
     $('#restartGame').click(function(){
          $('div#availableAttackers').empty();
          $('div#goodGuy').empty();
          $('div#badGuys').empty();
          gameSetup.startGame()
     });


})