"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function request(url, options) {
    return __awaiter(this, void 0, void 0, function* () {
        const resp = yield fetch(url, options);
        if (!resp.ok)
            throw new Error(`HTTP Error: ${resp.status}`);
        return yield resp.json();
    });
}
(() => __awaiter(void 0, void 0, void 0, function* () {
    const url = 'https://pokeapi.co/api/v2/pokemon';
    const id = 20;
    try {
        const data = yield request(`${url}/${id}`, {
            method: 'GET',
        });
        console.log(`Name: ${data.name}`);
        console.log(`Weight: ${data.weight}`);
        data.abilities.forEach((ability) => {
            console.log(`Ability: ${ability.ability.name}`);
        });
    }
    catch (err) {
        if (err instanceof Error) {
            console.error(err.message);
        }
        else {
            console.error(err);
        }
    }
}))();
