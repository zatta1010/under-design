const $ = selector => document.querySelector(selector);
const $$ = selector => document.querySelectorAll(selector);

const DOM = {
    wordInput: $('#wordInput'),
    generateButton: $('#generateButton'),
    antonyms: $('#antonyms'),
    synonyms: $('#synonyms'),
};

const sc = ["k", "p", "m", "n", "l", "s"];
const sv = ["a", "e", "i", "o"];

DOM.generateButton.addEventListener('click', () => {
    const word = DOM.wordInput.value.trim();
    let antonymsAns = "";
    let synonymsAns = "";

    if (word) {
        word.split("").forEach(element => {
            if (sc.includes(element)) {
                antonymsAns += sc[Math.floor((sc.indexOf(element) + sc.length / 2) % sc.length)];
            } else if (sv.includes(element)) {
                antonymsAns += sv[Math.floor((sv.indexOf(element) + sv.length / 2) % sv.length)];
            } else {
                antonymsAns += element; // 元の文字をそのまま追加
            }
        });
        DOM.antonyms.innerText = antonymsAns;

        word.split("").forEach(element => {
            if (sc.includes(element)) {
                synonymsAns += sc[Math.floor((sc.indexOf(element) + 1) % sc.length)];
            } else if (sv.includes(element)) {
                synonymsAns += sv[Math.floor((sv.indexOf(element) + 1) % sv.length)];
            } else {
                synonymsAns += element; // 元の文字をそのまま追加
            }
        });
        DOM.synonyms.innerText = synonymsAns;
    } else {
        alert('単語を入力してください。');
    }
});