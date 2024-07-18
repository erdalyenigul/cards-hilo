import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useMock = defineStore('mock', () => {

  const isSlideActive = ref(false)
  const isFlipActive = ref(false)
  const rank = ref()
  const symbol = ref()
  const currentNumber = ref(0)
  const currentSymbol = ref('')
  const currentSymbolColor = ref('')
  const lastNumber = ref(0)
  const preventClick = ref(true)
  const isGameStart = ref(true)
  const cardStatus = ref('')
  const cardHistory = ref([])
  const outcomes = ref({
    color: {
      black: null,
      red: null,
    },
    numberOrSymbol: {
      number: null,
      symbol: null,
    },
    higherOrSame: {
      higher: {
        number: null,
        percent: null,
      },
      lower: {
        number: null,
        percent: null,
      },
    },
  })
  const gameover = ref(false)
  const hiddenBet = ref(false)
  const switchShortcutMobile = ref(false)
  const switchBetMobile = ref(false)

  const getRandomNumber = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  function findNumberFromLetter(letter: any) {
    if (letter == 'J') return<Number> 11
    else if (letter == 'Q') return<Number> 12
    else if (letter == 'K') return<Number> 13
    else if (letter == 'A') return<Number> 1
    else return letter
  }

  function setGameCardNumber(number: number) {
    currentNumber.value = number
    if (number == 11) return 'J'
    else if (number == 12) return 'Q'
    else if (number == 13) return 'K'
    else if (number == 1) return 'A'
    else return number
  }

  function getRandomSymbol(symbol: number) {
    
    if (symbol == 1) {
      currentSymbol.value = 'diams'
      currentSymbolColor.value = 'red'
      return 'diams'
    }
    else if (symbol == 2) {
      currentSymbol.value = 'hearts'
      currentSymbolColor.value = 'red'
      return 'hearts'
    }
    else if (symbol == 3) {
      currentSymbol.value = 'spades'
      currentSymbolColor.value = 'black'
      return 'spades'
    }
    else if (symbol == 4) {
      currentSymbol.value = 'clubs'
      currentSymbolColor.value = 'black'
      return 'clubs'
    }
    else symbol
  }

  function gameCardChange(bet: string) {
    isSlideActive.value = true;
    cardStatus.value = bet;
    preventClick.value = true;
    
    setTimeout(() => {
      isSlideActive.value = false;
      isFlipActive.value = true;
    }, 500)
    
    setTimeout(() => {
      rank.value = setGameCardNumber(getRandomNumber(1, 13))
      symbol.value = getRandomSymbol(getRandomNumber(1, 4))
      isFlipActive.value = false;
      preventClick.value = false;
      cardHistory.value.length !== 0 ? checkGame() : setCardHistory();
    }, 750)
  }

  async function checkGame() {
    lastNumber.value = findNumberFromLetter(cardHistory.value[cardHistory.value.length - 1].rank)

    switch (cardStatus.value) {
      case 'black':
      case 'red':
        cardStatus.value === currentSymbolColor.value ? setCardHistory() : lose()
        break;
      case 'higher':
        lastNumber.value <= currentNumber.value ? setCardHistory() : lose()
        break;
      case 'lower':
        lastNumber.value >= currentNumber.value ? setCardHistory() : lose()
        break;
      case 'number':
        (currentNumber.value >= 2 && currentNumber.value <= 10) ? setCardHistory() : lose()
        break;
      case 'symbol':
        (currentNumber.value == 1 || (currentNumber.value >= 11 && currentNumber.value <= 13)) ? setCardHistory() : lose()
        break;
    }
  }

  function lose() {
    cardHistory.value.push(
      {
        rank: rank.value,
        symbol: symbol.value,
        bet: '1.9999',
        status: cardStatus.value,
        lose: true,
      }
    )
    gameover.value = true;
    startScroll();
  }

  function tryAgain() {
    cardHistory.value = [];
    gameCardChange('start');
  }
  
  function setCardHistory() {
    cardHistory.value.push(
      {
        rank: rank.value,
        symbol: symbol.value,
        bet: '1.9999',
        status: cardStatus.value,
        lose: false,
      },
    )
    outcomes.value = {
      color: {
        black: 1.98,
        red: 1.98,
      },
      numberOrSymbol: {
        number: 1.43,
        symbol: 3.21,
      },
      higherOrSame: {
        higher: {
          number: generateRandomNumber(1, 5),
          percent: generateRandomPercent(1, 100),
        },
        lower: {
          number: generateRandomNumber(1, 5),
          percent: generateRandomPercent(1, 100),
        },
      },
    },
    startScroll();
  }

  const generateRandomNumber = (min: number, max: number) => {
    return ((Math.random() * (max - min + 1)) + min).toFixed(4);
  }

  const generateRandomPercent = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function startScroll() {
    setTimeout(() => {
      document.getElementById("autoScroll").scrollLeft += document.getElementById("autoScroll").scrollWidth;
    }, 500);
  }

  return {
    gameCardChange,
    tryAgain,
    rank,
    symbol,
    isSlideActive,
    isFlipActive,
    isGameStart,
    preventClick,
    cardHistory,
    gameover,
    switchShortcutMobile,
    switchBetMobile,
    hiddenBet,
    outcomes,
  };
});
