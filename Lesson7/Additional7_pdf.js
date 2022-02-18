function UserCard(key) {
        this.balance = 100;
        this.transactionLimit = 100;
        this.historyLogs = [];
        this.key = key;
        this.getCardOptions = function () {
            console.log('Ідентифікаор карти - ', this.key);
            console.log('Поточний баланс - ', this.balance);
            console.log('Поточний кредитний ліміт - ', this.transactionLimit);
            console.log('Список операцій на карті:', this.historyLogs);
    };
        this.putCredits = function (credits) {
            this.balance = this.balance+credits;
            this.historyLogs.push({
            operationType: 'Received credits',
            credits: credits,
            status: 'accepted',
            operationTime: new Date()
        });
         };
        this.takeCredits = function (credits) {
            if ((this.balance+this.transactionLimit)>credits) {
                this.balance = this.balance-credits;
                this.historyLogs.push({
                operationType: 'Withdrawal of credits',
                credits: credits,
                status: 'accepted',
                operationTime: new Date()
            });
            } else {
            console.log("Сума яку ви намагаєтеся отримати є більшою за ваш поточний баланс та кредитний ліміт");
            this.historyLogs.push({
                operationType: 'Withdrawal of credits',
                credits: credits,
                status: 'decline',
                operationTime: new Date()
            });
        }
        }
        this.setTransactionLimit = function (limit) {
            this.transactionLimit = limit;
            this.historyLogs.push({
            operationType: 'Transaction limit change',
            credits: credits,
            status: 'accepted',
            operationTime: new Date()
        });
        }
        this.transderCredits = function (credits,cardGetter) {
            if ((this.balance+this.transactionLimit)>credits) {
            this.balance = this.balance-credits;
            cardGetter.balance = cardGetter.balance+credits;
            this.historyLogs.push({
                operationType: `Transfer ${credits} to ${cardGetter}`,
                credits: credits,
                status: 'decline',
                operationTime: new Date()
            });
        }
        }
}
class UserAccount {
    constructor(name) {
        this.name = name;
        this.cards = [];
    }
    addCard () {
        this.cards.push(new UserCard(this.cards.length));
    }
    getCardByKey (key) {
        console.log(this.cards[key]);
    }
}
let card1 = new UserCard(1);
card1.getCardOptions();
card1.takeCredits(1000);
card1.getCardOptions();
