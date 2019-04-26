const source = document.getElementsByClassName('lib-1').innerHTML;

const template = Handlebars.compile(source);

const context = {
        noun: ['sit', 'recover', 'plead', 'implement', 'grab', 'pursue', 'cry', 'recall', 'in', 'lock', 'stimulate', 'spin', 'count', 'deal', 'flash', 'sleep', 'wear', 'run', 'last', 'greet', 'diminish', 'remove', 'shine', 'tear', 'tremble', 'waste', 'resist', 'be', 'echo', 'account', 'doubt', 'hang', 'crush', 'roll', 'realise', 'oppose', 'decorate', 'market', 'include', 'take', 'demand', 'imply', 'improve', 'try', 'assure', 'reserve', 'lie', 'devise', 'afford', 'await'],
        
};

const compiledHtml = template(context);

/* const domVarible = document.getElementById('domId') */

/* domIdVarible.innerHTML = compiledHtml */
