/*
                                                    *4**. Написать функцию, которая проверяет, является ли слово палиндромом
                                                    e.g. function isPalindrom(word)

                                                    Проверки: 'abba', 'Abba'
*/
document.querySelector(".getText").onclick = myClick;
function myClick(string) {
  string = document.querySelector(".palindrom").value;
  // в переменную присваиваем часто используемый метод - убираем отступы и приобразуем в lowercase
  let str = string.replace(/[* ]/gi, "").toLocaleLowerCase();
  //разбиваем строку на массив, отражаем, соединяем обратно.
  palindrom = str.split("").reverse().join("");

  if (str.length == 0) {
    document.querySelector(".result").innerHTML =
      "Неплохо было бы ввести слово";
  } else if (str.length <= 3) {
    document.querySelector(".result").innerHTML =
      "Слишком легко, попробуйте ввести слово длинее чем 3 символа";
  } else if (palindrom == str) {
    document.querySelector(".result").innerHTML =
      "Это слово или набор слов - палиндром - " + string;
    console.log(typeof palindrom.length);
  } else {
    document.querySelector(".result").innerHTML =
      "Это слово или набор слов не палиндром - " +
      str +
      ", обратная сторона его : " +
      palindrom +
      "";
  }
  // document.querySelector(".result").innerHTML =
  //   "Вы ввели: '" + string + "' обратная сторона -> '" + palindrom + "'";
}
// let resCheck = String(
//   isPalindrom((document.getElementById("result").innerHTML = resCheck))
// );

// isPalindrom("Сел в озере березов лес");
// isPalindrom("abba");
// isPalindrom("Abba");
// isPalindrom("выЫа");
/*-------------------------------------------
 * Более короткий вариант
 */

// function isPal(string) {
//   str = string.toLocaleLowerCase().replace(/[* ]/gi, "");
//   return str.split("").reverse().join("") == str;
// }
// console.log(isPal("abba"));
// console.log(isPal("Abba"));
// console.log(isPal("Сел в озере березов лес"));
// console.log(isPal("dasd1"));
