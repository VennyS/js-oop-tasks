"use strict";
// в данных задачах нужно использовать возможности es6
// ко всем заданиям можно (а местами и нужно) дописать свои тесты в файле es6.spec.js
// Можно менять параметры функций (например сделать им значения по умолчанию)

// Напишите функцию, которая принимает ФИО пользователя и возвращает
// строку формата Имя Фамилия
function fioToName(fio) {
    var parts = fio.split(' ');
    return parts[1] + ' ' + parts[0];
}

// преобразуйте массив чисел так, чтобы в нем остались только
// уникальные элементы
// присмотритесь к коллекции "Set"
function filterUnique(array) {
    return Array.from(new Set(array));
}

// Задача: разница зарплат
// в функцию приходит массив из n зарплат сотрудников фирмы
// ваша задача определить, во сколько раз зарплата самого высокооплачиваемого
// сотрудника превышает зарплату самого низкооплачиваемого
function calculateSalaryDifference(array) {
    return Math.max.apply(null, array) / Math.min.apply(null, array);
}

// Реализуйте класс "словарь слов" (как толковый словарь)
// класс должен быть безопасным и работать только со словами
// присмотритесь к коллекции "Map"
// Словарь - (string, string), и все это не null и не undefined
// * покройте класс тестами
class Dictionary {
    constructor() {
        this.words = new Map();
    }

    addWord(key, value) {
        if (this.isValidWord(key) && this.isValidWord(value)) {
            this.words.set(key, value);
        } else {
            throw new Error('Invalid word');
        }
    }

    getWord(key) {
        return this.words.get(key);
    }

    isValidWord(word) {
        return typeof word === 'string' && word.trim().length > 0;
    }

    removeWord(key) {
        this.words.delete(key);
    }

    getAllWords() {
        return Array.from(this.words.entries());
    }
}

module.exports = {
    fioToName,
    filterUnique,
    Dictionary,
    calculateSalaryDifference
};
