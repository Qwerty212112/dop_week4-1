class Dictionary {
    #name
    #words 


    constructor(name) {
        this.#name = name;
        this.#words = {};
    }
    get mainName () {
        return this.#name
    }

    set mainName (newVac) {
        this.#name = newVac
    }
    get allWords () {
        return this.#words
    }

    add(word, description) {
    const allWorlds =  Object.keys(this.#words);
    const examinationWord = allWorlds.filter((item) => item.includes(word))
     if (examinationWord.length > 0) {
            return this.#words
     } else {
    this._addNewWord (word, description)
    }
}

    _addNewWord(word,descriprion) {
     
           this.#words[word] = {
            "word": word,
            'descriprion': descriprion,
            
        }
     }
     remove (word) {
        return delete this.#words[word]
    }

    get (word) {
       return this.#words[word]
    }

    showAllWords() {
        const arrayValues= Object.values(this.#words)
        const sign = ' // '
        let result = ''
         for (let i = 0; i < arrayValues.length; i++) {
         result = result + arrayValues[i].word + '-' + arrayValues[i].descriprion + sign
         }
         console.log(result)
    }
    
}


class HardWordsDictionary extends Dictionary {
    constructor (name) {
        super(name)
        
    }

    _addNewWord(word,descriprion) {
     
           this.allWords[word] = {
            "word": word,
            'descriprion': descriprion,
            'isDificult': true
            
        }
     }

    

   
    
}

const hardWordsDictionary = new HardWordsDictionary('Сложные слова');
    
hardWordsDictionary.add('дилетант', 'Тот, кто занимается наукой или искусством без специальной подготовки, обладая только поверхностными знаниями.');
    
hardWordsDictionary.add('неологизм', 'Новое слово или выражение, а также новое значение старого слова.');
    
hardWordsDictionary.add('квант', 'Неделимая часть какой-либо величины в физике.');
    
hardWordsDictionary.remove('неологизм');
    
hardWordsDictionary.showAllWords();
    
console.log(hardWordsDictionary.mainName); // Сложные слова
hardWordsDictionary.mainName = 'Новый Словарь';
console.log(hardWordsDictionary.mainName); // Новый Словарь
console.log(hardWordsDictionary.allWords); // выводит объект в котором есть слова 
