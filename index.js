//
//
// for (let option of tree.querySelectorAll('option')) {
//     let optgroup = document.createElement('optgroup');
//     optgroup.classList.add('show');
//     document.optgroup.before(optgroup)
//    document.option.after(optgroup.nextSibling)
// }
// tree.onclick = function (event){
//     if(event.target.tagName != span){
//
//     }
// }

// Создаём новый элемент div
// и добавляем в него немного контента


let data = {
    "id": "tree",
    "text": "input request",
    "children": [
        {
            "id": 10,
            "text": "- Продукция сельского хозяйства, лесного хозяйства, рыбоводства и рыболовства",
            "value": 10
        },
        {
            "id": 11,
            "value": 11,
            "text": "- Услуги в области государственного управления и обороны, предостваляемые обществу в целом; услуги по\n        обязательному социальному страхованию"
        },
        {
            "id": 12,
            "value": 12,
            "text": "- Услуги в области государственного управления и обороны, предоставляемые обществу в целом; услуги по\n        обязательному социальному страхованию"
        },
        {
            "id": 13,
            "value": 13,
            "text": "- Услуги в области государственного управления общего характера и социально-экономической сфере\n"
        },
        {
            "id": 14,
            "value": 14,
            "text": "- Услуги в области государсвенного управления общего характера"
        },
        {
            "id": 15,
            "value": 15,
            "text": "- Услуги в области исполнительной и законодательной деятельности",
            "children": [
                {
                    "id": 16,
                    "value": 16,
                    "text": "- Услуги центральных органов исполнительной и законодательной власти"
                },
                {
                    "id": 17,
                    "value": 17,
                    "text": "- Услуги органов управления и самоуправления областного территориального уровня"
                },
                {
                    "id": 18,
                    "value": 18,
                    "text": "- Услуги органов управления и самоуправления базового территориального уровня"
                }
            ]
        }
    ]
}
let openData = JSON.stringify(data)


function foo() {
       let input = document.createElement("input");
       input.className = "newInput";
       input.innerHTML = "information";
       document.body.append(input);
input.oninput = function (){
    let val = this.value;
    let elasticItems = document.querySelectorAll('option');
    if(val !== '') {
        elasticItems.forEach(function (elem) {
            if (elem.innerText.search(val) === -1) {
                elem.classList.add('hide');
                elem.innerHTML = elem.innerText;
            } else {
                elem.classList.remove('hide');
                let str = elem.innerText;
                elem.innerHTML = insertMark(str, elem.innerText.search(val), val.length);
            }
        });
    }
        else{
            elasticItems.forEach(function (elem){
                elem.classList.remove('hide');
                elem.innerHTML = elem.innerText;
            });
        }
}
function  insertMark(string, pos, len){
    return string.slice(0, pos) + '<mark>' + string.slice(pos, pos + len) + '</mark>' + string.slice(pos + len );
}



    //****************************//////////////
    document.querySelector('option')

    let toggler = document.getElementsByClassName("box");
    let i;

    for (i = 0; i < toggler.length; i++) {
        toggler[i].addEventListener("click", function() {
            this.parentElement.querySelector(".nested").classList.toggle("active");
            this.classList.toggle("check-box");
        });
    }


//****************************//

    // <ul id="myUL">
    //     <li><span className="box">Напитки</span>
    //         <ul className="nested">
    //             <li>Вода</li>
    //             <li>Кофе</li>
    //             <li><span className="box">Чай</span>
    //                 <ul className="nested">
    //                     <li>Черный чай</li>
    //                     <li>Белый чай</li>
    //                     <li><span className="box">Зеленый чай</span>
    //                         <ul className="nested">
    //                             <li>Сенча</li>
    //                             <li>Гекуро</li>
    //                             <li>Маття</li>
    //                             <li>Пи Ло Чун</li>
    //                         </ul>
    //                     </li>
    //                 </ul>
    //             </li>
    //         </ul>
    //     </li>
}



