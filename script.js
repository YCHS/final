$('.button1').click(function(){
 var objects = ['https://cdn.glitch.com/a07583f6-afd6-40eb-b579-471c5a6b8d98%2Fusa.png?1524615628655',
                'https://cdn.glitch.com/a07583f6-afd6-40eb-b579-471c5a6b8d98%2Frussia.png?1524492745137',
                'https://cdn.glitch.com/a07583f6-afd6-40eb-b579-471c5a6b8d98%2FCHINA.png?1524183804921',
                'https://cdn.glitch.com/a07583f6-afd6-40eb-b579-471c5a6b8d98%2FnorthK.png?1524183805073'             
       ];

 var random_object_number = Math.floor(Math.random() * objects.length);
 var object_to_use = objects[random_object_number];
 var result = '<div class="object"><img class="head" src="' + object_to_use + '"/></div>';
 $('.content1').prepend(result);
});









$('.button2').click(function(){
 var objects = ['https://cdn.glitch.com/a07583f6-afd6-40eb-b579-471c5a6b8d98%2Fysljacket1.png?1524496489793',
                'https://cdn.glitch.com/a07583f6-afd6-40eb-b579-471c5a6b8d98%2Fbalen.png?1524613919384',
                'https://cdn.glitch.com/a07583f6-afd6-40eb-b579-471c5a6b8d98%2Fkingsmancoat3.png?1524666585679',
                'https://cdn.glitch.com/a07583f6-afd6-40eb-b579-471c5a6b8d98%2Fprada.png?1524616437766',
                'https://cdn.glitch.com/a07583f6-afd6-40eb-b579-471c5a6b8d98%2Fkingsmansuit.png?1524618886915',
                'https://cdn.glitch.com/a07583f6-afd6-40eb-b579-471c5a6b8d98%2Fkingsmancoat.png?1524619483225',
                'https://cdn.glitch.com/a07583f6-afd6-40eb-b579-471c5a6b8d98%2Fkingsmancoat.png?1524666266274',
                'https://cdn.glitch.com/a07583f6-afd6-40eb-b579-471c5a6b8d98%2Famirijeanjacket.png?1524663736373',
                'https://cdn.glitch.com/a07583f6-afd6-40eb-b579-471c5a6b8d98%2Fkingsnman%20greensuit.png?1524665552141',
                
                
       ];
 var random_object_number = Math.floor(Math.random() * objects.length);
 var object_to_use = objects[random_object_number];
 var result = '<div class="object"><img class="jacket" src="' + object_to_use + '"/></div>';
 $('.content2').prepend(result);
});










$('.button3').click(function(){
 var objects = ['https://cdn.glitch.com/a07583f6-afd6-40eb-b579-471c5a6b8d98%2Fyslpants1.png?1524496488147',
                'https://cdn.glitch.com/a07583f6-afd6-40eb-b579-471c5a6b8d98%2Fthom.png?1524614355903',
                'https://cdn.glitch.com/a07583f6-afd6-40eb-b579-471c5a6b8d98%2Ffearofgod.png?1524617056627',
                'https://cdn.glitch.com/a07583f6-afd6-40eb-b579-471c5a6b8d98%2Ffearofgodgreen.png?1524619209042',
                'https://cdn.glitch.com/a07583f6-afd6-40eb-b579-471c5a6b8d98%2Famiripants.png?1524620276679',
                
                
       ];
 var random_object_number = Math.floor(Math.random() * objects.length);
 var object_to_use = objects[random_object_number];
 var result = '<div class="object"><img class="pants" src="' + object_to_use + '"/></div>';
 $('.content3').prepend(result);
});