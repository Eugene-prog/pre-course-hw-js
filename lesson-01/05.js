let rule = "Еще не родился тот человек, который поставил бы цель и не смог бы стать программистом";
const lessThan25Answer = "Все таки нет правил без исключения";
const moreThan25Answer = "У меня 100 пудов все получится";
const equal25Answer = "50 на 50";

switch (true) {
  case (rule.length === 25):
     console.log(equal25Answer);
    break;
  case (rule.length < 25):
    console.log(lessThan25Answer);
    break;
  case (rule.length > 25):  
    console.log(moreThan25Answer);
    break;
}
