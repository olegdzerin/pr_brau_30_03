var fortunes = ["Переможи",
    "Небійся",
    "Сюрпризи",
    "Будь простіше"
];
 exports.getFortune = function() { 
  return  fortunes[
        Math.floor(Math.random() * (fortunes.length))];
  
}