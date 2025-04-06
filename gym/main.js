$(document).ready(function(){
    PopUpHide1();
});
function PopUpShow1(){
    $("#popup1").show();
}
function PopUpHide1(){
    $("#popup1").hide();
}

function PopUpShow2(){
    $("#popup2").show();
}
function PopUpHide2(){
    $("#popup2").hide();
}


var GymInfo = [
    {
        id: '1', description: 'Описание тренера', createdAt: '14-03-2023', author: 'Владислав Бобовоз',
        name: 'Михаил', surname: 'Горшенев', position: 'Тренер', phoneNumber: '375296082115'
    },
    {
        id: '2', description: 'Описание тренера', createdAt: '14-03-2023', author: 'Владислав Бобовоз',
        name: 'Игорь', surname: 'Матвиенко', position: 'Тренер', phoneNumber: '375292206516'
    },
    {
        id: '3', description: 'Описание тренера', createdAt: '14-03-2023', author: 'Владислав Бобовоз',
        name: 'Пётр', surname: 'Рудько', position: 'Тренер', phoneNumber: '375292206516'
    },
    {
        id: '4', description: 'Описание тренера', createdAt: '14-03-2023', author: 'Владислав Бобовоз',
        name: 'Тимур', surname: 'Белов', position: 'Тренер', phoneNumber: '375297070661'
    },
    {
        id: '5', description: 'Описание тренера', createdAt: '14-03-2023', author: 'Владислав Бобовоз',
        name: 'Евгений', surname: 'Волков', position: 'Тренер', phoneNumber: '375297059219'
    },
    {
        id: '6', description: 'Описание тренера', createdAt: '15-03-2023', author: 'Владислав Бобовоз',
        name: 'Вероника', surname: 'Гусева', position: 'Тренер', phoneNumber: '375293918072'
    },
    {
        id: '7', description: 'Описание тренера', createdAt: '15-03-2023', author: 'Владислав Бобовоз',
        name: 'Василиса', surname: 'Денисова', position: 'Тренер', phoneNumber: '375290649416'
    },
    {
        id: '8', description: 'Описание тренера', createdAt: '15-03-2023', author: 'Владислав Бобовоз',
        name: 'Лев', surname: 'Калинин', position: 'Тренер', phoneNumber: '375292329943'
    },
    {
        id: '9', description: 'Описание тренера', createdAt: '15-03-2023', author: 'Владислав Бобовоз',
        name: 'София', surname: 'Кузьмина', position: 'Тренер', phoneNumber: '375295857051'
    },
    {
        id: '10', description: 'Описание тренера', createdAt: '16-03-2023', author: 'Владислав Бобовоз',
        name: 'Диана', surname: 'Иванова', position: 'Тренер', phoneNumber: '375294225943'
    },
    {
        id: '11', description: 'Описание тренера', createdAt: '16-03-2023', author: 'Владислав Бобовоз',
        name: 'Илья', surname: 'Лебедев', position: 'Тренер', phoneNumber: '375290795867'
    },
    {
        id: '12', description: 'Описание тренера', createdAt: '16-03-2023', author: 'Владислав Бобовоз',
        name: 'Ева', surname: 'Кузнецова', position: 'Тренер', phoneNumber: '375290000536'
    },
    {
        id: '13', description: 'Описание тренера', createdAt: '17-03-2023', author: 'Владислав Бобовоз',
        name: 'Анастасия', surname: 'Лазарева', position: 'Тренер', phoneNumber: '375292282896'
    },
    {
        id: '14', description: 'Описание тренера', createdAt: '17-03-2023', author: 'Владислав Бобовоз',
        name: 'Глеб', surname: 'Калинин', position: 'Тренер', phoneNumber: '375292892222'
    },
    {
        id: '15', description: 'Описание тренера', createdAt: '19-03-2023', author: 'Владислав Бобовоз',
        name: 'Дарья', surname: 'Лаврова', position: 'Тренер', phoneNumber: '375299288869'
    },
    {
        id: '16', description: 'Описание тренера', createdAt: '20-03-2023', author: 'Владислав Бобовоз',
        name: 'Варвара', surname: 'Лосева', position: 'Тренер', phoneNumber: '375297983353'
    },
    {
        id: '17', description: 'Описание администратора', createdAt: '20-03-2023', author: 'Владислав Бобовоз',
        name: 'Татьяна', surname: 'Кожевникова', position: 'Администратор', phoneNumber: '375298197150'
    },
    {
        id: '18', description: 'Описание администратора', createdAt: '20-03-2023', author: 'Владислав Бобовоз',
        name: 'Ева', surname: 'Ильинская', position: 'Администратор', phoneNumber: '375293966180'
    },
    {
        id: '19', description: 'Описание администратора', createdAt: '20-03-2023', author: 'Владислав Бобовоз',
        name: 'Родион', surname: 'Иванов', position: 'Администратор', phoneNumber: '375291990689'
    },
    {
        id: '20', description: 'Описание администратора', createdAt: '20-03-2023', author: 'Владислав Бобовоз',
        name: 'Марк', surname: 'Михайлов', position: 'Администратор', phoneNumber: '375298871308'
    },
    {
        id: '21', description: 'Описание посетителя', createdAt: '21-03-2023', author: 'Анастасия Карпушевич',
        name: 'Анна', surname: 'Александрова', position: 'Посетитель', phoneNumber: '375297916833'
    },
    {
        id: '22', description: 'Описание посетителя', createdAt: '21-03-2023', author: 'Анастасия Карпушевич',
        name: 'Ольга', surname: 'Васильева', position: 'Посетитель', phoneNumber: '375297579043'
    },
    {
        id: '23', description: 'Описание посетителя', createdAt: '22-03-2023', author: 'Анастасия Карпушевич',
        name: 'Георгий', surname: 'Зуев', position: 'Посетитель', phoneNumber: '375292207247'
    },
    {
        id: '24', description: 'Описание посетителя', createdAt: '22-03-2023', author: 'Анастасия Карпушевич',
        name: 'Кристина', surname: 'Карпова', position: 'Посетитель', phoneNumber: '375290869641'
    },
    {
        id: '25', description: 'Описание посетителя', createdAt: '22-03-2023', author: 'Анастасия Карпушевич',
        name: 'Василий', surname: 'Киселев', position: 'Посетитель', phoneNumber: '375294302735'
    },
    {
        id: '26', description: 'Описание посетителя', createdAt: '22-03-2023', author: 'Анастасия Карпушевич',
        name: 'Максим', surname: 'Золотов', position: 'Посетитель', phoneNumber: '375299349772'
    },
    {
        id: '27', description: 'Описание посетителя', createdAt: '22-03-2023', author: 'Анастасия Карпушевич',
        name: 'София', surname: 'Еремина', position: 'Посетитель', phoneNumber: '375290372742'
    },
    {
        id: '28', description: 'Описание посетителя', createdAt: '22-03-2023', author: 'Анастасия Карпушевич',
        name: 'Глеб', surname: 'Галкин', position: 'Посетитель', phoneNumber: '375292978482'
    },
    {
        id: '29', description: 'Описание посетителя', createdAt: '22-03-2023', author: 'Анастасия Карпушевич',
        name: 'Елизавета', surname: 'Герасимова', position: 'Посетитель', phoneNumber: '375292219674'
    },
    {
        id: '30', description: 'Описание посетителя', createdAt: '23-03-2023', author: 'Анастасия Карпушевич',
        name: 'Сергей', surname: 'Бессонов', position: 'Посетитель', phoneNumber: '375290857677'
    },
    {
        id: '31', description: 'Описание посетителя', createdAt: '23-03-2023', author: 'Анастасия Карпушевич',
        name: 'Ульяна', surname: 'Дмитриева', position: 'Посетитель', phoneNumber: '375290498825'
    },
    {
        id: '32', description: 'Описание посетителя', createdAt: '23-03-2023', author: 'Анастасия Карпушевич',
        name: 'Тимур', surname: 'Жаров', position: 'Посетитель', phoneNumber: '375291395224'
    },
    {
        id: '33', description: 'Описание посетителя', createdAt: '23-03-2023', author: 'Анастасия Карпушевич',
        name: 'Мирон', surname: 'Дегтярев', position: 'Посетитель', phoneNumber: '375294641396'
    },
    {
        id: '34',
        description: 'Описание посетителя', createdAt: '24-03-2023', author: 'Анастасия Карпушевич',
        name: 'Юлия', surname: 'Виноградова', position: 'Посетитель', phoneNumber: '375298214991'
    },
    {
        id: '35', description: 'Описание посетителя', createdAt: '24-03-2023', author: 'Анастасия Карпушевич',
        name: 'Варвара', surname: 'Лазарева', position: 'Посетитель', phoneNumber: '375293192353'
    },
    {
        id: '36', description: 'Описание посетителя', createdAt: '25-03-2023', author: 'Анастасия Карпушевич',
        name: 'Марк', surname: 'Наумов', position: 'Посетитель', phoneNumber: '375298300554'
    },
    {
        id: '37', description: 'Описание посетителя', createdAt: '25-03-2023', author: 'Анастасия Карпушевич',
        name: 'Мария', surname: 'Моисеева', position: 'Посетитель', phoneNumber: '375291915879'
    },
    {
        id: '38', description: 'Описание посетителя', createdAt: '25-03-2023', author: 'Анастасия Карпушевич',
        name: 'Владимир', surname: 'Киселев', position: 'Посетитель', phoneNumber: '375299119020'
    },
    {
        id: '39', description: 'Описание посетителя', createdAt: '25-03-2023', author: 'Анастасия Карпушевич',
        name: 'Фёдор', surname: 'Митрофанов', position: 'Посетитель', phoneNumber: '375293066501'
    },
    {
        id: '40', description: 'Описание посетителя', createdAt: '25-03-2023', author: 'Анастасия Карпушевич',
        name: 'Глеб', surname: 'Попов', position: 'Посетитель', phoneNumber: '375293238888'
    }
]

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
class Gym {
    constructor(objInfo) {
        this.objInfo = objInfo;
    }

    getObjs(skip = 0, top = 10, filterConfig = {}) {
        let filteredObjs = this.objInfo.filter(obj => {
            for(let key in filterConfig) {
                if(obj[key] !== filterConfig[key]) {
                    return false;
                }
            }
            return true;
        });

        filteredObjs.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
        return filteredObjs.slice(skip, skip + top);
    }

    getObj(id) {
        return this.objInfo.find(obj => obj.id === id) || null;
    }

    validateObj(obj) {
        const requiredFields = ['id', 'description', 'createdAt', 'author', 'name', 'surname', 'position', 'phoneNumber'];

        for (let field of requiredFields) {
            if (!obj.hasOwnProperty(field) || !obj[field]) {
                return false;
            }
        }
        return true;
    }

    addObj(obj) {
        if (this.validateObj(obj)) {
            this.objInfo.push(obj);
            return true;
        } else {
            return false;
        }
    }

    editObj(id, obj) {
        const objToUpdateIndex = this.objInfo.findIndex(obj => obj.id === id);
        if (objToUpdateIndex === -1) {
            return false;
        }

        const objToUpdate = this.objInfo[objToUpdateIndex];
        const { id: objId, author, createdAt, ...updatedFields } = obj;

        const requiredFields = ['id', 'description', 'createdAt', 'author', 'name', 'surname', 'position', 'phoneNumber'];
        let k = 0;
        for (let field of requiredFields) {
            if (!updatedFields.hasOwnProperty(field) || !obj[field]) {
                k += 1;
            }
        }
        if(k === 8) {
            return false;
        }
        Object.assign(objToUpdate, updatedFields);

        return true;
    }

    removeObj(id) {
        const index = this.objInfo.findIndex(obj => obj.id === id);
        if (index !== -1) {
            this.objInfo.splice(index, 1);
            return true;
        }
        return false;
    }

    addAll(objs) {
        const validObjs = objs.filter(obj => this.validateObj(obj));
        this.objInfo.push(...validObjs);
        return validObjs;
    }

    clear() {
        this.objInfo = [];
    }
}

const GymManager = new Gym(GymInfo);

//--------------------------getObjs_Testing--------------------------------//
// const result1 = GymManager.getObjs(0, 10);
// console.log(result1);

// const result2 = GymManager.getObjs(10, 10);
// console.log(result2);

// const result3 = GymManager.getObjs(0, 10, {createdAt: '19-03-2023'});
// console.log(result3)

//--------------------------getObj_Testing--------------------------------//
// const result4 = GymManager.getObj('5');
// console.log(result4)

//--------------------------validateObj_Testing--------------------------------//
// const obj1 = {
//     id: '40', description: 'Описание посетителя', createdAt: '25-03-2023', author: 'Анастасия Карпушевич',
//     name: 'Глеб', surname: 'Попов', position: 'Посетитель', phoneNumber: '375293238888'
// };
// const result5 = GymManager.validateObj(obj1);
// console.log(result5);
//
// const obj2 = {
//     id: '40', description: 'Описание посетителя', createdAt: '25-03-2023', author: 'Анастасия Карпушевич',
//     name: 'Глеб', surname: 'Попов', position: 'Посетитель'
// };
// const result6 = GymManager.validateObj(obj2);
// console.log(result6);

//--------------------------addObj_Testing--------------------------------//
// const obj3 = {
//     id: '41', description: 'Описание посетителя', createdAt: '27-03-2023', author: 'Анастасия Карпушевич',
//     name: 'Игорь', surname: 'Юдин', position: 'Посетитель', phoneNumber: '375298620968'
// };
// const added1 = GymManager.addObj(obj3)
// console.log('state: ' + added1, '\nsize: ' + GymInfo.length);

//--------------------------editObj_Testing--------------------------------//
// const edited1 = GymManager.editObj('1', {description: 'Измененная информация'});
// console.log(edited1);
// console.log(GymManager.getObj('1'));
//
// const edited2 = GymManager.editObj('1', {field: 'Измененная информация'});
// console.log(edited2);
// console.log(GymManager.getObj('1'));

//--------------------------removeObj_Testing--------------------------------//
// const removed1 = GymManager.removeObj('1');
// console.log(removed1);
// console.log(GymInfo.length);
//
// const removed2 = GymManager.removeObj('50');
// console.log(removed2);

//--------------------------addAll_Testing--------------------------------//
// const newObjs1 = [
//     {
//         id: '41', description: 'Описание посетителя', createdAt: '27-03-2023', author: 'Анастасия Карпушевич',
//         name: 'Игорь', surname: 'Юдин', position: 'Посетитель', phoneNumber: '375298620968'
//     },
//     {
//         id: '42', description: 'Описание посетителя', createdAt: '27-03-2023', author: 'Анастасия Карпушевич',
//         name: 'Женя', surname: 'Сидоров', position: 'Посетитель', phoneNumber: '375296283502'
//     }
// ]
// GymManager.addAll(newObjs1);
// console.log(GymInfo.length);
//
// const newObjs2 = [
//     {
//         id: '43', description: 'Описание посетителя', createdAt: '27-03-2023', author: 'Анастасия Карпушевич',
//         name: 'Никита', surname: 'Шершнев', position: 'Посетитель', phoneNumber: '375291159687'
//     },
//     {
//         id: '44', description: 'Описание посетителя', createdAt: '27-03-2023', author: 'Анастасия Карпушевич',
//         name: 'Кирилл', surname: 'Злобин', position: 'Посетитель'
//     }
// ]
// GymManager.addAll(newObjs2);
// console.log(GymInfo.length);

//--------------------------addAll_Testing--------------------------------//
// GymManager.clear();
// console.log(GymManager.objInfo);